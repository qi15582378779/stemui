import type { IconProps } from "../types";

export function FillArrowLoop2Icon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M8 5.5H4.66602V7.16602H12.166L8 3V5.5ZM3.83398 8.83398L8 13V10.5H11.334V8.83398H3.83398Z" fill="currentColor"/>
        </svg>
    );
}
