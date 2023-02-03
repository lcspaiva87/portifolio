import { Box, Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { CardSkill } from "./CardSkill";
import { Skill } from "@prisma/client";
import { ProjectorScreenChart } from "phosphor-react";
interface SkillProps {
    skill: Skill[];
}
export function Skill({ skill }: SkillProps) {

    return (
        <Box as="section"
            pt='2rem'
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
            display={"inline-flex"}
            id="habilidades"
        >
            <Flex alignItems='center' gap={2} justifyContent='center' >
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
            <Box
                as='section'
                display={["flex", "grid"]}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gridTemplateColumns={" repeat(3, 1fr)"}
                gap={5}
            >
                {skill.map((item: Skill) => (
                    <Box key={item.id}>
                        <CardSkill
                            title={item.name}
                            color={item.color}
                            icon={item.image}
                        />
                    </Box>
                ))}

            </Box>
        </Box>
    );
}
