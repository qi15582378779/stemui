import type { IconProps } from "../types";

export function LineArrowConnectIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M5.33325 8.66667L2.66658 11.3333L5.33325 14M2.66658 11.3333H13.3333M10.6666 7.33333L13.3333 4.66667L10.6666 2M13.3333 4.66667H2.66658" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
