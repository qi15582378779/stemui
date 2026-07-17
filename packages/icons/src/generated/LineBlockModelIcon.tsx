import type { IconProps } from "../types";

export function LineBlockModelIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path fillRule="evenodd" clipRule="evenodd" d="M8.00008 1.33496L13.9469 4.42733V11.5726L8.00008 14.665L2.05322 11.5726V4.42733L8.00008 1.33496ZM3.32755 10.799V5.82562L7.36292 7.84331V12.8974L3.32755 10.799ZM8.63724 12.8974L12.6726 10.799V5.8256L8.63724 7.84329V12.8974ZM8.00008 2.77128L11.8881 4.79308L8.00006 6.73714L4.11198 4.79309L8.00008 2.77128Z" fill="#111111"/>
        </svg>
    );
}
