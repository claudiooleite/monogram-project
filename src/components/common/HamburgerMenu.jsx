import { Link } from "react-router-dom";
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Button, useDisclosure } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

const HamburgerMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button bg={'#1a2456'} onClick={onOpen} >
                <FiMenu size={'30'} color="rgb(239, 194, 179)" />
            </Button>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <ul className="nav-links-mobile">
                            <li><Link to="/shop" onClick={onClose}>Shop</Link></li>
                        </ul>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default HamburgerMenu;