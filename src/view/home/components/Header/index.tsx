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
        <header
           style={{
            position:"fixed",
            width:"100%",
            top:0,
            height:"4rem",
            fontWeight:600,
            fontSize:"1.2rem",
           zIndex:10,
           display:"flex",
           justifyContent:"space-around",
           padding:"1px 0",
           alignItems:"center",
           background:"#181B23"
        }}
        >
            <Flex
            >
                <Image src="/logo.svg" alt="Lucas Paiva" w={150} />
            </Flex>
            {isLargerThan1280 ? (
                <Flex gap={5}  zIndex={10} justifyContent="center"
                alignItems="center" >
                    <NavLink href="/" title="Inicio"  />
                    <NavLink href="#about" title="Sobre" />
                    <NavLink href="#habilidades" title="Habilidades" />
                    <NavLink href="#projetos" title="Projetos" />
                    <NavLink href="#experiencia" title="Experiência" />
                </Flex>
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
        </header>
    );
}
