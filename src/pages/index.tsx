import Head from "next/head";

import { Inter } from "@next/font/google";
import HomeView from "../view/home";
import { GetServerSideProps, NextPage } from "next";
import { prisma } from "../services";

// eslint-disable-next-line react/prop-types

const Home: NextPage = ({skills}:any) => {
    return (
        <>
            <Head>
                <title>Lucas Paiva</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomeView  skills={skills} />
        </>
    );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async () => {

    const skills = await prisma?.skill.findMany();
    return {
        props :{
            skills
        }

    };
};
