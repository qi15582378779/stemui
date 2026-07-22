import type { IconProps } from "../types";

export function LineLineNochangeIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M13.3337 7.25V8.75H2.66675V7.25H13.3337Z" fill="currentColor"/>
        </svg>
    );
}
