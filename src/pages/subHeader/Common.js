// import BrahmiChurna from "../../../public/images/bramkumari.png"
// import Home_care from "../../../public/images/subheadermenuitems/home care.jpg";

function Common({ menuData }) {
  // console.log('menuData ',menuData);
  return (
    <></>
    // <Container fluid>
    //   <Container>
    //     <div className="all-shop-list-change py-3">
    //       <Row>
    //         {menuData &&
    //           menuData?.length &&
    //           menuData.map((menu, index) => {
    //             // console.log('menu data is:',menu);
    //             // console.log('menuData data is:',menuData);
    //             if (index > 0) return;
    //             return (
    //               <div
    //                 className="d-flex flex-row alternative-div"
    //                 key={menu._id}
    //               >
    //                 <Col md={4} lg={4} className="mt-2">
    //                   <div className="grocery-gourmet-foods">
    //                     <h6 className="Grocery-foods">
    //                       {menu?.category_name || ""}
    //                     </h6>
    //                     <div
    //                       className="d-flex flex-column gap-2 flex-wrap text-start"
    //                       style={{ height: "100px" }}
    //                     >
    //                       {menu?.products_data?.length &&
    //                         menu?.products_data?.map((product, idx) => {
    //                           if (idx > 7) return;
    //                           return (
    //                             <Link
    //                               href={`/product/${product._id}`}
    //                               key={product._id}
    //                             >
    //                               <a
    //                                 style={{ width: "fitContent" }}
    //                                 className="Wildforest cursor-pointer text-muted"
    //                               >
    //                                 {product?.title || ""}
    //                               </a>
    //                             </Link>
    //                           );
    //                         })}
    //                     </div>
    //                   </div>
    //                 </Col>
    //                 <Col md={4} lg={4} className="mt-2">
    //                   <div className="ms-5">
    //                     <h6 className="Grocery-foods">Other Products</h6>
    //                     <div
    //                       className="d-flex flex-column gap-2 flex-wrap text-start"
    //                       style={{ height: "100px" }}
    //                     >
    //                       {menuData &&
    //                         menuData?.length &&
    //                         menuData[menuData.length - 1]?.products_data?.map(
    //                           (product, idx) => {
    //                             if (idx > 7) return;
    //                             return (
    //                               <Link
    //                                 href={`/product/${product._id}`}
    //                                 key={product._id}
    //                               >
    //                                 <a
    //                                   style={{ width: "fitContent" }}
    //                                   className="Wildforest cursor-pointer text-muted"
    //                                 >
    //                                   {product?.title || ""}
    //                                 </a>
    //                               </Link>
    //                             );
    //                           }
    //                         )}
    //                     </div>
    //                   </div>
    //                 </Col>

    //                 <Col md={4} lg={4}>
    //                   <div className="categoryItemImageHover">
    //                     {menu.category_name === "Churna" ? (
    //                       <Image
    //                         src={Ayush}
    //                         alt={menu?.title || ""}
    //                         width={330}
    //                         height={160}
    //                       />
    //                     ) : menu.category_name === "Herbal Soaps" ? (
    //                       <Image
    //                         src={Personal}
    //                         alt={menu?.title || ""}
    //                         width={330}
    //                         height={160}
    //                       />
    //                     ) : menu.category_name === "Gourmet" ? (
    //                       <Image
    //                         src={Gourment}
    //                         alt={menu?.title || ""}
    //                         width={330}
    //                         height={160}
    //                       />
    //                     ) : (
    //                       <Image
    //                         src={Premium}
    //                         alt={menu?.title || ""}
    //                         width={330}
    //                         height={160}
    //                       />
    //                     )}
    //                   </div>
    //                 </Col>
    //               </div>
    //             );
    //           })}
    //       </Row>
    //     </div>
    //   </Container>
    // </Container>
  );
}

export default Common;
