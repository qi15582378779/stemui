import type { IconProps } from "../types";

export function FillQuestionMarkInformationIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <g clipPath="url(#clip0_8330_150470)">
<circle cx="8.00016" cy="8.00016" r="7.84" fill="currentColor"/>
<path d="M6.06006 5.99989C6.21679 5.55434 6.52616 5.17863 6.93336 4.93931C7.34056 4.7 7.81932 4.61252 8.28484 4.69237C8.75036 4.77222 9.1726 5.01424 9.47678 5.37558C9.78095 5.73691 9.94743 6.19424 9.94673 6.66656C9.94673 7.99989 7.94673 8.66656 7.94673 8.66656" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 11.3333H8.00667" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_8330_150470">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
        </svg>
    );
}
