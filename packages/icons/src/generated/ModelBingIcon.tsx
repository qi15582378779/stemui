import type { ModelIconProps } from "../types";

export function ModelBingIcon({ size = 24, color = "currentColor", title, borderWidth = 1.2, ...props }: ModelIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 44 44"
            fill="none"
            overflow="visible"
            color={color}
            aria-hidden={title ? undefined : true}
            role={title ? "img" : "presentation"}
            focusable="false"
            {...props}
        >
            {title ? <title>{title}</title> : null}
            <rect x="0.6" y="0.6" width="42.8" height="42.8" rx="21.4" fill="white" stroke="#111111" strokeWidth={borderWidth}/>
<path d="M9.99976 10H21.4044V21.4046H9.99976V10Z" fill="#F25022"/>
<path d="M22.5956 10H34.0002V21.4046H22.5956V10Z" fill="#7FBA00"/>
<path d="M9.99976 22.5955H21.4044V34.0001H9.99976V22.5955Z" fill="#00A4EF"/>
<path d="M22.5956 22.5955H34.0002V34.0001H22.5956V22.5955Z" fill="#FFB900"/>
        </svg>
    );
}
