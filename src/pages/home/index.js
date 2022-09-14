// import { useEffect, useContext } from "react";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";
import CommunityPage from "../../components/home/CommunityPage";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import HomeEmpower from "../../components/home/HomeEmpower";
import HomeFollowUs from "../../components/home/HomeFollowUs";
import HomeHeaderImg from "../../components/home/HomeHeaderImg";
// import VisitTheShop from "../../components/home/VisitTheShop";
// import { CardContext } from "../../components/Layout";
// import {apipath} from '../api/apiPath'

function Home({ category }) {
  console.log(category);
  // const { data: session } = useSession();
  // const { isLogin } = useContext(CardContext);
  // const router = useRouter();

  // useEffect(() => {
  //   if (!isLogin && session) {
  //     fetch(`${apipath}/api/v1/users/social`, {
  //       method:"POST",
  //       headers: {
  //         'Content-Type':'application/json'
  //       },
  //     body:JSON.stringify({email:session?.user?.email})
  //     })
  //     .then(res => res.json())
  //     .then((result) => {
  //       if (result.user && result.token) {
  //         localStorage.setItem("cg-herbal-userData", JSON.stringify(result));
  //         // router.push("/auth/UserProfile");
  //       }
  //     }).catch((err) => {
  //       console.log('err :>> ', err);
  //     });
  //   }
  //    // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isLogin, session]);

  return (
    <div>
      <HomeHeaderImg category={category} />
      <FeaturedProducts category={category} />
      {/* <VisitTheShop /> */}

      <HomeEmpower />
      <CommunityPage />
      <HomeFollowUs />
    </div>
  );
}

export default Home;
