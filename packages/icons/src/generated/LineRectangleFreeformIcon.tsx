import type { IconProps } from "../types";

export function LineRectangleFreeformIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M2.95264 11V13.4004H5.17627V14.5996H1.75342V11H2.95264ZM14.2466 11V14.5996H10.8237V13.4004H13.0464V11H14.2466ZM5.17627 1.40039V2.59961H2.95264V5H1.75342V1.40039H5.17627ZM14.2466 1.40039V5H13.0464V2.59961H10.8237V1.40039H14.2466Z" fill="#111111"/>
        </svg>
    );
}
