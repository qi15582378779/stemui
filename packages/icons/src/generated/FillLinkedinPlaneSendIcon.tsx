import type { IconProps } from "../types";

export function FillLinkedinPlaneSendIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M14.5999 1.3999L1.3999 5.92562L5.92562 8.18847L11.5828 4.41705L7.43419 10.0742L10.0742 14.5999L14.5999 1.3999Z" fill="currentColor"/>
        </svg>
    );
}
