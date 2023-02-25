import {
    HStack,
    Heading,
    Stack,
    VStack,
    FormControl,
    FormLabel,
    Button,
    Input as InputChakra,
    Link,
    IconButton,
    Input,
    useMediaQuery,
    Text,
    Spacer,
} from "@chakra-ui/react";
import { TypeWriteHome } from "../TypeWriteHome";
import Lottie from "react-lottie";
import animationData from "./dev_gif.json";
import { GithubLogo, InstagramLogo, LinkedinLogo, SignOut } from "phosphor-react";
import { useState } from "react";


export default function Presentation() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

    return (
        <VStack w="full" h="full"  alignItems="center" justifyContent="center" >
            <VStack w="full" mt="10rem" justifyContent="center"  >
                <HStack flex={1} justifyContent="center" gap={4}  >
                    <Text fontSize="6xl" textAlign="center" color="gray.300" fontWeight="light">
                        Olá, eu sou
                    </Text>
                    <Text fontWeight="light" fontSize="6xl" textAlign="center" bgGradient="linear(to-l, cyan.500, cyan.100)"
                        bgClip="text">
                        Lucas
                    </Text>
                </HStack >
                <Text fontSize="7xl" textAlign="center" color="gray.100" fontWeight="bold">
                    Front-end Developer
                </Text>
                <HStack w={80}>
                    <Text fontSize="sm" textAlign="center" color="gray.100" fontWeight="light">
                        É um prazer tê-lo(a) por aqui! Espero que desfrute do conteúdo e que eu possa ser útil de alguma forma.
                    </Text>
                </HStack>
                <Spacer />
                <Spacer />
                <Button
                mt="3rem !important"
                    bg="cyan.600"
                    size="lg"
                    _hover={{
                        bgColor: "cyan.700",
                    }}
                    w={isLargerThan1280 ? "20%" : "50"}
                >
                    Sobre mim
                </Button>
                
                <HStack justifyContent="center" gap={4}  mt="3rem !important">
                    <Link href="https://github.com/LucasLucas" isExternal>

                        <Button
                            bg="transparent"
                            _hover={
                                {
                                    color: "cyan.600",
                                    bg: "transparent"
                                }
                            }
                            leftIcon={<InstagramLogo size={32} />}
                        />
                    </Link>
                    <Link href="https://github.com/LucasLucas" isExternal>
                        <Button
                            leftIcon={<LinkedinLogo size={32} />}
                            bg="transparent"
                            _hover={
                                {
                                    color: "cyan.600",
                                    bg: "transparent"
                                }
                            }
                        />
                    </Link>

                    <Link href="https://github.com/LucasLucas" isExternal>
                        <Button
                            leftIcon={<GithubLogo size={32} />}
                            bg="transparent"

                            _hover={
                                {
                                    color: "cyan.600",
                                    bg: "transparent"
                                }
                            }
                        />
                    </Link>
                </HStack>
            </VStack>
        </VStack>
    );
}
