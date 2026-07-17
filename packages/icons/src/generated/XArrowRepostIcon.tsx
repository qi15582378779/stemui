import type { IconProps } from "../types";

export function XArrowRepostIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M3.85139 3.50867L6.30289 5.79864L5.54841 6.60622L4.40453 5.53867V10.2127C4.40453 10.8211 4.90014 11.3189 5.5108 11.3189H8.55304V12.4252H5.5108C4.28892 12.4252 3.29826 11.4351 3.29826 10.2127V5.53867L2.15438 6.60622L1.3999 5.79864L3.85139 3.50867ZM10.489 4.68131H7.44677V3.57504H10.489C11.7109 3.57504 12.7015 4.56515 12.7015 5.78758V10.4616L13.8454 9.39402L14.5999 10.2016L12.1484 12.4916L9.69692 10.2016L10.4514 9.39402L11.5953 10.4616V5.78758C11.5953 5.17913 11.0997 4.68131 10.489 4.68131Z" fill="#111111"/>
        </svg>
    );
}
