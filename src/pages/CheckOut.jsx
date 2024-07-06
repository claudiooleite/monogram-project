import { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Grid, GridItem, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, VStack, Box, Button, Text, Heading } from '@chakra-ui/react';
import BasketContext from '../hooks/basketContext';
import Header from '../components/checkout/Header';
import CheckoutForm from '../components/checkout/CheckoutForm';
import OrderOverview from '../components/checkout/OrderOverview';

function CheckOut() {
    const { basket, total } = useContext(BasketContext);
    const [isModalOpen, setModalOpen] = useState(false);

    const formik = useFormik({
        initialValues: {
            delivery: '',
            country: '',
            firstName: '',
            lastName: '',
            address: '',
            postalCode: '',
            city: '',
            phone: '',
            cardType: '',
            cardNumber: '',
            expirationDate: '',
            nameOnCard: '',
            offers: false,
        },
        validationSchema: Yup.object({
            delivery: Yup.string().required('Delivery is required'),
            country: Yup.string().required('Country is required'),
            firstName: Yup.string().required('First Name is required'),
            lastName: Yup.string().required('Last Name is required'),
            address: Yup.string().required('Address is required'),
            postalCode: Yup.string().required('Postal Code is required'),
            city: Yup.string().required('City is required'),
            phone: Yup.string().required('Phone is required'),
            cardType: Yup.string().required('Card Type is required'),
            cardNumber: Yup.string().required('Card Number is required'),
            expirationDate: Yup.string().required('Expiration Date is required'),
            nameOnCard: Yup.string().required('Name on Card is required'),
        }),
        onSubmit: (values) => {
            setModalOpen(true);
        },
    });

    return (
        <>
            <Header />
            <Grid templateColumns="1fr 1fr" gap={6} p={6} bg="#F0EFED">
                <GridItem paddingRight="40px" borderRight="0.5px solid #CBD5E0">
                    <CheckoutForm formik={formik} />
                </GridItem>
                <GridItem>
                    <OrderOverview basket={basket} total={total} />
                </GridItem>
            </Grid>

            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} size="xl">
                <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(10px)" />
                <ModalContent>
                    <ModalHeader>Order Overview</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4} align="stretch">
                            <Heading as="h3" size="md">Thank you for your order!</Heading>
                            {basket.length > 0 ? (
                                basket.map((item, index) => (
                                    <Box key={index} mb={4}>
                                        <Text><strong>{item.name}</strong></Text>
                                        <Text>{item.description}</Text>
                                        <Text><strong>Price:</strong> ${item.price.toFixed(2)}</Text>
                                        <Text><strong>Quantity:</strong> {item.quantity}</Text>
                                        <Text><strong>Total:</strong> ${(item.price * item.quantity).toFixed(2)}</Text>
                                    </Box>
                                ))
                            ) : (
                                <Text>Your basket is empty.</Text>
                            )}
                            <Text>This is a test website to show my skills as a frontend developer. Thank you for reaching this point and testing the website.</Text>
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={() => setModalOpen(false)}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default CheckOut;