import type { PlatformIconProps } from "../types";

export function PlatformFandomIcon({ size = 24, color = "currentColor", title, borderStyle = "solid", borderColor = "#111111", borderWidth = 0.6, ...props }: PlatformIconProps) {
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
<path d="M5.06044 2.79999L8.42025 6.15144L8.4412 7.58525L6.81386 9.19999H5.48926L3.8999 7.58951V4.60826L5.05619 5.74784L5.06044 2.79999Z" fill="#FB005A"/>
<path d="M5.24032 7.16367L6.16099 8.06027L7.09214 7.16023V6.74451L6.71408 6.37006L6.16443 6.87157L5.64572 6.35974L5.22656 6.76514L5.24032 7.16367Z" fill="#FFC600"/>
        </svg>
    );
}
