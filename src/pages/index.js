import { apipath } from "./api/apiPath";
import Home from "./home";

export default function index({ category, bannerData, impowerData, feturedData }) {
  return <Home category={category} bannerData={bannerData} impowerData={impowerData} feturedData={feturedData} />
}

export async function getServerSideProps(context) {
  // categogy List
  const response = await fetch(`${apipath}/api/v1/category/list`);
  const result = await response.json();
  // get only active category
  const filterData = result?.data.filter(list => list.status)

   // banner List
  const res = await fetch(`${apipath}/api/v1/home/banner/list`);
  const bannerData = await res.json();

  const impoweredres = await fetch(`${apipath}/api/v1/about/empowerd/list`);
  const impowerData = await impoweredres.json();

  const feturedres = await fetch(`${apipath}/api/v1/product/featured/list?category=${filterData[0]._id}`);
  const feturedData = await feturedres.json();

  return { props: { category: filterData, bannerData: bannerData.data[0], impowerData:impowerData, feturedData: feturedData } };
}

