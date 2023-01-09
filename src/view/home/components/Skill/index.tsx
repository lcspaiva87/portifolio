import {
    Box,
    Flex,
    StackDivider,
    Text,
    useMediaQuery,
    VStack,
} from "@chakra-ui/react";
import { TypeWriteHome } from "../TypeWriteHome";
import Lottie from "react-lottie";
import animationData from "./dev_gif.json";
export default function Skill() {
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
        <Flex alignItems="center" justifyContent="center">
            <Flex
                width="100%"
                maxWidth="1216px"
                alignItems="center"
                justifyContent={isLargerThan1280 ? "space-between" : "center"}
            >
                <Flex
                    flexDirection="column"
                    alignItems={isLargerThan1280 ? "" : "center"}
                >
                    <Text
                        fontSize={isLargerThan1280 ? "4xl" : "3xl"}
                        fontWeight="bold"
                    >
                        Olá, eu sou
                    </Text>
                    <Text
                        bgGradient="linear(to-l, #7928CA, #FF0080)"
                        bgClip="text"
                        fontSize={isLargerThan1280 ? "6xl" : "3xl"}
                        fontWeight="extrabold"
                    >
                        LUCAS PAIVA
                    </Text>
                    <TypeWriteHome />
                </Flex>
                {isLargerThan1280 && (
                    <>
                        <Box>
                            <Lottie
                                options={defaultOptions}
                                height={600}
                                width={600}
                            />
                        </Box>
                    </>
                )}
            </Flex>
        </Flex>
    );
}
