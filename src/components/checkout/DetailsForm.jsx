import { VStack, FormControl, FormLabel, Input, Select, Checkbox, FormErrorMessage } from '@chakra-ui/react';

function DetailsForm({ formik }) {

    return (
        <VStack spacing={4} align="stretch">
            {["delivery", "country", "firstName", "lastName", "address", "postalCode", "city", "phone"].map((field, index) => (
                <FormControl key={index} isInvalid={formik.touched[field] && formik.errors[field]}>
                    <FormLabel>{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</FormLabel>
                    {field === "country" ? (
                        <Select
                            name={field}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values[field]}
                            bg="#FAFAFA"
                        >
                            <option value="">Select country</option>
                            <option value="Country 1">Country 1</option>
                            <option value="Country 2">Country 2</option>
                            <option value="Country 3">Country 3</option>
                        </Select>
                    ) : (
                        <Input
                            type={field === "phone" ? "tel" : "text"}
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
            <Checkbox
                name="offers"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isChecked={formik.values.offers}
            >
                Text me with news and offers
            </Checkbox>
        </VStack>
    )
};

export default DetailsForm;