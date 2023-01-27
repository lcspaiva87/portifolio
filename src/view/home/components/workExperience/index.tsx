import { Box, Flex, Grid, Text } from "@chakra-ui/react";

export function WorkExperience() {
    return (
        <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            pl="1rem"
            pr="1rem"
            pt="2rem"
            pb="2rem"
            gap="1rem"
        >
            <Text as="p">Experiência de trabalho</Text>
            <Grid gridTemplateColumns="repeat(3,minmax(0,1fr))" gap="1.75rem" pt="1.25rem" >
                <Box>
                    <Text as="h1">Front-end developer ReactJs</Text>
                    <Text as="h6">Lightbase</Text>
                    <Text as="span">
                        Participation in the development and maintenance of
                        responsive applications with ReactJs
                    </Text>
                    <Text as="h3">novembro • 2022</Text>
                </Box>
                <Box>
                    <Text as="h1">Front-end developer ReactJs</Text>
                    <Text as="h6">Lightbase</Text>
                    <Text as="span">
                        Participation in the development and maintenance of
                        responsive applications with ReactJs
                    </Text>
                    <Text as="h3">novembro • 2022</Text>
                </Box>
                <Box>
                    <Text as="h1">Front-end developer ReactJs</Text>
                    <Text as="h6">Lightbase</Text>
                    <Text as="span">
                        Participation in the development and maintenance of
                        responsive applications with ReactJs
                    </Text>
                    <Text as="h3">novembro • 2022</Text>
                </Box>
            </Grid>
        </Flex>
    );
}
