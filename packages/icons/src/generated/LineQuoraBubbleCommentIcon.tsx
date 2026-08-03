import type { IconProps } from "../types";

export function LineQuoraBubbleCommentIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M8.0474 12.5735C10.7827 12.5735 13.0001 10.5055 13.0001 7.9535C13.0001 5.40216 10.7827 3.3335 8.0474 3.3335C5.31206 3.3335 3.09473 5.40216 3.09473 7.9535C3.09473 8.81416 3.3474 9.62016 3.78606 10.3095C3.9994 10.6435 2.75206 12.3482 3.04473 12.6208C3.3514 12.9068 5.20206 11.7575 5.58006 11.9608C6.30673 12.3508 7.1494 12.5735 8.0474 12.5735Z" stroke="currentColor"/>
        </svg>
    );
}
