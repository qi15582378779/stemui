import type { IconProps } from "../types";

export function LineArrowupReturnIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            fill="none"
            color={color}
            aria-hidden={title ? undefined : true}
            role={title ? "img" : "presentation"}
            focusable="false"
            {...props}
        >
            {title ? <title>{title}</title> : null}
            <path d="M11.062 12.0576L8.18896 15.25H26.5044V16.75H8.18896L11.062 19.9424L9.94678 20.9463L5.49561 16L9.94678 11.0537L11.062 12.0576Z" fill="currentColor"/>
        </svg>
    );
}
