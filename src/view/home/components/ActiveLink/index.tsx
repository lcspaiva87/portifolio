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
    const { asPath } = useRouter();
    let isActive = false;

    if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
        isActive = true;
    }
    if (
        (!shouldMatchExactHref && asPath.startsWith(String(rest.href))) ||
        asPath.startsWith(String(rest.as))
    ) {
        isActive = true;
    }
    return (
        <>
            {isActive ? (
                <Link {...rest}>
                    <Box>
                        {cloneElement(children, {
                            color: isActive ? "#FF0080" : "gray.100",
                        })}
                    </Box>
                </Link>
            ) : (
                <Link {...rest}>
                    {cloneElement(children, {
                        color: isActive ? "#FF0080" : "gray.100",
                    })}
                </Link>
            )}
        </>
    );
}
