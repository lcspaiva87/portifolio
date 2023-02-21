import { Flex, Wrap, WrapItem, Text, Button, Link, Box } from "@chakra-ui/react";
import { Project } from "@prisma/client";
import { GithubLogo, ProjectorScreenChart } from "phosphor-react";
import { CardProject } from "./CardProject";

interface ProjectProps {
    project: Project[];
}
export function Projects({ project }: ProjectProps) {
    return (
        <Box
            id="projetos"
            as="section"
            pt='2rem'
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
            display={"inline-flex"}
        >
            <Flex
                alignItems='center' gap={2} justifyContent='center'
            >
                <ProjectorScreenChart size="50px" color="#FF0080" />
                <Text
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontSize="5xl"
                    fontWeight="bold"
                >
                    Projetos
                </Text>
            </Flex>
            <Box
                as='section'
                display={["flex", "grid"]}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gridTemplateColumns={" repeat(3, 1fr)"}
                bg="#3c3d3f29"
                gap={10}
                >

                {project?.map((item: Project) => (
                    <Box key={item.id}>
                        <CardProject
                            title={item.title}
                            type={item.type}
                            img={item.dirName}
                            id={item.id}
                        />
                    </Box>
                ))}

            </Box>
            <Flex alignItems="center" justifyContent="center" m="10px">
                <Link href="https://github.com/lcspaiva87">
                    <Button
                        leftIcon={<GithubLogo />}
                        color="#FF0080"
                        variant="outline"
                    >
                        Repositorios
                    </Button>
                </Link>
            </Flex>
        </Box>
    );
}
