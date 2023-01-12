import dynamic from "next/dynamic";
import { memo } from "react";
import { About } from "./components/About";

const HomeView = () => {
    const Header = dynamic(() => import("./components/Header/index"), {
        ssr: false,
    });
    const Skill = dynamic(() => import("./components/Skill/index"), {
        ssr: false,
    });
    return (
        <>
            <Header />
            <Skill />
            <About />
        </>
    );
};
export default memo(HomeView);
