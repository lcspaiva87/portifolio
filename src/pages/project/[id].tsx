import { GetServerSideProps } from "next";
import { Project } from "@prisma/client";
import { prisma } from "../../services";

import { ProjectView } from "../../view/project";

export default function project({ project }: any) {

    return (
       <ProjectView project={project} />
    );
}
export const getServerSideProps: GetServerSideProps = async (props: any) => {
    const { id } = props.params;
    const project = await prisma.project.findMany();
    console.log("project",project)
    const projectFilter = project.find(
        (project: Project) => project.title === id
    );

    return {
        props: {
            project: projectFilter || null,
        },
    };
};
