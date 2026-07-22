import type { IconProps } from "../types";

export function FillExclamationWarningIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <g clipPath="url(#clip0_4561_73699)">
<circle cx="8.00016" cy="8.00016" r="7.84" fill="currentColor"/>
<path d="M7.33325 9.99984V11.3332H8.66659V9.99984H7.33325ZM7.33325 4.6665V8.6665H8.66659V4.6665H7.33325Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_4561_73699">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
        </svg>
    );
}
