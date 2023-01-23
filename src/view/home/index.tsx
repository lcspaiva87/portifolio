import { Box, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { memo } from "react";
import { About } from "./components/About";
import { Projects } from "./components/Projetcts";
import { Skill } from "./components/Skill";

const HomeView = ({ skills, project }: any) => {
    const Header = dynamic(() => import("./components/Header/index"), {
        ssr: false,
    });

    const Presentation = dynamic(
        () => import("./components/Presentation/index"),
        {
            ssr: false,
        }
    );

    return (
        <>
            <Header />
            <Presentation />
            <About />
            <Skill skill={skills} />
            <Projects project={project} />
            <Box bg="gray.700" color="white" p={4} mt="10px">
                <Text>Copyright © {new Date().getFullYear()} My Company</Text>
            </Box>
        </>
    );
};
export default memo(HomeView);
