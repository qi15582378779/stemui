import type { IconProps } from "../types";

export function LineSingleFeedIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <g clipPath="url(#clip0_8132_225169)">
<mask id="mask0_8132_225169" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
<path d="M15.5 0.5H0.5V15.5H15.5V0.5Z" fill="white"/>
</mask>
<g mask="url(#mask0_8132_225169)">
<path d="M8 13C8 13 8 3.69562 8 3.03687V13Z" fill="currentColor"/>
<path d="M8 13C8 13 8 3.69562 8 3.03687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
<path d="M5.5 11.1762C5.5 9.37248 5.5 6.62748 5.5 4.82373V11.1762Z" fill="currentColor"/>
<path d="M5.5 11.1762C5.5 9.37248 5.5 6.62748 5.5 4.82373" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
<path d="M10.5 11.1762C10.5 9.37248 10.5 6.62748 10.5 4.82373V11.1762Z" fill="currentColor"/>
<path d="M10.5 11.1762C10.5 9.37248 10.5 6.62748 10.5 4.82373" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
<path d="M3 9.29791C3 8.45041 3 7.54916 3 6.70166V9.29791Z" fill="currentColor"/>
<path d="M3 9.29791C3 8.45041 3 7.54916 3 6.70166" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
<path d="M13 9.29791C13 8.45041 13 7.54916 13 6.70166V9.29791Z" fill="currentColor"/>
<path d="M13 9.29791C13 8.45041 13 7.54916 13 6.70166" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
</g>
</g>
<defs>
<clipPath id="clip0_8132_225169">
<rect width="13.5" height="13.5" fill="white" transform="translate(1.25 1.25)"/>
</clipPath>
</defs>
        </svg>
    );
}
