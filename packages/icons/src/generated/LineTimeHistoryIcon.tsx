import type { IconProps } from "../types";

export function LineTimeHistoryIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M13.5643 7.99995C13.5643 4.92706 11.0728 2.43558 7.99995 2.43558C4.92706 2.43558 2.43558 4.92706 2.43558 7.99995C2.43558 11.0728 4.92706 13.5643 7.99995 13.5643C11.0728 13.5643 13.5643 11.0728 13.5643 7.99995ZM14.8 7.99995C14.8 11.7557 11.7557 14.8 7.99995 14.8C4.24419 14.8 1.19995 11.7557 1.19995 7.99995C1.19995 4.24419 4.24419 1.19995 7.99995 1.19995C11.7557 1.19995 14.8 4.24419 14.8 7.99995Z" fill="currentColor"/>
<path d="M8.61771 5.2522V7.74359L10.4973 9.62319L10.0606 10.0609L9.62393 10.4976L7.38208 8.25575V5.2522H8.61771Z" fill="currentColor"/>
        </svg>
    );
}
