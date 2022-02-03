import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

// import styles from "../styles/Home.module.css";
import Home from "./common/Home";
import HomeHeaderImg from './Home/HomeHeaderImg';
import IntoNewsroom from "./news/IntoNewsroom";

export default function index() {
  return (
    <>
      <h1 className="m-5">Home pageggg</h1>
{/* <Home/> */}
<HomeHeaderImg/>
    </>
  );
}
