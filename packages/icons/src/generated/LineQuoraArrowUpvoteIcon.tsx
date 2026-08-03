import type { IconProps } from "../types";

export function LineQuoraArrowUpvoteIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M8 2.6665L2 9.99984H6V13.3332H10V9.99984H14L8 2.6665Z" stroke="currentColor" strokeLinejoin="round"/>
        </svg>
    );
}
