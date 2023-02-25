import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { Barbell } from "phosphor-react";
import { WorkProps } from "../../../../@types";
import { Work } from "../../../../mock/work";

export function WorkExperience() {
    const work = Work
    return (
        <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            pl="1rem"
            pr="1rem"
            pt="2rem"
            pb="2rem"
            gap="1rem"
            w="100%"
            id="experiencia"
        >
            <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
            >
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    mt="10rem"
                    mb="5rem"
                    gap="5px"
                >
                    <Barbell size="50px" color="#FF0080" />
                    <Text
                        bgGradient="linear(to-l, #7928CA, #FF0080)"
                        bgClip="text"
                        fontSize={["1.5rem", "5xl"]}
                        fontWeight="bold"
                    >
                        Experiência de Trabalho
                    </Text>
                </Flex>
                <Grid
                    gridTemplateColumns={["repeat(1,minmax(0,1fr))", "repeat(3,minmax(0,1fr))"]}
                    gap="1.75rem"
                    pt="1.25rem"
                >
                    {work.map((item: WorkProps) => (
                        <Box
                            padding="2rem"
                            overflow="hidden"
                            maxWidth="500px"
                            display="block"
                            position="relative"
                            key={item.id}
                            border="1px solid  #FF0080"
                            borderRadius={5}
                            _hover={{
                                border:"1px solid  #7928CA"
                            }}

                        >
                            <Text
                                as="h1"
                                fontSize={["1rem", "1rem"]}
                                lineHeight="1.75rem"
                                fontFamily="Libre Baskerville"
                            >
                                {item.office}
                            </Text>
                            <br />
                            <Text
                                as="h6"
                                fontSize=".75rem"
                                lineHeight="1rem"
                                mt="0.25rem"
                                fontFamily="Libre Baskerville"
                            >
                                {item.company?.toLocaleUpperCase()}
                            </Text>
                            <br />
                            <Text as="span" fontFamily="roboto">
                                {item.description}
                            </Text>
                            <Text fontFamily="roboto">
                                {item.monthStart} • {item.dateStart} {item.monthEnd?.length ? `- ${item.monthEnd} •${item.dateEnd} ` : ""}
                            </Text>
                        </Box>
                    ))}
                </Grid>
            </Flex>
        </Flex>
    );
}
