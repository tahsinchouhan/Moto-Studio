// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import Home from "./Home/Home";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function Main() {
//   return (
//     <>
//       <Home />
//     </>
//   );
// }
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Home from "./Home/CommunityPage";
// import styless from './Product/products.css';
import Products from './Product/products';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Main() {
  return (
    <>
      

     
        <Home />
        {/* <Products/> */}
       

    
    </>
  )
}