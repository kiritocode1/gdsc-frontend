// import React,{useState,useEffect} from "react";
// import { Link } from "react-router-dom";
// import styles from "./index.module.css";
import NBNSSOE from "../../assets/imagey/vector-logo.svg";
import { useState } from "react";
import { Navbar, Link, Text, Avatar, Dropdown , Image} from "@nextui-org/react";
// import { Layout } from "./Layout.js";
// import { AcmeLogo } from "./AcmeLogo.js";

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



// import { Navbar, Button, Link, Image} from "@nextui-org/react";
// import { Link as Route_Link } from "react-router-dom";

const Navbary = () => {
    const [Activity, setActivity] = useState(false);
    const collapseItems = [
        "Community",
        "Contact Us", 
        "Projects", 
        "Products"
    ];

    return (
        <div className="w-full">
            <Navbar isBordered variant="floating">
                <Navbar.Toggle showIn="xs" />
                <Navbar.Brand
                    css={{
                        "@xs": {
                            w: "12%",
                        },
                    }}
                >
                    <Image  src={NBNSSOE} alt="logo image " width={90}/>
                </Navbar.Brand>
                <Navbar.Content
                    enableCursorHighlight
                    activeColor="warning"
                    hideIn="xs"
                    variant="highlight"
                >
                    <Navbar.Link href="#" isActive={Activity} onClick={()=>setActivity(!Activity)}>Community</Navbar.Link>
                    <Navbar.Link isActive={Activity} href="#" onClick={()=>setActivity(!Activity)}>
                        Contact us 
                    </Navbar.Link>
                    <Navbar.Link href="#">Projects</Navbar.Link>
                    <Navbar.Link href="#">Products</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content
                    css={{
                        "@xs": {
                            w: "12%",
                            jc: "flex-end",
                        },
                    }}
                >
                    
                    
                </Navbar.Content>
                <Navbar.Collapse disableAnimation>
                    {collapseItems.map((item) => (
                        <Navbar.CollapseItem
                            key={item}
                            activeColor="warning"
                        >
                            <Link
                                color="inherit"
                                css={{
                                    minWidth: "100%",
                                }}
                                href="#"
                            >
                                {item}
                            </Link>
                        </Navbar.CollapseItem>
                    ))}
                </Navbar.Collapse>
            </Navbar>
            </div>
    );
};

export default Navbary; 
