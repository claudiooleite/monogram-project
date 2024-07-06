import { Link } from "react-router-dom";
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Button, useDisclosure } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

const HamburgerMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen} display={{ base: "block", md: "none" }}>
                <FiMenu />
            </Button>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <ul className="nav-links-mobile">
                            <li><Link to="/howitworks" onClick={onClose}>How It Works</Link></li>
                            <li><Link to="/workflow" onClick={onClose}>Workflows</Link></li>
                            <li><Link to="/download" onClick={onClose}>Download</Link></li>
                            <li><Link to="/blog" onClick={onClose}>Blog</Link></li>
                            <li><Link to="/support" onClick={onClose}>Support</Link></li>
                            <li><Link to="/shop" onClick={onClose}>Shop</Link></li>
                            <li><Link to="/cleng" onClick={onClose}>Leng</Link></li>
                        </ul>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default HamburgerMenu;