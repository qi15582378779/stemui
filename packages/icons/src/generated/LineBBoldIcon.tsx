import type { IconProps } from "../types";

export function LineBBoldIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M5.25718 7.2999H8.40718C9.37367 7.2999 10.1572 6.5164 10.1572 5.5499C10.1572 4.58341 9.37367 3.7999 8.40718 3.7999H5.25718V7.2999ZM12.2572 10.4499C12.2572 12.1896 10.8469 13.5999 9.10718 13.5999H3.85718V2.3999H8.40718C10.1469 2.3999 11.5572 3.81021 11.5572 5.5499C11.5572 6.39292 11.226 7.15857 10.6867 7.72396C11.6257 8.26919 12.2572 9.2858 12.2572 10.4499ZM5.25718 8.6999V12.1999H9.10718C10.0737 12.1999 10.8572 11.4164 10.8572 10.4499C10.8572 9.48341 10.0737 8.6999 9.10718 8.6999H5.25718Z" fill="currentColor"/>
        </svg>
    );
}
