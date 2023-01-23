import { Flex, Text, Image, Box } from "@chakra-ui/react";
import { User } from "phosphor-react";

export function About() {
    return (

        <Flex alignItems='center' justifyContent='center' flexDirection='column' mt='15rem' id="about" >
            <Flex alignItems='center' gap={2} justifyContent='center'>
                <User size='50px' color='#FF0080' />
                <Text
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontSize='5xl'
                    fontWeight='bold'
                >
                        Sobre
                </Text>
            </Flex>
            <Box as='section' display='grid' justifyContent='center' alignContent='center' gridTemplateColumns='repeat(2,1fr)'>
                <Flex placeSelf='center' mb='2rem' position='relative' transition='all 1s ease 0s'>
                    <Image
                        borderRadius='full'
                        boxSize='150px'
                        src='https://bit.ly/dan-abramov'
                        alt='Dan Abramov'
                    />
                </Flex>
                <Box w='31rem'fontWeight={500}>
                    <Flex gap={1} flexDirection='column' >
                        <Text as='p'>Sou um desenvolvedor Front-End que vive em Maracanau Ceara, sou formado em Sistema da Informaçao.</Text>
                        <Text as='p'>Meu interesse e primeiro contato com desenvolvimento web começou em 2019, com a criação de um site feito em Html, Css e JavaScript.</Text>
                    </Flex>
                </Box>
            </Box>
        </Flex>

    );
}
