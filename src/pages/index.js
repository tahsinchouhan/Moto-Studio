// import 'bootstrap/dist/css/bootstrap.min.css';
// import HomeFollowUs from './Home/HomeFollowUs';
// import Head from "next/head";
// import styles from "../styles/Home.module.css";
import HomeHeaderImg from './Home/HomeHeaderImg';
import IntoNewsroom from "./news/IntoNewsroom";
// import Home from "./common/Home";
// import ButtonDark from "../components/button/ButtonDark";

import Home from "./home/Home";
// import Shopping from "./shopping/Shopping";
// import About from "./about/About";

export default function index() {
  return (
    <>
      <h1 className="m-5">Home pageggg</h1>
{/* <Home/> */}
<HomeHeaderImg/>
      {/* <h1 className="m-5">Home pageggg</h1> */}
      <Home />
      {/* <About /> */}
      {/* <Shopping /> */}
    </>
  );
}
