import Footer from "./Footer";
import Header from "./Header";
import SubHeader from "./SubHeader";

function Layout({children}) {
  return <div>
     <Header />
     <SubHeader/>
     <main >{children}</main>
     <Footer/>
  </div>;
}

export default Layout;
