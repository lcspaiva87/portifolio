import dynamic from "next/dynamic";
import { memo } from "react";
import { About } from "./components/About";
import { Skill } from "./components/Skill";

const HomeView = ({ skills }: any) => {
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
        </>
    );
};
export default memo(HomeView);
