import type { IconProps } from "../types";

export function LineLineArrowIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M13.4004 8.68408C13.4002 7.3128 12.2883 6.20081 10.917 6.20068H2.79688V5.00146H10.917C12.951 5.00159 14.6004 6.65006 14.6006 8.68408V12.6011H13.4004V8.68408Z" fill="#111111"/>
<path d="M1.15183 5.65847L3.72062 8.22726L4.56928 7.37859L2.84847 5.65778L4.68391 3.82234L3.83594 2.97437L1.15183 5.65847Z" fill="#111111"/>
        </svg>
    );
}
