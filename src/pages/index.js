import Head from "next/head";
import { apipath } from "./api/apiPath";
import Home from "./home";

export default function index({ category }) {
  return <>
   <Head>
      <title>CG HERBAL</title>
      <meta property="og:title" content="cg herbal" key="title" />
    </Head>
    <Home category={category} />
  </>
}

export async function getServerSideProps(context) {
  // categogy List
  const response = await fetch(`${apipath}/api/v1/category/list`);
  const result = await response.json();
  // get only active category
  const filterData = result?.data.filter(list => list.status)

   // banner List
  // const res = await fetch(`${apipath}/api/v1/home/banner/list`);
  // const bannerData = await res.json();

  // const impoweredres = await fetch(`${apipath}/api/v1/about/empowerd/list`);
  // const impowerData = await impoweredres.json();

  // const feturedres = await fetch(`${apipath}/api/v1/product/featured/list?category=${filterData[0]._id}`);
  // const feturedData = await feturedres.json();

  return { props: { 
      category: filterData, 
      // bannerData: bannerData.data[0]
      // impowerData:impowerData 
    } };
}

