import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    IconButton,
    Image,
    Stack,
    useDisclosure,
    useMediaQuery,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { List } from "phosphor-react";
import { useRef } from "react";

export default function Header() {
    const NavLink = dynamic(() => import("../NavLink/index"), {
        ssr: false,
    });
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
    const btnRef = useRef(null);

    return (
        <Flex
            bg="gray.900"
            p={4}
            color="white"
            justifyContent="center"
            alignItems="center"
        >
            <Flex
                width="100%"
                maxWidth="1216px"
                alignItems="center"
                justifyContent="space-between"
            >
                <Image src="/logo.svg" alt="Lucas Paiva" w={150} />
            </Flex>
            {isLargerThan1280 ? (
                <Stack direction={["column", "row"]} spacing="10px">
                    <NavLink href="/" title="Inicio"  />
                    <NavLink href="#about" title="Sobre" />
                    <NavLink href="#habilidades" title="Habilidades" />
                    <NavLink href="#projetos" title="Projetos" />
                    <NavLink href="#experiencia" title="Experiência" />
                </Stack>
            ) : (
                <>
                    <IconButton
                        icon={<List />}
                        aria-label="Call Sage"
                        fontSize="20px"
                        background="none"
                        ref={btnRef}
                        onClick={onOpen}
                    />
                    <Drawer
                        isOpen={isOpen}
                        placement="right"
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent bg="gray.900">
                            <DrawerCloseButton />
                            <DrawerHeader>Menu</DrawerHeader>
                            <DrawerBody>
                                <Stack
                                    direction={["column", "row"]}
                                    spacing="10px"
                                >
                                    <NavLink href="/" title="Inicio" />
                                    <NavLink href="sobre" title="Sobre"  />
                                    <NavLink
                                        href="/habilidades"
                                        title="Habilidades"
                                    />
                                    <NavLink
                                        href="/projetos"
                                        title="Projetos"
                                    />
                                    <NavLink href="/contato" title="Contato" />
                                </Stack>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </>
            )}
        </Flex>
    );
}
