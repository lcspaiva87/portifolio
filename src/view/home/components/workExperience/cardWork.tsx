import { Box, Text } from "@chakra-ui/react";
interface cardWorkProps {
    office: string;
    company: string;
    description: string;
    date: string;
    month: string;
}
export function cardWork({
    company,
    office,
    description,
    date,
    month,
}: cardWorkProps) {
    return (
        <Box
            borderWidth="2px"
            padding="2rem"
            overflow="hidden"
            maxWidth="500px"
            display="block"
            position="relative"
            borderRadius="0.5rem"
        >
            <Text as="h1" fontSize="1.5rem" lineHeight="1.75rem" fontFamily="Libre Baskerville">{office}</Text>
            <Text as="h6" fontSize=".75rem" lineHeight="1rem" mt="0.25rem" fontFamily="Libre Baskerville"  >{company} </Text>
            <Text fontFamily="roboto" >{description}</Text>
            <Text fontFamily="roboto">
                {month} • {date}
            </Text>
        </Box>
    );
}
