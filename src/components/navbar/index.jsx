
import NBNSSOE from "../../assets/imagey/vector-logo.svg";
import { useState } from "react";
import { Navbar, Link, Text, Avatar, Dropdown , Image} from "@nextui-org/react";

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
                    <Navbar.Link href="/gdsc-frontend/team/" isActive={Activity} onClick={()=>setActivity(!Activity)}>Community</Navbar.Link>
                    <Navbar.Link isActive={Activity} href="#" onClick={()=>setActivity(!Activity)}>
                        Contact us 
                    </Navbar.Link>
                    <Navbar.Link href="/gdsc-frontend/projects/">Projects</Navbar.Link>
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
