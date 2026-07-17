import type { IconProps } from "../types";

export function LineArrowDownIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M11.3628 12.217L13.3826 10.1963L14.0489 10.8627L11.2725 13.6372C11.2027 13.7067 11.1139 13.754 11.0174 13.7731C10.9208 13.7923 10.8207 13.7824 10.7298 13.7447C10.6388 13.7071 10.561 13.6434 10.5062 13.5616C10.4513 13.4799 10.4219 13.3837 10.4216 13.2852V3.00007H11.3628V12.217Z" fill="#111111"/>
<path d="M1.95093 3V3.94118H9.00975V3H1.95093ZM9.00975 7.70588V8.64706H1.95093V7.70588H9.00975ZM1.95093 12.4118V13.3529H9.00975V12.4118H1.95093Z" fill="#111111"/>
        </svg>
    );
}
