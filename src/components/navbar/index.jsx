
import NBNSSOE from "../../assets/imagey/vector-logo.svg";
import { useState } from "react";
import { Navbar, Link,Image} from "@nextui-org/react";

const Navbary = () => {
const [Activity, setActivity] = useState([false, false , false]);
    const collapseItems = [
        "Community",
        "Contact_Us", 
        "Projects", 

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
                    <Link href="/gdsc-frontend/">
                    <Image  src={NBNSSOE} alt="logo image" width={90}/>
                </Link>
                    </Navbar.Brand>
                <Navbar.Content
                    enableCursorHighlight
                    activeColor="error"
                    hideIn="xs"
                    variant="highlight"
                >
                    <Navbar.Link href="/gdsc-frontend/team/" isActive={Activity[0]} onClick={()=>setActivity([true, false , false])}>Community</Navbar.Link>
                    <Navbar.Link isActive={Activity[1]} href="#" onClick={()=>setActivity([false, true , false])}>
                        Contact us 
                    </Navbar.Link>

                    <Navbar.Link href="/gdsc-frontend/projects/" isActive={Activity[2]}  onClick={()=>setActivity([false, false , true])}>Projects</Navbar.Link>
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
                                href={`/gdsc-frontend/${item}/`}
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
