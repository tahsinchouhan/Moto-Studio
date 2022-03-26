// import ForgotPassword from "./auth/ForgotPassword";
// import Login from "./auth/Login";
// import Register from "./auth/Register";
// import UserProfile from "./auth/UserProfile";
import { apipath } from "./api/apiPath";
import Home from "./home/Home";
// import ProductName from "./productName/ProductName";

// import Popup from "../pages/Product/PopUp"

export default function index({ category, bannerData }) {

  return (
    <>
      <Home category={category} bannerData={bannerData} />
      {/* <Popup/> */}
      {/* <Login/> */}
      {/* <ForgotPassword/> */}
      {/* <Register/> */}
      {/* <ProductName/> */}
    </>
  );
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

  return { props: { category: filterData, bannerData: bannerData.data } };
}

