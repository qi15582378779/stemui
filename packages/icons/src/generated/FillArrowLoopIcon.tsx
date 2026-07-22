import type { IconProps } from "../types";

export function FillArrowLoopIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <g clipPath="url(#clip0_7692_128630)">
<circle cx="8" cy="8" r="8" fill="currentColor"/>
<path d="M8.00005 6H5.33286V7.33281H11.3329L8.00005 4V6ZM4.66724 8.66719L8.00005 12V10H10.6672V8.66719H4.66724Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_7692_128630">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
        </svg>
    );
}
