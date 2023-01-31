import { Box, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { memo } from "react";
import { About } from "./components/About";
import { Projects } from "./components/Projetcts";
import { Skill } from "./components/Skill";
import { WorkExperience } from "./components/workExperience";


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
            <Box as="section" mt="5rem" display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="5rem">
                <Presentation />
                <About />
                {/*

                <Skill skill={skills} />
                <Projects project={project} />
                <WorkExperience /> */}
            </Box>
        </>
    );
};
export default memo(HomeView);
