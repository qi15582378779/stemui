import type { IconProps } from "../types";

export function LinkedinBubbleCommentIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M13.128 6.9231C13.1278 5.23885 11.7624 3.87323 10.0781 3.87323H5.92151C4.2374 3.87344 2.87186 5.23898 2.87165 6.9231C2.87165 8.60739 4.23727 9.97359 5.92151 9.9738H9.10659V11.654L11.8768 9.38787L11.8894 9.37785L11.9019 9.36867L11.9119 9.36116C12.6527 8.80276 13.128 7.91852 13.128 6.9231ZM14.1538 6.9231C14.1538 8.25479 13.5146 9.43684 12.5262 10.1808L8.08079 13.8183V10.9988H5.92151C3.67082 10.9986 1.84668 9.17383 1.84668 6.9231C1.84689 4.67254 3.67095 2.84848 5.92151 2.84827H10.0781C12.3289 2.84827 14.1536 4.67241 14.1538 6.9231Z" fill="#111111"/>
        </svg>
    );
}
