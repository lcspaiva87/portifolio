import { Box, Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { CardSkill } from "./CardSkill";
import { Skill } from "@prisma/client";
import { ProjectorScreenChart } from "phosphor-react";
interface SkillProps {
    skill: Skill[];
}
export function Skill({ skill }: SkillProps) {
    console.log(skill)
    return (
        <Box mt='15rem'>
            <Flex alignItems="center" gap={2} justifyContent="center" mb="2rem">
                <ProjectorScreenChart size="50px" color="#FF0080" />
                <Text
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontSize="5xl"
                    fontWeight="bold"
                >
                    Sobre
                </Text>
            </Flex>
            <Flex alignItems="center" justifyContent="center">
                <Flex alignItems="center" justifyContent="center" width="54rem">
                    <Wrap justify="center">
                        {skill.map((item: Skill) => (
                            <WrapItem key={item.id}>
                                <CardSkill
                                    title={item.name}
                                    color={item.color}
                                    icon={item.image}
                                />
                            </WrapItem>
                        ))}
                    </Wrap>
                </Flex>
            </Flex>
        </Box>
    );
}
