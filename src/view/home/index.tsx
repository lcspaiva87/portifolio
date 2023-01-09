import { Flex, Link, Stack, Text } from "@chakra-ui/react";
import { memo } from "react";

const HomeView = () => {
    return (
        <Flex bg='#000' p={4} color='white' as="header" justifyContent='center' alignItems='center'>
            <Flex width='100%' maxWidth='1216px' alignItems='center' justifyContent='space-between'>
                <Text>Lucas Paiva</Text>
            </Flex>

            <Stack direction={["column", "row"]} spacing='24px'>
                <Link fontSize='14px' fontWeight='bold'>Inicio</Link>
                <Link fontSize='14px' fontWeight='bold'>Sobre</Link>
                <Link fontSize='14px' fontWeight='bold'>Habilidades</Link>
                <Link fontSize='14px' fontWeight='bold'>Projetos</Link>
                <Link fontSize='14px' fontWeight='bold'>Contato</Link>
            </Stack>
        </Flex>
    );
};
export default memo(HomeView);
