import type { PlatformIconProps } from "../types";

export function PlatformProducthuntIcon({ size = 24, color = "currentColor", title, borderStyle = "solid", borderColor = "#111111", borderWidth = 0.6, ...props }: PlatformIconProps) {
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
<circle cx="5.9998" cy="5.99999" r="4.7" fill="#FF6154"/>
<path fillRule="evenodd" clipRule="evenodd" d="M6.62624 6.00048H5.29449V4.59048H6.62624C6.81321 4.59048 6.99253 4.66476 7.12475 4.79697C7.25696 4.92918 7.33124 5.1085 7.33124 5.29548C7.33124 5.48246 7.25696 5.66178 7.12475 5.79399C6.99253 5.92621 6.81321 6.00048 6.62624 6.00048ZM6.62624 3.65048H4.35449V8.35048H5.29449V6.94048H6.62624C7.06252 6.94048 7.48093 6.76717 7.78943 6.45867C8.09793 6.15018 8.27124 5.73176 8.27124 5.29548C8.27124 4.8592 8.09793 4.44079 7.78943 4.13229C7.48093 3.82379 7.06252 3.65048 6.62624 3.65048Z" fill="white"/>
        </svg>
    );
}
