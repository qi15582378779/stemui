import type { IconProps } from "../types";

export function LineHorizontalLineMenuIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M2.16724 10.15V9.31678H13.8336V10.15H2.16724ZM2.16724 6.68318V5.84998H13.8336V6.68318H2.16724Z" fill="currentColor"/>
        </svg>
    );
}
