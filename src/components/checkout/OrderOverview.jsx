import { Box, Text, Heading } from '@chakra-ui/react';

function OrderOverview({ basket, total }){
    return (
    <Box bg="#FAFAFA" position="sticky" top="20px" p={4} boxShadow="md" borderWidth="1px" borderRadius="md">
        <Heading as="h2" size="lg" mb={4}>Overview</Heading>
        {basket.length === 0 ? (
            <Text>Your basket is empty.</Text>
        ) : (
            basket.map((item, index) => (
                <Box key={index} mb={4}>
                    <Text><strong>{item.name}</strong></Text>
                    <Text>{item.description}</Text>
                    <Text><strong>Price:</strong> ${item.price.toFixed(2)}</Text>
                    <Text><strong>Quantity:</strong> {item.quantity}</Text>
                    <Text><strong>Total:</strong> ${(item.price * item.quantity).toFixed(2)}</Text>
                </Box>
            ))
        )}
        <Heading>Total: ${total.toFixed(2)}</Heading>
    </Box>
)};

export default OrderOverview;