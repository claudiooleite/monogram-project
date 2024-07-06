import { Box, Heading, Button } from '@chakra-ui/react';
import DetailsForm from './DetailsForm';
import PaymentForm from './PaymentForm';

function CheckoutForm({ formik }) {
    return (
        <form onSubmit={formik.handleSubmit}>
            <Box>
                <Heading as="h2" size="lg" mb={4}>Details</Heading>
                <DetailsForm formik={formik} />
            </Box>
            <Box mt={8}>
                <Heading as="h2" size="lg" mb={4}>Payment</Heading>
                <PaymentForm formik={formik} />
            </Box>
            <Button colorScheme="blue" size="lg" mt={8} type="submit">Pay Now</Button>
        </form>
    )
};

export default CheckoutForm;