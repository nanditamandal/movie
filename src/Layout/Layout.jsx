import { Helmet } from "react-helmet";
import Header from "../component/Header";
import Footer from "../component/footer";


export default function Layout({children, title}) {
  return (
    <>
        <Helmet>
               
                <title>{title}</title>
              
        </Helmet>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
    </>
   
  )
}
