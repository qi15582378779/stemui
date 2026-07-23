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
<path d="M13.9836 9.16638V10.3002H2.01685V9.16638H13.9836ZM2.31763 10.0004H13.6838V9.46716H2.31763V10.0004ZM13.9836 5.69958V6.83337H2.01685V5.69958H13.9836ZM2.31763 6.53357H13.6838V6.00037H2.31763V6.53357Z" fill="currentColor"/>
        </svg>
    );
}
