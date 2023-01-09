import { Flex, Text } from "@chakra-ui/react";

import Typewriter from "typewriter-effect";
export function TypeWriteHome() {
    return (
        <Flex>
            <Text
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="4xl"
                fontWeight="extrabold"
            >
                <Typewriter
                    options={{
                        strings: [
                            "My Skill",
                            "Front-End",
                            "ReactJs",
                            "Html",
                            "Css",
                            "JavaScript",
                            "Web developer",
                            "NextJs",
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </Text>
        </Flex>
    );
}
