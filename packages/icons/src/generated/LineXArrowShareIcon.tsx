import type { IconProps } from "../types";

export function LineXArrowShareIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M8 3.00012L11.1667 6.16679L10.3833 6.95568L8.55556 5.12234V10.4501H7.44444V5.12234L5.61111 6.95568L4.82778 6.16679L8 3.00012ZM13 9.89457L12.9889 11.8446C12.9889 12.6112 12.3667 13.2279 11.6 13.2279H4.38889C3.61667 13.2279 3 12.6057 3 11.839V9.89457H4.11111V11.839C4.11111 11.9946 4.23333 12.1168 4.38889 12.1168H11.6C11.7556 12.1168 11.8778 11.9946 11.8778 11.839L11.8889 9.89457H13Z" fill="currentColor"/>
        </svg>
    );
}
