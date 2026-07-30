import type { IconProps } from "../types";

export function FillMediumBubbleResponsesIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M12.3441 11.4575C12.8784 10.9536 13.3016 10.3437 13.5866 9.66681C13.8716 8.98994 14.0121 8.26102 13.9992 7.52672C13.9992 4.48259 11.391 2 8.05131 2C4.71164 2 2 4.48259 2 7.52672C2 10.5782 4.71164 13.0534 8.0587 13.0534C8.65286 13.0544 9.24441 12.9749 9.8172 12.817C9.98714 12.9648 10.1719 13.1052 10.3714 13.2308C11.1545 13.7406 11.9969 13.9992 12.8835 13.9992C13.046 13.9992 13.179 13.9179 13.2381 13.7849C13.2691 13.7244 13.2826 13.6564 13.2774 13.5886C13.2722 13.5209 13.2484 13.4558 13.2086 13.4007C12.7772 12.822 12.484 12.1522 12.3515 11.4427V11.4575H12.3441Z" fill="currentColor"/>
        </svg>
    );
}
