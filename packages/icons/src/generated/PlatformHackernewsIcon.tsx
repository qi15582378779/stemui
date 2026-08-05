import type { PlatformIconProps } from "../types";

export function PlatformHackernewsIcon({ size = 24, color = "currentColor", title, borderStyle = "solid", borderColor = "#111111", borderWidth = 0.6, ...props }: PlatformIconProps) {
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
<circle cx="5.9998" cy="5.99999" r="4.7" fill="#FF6600"/>
<path d="M4.86256 3.35052L5.99995 5.72009L7.13734 3.35052H8.11563L6.39945 6.57486V8.64953H5.60045V6.57486L3.88428 3.35052H4.86256Z" fill="white"/>
        </svg>
    );
}
