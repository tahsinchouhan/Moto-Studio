import { useEffect, useContext } from "react";
import CommunityPage from "./CommunityPage";
import HomeHeaderImg from "./HomeHeaderImg";
import FeaturedProducts from "./FeaturedProducts";
// import VisitTheShop from '../home/VisitTheShop'
import HomeFollowUs from "./HomeFollowUs";
import HomeEmpower from "./HomeEmpower";
import { useSession } from "next-auth/react";
import { CardContext } from "../../components/Layout";
import { useRouter } from "next/router";
import {apipath} from '../api/apiPath'

function Home() {
  const { data: session } = useSession();
  const { isLogin } = useContext(CardContext);
  console.log("sessionData :>> ", session);
  const router = useRouter();

  useEffect(() => {
    console.log('session :>> ', session);
    if (!isLogin && session) {
      console.log('Ajay :>> ', 'Ajay');
      fetch(`${apipath}/api/v1/users/social`, {
        method:"POST",
        headers: {
          'Content-Type':'application/json'
        },
      body:JSON.stringify({email:session.user.email})
      })
      .then(res => res.json())
      .then((result) => {
        console.log('result :>> ', result);
        if (result.user && result.token) {
          localStorage.setItem("cg-herbal-userData", JSON.stringify(result));
          router.reload("/auth/UserProfile");
        }
      }).catch((err) => {
        console.log('err :>> ', err);
      });
    }
  }, [isLogin, session]);

  return (
    <div>
      <HomeHeaderImg />
      <FeaturedProducts />
      {/* <VisitTheShop/> */}
      <HomeEmpower />
      <CommunityPage />
      <HomeFollowUs />
    </div>
  );
}

export default Home;
