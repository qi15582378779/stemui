import type { IconProps } from "../types";

export function LineTrashDeleteIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M12.8 5V12.8C12.8 13.4628 12.2628 14 11.6 14H4.4C3.73726 14 3.2 13.4628 3.2 12.8V5H2V3.8H14V5H12.8ZM4.4 5V12.8H11.6V5H4.4ZM7.4 6.2H8.6V7.4H7.4V6.2ZM7.4 8H8.6V9.2H7.4V8ZM7.4 9.8H8.6V11H7.4V9.8ZM5 2H11V3.2H5V2Z" fill="#111111"/>
        </svg>
    );
}
