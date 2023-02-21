import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import { TypeWriteHome } from "../TypeWriteHome";
import Lottie from "react-lottie";
import animationData from "./dev_gif.json";
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
        <Box as="section" pt="2rem" display="inline-flex" justifyContent="center" flexDirection="column" alignItems="center">
            <Box display={["flex", "grid"]} gridTemplateColumns="repeat(2,1fr)" justifyContent="center" alignItems="center" mt="-1rem" pl="2rem" flexDirection="column">
                <Box fontSize={"2.2rem"}>
                    <Text as="h3" fontSize="1.3rem" fontWeight={600}>  Olá, eu sou</Text>
                    <Text
                        as="h1"
                        fontSize="2.2rem"
                        fontWeight={800}
                        bgGradient="linear(to-l, #7928CA, #FF0080)"
                        bgClip="text"

                    >
                        LUCAS PAIVA
                    </Text>
                    <TypeWriteHome />
                </Box>
                <Box>
                    {isLargerThan1280 && (

                        <Lottie
                            options={defaultOptions}
                            height={600}
                            width={600}
                        />

                    )}
                </Box>
            </Box>
        </Box>
    );
}
