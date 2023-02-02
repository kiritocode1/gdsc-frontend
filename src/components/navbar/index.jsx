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
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <div className="w-full">
            <Navbar isBordered variant="sticky">
                <Navbar.Toggle showIn="xs" />
                <Navbar.Brand
                    css={{
                        "@xs": {
                            w: "12%",
                        },
                    }}
                >
                    <Image  src={NBNSSOE} alt="logo image " width={50}/>
                </Navbar.Brand>
                <Navbar.Content
                    enableCursorHighlight
                    activeColor="warning"
                    hideIn="xs"
                    variant="highlight"
                >
                    <Navbar.Link href="#" isActive={Activity} onClick={()=>setActivity(!Activity)}>Community</Navbar.Link>
                    <Navbar.Link isActive={Activity} href="#" onClick={()=>setActivity(!Activity)}>
                        Customers
                    </Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Company</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content
                    css={{
                        "@xs": {
                            w: "12%",
                            jc: "flex-end",
                        },
                    }}
                >
                    <Dropdown placement="bottom-right">
                        <Navbar.Item>
                            <Dropdown.Trigger>
                                <Avatar
                                    bordered
                                    as="button"
                                    color="warning"
                                    size="md"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                />
                            </Dropdown.Trigger>
                        </Navbar.Item>
                        <Dropdown.Menu
                            aria-label="User menu actions"
                            color="warning"
                            onAction={(actionKey) => console.log({ actionKey })}
                        >
                            <Dropdown.Item key="profile" css={{ height: "$18" }}>
                                <Text b color="inherit" css={{ d: "flex" }}>
                                    Signed in as
                                </Text>
                                <Text b color="inherit" css={{ d: "flex" }}>
                                    zoey@example.com
                                </Text>
                            </Dropdown.Item>
                            <Dropdown.Item key="settings" withDivider>
                                My Settings
                            </Dropdown.Item>
                            <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                            <Dropdown.Item key="analytics" withDivider>
                                Analytics
                            </Dropdown.Item>
                            <Dropdown.Item key="system">System</Dropdown.Item>
                            <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
                            <Dropdown.Item key="help_and_feedback" withDivider>
                                Help & Feedback
                            </Dropdown.Item>
                            <Dropdown.Item key="logout" withDivider color="error">
                                Log Out
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Content>
                <Navbar.Collapse disableAnimation>
                    {collapseItems.map((item, index) => (
                        <Navbar.CollapseItem
                            key={item}
                            activeColor="warning"
                            css={{
                                color: index === collapseItems.length - 1 ? "$error" : "",
                            }}
                            isActive={index === 2}
                        >
                            <Link
                                color="inherit"
                                css={{
                                    minWidth: "100%",
                                }}
                                href="google.com"
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
