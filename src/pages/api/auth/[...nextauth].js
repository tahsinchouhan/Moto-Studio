import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials"
import { apipath } from "../apiPath";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      async authorize(credentials, req) {
        const { email, password } = credentials
        const response = await fetch(apipath + `/api/v1/users/signin`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({email, password})
        });
        const user = await response.json();
        if(user.user) {
          return user
          // return { id: 1, name: "J Smith", email: "jsmith@example.com" }
        }
         // Return null if user data could not be retrieved
        // return null
        throw new Error("Email or Password Incorrect")
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // authorizationUrl:
      //   'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code"
      //   }
      // }
    }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    //   authorization: {
    //     params: {
    //       prompt: "consent",
    //       access_type: "offline",
    //       response_type: "code"
    //     }
    //   }
    // })
  ],
  callbacks: {
    // async signIn({ user, account, profile }) {
    //   return true
    // },
    async jwt({token, user, account, profile}){
       // first time jwt callback is run , user object is available
       if(user && user.user) {
        token.user = user.user
        token.token = user.token
      }
      if(account?.access_token){
        token.accessToken = account.access_token;
      }

      if(account?.provider === 'google') {
        const payload = {
          full_Name: user.name,
          email: user.email,
          logged_by: account?.provider,
          logged_id: user.id,
          is_email_verified: profile.email_verified
        }
        const res = await fetch(`${apipath}/api/v1/users/social`, {
          method:"POST",
          headers: {'Content-Type':'application/json'},
          body:JSON.stringify(payload)
        })
        const result = await res.json()
        // console.log('result :>> ', result);
        if(result && result.user) {
          token.user = result.user
          token.user.name = result.user.name
          token.token = result.token
        }
        return token
      }
      return token;
    },
    async session({ session, token }) {
      // console.log('token :>> ', token);
      if(token) {
        session.user = token.user
        session.token = token.token
      }
      return session
    },
  },
  secret: process.env.SECRET,
  jwt: {
    // encryption: true,
    secret: process.env.SECRET,
    maxAge: 60 * 60 * 24 * 30
  }
})