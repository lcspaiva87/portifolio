import { Box } from "@chakra-ui/react";
import { memo } from "react";

const HomeView = () => {
    return (
        <Box bg='tomato' w='100%' p={4} color='white'>
            This is the Box
        </Box>
    );
};
export default memo(HomeView);
