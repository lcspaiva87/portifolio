import {
    Box,
    Button,
    Card,
    Center,
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
import { useLayoutEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import notfound from "../../../public/gif/notfound.json";
import { Mousewheel, Pagination } from "swiper";
import { useRouter } from "next/router";
import Lottie from "react-lottie";
import { Projects } from "../../mock/project";
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { Carousel } from 'react-responsive-carousel'
export function ProjectView() {

    const [fileExists, setFileExists] = useState(false);
    const router = useRouter();
    console.log(fileExists)
    const project: any = Projects?.find((item: any) => item.title === router.query.id);
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
    console.log([project].map((item: any) => item?.tag));
    const handleClick = (e: any) => {
        router.push("/");
    };
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: notfound,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <Flex direction="column" >

            {
                [project].map(((item: any) => (
                    <>

                        <Box position="relative">
                            <Image
                                src={`/gif/${item?.title}.gif`}
                                opacity="0.5"
                                w="100%"
                                h={["20rem", "50rem"]}
                                borderBottom="2px solid #7928CA"
                                boxShadow="#7928CA 0px 10px 30px 1px;"

                            />
                            <Box display="flex" justifyContent="space-between">
                                <Flex
                                    position="absolute"
                                    padding="0 1rem 1rem 1rem"
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
                                    <Button
                                        ml={["", "-1rem"]}
                                        leftIcon={<ArrowLeft size={20} />}
                                        mb={["5rem", "30rem"]}
                                        color="#FF0080"
                                        bg="none"
                                        _hover={{
                                            bg: "none",
                                        }}
                                        fontWeight="bold"
                                        onClick={handleClick}
                                    >
                                        Voltar
                                    </Button>
                                    <Text
                                        as="span"
                                        fontSize={["2xl", "6xl"]}
                                        fontWeight="bold"
                                        bgGradient="linear(to-l, #7928CA, #FF0080)"
                                        bgClip="text"
                                    >
                                        {item?.title}
                                    </Text>
                                    <Box w={["200px", "500px"]}>
                                        <Text
                                            as="span"
                                            noOfLines={2}
                                            bgGradient="linear(to-l, #7928CA, #FF0080)"
                                            bgClip="text"
                                            fontSize={["2xl", "1.25rem"]}
                                            fontWeight="400"
                                            maxWidth={600}
                                            mt="1.25rem"
                                            mb="1.25rem"
                                        >
                                            {item?.description}

                                        </Text>
                                    </Box>
                                    <Stack direction="row" spacing={4} mt="10px">
                                        <Link href={item?.url} isExternal>
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
                                        <Link href={item?.github} isExternal>
                                            <Button
                                                leftIcon={<GitlabLogo size={32} />}
                                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                                            >
                                                Repositorio
                                            </Button>
                                        </Link>
                                    </Stack>
                                </Flex>
                            </Box>
                        </Box>

                        <Flex
                            flexDirection="column"
                            alignItems="center"
                            mt={["2rem", "3rem"]}
                        >
                            <Text
                                as="h2"
                                fontSize={["2.2rem", "3.5rem"]}
                                fontWeight="800"
                                bgGradient="linear(to-l, #7928CA, #FF0080)"
                                bgClip="text"
                                textAlign="center"
                                m="2rem 0"
                                pt="2.1rem"
                            >
                                ScreenshotScreen
                            </Text>
                            <Box
                                border="5px solid #7928CA"
                                borderRadius="5px"
                                boxShadow=" #FF0080 0px 25px 40px 6px"
                                width={["18rem", "35rem", "50rem"]}
                            >
                                <Carousel
                                    autoPlay={true}
                                    infiniteLoop={true}
                                    showStatus={true}
                                    showIndicators={true}
                                    showThumbs={true}
                                    interval={4000}
                                >
                                    <>
                                    </>
                                    <Image
                                        src={`/project/${item?.title?.toLowerCase()}/${item?.title?.toLowerCase()}.png`}
                                    />
                                </Carousel>
                            </Box>
                        </Flex>

                        <Box pl="2rem" pr="2rem" maxWidth="80rem" ml="auto" mr="auto">
                            <Flex
                                flexDirection="column"
                                alignItems="center"
                                mt={["2rem", "3rem"]}
                                textAlign="center"
                            >
                                <Text
                                    as="h2"
                                    fontSize={["2.2rem", "3.5rem"]}
                                    fontWeight="800"
                                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                                    bgClip="text"
                                    textAlign="center"
                                    m="2rem 0"
                                    pt="2.1rem"
                                >
                                    Saiba mais sobre este projeto
                                </Text>
                                <Box id="more">
                                    <Text as="p" fontWeight="bold">
                                        {" "}
                                        {item?.description}
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>

                        <Flex
                            flexDirection="column"
                            alignItems="center"
                            mt={["2rem", "3rem"]}
                            textAlign="center"
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
                                Recursos do projeto
                            </Text>
                            <Text
                                as="span"
                                fontSize="1xl"
                                fontWeight="bold"
                                mb="2rem"
                            >
                                Veja todas as características e detalhes do projeto</Text>

                            <Flex
                                alignItems="center"
                                gap={2}
                                justifyContent="center"
                                mt={10}
                                mb={10}
                                w={["", "500px"]}
                            >
                                <Wrap justify="center">
                                    {item?.tag.map((skill: any) => (
                                        <WrapItem key={skill?.value}>
                                            <Flex
                                                w='8rem'
                                                h='8rem'
                                                alignItems="center"
                                                textAlign="center"
                                                flexDirection="column"
                                                border="1px solid #7928CA"
                                                justifyContent="center"
                                                borderRadius="5px"
                                            >
                                                <Image
                                                    src={
                                                        `/skills/${skill?.value?.toLowerCase()}.svg ` ||
                                                        "error.png"
                                                    }
                                                    width="40px"
                                                    alt={skill?.value}
                                                />
                                                <Text>{skill?.value}</Text>
                                            </Flex>

                                        </WrapItem>
                                    ))}
                                </Wrap>
                            </Flex>
                        </Flex>
                    </>
                )))
            }
            <Box bg="gray.700" color="white" p={4} mt="10rem">
                <Text>Copyright © {new Date().getFullYear()} My Company</Text>
            </Box>
        </Flex>
    );
}
