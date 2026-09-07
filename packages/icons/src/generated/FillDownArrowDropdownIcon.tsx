import type { IconProps } from "../types";

export function FillDownArrowDropdownIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M8 10.6667L4 6.66675H12L8 10.6667Z" fill="currentColor"/>
        </svg>
    );
}
