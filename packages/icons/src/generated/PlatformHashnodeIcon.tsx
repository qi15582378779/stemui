import type { PlatformIconProps } from "../types";

export function PlatformHashnodeIcon({ size = 24, color = "currentColor", title, borderStyle = "solid", borderColor = "#111111", borderWidth = 0.6, ...props }: PlatformIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 12 12"
            fill="none"
            overflow="visible"
            color={color}
            aria-hidden={title ? undefined : true}
            role={title ? "img" : "presentation"}
            focusable="false"
            {...props}
        >
            {title ? <title>{title}</title> : null}
            <circle cx="6" cy="6" r="5.7" fill="white" stroke={borderColor} strokeWidth={borderWidth} strokeDasharray={borderStyle === "dashed" ? "1.2 1.2" : undefined}/>
<circle cx="5.9998" cy="5.99999" r="4.7" fill="#111111"/>
<path d="M3.41227 5.00491C2.86258 5.54415 2.86258 6.44539 3.41227 6.99509L5.00491 8.58773C5.54415 9.13742 6.44539 9.13742 6.99509 8.58773L8.58773 6.99509C9.13742 6.44539 9.13742 5.54415 8.58773 5.00491L6.99509 3.41227C6.44539 2.86258 5.54415 2.86258 5.00491 3.41227L3.41227 5.00491ZM5.29091 5.30261C5.67661 4.91476 6.30354 4.91122 6.69155 5.29676C7.07955 5.6823 7.08294 6.30939 6.69739 6.69739C6.31185 7.0854 5.68477 7.08878 5.29676 6.70324C4.90876 6.3177 4.90537 5.69061 5.29091 5.30261Z" fill="white"/>
        </svg>
    );
}
