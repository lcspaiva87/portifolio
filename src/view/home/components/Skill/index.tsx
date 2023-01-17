import { Box, Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { AiFillHtml5 } from "react-icons/ai";
import { CardSkill } from "./CardSkill";
import { Skill } from "@prisma/client";
interface SkillProps {
    skill: Skill[];
}
export function Skill({ skill }: SkillProps) {
    return (
        <Flex alignItems="center" justifyContent="center">
            <Flex alignItems="center" justifyContent="center" width="54rem">
                <Wrap justify="center">
                    {skill.map((item: Skill) => (

                        <WrapItem  key={item.id}>
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
    );
}
