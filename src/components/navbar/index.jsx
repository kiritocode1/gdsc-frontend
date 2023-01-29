// import React,{useState,useEffect} from "react";
// import { Link } from "react-router-dom";
// import styles from "./index.module.css";
import NBNSSOE from "../../assets/imagey/vector-logo.svg";
// import DesktopNav from "./navs/desktop";
// import MobileNav from "./navs/mobile";
// import { endpoints } from "../../App";

// export default function Navbar(){
  
//   const [isMobile,setIsMobile] = useState(false);

//   const handleWindowNavSize = ()=>{
//     if (isMobile===false && window.innerWidth <= 966) {
//       setIsMobile(true);
//     }
//     else if (isMobile===true && window.innerWidth > 966){
//       setIsMobile(false);
//     }
//   }

//   useEffect(()=>{
//     window.addEventListener('resize', handleWindowNavSize);
//     handleWindowNavSize();
//   })




//   return (
//     <div className={styles.nav}>
      
       
//       <div className={styles.right_side}>
//          <Link to={`/${endpoints.initial}`}><img src={NBNSSOE} alt="logo" /></Link>
//       </div>
//       <div className={styles.left_side}>
//         {
//           isMobile ? <MobileNav/> : <DesktopNav/>
//         }
//       </div>

//     </div>
//   );
// };

// ----------------------------------------------------------------------------------------------------------



import { Navbar, Button, Link, Image} from "@nextui-org/react";
// import { Link as Route_Link } from "react-router-dom";

const Navbary = () => {
    return (
        <Navbar isBordered variant={"sticky"}>
            <Navbar.Brand>
                <Image src ={NBNSSOE}       width={80}
                    height={40} className="hover:animate-pulse cursor-pointer" alt ="Logo"/>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs">
                <Navbar.Link href="gdsc-frontend/">Home</Navbar.Link>
                <Navbar.Link  href="/events/">Team</Navbar.Link>
                <Navbar.Link href="#">Events</Navbar.Link>
                <Navbar.Link href="#">Contact us</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Link color="inherit" href="#">
                    Login
                </Navbar.Link>
                <Navbar.Item>
                    <Button auto flat as={Link} href="#">
                        join us !!! 
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    ); 
}

export default Navbary; 
