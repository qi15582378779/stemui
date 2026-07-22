import type { IconProps } from "../types";

export function FillTiktolkArrowBookmarkIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M2 2.50049C2 2.10267 2.15803 1.72113 2.43934 1.43983C2.72065 1.15852 3.10218 1.00049 3.5 1.00049H12.5C12.8978 1.00049 13.2793 1.15852 13.5606 1.43983C13.842 1.72113 14 2.10267 14 2.50049V13.848C13.9999 13.9837 13.9629 14.1169 13.8931 14.2333C13.8233 14.3496 13.7232 14.4448 13.6035 14.5088C13.4838 14.5728 13.349 14.6031 13.2134 14.5965C13.0779 14.5898 12.9466 14.5465 12.8337 14.4712L8.2085 11.3812C8.14677 11.34 8.07425 11.3179 8 11.3179C7.92575 11.3179 7.85323 11.34 7.7915 11.3812L3.16625 14.4712C3.05335 14.5465 2.92213 14.5898 2.78658 14.5965C2.65101 14.6031 2.5162 14.5728 2.39651 14.5088C2.27681 14.4448 2.17671 14.3496 2.10688 14.2333C2.03706 14.1169 2.00011 13.9837 2 13.848V2.50049Z" fill="currentColor"/>
        </svg>
    );
}
