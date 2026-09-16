import type { IconProps } from "../types";

export function LineVideoMediaIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.00001 6.00205C5.99965 5.88374 6.03078 5.76747 6.09021 5.66516C6.14964 5.56286 6.23523 5.47822 6.33818 5.41992C6.44113 5.36163 6.55774 5.33178 6.67604 5.33344C6.79434 5.3351 6.91007 5.36822 7.01134 5.42939L10.3427 7.42739C10.4418 7.4865 10.524 7.57035 10.581 7.67074C10.638 7.77112 10.668 7.8846 10.668 8.00005C10.668 8.11551 10.638 8.22898 10.581 8.32937C10.524 8.42976 10.4418 8.51361 10.3427 8.57272L7.01134 10.5707C6.91002 10.6319 6.79423 10.665 6.67587 10.6667C6.55752 10.6683 6.44086 10.6384 6.33789 10.58C6.23491 10.5216 6.14934 10.4369 6.08996 10.3345C6.03058 10.2321 5.99953 10.1158 6.00001 9.99739V6.00205Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
