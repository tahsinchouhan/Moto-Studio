import React from "react";
import CommunityPage from "./CommunityPage";
import HomeHeaderImg from "./HomeHeaderImg";
import FeaturedProducts from "./FeaturedProducts";
import VisitTheShop from '../home/VisitTheShop'
import HomeFollowUs from "./HomeFollowUs";
import HomeEmpower from "./HomeEmpower";

function Home() {
  return (
    <div>
      <HomeHeaderImg />
      <FeaturedProducts />
      <VisitTheShop/>
      <HomeEmpower />
      <CommunityPage />
      <HomeFollowUs />
    </div>
  );
}

export default Home;
