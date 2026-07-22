import type { IconProps } from "../types";

export function LinePlusAddIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M7.33325 7.33325V3.33325H8.66658V7.33325H12.6666V8.66658H8.66658V12.6666H7.33325V8.66658H3.33325V7.33325H7.33325Z" fill="currentColor"/>
        </svg>
    );
}
