import type { IconProps } from "../types";

export function LineMovieMediaIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M12.3401 4.79773L3.20426 7.4535L2.72622 6.17873C2.56687 5.59446 2.88557 5.01019 3.41672 4.85084L10.5873 2.72622C11.1716 2.56687 11.7559 2.88557 11.9152 3.41672L12.3401 4.79773Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.90405 4.42578L6.55064 6.49729" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.19702 3.41675L9.8436 5.54137" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.20435 7.45337H12.7651V11.7026C12.7651 11.9844 12.6532 12.2546 12.454 12.4538C12.2548 12.653 11.9846 12.7649 11.7028 12.7649H4.26666C3.98491 12.7649 3.71471 12.653 3.51549 12.4538C3.31627 12.2546 3.20435 11.9844 3.20435 11.7026V7.45337Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
