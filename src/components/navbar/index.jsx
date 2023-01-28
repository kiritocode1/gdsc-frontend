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

// const Navbar = ()=><div className= "text-red-500">hello Navbar </div>

// export default Navbar; 


//----------------------------------------------------------------------------------

import { Navbar, Button, Link, Image} from "@nextui-org/react";


const Navbary = () => {
    return (
        <Navbar isBordered variant={"sticky"}>
            <Navbar.Brand>
                <Image src ={NBNSSOE}       width={80}
                    height={40} className="hover:animate-pulse cursor-pointer" alt ="Logo"/>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs">
                <Navbar.Link href="#">Features</Navbar.Link>
                <Navbar.Link  href="#">Customers</Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">Company</Navbar.Link>
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
