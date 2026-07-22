import type { IconProps } from "../types";

export function LineHourglassFastIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M11.75 2.66675C11.875 2.66675 12 2.79175 12 2.91675V3.41675C12 3.56258 11.875 3.66675 11.75 3.66675H11.6667C11.6667 5.35425 11 7.12508 9.625 8.00008C10.9792 8.89595 11.6667 10.6667 11.6667 12.3334H11.75C11.875 12.3334 12 12.4584 12 12.5834V13.0834C12 13.2293 11.875 13.3334 11.75 13.3334H4.25C4.10417 13.3334 4 13.2293 4 13.0834V12.5834C4 12.4584 4.10417 12.3334 4.25 12.3334H4.33333C4.33333 10.6667 4.97917 8.89595 6.35417 8.00008C5 7.12508 4.33333 5.35425 4.33333 3.66675H4.25C4.10417 3.66675 4 3.56258 4 3.41675V2.91675C4 2.79175 4.10417 2.66675 4.25 2.66675H11.75ZM10.6667 12.3334C10.6667 10.2293 9.45833 8.50008 8 8.50008C6.52083 8.50008 5.33333 10.2293 5.33333 12.3334H10.6667Z" fill="currentColor"/>
        </svg>
    );
}
