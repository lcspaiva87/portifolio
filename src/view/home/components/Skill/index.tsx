import { Box, Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { CardSkill } from "./CardSkill";
import { Skill } from "@prisma/client";
import { ProjectorScreenChart } from "phosphor-react";
interface SkillProps {
    skill: Skill[];
}
export function Skill({ skill }: SkillProps) {

    return (
        <Box mt='15rem'>
            <Flex alignItems="center" gap={2} justifyContent="center" mb="2rem" id="habilidades">
                <ProjectorScreenChart size="50px" color="#FF0080" />
                <Text
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontSize="5xl"
                    fontWeight="bold"
                >
                    Skill
                </Text>
            </Flex>
            <Box>
                    <Box display={"grid"} alignItems="center" justifyContent="center" width="54rem" gridTemplateColumns={["repeat(2,1fr)","repeat(3,1fr)"]} gap={10}>
                    <>
                        {skill.map((item: Skill) => (
                            <Box key={item.id}>
                                <CardSkill
                                    title={item.name}
                                    color={item.color}
                                    icon={item.image}
                                />
                            </Box>
                        ))}
                    </>
                </Box>
            </Box>
        </Box>
    );
}
