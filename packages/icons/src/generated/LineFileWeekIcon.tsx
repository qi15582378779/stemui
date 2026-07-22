import type { IconProps } from "../types";

export function LineFileWeekIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M14.6666 2.66667V13.3333C14.6666 13.7015 14.3681 14 13.9999 14H1.99992C1.63173 14 1.33325 13.7015 1.33325 13.3333L1.33325 2.66667C1.33325 2.29847 1.63173 2 1.99992 2H13.9999C14.3681 2 14.6666 2.29847 14.6666 2.66667ZM13.3333 3.33333H2.66659L2.66659 12.6667H13.3333V3.33333ZM4.66658 10.6667V5.33333H5.99992L5.99992 10.6667H4.66658ZM7.33325 10.6667L7.33325 5.33333H8.66658V10.6667H7.33325ZM9.99992 10.6667V5.33333H11.3333V10.6667H9.99992Z" fill="currentColor"/>
        </svg>
    );
}
