import type { IconProps } from "../types";

export function FillPencileEditIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M2 11.6399V13.6666C2 13.8533 2.14667 13.9999 2.33333 13.9999H4.36C4.44667 13.9999 4.53333 13.9666 4.59333 13.8999L11.8733 6.62659L9.37333 4.12659L2.1 11.3999C2.03333 11.4666 2 11.5466 2 11.6399ZM13.8067 4.69325C14.0667 4.43325 14.0667 4.01325 13.8067 3.75325L12.2467 2.19325C12.185 2.13145 12.1117 2.08242 12.0311 2.04897C11.9504 2.01551 11.864 1.99829 11.7767 1.99829C11.6894 1.99829 11.6029 2.01551 11.5223 2.04897C11.4416 2.08242 11.3683 2.13145 11.3067 2.19325L10.0867 3.41325L12.5867 5.91325L13.8067 4.69325Z" fill="currentColor"/>
        </svg>
    );
}
