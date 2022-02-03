import React from "react";
import CommunityPage from "./CommunityPage";
import HomeHeaderImg from "./HomeHeaderImg";
import FeaturedProducts from "./FeaturedProducts";
import HomeFollowUs from "./HomeFollowUs";
import HomeEmpower from "./HomeEmpower";

function Home() {
  return (
    <div>
      <HomeHeaderImg />
      <FeaturedProducts />
      <HomeEmpower />
      <CommunityPage />
      <HomeFollowUs />
    </div>
  );
}

export default Home;
