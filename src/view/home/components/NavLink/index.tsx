import { Link as ChakraLink,} from "@chakra-ui/react";

import  ActiveLink  from "../ActiveLink";

interface NavLinkProps{
    title:string
    href:string
}
export  default function NavLink({href,title}:NavLinkProps){
    return(

        <ActiveLink href={href} passHref>
            <ChakraLink fontSize='20px' fontWeight='bold'>{title}</ChakraLink>
        </ActiveLink>

    );
}
