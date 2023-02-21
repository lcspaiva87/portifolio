import { Box } from "@chakra-ui/react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";
interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shouldMatchExactHref?: boolean;
}
export default function ActiveLink({
    children,
    shouldMatchExactHref = false,
    ...rest
}: ActiveLinkProps) {
    const { asPath,route } = useRouter();
    let isActive = false;
    let linkAspath = String(asPath).replace("#", "")
    let linkHref = String(rest.href).replace("#", "/")
    console.log("route",route)



    if (linkAspath === linkHref ) {
        isActive = true;
      }
    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? "#FF0080" : "gray.100",
            })}
        </Link>
    )
}


