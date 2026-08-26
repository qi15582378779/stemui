import type { PlatformIconProps } from "../types";

export function PlatformMicrosoftIcon({ size = 24, color = "currentColor", title, borderStyle = "solid", borderColor = "#111111", borderWidth = 0.6, ...props }: PlatformIconProps) {
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
<circle cx="5.9998" cy="5.99999" r="4.7" fill="#001835"/>
<path d="M3.19971 3.19998H5.86079V5.86107H3.19971V3.19998Z" fill="#F25022"/>
<path d="M6.13867 3.19998H8.79976V5.86107H6.13867V3.19998Z" fill="#7FBA00"/>
<path d="M3.19971 6.13889H5.86079V8.79997H3.19971V6.13889Z" fill="#00A4EF"/>
<path d="M6.13867 6.13889H8.79976V8.79997H6.13867V6.13889Z" fill="#FFB900"/>
        </svg>
    );
}
