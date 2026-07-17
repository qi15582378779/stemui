import type { IconProps } from "../types";

export function LineUUnderlineIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M5.59995 2.63306V8.03306C5.59995 9.35852 6.67447 10.4331 7.99995 10.4331C9.32541 10.4331 10.4 9.35852 10.4 8.03306V2.63306H11.6V8.03306C11.6 10.0213 9.98817 11.6331 7.99995 11.6331C6.01173 11.6331 4.39995 10.0213 4.39995 8.03306V2.63306H5.59995ZM3.19995 12.8331H12.8V14.0331H3.19995V12.8331Z" fill="#111111"/>
        </svg>
    );
}
