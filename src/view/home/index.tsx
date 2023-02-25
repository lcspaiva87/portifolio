import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
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


            <Presentation />
            {/* <About />
                    <Skill skill={skills} />
                    <Projects project={project} />
                    <WorkExperience /> */}

        </>
    );
};
export default memo(HomeView);
