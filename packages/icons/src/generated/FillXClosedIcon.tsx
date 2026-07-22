import type { IconProps } from "../types";

export function FillXClosedIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <circle cx="8" cy="8" r="8" fill="currentColor"/>
<path d="M11 5L5 11M5 5L11 11" stroke="white" strokeWidth="1.4" strokeLinejoin="bevel"/>
        </svg>
    );
}
