import type { PlatformIconProps } from "../types";

export function PlatformSubstackIcon({ size = 24, color = "currentColor", title, borderStyle = "solid", borderColor = "#111111", borderWidth = 0.6, ...props }: PlatformIconProps) {
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
<circle cx="5.9998" cy="5.99999" r="4.7" fill="#FF5900"/>
<g clipPath="url(#clip0_9730_436313)">
<path d="M3.75 3.37485H8.24976V3.95613H3.75V3.37485Z" fill="black"/>
<path d="M3.75 4.53741H8.24976V5.11869H3.75V4.53741Z" fill="black"/>
<path d="M3.75 5.69998V8.78612L5.99987 7.2977L8.24976 8.78612V5.69998H3.75Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_9730_436313">
<rect width="5.6" height="5.6" fill="white" transform="translate(3.19971 3.19998)"/>
</clipPath>
</defs>
        </svg>
    );
}
