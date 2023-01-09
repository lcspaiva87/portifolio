import dynamic from "next/dynamic";
import { memo } from "react";

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
        </>
    );
};
export default memo(HomeView);
