import type { IconProps } from "../types";

export function Logo2CrosoftIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M2.00024 2H7.70254V7.70229H2.00024V2Z" fill="#F25022"/>
<path d="M8.29785 2H14.0001V7.70229H8.29785V2Z" fill="#7FBA00"/>
<path d="M2 8.29761H7.70229V13.9999H2V8.29761Z" fill="#00A4EF"/>
<path d="M8.29785 8.29761H14.0001V13.9999H8.29785V8.29761Z" fill="#FFB900"/>
        </svg>
    );
}
