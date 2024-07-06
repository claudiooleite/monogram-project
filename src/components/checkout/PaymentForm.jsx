import { VStack, FormControl, FormLabel, Input, Select, FormErrorMessage } from '@chakra-ui/react';

function PaymentForm({ formik }) {
    return (
        <VStack spacing={4} align="stretch">
            {["cardType", "cardNumber", "expirationDate", "nameOnCard"].map((field, index) => (
                <FormControl key={index} isInvalid={formik.touched[field] && formik.errors[field]}>
                    <FormLabel>{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</FormLabel>
                    {field === "cardType" ? (
                        <Select
                            name={field}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values[field]}
                            bg="#FAFAFA"
                        >
                            <option value="">Select card type</option>
                            <option value="Visa">Visa</option>
                            <option value="MasterCard">MasterCard</option>
                            <option value="American Express">American Express</option>
                        </Select>
                    ) : (
                        <Input
                            type="text"
                            name={field}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values[field]}
                            bg="#FAFAFA"
                        />
                    )}
                    <FormErrorMessage>{formik.errors[field]}</FormErrorMessage>
                </FormControl>
            ))}
        </VStack>
    )
};

export default PaymentForm;