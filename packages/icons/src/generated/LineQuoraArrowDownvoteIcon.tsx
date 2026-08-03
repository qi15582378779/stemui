import type { IconProps } from "../types";

export function LineQuoraArrowDownvoteIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M8 13.3333L14 5.99992L10 5.99992V2.66659L6 2.66659V5.99992L2 5.99992L8 13.3333Z" stroke="currentColor" strokeLinejoin="round"/>
        </svg>
    );
}
