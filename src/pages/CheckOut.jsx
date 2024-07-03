import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    Checkbox,
    VStack,
    Heading,
    Text,
    Grid,
    GridItem,
    FormErrorMessage,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
} from '@chakra-ui/react';
import BasketContext from '../hooks/basketContext';

function CheckOut() {
    const { basket } = useContext(BasketContext);
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
            <header>
                <Box bg="#F0EFED" p={4} borderBottom="0.5px solid #CBD5E0">
                    <Heading size="lg">Website</Heading>
                </Box>
            </header>

            <Grid templateColumns="1fr 1fr" gap={6} p={6} bg="#F0EFED">
                <GridItem paddingRight="40px" borderRight="0.5px solid #CBD5E0">
                    <form onSubmit={formik.handleSubmit}>
                        <Box>
                            <Heading as="h2" size="lg" mb={4}>
                                Details
                            </Heading>
                            <VStack spacing={4} align="stretch">
                                <FormControl isInvalid={formik.touched.delivery && formik.errors.delivery}>
                                    <FormLabel>Delivery</FormLabel>
                                    <Input
                                        type="text"
                                        name="delivery"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.delivery}
                                        bg="#FAFAFA"
                                    />
                                    <FormErrorMessage>{formik.errors.delivery}</FormErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={formik.touched.country && formik.errors.country}>
                                    <FormLabel>Country</FormLabel>
                                    <Select
                                        name="country"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.country}
                                        bg="#FAFAFA"
                                    >
                                        <option value="">Select country</option>
                                        <option value="Country 1">Country 1</option>
                                        <option value="Country 2">Country 2</option>
                                        <option value="Country 3">Country 3</option>
                                    </Select>
                                    <FormErrorMessage>{formik.errors.country}</FormErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                                    <FormLabel>First Name</FormLabel>
                                    <Input
                                        type="text"
                                        name="firstName"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.firstName}
                                        bg="#FAFAFA"
                                    />
                                    <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={formik.touched.lastName && formik.errors.lastName}>
                                    <FormLabel>Last Name</FormLabel>
                                    <Input
                                        type="text"
                                        name="lastName"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.lastName}
                                        bg="#FAFAFA"
                                    />
                                    <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={formik.touched.address && formik.errors.address}>
                                    <FormLabel>Address</FormLabel>
                                    <Input
                                        type="text"
                                        name="address"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.address}
                                        bg="#FAFAFA"
                                    />
                                    <FormErrorMessage>{formik.errors.address}</FormErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={formik.touched.postalCode && formik.errors.postalCode}>
                                    <FormLabel>Postal Code</FormLabel>
                                    <Input
                                        type="text"
                                        name="postalCode"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.postalCode}
                                        bg="#FAFAFA"
                                    />
                                    <FormErrorMessage>{formik.errors.postalCode}</FormErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={formik.touched.city && formik.errors.city}>
                                    <FormLabel>City</FormLabel>
                                    <Input
                                        type="text"
                                        name="city"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.city}
                                        bg="#FAFAFA"
                                    />
                                    <FormErrorMessage>{formik.errors.city}</FormErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={formik.touched.phone && formik.errors.phone}>
                                    <FormLabel>Phone</FormLabel>
                                    <Input
                                        type="tel"
                                        name="phone"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.phone}
                                        bg="#FAFAFA"
                                    />
                                    <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                                </FormControl>

                                <Checkbox
                                    name="offers"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isChecked={formik.values.offers}
                                >
                                    Text me with news and offers
                                </Checkbox>
                            </VStack>
                        </Box>

                        <Box mt={8}>
                            <Heading as="h2" size="lg" mb={4}>
                                Payment
                            </Heading>
                            <VStack spacing={4} align="stretch">
                                <FormControl isInvalid={formik.touched.cardType && formik.errors.cardType}>
                                    <FormLabel>Card Type</FormLabel>
                                    <Select
                                        name="cardType"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.cardType}
                                        bg="#FAFAFA"
                                    >
                                        <option value="">Select card type</option>
                                        <option value="Visa">Visa</option>
                                        <option value="MasterCard">MasterCard</option>
                                        <option value="American Express">American Express</option>
                                    </Select>
                                    <FormErrorMessage>{formik.errors.cardType}</FormErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={formik.touched.cardNumber && formik.errors.cardNumber}>
                                    <FormLabel>Card Number</FormLabel>
                                    <Input
                                        type="text"
                                        name="cardNumber"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.cardNumber}
                                        bg="#FAFAFA"
                                    />
                                    <FormErrorMessage>{formik.errors.cardNumber}</FormErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={formik.touched.expirationDate && formik.errors.expirationDate}>
                                    <FormLabel>Expiration Date</FormLabel>
                                    <Input
                                        type="text"
                                        name="expirationDate"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.expirationDate}
                                        bg="#FAFAFA"
                                    />
                                    <FormErrorMessage>{formik.errors.expirationDate}</FormErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={formik.touched.nameOnCard && formik.errors.nameOnCard}>
                                    <FormLabel>Name on Card</FormLabel>
                                    <Input
                                        type="text"
                                        name="nameOnCard"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.nameOnCard}
                                        bg="#FAFAFA"
                                    />
                                    <FormErrorMessage>{formik.errors.nameOnCard}</FormErrorMessage>
                                </FormControl>
                            </VStack>
                        </Box>

                        <Button colorScheme="blue" size="lg" mt={8} type="submit">
                            Pay Now
                        </Button>
                    </form>
                </GridItem>

                <GridItem>
                    <Box bg="#FAFAFA" position="sticky" top="20px" p={4} boxShadow="md" borderWidth="1px" borderRadius="md">
                        <Heading as="h2" size="lg" mb={4}>
                            Overview
                        </Heading>
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
                    </Box>
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
                        <Button colorScheme="blue" mr={3} onClick={() => setModalOpen(false)}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default CheckOut;
