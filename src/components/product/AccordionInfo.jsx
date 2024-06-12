import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box } from '@chakra-ui/react';
import { MinusIcon, AddIcon } from '@chakra-ui/icons';

const sections = [
    {
        title: 'Product Description',
        content: `This product is designed with both functionality and style in mind, ensuring it meets the needs of modern users. It features a sleek design that not only looks good but also enhances performance. The materials used are of the highest quality, ensuring durability and longevity.

        The product includes several advanced features that set it apart from competitors. These features are designed to improve user experience, making it easier and more enjoyable to use. Whether you are a novice or an expert, you will find this product meets your needs perfectly.

        Furthermore, the product is available in a variety of colors and sizes, allowing you to choose the one that best fits your preferences. Its lightweight design makes it easy to handle and transport, without sacrificing sturdiness.

        The product has undergone rigorous testing to ensure it meets the highest standards of quality and safety. We are confident that it will exceed your expectations in every way.

        In addition, the product comes with a comprehensive user manual that provides clear and detailed instructions on how to use it. This ensures that you can get the most out of your purchase from day one.`
    },
    {
        title: 'Shipping Information',
        content: `We understand that getting your product to you as quickly and safely as possible is a top priority. That's why we offer a range of shipping options to suit your needs. Whether you need your product urgently or prefer a more economical option, we have you covered.

        All orders are processed within 24 hours and shipped out the next business day. We offer standard, expedited, and overnight shipping options, depending on how quickly you need your product. You can track your order every step of the way with our online tracking system.

        Our packaging is designed to protect your product during transit, ensuring it arrives in perfect condition. We use high-quality materials and techniques to prevent damage during shipping.

        In the unlikely event that your product is damaged during shipping, we offer a hassle-free returns process. Simply contact our customer service team, and we will arrange for a replacement or refund.

        We ship to a wide range of locations worldwide. Shipping times and costs vary depending on your location and the shipping option you choose. Detailed information about shipping times and costs is available on our website.

        For any questions or concerns about shipping, our customer service team is always here to help. We are committed to ensuring your shopping experience is smooth and satisfactory.`
    },
    {
        title: 'Warranty',
        content: `We stand behind the quality of our products and offer a comprehensive warranty to give you peace of mind. Our warranty covers any defects in materials or workmanship for a period of one year from the date of purchase.

        During the warranty period, we will repair or replace any defective product free of charge. This warranty is in addition to any rights you may have under consumer protection laws.

        To make a warranty claim, simply contact our customer service team with your proof of purchase and a description of the issue. We will guide you through the process and arrange for a repair or replacement as quickly as possible.

        Our warranty does not cover damage caused by misuse, accidental damage, or normal wear and tear. For full details of what is covered, please refer to the warranty section of our user manual.

        In addition to our standard warranty, we also offer an extended warranty option for an additional fee. This extended warranty provides coverage for an additional two years, giving you even more protection.

        We are committed to providing you with a high-quality product that you can rely on. Our warranty is just one way we show our commitment to your satisfaction.`
    },
    {
        title: 'Build Quality',
        content: `The build quality of our product is a testament to our commitment to excellence. We use only the finest materials and state-of-the-art manufacturing processes to ensure that our products meet the highest standards of durability and performance.

        Each product is meticulously crafted by skilled artisans who take pride in their work. Every detail, from the stitching to the finishing touches, is carefully inspected to ensure it meets our rigorous quality standards.

        The materials used in our products are chosen for their strength, durability, and aesthetic appeal. We source these materials from reputable suppliers who share our commitment to quality and sustainability.

        Our manufacturing process incorporates the latest technology to enhance precision and efficiency. This allows us to produce products that are not only high in quality but also consistent in performance.

        We regularly conduct quality control tests at various stages of the production process. These tests help us identify and address any potential issues before the product reaches you.

        The result is a product that not only looks and feels premium but also stands up to the demands of everyday use. We are confident that you will appreciate the superior build quality of our product.`
    },
    {
        title: 'Customer Reviews',
        content: `Our customers are our best advocates, and we are proud to share their feedback with you. Here are some of the reviews we have received:

        "This product exceeded my expectations in every way. The quality is top-notch, and it performs beautifully. I couldn't be happier with my purchase." - Jane D.

        "I was skeptical at first, but after using this product for a few weeks, I'm convinced it's the best on the market. Highly recommend!" - John S.

        "The customer service team was incredibly helpful when I had a question about my order. The product itself is fantastic - well-built and easy to use." - Emily R.

        "I've tried many similar products, but this one stands out for its quality and durability. It's worth every penny." - Michael T.

        "Fast shipping and excellent packaging. The product works exactly as described and has quickly become a favorite in my household." - Sarah L.

        We appreciate all feedback from our customers and use it to continually improve our products and services. Thank you for choosing us!`
    }
];

function ProductAccordion() {
    return (
        <Accordion allowToggle>
            {sections.map((section, index) => (
                <AccordionItem key={index}>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left'>
                                        {section.title}
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                {section.content}
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            ))}
        </Accordion>
    );
}

export default ProductAccordion;
