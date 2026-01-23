import { Outlet } from "react-router-dom";

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import About from './About.jsx'
import Main from './MainPage.jsx'
import Contact from './Contact.jsx'

function Layout() {
  return (
    <>
    <div>
      <Header></Header>
      
      {/* <Main/> */}
      {/* <About/> */}
      {/* <main className="pt-16 overflow-hidden"> */}
        <Outlet />
      {/* </main> */}

      {/* <Footer></Footer> */}
    </div>
      
       
    </>
  );
}

export default Layout;
