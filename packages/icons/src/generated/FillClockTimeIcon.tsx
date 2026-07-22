import type { IconProps } from "../types";

export function FillClockTimeIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <g clipPath="url(#clip0_1169_27125)">
<path d="M8 0C3.58571 0 0 3.58571 0 8C0 12.4143 3.58571 16 8 16C12.4143 16 16 12.4143 16 8C16 3.58571 12.4143 0 8 0ZM11.4143 10.7857L7.58571 8.57143H7.42857V3.42857H8.57143V7.82857L11.9857 9.8L11.4143 10.7857Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_1169_27125">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
        </svg>
    );
}
