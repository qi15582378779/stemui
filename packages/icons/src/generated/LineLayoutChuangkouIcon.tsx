import type { IconProps } from "../types";

export function LineLayoutChuangkouIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M13.4286 3.28571V5.42857H2.28571V3.28571H13.4286ZM2.28571 12.7143V6.71429H4.85714V12.7143H2.28571ZM6.14286 12.7143V6.71429H13.4286V12.7143H6.14286ZM2.28571 2H1V3.28571V12.7143V14H2.28571H13.4286H14.7143V12.7143V3.28571V2H13.4286H2.28571Z" fill="currentColor"/>
        </svg>
    );
}
