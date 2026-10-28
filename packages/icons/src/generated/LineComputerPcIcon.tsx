import type { IconProps } from "../types";

export function LineComputerPcIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M3.33333 2.66675H12.6667C13.403 2.66675 14 3.2637 14 4.00008V9.33342C14 10.0698 13.403 10.6667 12.6667 10.6667H3.33333C2.59695 10.6667 2 10.0698 2 9.33342V4.00008C2 3.2637 2.59695 2.66675 3.33333 2.66675Z" strokeWidth="1.2" strokeLinecap="round" stroke="currentColor"/>
<path d="M5.33325 13.3334H7.99992M7.99992 13.3334H10.6666M7.99992 13.3334V10.6667" strokeWidth="1.2" strokeLinecap="round" stroke="currentColor"/>
        </svg>
    );
}
