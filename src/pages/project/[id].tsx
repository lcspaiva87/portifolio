import { GetServerSideProps } from "next";
import { Project } from "@prisma/client";
import { prisma } from "../../services";
import {
    Box,
    Button,
    Flex,
    Image,
    Link,
    Stack,
    Text,
    Wrap,
    WrapItem,
} from "@chakra-ui/react";
import { ArrowLeft, GitlabLogo } from "phosphor-react";
import { Link as LinkIcon } from "phosphor-react";
import { useState } from "react";
export default function project({ project }: any) {

    const [fileExists, setFileExists] = useState(false);

    const checkFile = async () => {
        try {
            const response = await fetch(`/gif/${project.title}.gif`, { method: "HEAD" });
            setFileExists(response.ok);
        } catch (error) {
            setFileExists(false);
        }
    };

    return (
        <>
            <Link href="/">
                <Button
                    leftIcon={<ArrowLeft size={20} />}
                    position="absolute"
                    padding={10}
                    color="#FF0080"
                    bg="none"
                    _hover={{
                        bg: "none",
                    }}
                    fontWeight="bold"
                    zIndex={1}
                >
                    Voltar
                </Button>
            </Link>
            <Box overflow="hidden" position="relative">
                <Image
                    w="100%"
                    h="600px"
                    src={fileExists ?`/gif/${project.title}.gif`: "/gif/error.png" }
                    opacity="1"
                />

                <Flex
                    position="absolute"
                    padding="0 1rem 2rem 1rem"
                    bottom="0"
                    height="100%"
                    width="100%"
                    flexDirection="column"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                    bgGradient="linear-gradient(rgb(0, 0, 0, 0) -20%, rgb(14, 6, 1, 139))"
                    opacity="1"
                    transition="0.4s ease-in-out;"
                >
                    <Text
                        as="span"
                        fontSize="4xl"
                        fontWeight="bold"
                        bgGradient="linear(to-l, #7928CA, #FF0080)"
                        bgClip="text"
                    >
                        {project.title}
                    </Text>
                    <Box w="400px">
                        <Text
                            as="span"
                            noOfLines={2}
                            bgGradient="linear(to-l, #7928CA, #FF0080)"
                            bgClip="text"
                        >
                            {project.description}
                        </Text>
                        <Link href="#more">read more</Link>
                    </Box>
                    <Stack direction="row" spacing={4} mt="10px">
                        <Link href={project.url} isExternal>
                            <Button
                                leftIcon={<LinkIcon />}
                                variant="outline"
                                border="none"
                                color="#FF0080"
                                _hover={{
                                    border: "none",
                                    textDecoration: "underline",
                                }}
                            >
                                Demo
                            </Button>
                        </Link>
                        <Link href={project.github} isExternal>
                            <Button
                                leftIcon={<GitlabLogo size={32} />}
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                            >
                                Git Hub
                            </Button>
                        </Link>
                    </Stack>
                </Flex>
            </Box>

            <Flex
                mt="10rem"
                borderRadius="10px"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
            >
                <Box border="2px solid #FF0080" borderRadius="10px">
                    <Image
                        borderRadius="10px"
                        src={`/project/${project.title}/${project.title}.png`}
                        w="400"
                        h="400px"
                    />
                </Box>

                <Text
                    as="span"
                    fontSize="4xl"
                    fontWeight="bold"
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    mt="5rem"
                    mb="2rem"
                >
                    Saiba mais sobre este projeto
                </Text>
                <Box w="400px" id="more">
                    <Text as="span" fontWeight="bold">
                        {" "}
                        {project.description}
                    </Text>
                </Box>
                <Text
                    mt="5rem"
                    as="span"
                    fontSize="4xl"
                    fontWeight="bold"
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                >
                    Recursos do projeto
                </Text>

                <Text>Veja todas as características e detalhes do projeto</Text>

                <Flex
                    alignItems="center"
                    gap={2}
                    justifyContent="center"
                    mt={10}
                    mb={10}
                    w="500px"
                >
                    <Wrap justify="center">
                        {project.tag.map((skill: any) => (
                            <WrapItem key={skill.value}>
                                <Flex
                                    flexDirection="column"
                                    alignItems="center"
                                    borderRadius="10px"
                                    border="1px solid red"
                                    justifyContent="center"
                                    gap="5px"
                                >
                                    <Flex
                                        padding="24px"
                                        w="114px"
                                        height="100px"
                                        alignItems="center"
                                        flexDirection="column"
                                    >
                                        <Image
                                            src={
                                                `/skills/${skill.value}.svg ` ||
                                                "error.png"
                                            }
                                            width="40px"
                                            alt={skill.value}
                                        />
                                        <Text>{skill.value}</Text>
                                    </Flex>
                                </Flex>
                            </WrapItem>
                        ))}
                    </Wrap>
                </Flex>
            </Flex>

            <Box bg="gray.700" color="white" p={4} mt="10px">
                <Text>Copyright © {new Date().getFullYear()} My Company</Text>
            </Box>
        </>
    );
}
export const getServerSideProps: GetServerSideProps = async (props: any) => {
    const { id } = props.params;
    const project = await prisma.project.findMany();

    const projectFilter = project.find(
        (project: Project) => project.title === id
    );

    return {
        props: {
            project: projectFilter || null,
        },
    };
};
