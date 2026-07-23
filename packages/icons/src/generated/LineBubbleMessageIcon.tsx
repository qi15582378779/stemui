import type { IconProps } from "../types";

export function LineBubbleMessageIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M6.10335 12.5419L3.47804 14.2L3.938 11.295C2.8468 10.289 2.23804 8.89207 2.23804 7.3475C2.23804 4.28354 4.63356 1.80005 8.43804 1.80005C12.2425 1.80005 14.638 4.28392 14.638 7.3475C14.638 10.4111 12.2425 12.8949 8.43804 12.8949C7.58554 12.8949 6.80356 12.7702 6.10335 12.5419Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.50049 6.0625H10.3755M6.50049 8.775H8.43799" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
