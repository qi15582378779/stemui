import type { IconProps } from "../types";

export function LineListBoardIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M5.32854 5.16669V9.13336M7.99997 5.16669V7.43336M10.6714 5.16669V10.2667M3.32497 2.90002H12.675C13.4127 2.90002 14.0107 3.40743 14.0107 4.03336V11.9667C14.0107 12.5926 13.4127 13.1 12.675 13.1H3.32497C2.58728 13.1 1.98926 12.5926 1.98926 11.9667V4.03336C1.98926 3.40743 2.58728 2.90002 3.32497 2.90002Z" stroke="#111111" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
