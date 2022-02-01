
import 'bootstrap/dist/css/bootstrap.min.css';
import WhoWeAre from './about/WhoWeAre';
import CollaborateHeader from './collaborate/collaborateHeader';
import HomeFollowUs from './Home/HomeFollowUs';
import Head from "next/head";

// import styles from "../styles/Home.module.css";
import Home from "./common/Home";
import HomeHeaderImg from './Home/HomeHeaderImg';
import FeaturedProducts from "./home/FeaturedProducts";

export default function index() {
  return (
    <>
      <h1 className="m-5">Home pageggg</h1>
<Home/>
<HomeHeaderImg/>
<HomeFollowUs/>
<FeaturedProducts />
<CollaborateHeader/>
<WhoWeAre/>
    </>
  );
}
