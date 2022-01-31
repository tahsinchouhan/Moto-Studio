import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FeaturedProducts from "./home/FeaturedProducts";

export default function Main() {
  return (
    <>
      {/* <h1>Header</h1> */}
      <FeaturedProducts />
    </>
  );
}
