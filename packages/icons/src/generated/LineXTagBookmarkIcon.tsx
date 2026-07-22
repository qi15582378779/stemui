import type { IconProps } from "../types";

export function LineXTagBookmarkIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M3.72119 3.97229C3.72119 3.23418 4.3197 2.63513 5.05835 2.63513H10.9418C11.6805 2.63513 12.279 3.23418 12.279 3.97229V13.8351L8.00008 10.7811L3.72119 13.8351V3.97229ZM5.05835 3.70485C4.91072 3.70485 4.79091 3.82252 4.79091 3.97229V11.7599L8.00008 9.46531L11.2093 11.7599V3.97229C11.2093 3.82252 11.0894 3.70485 10.9418 3.70485H5.05835Z" fill="currentColor"/>
        </svg>
    );
}
