import type { IconProps } from "../types";

export function LineExclamationMarkInformationIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <g clipPath="url(#clip0_823_27439)">
<path d="M14.0667 8.00024C14.0667 4.64982 11.3506 1.93304 8.00024 1.93286C4.64972 1.93286 1.93286 4.64972 1.93286 8.00024C1.93304 11.3506 4.64982 14.0667 8.00024 14.0667C11.3505 14.0665 14.0665 11.3505 14.0667 8.00024ZM15.2668 8.00024C15.2667 12.0133 12.0133 15.2667 8.00024 15.2668C3.98708 15.2668 0.733818 12.0134 0.733643 8.00024C0.733643 3.98697 3.98697 0.733643 8.00024 0.733643C12.0134 0.733818 15.2668 3.98708 15.2668 8.00024Z" fill="currentColor"/>
<path d="M7.40039 8.33301V5C7.40039 4.66863 7.66863 4.40039 8 4.40039C8.33137 4.40039 8.59961 4.66863 8.59961 5V8.33301C8.59961 8.66438 8.33137 8.93359 8 8.93359C7.66863 8.93359 7.40039 8.66438 7.40039 8.33301Z" fill="currentColor"/>
<path d="M8.00879 10.4004C8.33995 10.4006 8.6084 10.6688 8.6084 11C8.6084 11.3312 8.33995 11.5994 8.00879 11.5996H8C7.66863 11.5996 7.40039 11.3314 7.40039 11C7.40039 10.6686 7.66863 10.4004 8 10.4004H8.00879Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_823_27439">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
        </svg>
    );
}
