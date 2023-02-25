import Head from "next/head";

import HomeView from "../view/home";
import { GetServerSideProps, NextPage } from "next";

import { Projects } from "../mock/project";
import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { Project, ProjectsProps, Skill, SkillsProps } from "../@types";
import { Skills } from "../mock/Skills";
import Header from "../view/home/components/Header";


// eslint-disable-next-line react/prop-types
interface Homeprops {
    project: ProjectsProps;
    skill: SkillsProps;
}
const Home: NextPage = (props) => {
    const propsValue = [props].map((item: any) => ({
        project: item.project,
        skill: item.skill,
    }));
    return (
        <>
            <Header />
            <VStack w="full" h="full" >
                <HStack w="full" >

                    <HomeView
                        skills={propsValue[0]["skill"]}
                        project={propsValue[0]["project"]}
                    />
                </HStack>
                {/* <Box bg="gray.700" color="white" p={4} mt="10px">
                <Text>Copyright © {new Date().getFullYear()} Lucas Paiva</Text>
            </Box> */}
            </VStack>
        </>
    );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
    const skill = Skills;
    const project = Projects;

    return {
        props: {
            project,
            skill,
        },
    };
};
