import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Image1 from "../../assets/images/logo3.png";

function Header() {
    return (
        <Box bg="#F0EFED" p={4} borderBottom="0.5px solid #CBD5E0">
            <Link className="nav-logo" to="/">
                <img src={Image1} alt="Music Store Logo" />
                <h1>Music Store</h1>
            </Link>
        </Box>
    )
};

export default Header;
