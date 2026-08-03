import type { PlatformIconProps } from "../types";

export function PlatformUnsplashIcon({ size = 24, color = "currentColor", title, borderStyle = "solid", borderColor = "#111111", ...props }: PlatformIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 12 12"
            fill="none"
            color={color}
            aria-hidden={title ? undefined : true}
            role={title ? "img" : "presentation"}
            focusable="false"
            {...props}
        >
            {title ? <title>{title}</title> : null}
            <circle cx="6" cy="6" r="5.7" fill="white" stroke={borderColor} strokeWidth="0.6" strokeDasharray={borderStyle === "dashed" ? "1.2 1.2" : undefined}/>
<circle cx="5.9998" cy="5.99999" r="4.7" fill="white"/>
<path d="M5.00016 4.83334V3.33334H7.00016V4.83334H5.00016ZM7.00016 5.66668H8.66683V8.66668H3.3335V5.66668H5.00016V7.16668H7.00016V5.66668Z" fill="#181818"/>
        </svg>
    );
}
