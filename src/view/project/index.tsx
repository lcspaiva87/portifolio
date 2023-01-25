import { Box, Button, Flex, Image, Link, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { ArrowLeft, GitlabLogo } from "phosphor-react";
import { Link as LinkIcon } from "phosphor-react";
import { useLayoutEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel, Pagination } from "swiper";
import { useRouter } from "next/router";

export function ProjectView({ project }: any) {
    const [fileExists, setFileExists] = useState(false);
    useLayoutEffect(() => {
        (async () => {
            try {
                const response = await fetch(
                    `/gif/${project.title.toLowerCase()}.gif`,
                    {
                        method: "HEAD",
                    }
                );
                setFileExists(response.ok);
            } catch (error) {
                setFileExists(false);
            }
        })();
    }, []);
    const router = useRouter()

    const handleClick = (e:any) =>{
        router.push("/")
    }
    return (
        <Box position="absolute" overflow="hidden">

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
                    onClick={handleClick}
                >
                    Voltar
                </Button>

            <Box position="relative">
                {fileExists ?(
                    <Image
                        src={
                                 `/gif/${project.title.toLowerCase()}.gif`
                        }
                        opacity="1"
                    />
                ):(

                    <Box bg="#fff" w="118.9rem" h="100vh" />
                )}

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
                        fontSize={["6xl", "4xl"]}
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
                            fontSize={["2xl", "4xl"]}
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
            <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Box as="section" justifyContent="center">
                        <Box>
                            <Box>
                                <Box>
                                    <Image
                                        height="30rem"
                                        src={`/project/${project.title.toLowerCase()}/${project.title.toLowerCase()}.png`}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </SwiperSlide>
            </Swiper>
            <Flex
                mt="10rem"
                borderRadius="10px"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"

            >


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
                                        w="154px"
                                        height="100px"
                                        alignItems="center"
                                        flexDirection="column"
                                    >
                                        <Image
                                            src={
                                                `/skills/${skill.value.toLowerCase()}.svg ` ||
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
        </Box>


    );
}
