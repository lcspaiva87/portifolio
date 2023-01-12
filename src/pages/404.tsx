import { Button, Center, Flex, Grid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Lottie from "react-lottie";
import Header from "../view/home/components/Header";
import erro404 from "../../public/404.json";
import { useEffect } from "react";

const Page404 = () => {
    const router = useRouter();
    //
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: erro404,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    useEffect(() => {
        setTimeout(() => {
            router.replace("/");
        }, 3000);
    }, []);
    return (
        <>
            <Header />
            <Center
            >
                <Flex align='center' justifyContent='center'>
                    <Lottie
                        options={defaultOptions}
                        height={900}
                        width={1500}
                    />

                </Flex>
            </Center >
        </>
    );
};
export default Page404;
