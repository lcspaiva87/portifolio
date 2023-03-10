/* eslint-disable @typescript-eslint/no-var-requires */
import { Flex, Image, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface CardProjectPorps {
    title: string;
    img: string;
    type: string;
    id: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars

export function CardProject({ img, title, type, id }: CardProjectPorps) {
    const router = useRouter();
    const handleClick = (e: any) => {
        router.push(`/project/${title}`);
    };
    return (
        <Flex
            border="2px solid #626264"
            maxWidth="295px"
            minWidth="350px"
            height="150px"
            borderRadius="5px"
            position="relative"
            overflow="hidden"
            _hover={{
                border: "2px solid #7928CA",
                borderRadius: "5px",
                overflow: "hidden",
            }}
        >
            <Link onClick={()=>handleClick()} key={id}>
                <Image
                    src={`/project/${img?.toLocaleLowerCase()}/${img?.toLocaleLowerCase()}.png`}
                    alt={title}
                    width="100%"
                    height="auto"
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
                    opacity="0"
                    transition="0.4s ease-in-out;"
                    _hover={{
                        opacity: "1",
                        height: "100%",
                    }}
                >
                    <Text
                        as="h2"
                        bgGradient="linear(to-l, #7928CA, #FF0080)"
                        bgClip="text"
                        fontWeight="bold"
                    >
                        {type}
                    </Text>
                    <Text
                        as="span"
                        bgGradient="linear(to-l, #7928CA, #FF0080)"
                        bgClip="text"
                        fontWeight="bold"
                    >
                        {title}
                    </Text>
                </Flex>
            </Link>
        </Flex>
    );
}
