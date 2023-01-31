import { Flex, Wrap, WrapItem, Text, Button, Link, Box } from "@chakra-ui/react";
import { Project } from "@prisma/client";
import { GithubLogo, ProjectorScreenChart } from "phosphor-react";
import { CardProject } from "./CardProject";

interface ProjectProps {
    project: Project[];
}
export function Projects({ project }: ProjectProps) {
    return (
        <Box id="projetos">
            <Flex
                alignItems="center"
                justifyContent="center"
                mt="10rem"
                mb="5rem"
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
            <Flex alignItems="center" gap={2} justifyContent="center" bg="#3c3d3f29" >
                <Flex alignItems="center" justifyContent="center" w="70rem" mt="1rem" mb="1rem">
                    <Wrap justify="center">
                        {project?.map((item: Project) => (
                            <WrapItem key={item.id}>
                                <CardProject
                                    title={item.title}
                                    type={item.type}
                                    img={item.dirName}
                                    id={item.id}
                                />
                            </WrapItem>
                        ))}
                    </Wrap>
                </Flex>
            </Flex>
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
