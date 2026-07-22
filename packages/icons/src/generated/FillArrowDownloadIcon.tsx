import type { IconProps } from "../types";

export function FillArrowDownloadIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M3.33325 13.3333H12.6666V12H3.33325V13.3333ZM12.6666 6H9.99992V2H5.99992V6H3.33325L7.99992 10.6667L12.6666 6Z" fill="currentColor"/>
        </svg>
    );
}
