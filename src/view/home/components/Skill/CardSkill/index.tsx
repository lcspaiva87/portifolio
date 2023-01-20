import {
    Flex,
    Image,
    Text,

} from "@chakra-ui/react";
import { MotionFlex } from "./animation";

interface CardSkillProps {
    title: string;
    icon: string;
    color?: string | any;
}
export function CardSkill({ color, icon, title }: CardSkillProps) {
    return (
        <Flex
            width="200px"
            height="200px"
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
            position="relative"
        >
            <MotionFlex
                background={color}
                width="400px"
                height="190px"
                position="absolute"
                animate={{ rotate: 180}}
                transition={{ repeat: Infinity, duration: 2, velocity: 50 }}
            />
            <Flex
                width="198px"
                height="198px"
                zIndex={1}
                alignItems="center"
                justifyContent="center"
                background="#000"
            >
                <Flex
                    border={`2px solid ${color}`}
                    background="#181B23"
                    zIndex={2}
                    borderRadius={5}
                    width="180px"
                    height="180px"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Flex
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                    >
                        <Image

                            boxSize="50px"
                            src={icon}
                            alt={title}
                        />

                        <Text as="span">{title}</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}
