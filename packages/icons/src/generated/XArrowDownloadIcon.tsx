import type { IconProps } from "../types";

export function XArrowDownloadIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            color={color}
            aria-hidden={title ? undefined : true}
            role={title ? "img" : "presentation"}
            focusable="false"
            {...props}
        >
            {title ? <title>{title}</title> : null}
            <path d="M7.9999 10L4.83323 6.83333L5.61656 6.04444L7.44434 7.87778L7.44434 2.55L8.55545 2.55V7.87778L10.3888 6.04444L11.1721 6.83333L7.9999 10Z" fill="#111111"/>
<path d="M13 9.8999L12.9889 11.8499C12.9889 12.6166 12.3667 13.2332 11.6 13.2332H4.38889C3.61667 13.2332 3 12.611 3 11.8443V9.8999H4.11111V11.8443C4.11111 11.9999 4.23333 12.1221 4.38889 12.1221H11.6C11.7556 12.1221 11.8778 11.9999 11.8778 11.8443L11.8889 9.8999H13Z" fill="#111111"/>
        </svg>
    );
}
