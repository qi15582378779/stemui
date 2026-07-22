import type { IconProps } from "../types";

export function FillEyeAiPresenceIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <circle cx="8" cy="8" r="8" fill="currentColor"/>
<g clipPath="url(#clip0_4579_74724)">
<path d="M8.00001 5.01221C5.72434 5.01221 3.7938 6.26045 3.0752 8.00005C3.7938 9.73966 5.72434 10.9879 8.00001 10.9879C10.2757 10.9879 12.2062 9.73966 12.9248 8.00005C12.2062 6.26045 10.2757 5.01221 8.00001 5.01221Z" fill="white"/>
<path d="M8.00016 10.2408C6.76254 10.2408 5.75928 9.23754 5.75928 7.99992C5.75928 6.7623 6.76254 5.75903 8.00016 5.75903C9.23778 5.75903 10.241 6.7623 10.241 7.99992C10.241 9.23754 9.23778 10.2408 8.00016 10.2408Z" fill="white"/>
<path d="M6.5061 8.00003C6.5061 8.39624 6.6635 8.77623 6.94366 9.05639C7.22383 9.33656 7.60381 9.49395 8.00003 9.49395C8.39624 9.49395 8.77623 9.33656 9.05639 9.05639C9.33656 8.77623 9.49395 8.39624 9.49395 8.00003C9.49395 7.60381 9.33656 7.22383 9.05639 6.94366C8.77623 6.6635 8.39624 6.5061 8.00003 6.5061C7.60381 6.5061 7.22383 6.6635 6.94366 6.94366C6.6635 7.22383 6.5061 7.60381 6.5061 8.00003Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_4579_74724">
<rect width="9.84962" height="10.8" fill="white" transform="translate(3.0752 2.6001)"/>
</clipPath>
</defs>
        </svg>
    );
}
