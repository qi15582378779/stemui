import type { IconProps } from "../types";

export function PlatformDevtoIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 12 12"
            fill="none"
            color={color}
            aria-hidden={title ? undefined : true}
            role={title ? "img" : "presentation"}
            focusable="false"
            {...props}
        >
            {title ? <title>{title}</title> : null}
            <circle cx="6" cy="6" r="5.7" fill="white" stroke="#111111" strokeWidth="0.6"/>
<circle cx="5.9998" cy="5.99999" r="4.7" fill="black"/>
<path d="M3.39794 4.87271H3.01897V7.14283H3.39815C3.61882 7.13099 3.77534 6.95445 3.77777 6.76451V5.25103C3.76265 5.02582 3.60837 4.87571 3.39794 4.87271ZM4.39164 6.76864C4.39164 7.17738 4.13936 7.79668 3.34079 7.79538H2.33252V4.19995H3.36208C4.13219 4.19995 4.39121 4.81838 4.39143 5.22734L4.39164 6.76864ZM6.57941 4.84207H5.42164V5.67693H6.12938V6.31948H5.42164V7.15413H6.57962V7.79668H5.22846C4.98595 7.80298 4.7843 7.61132 4.77822 7.36882V4.65019C4.77235 4.40791 4.96422 4.20669 5.20651 4.2006H6.57962L6.57941 4.84207ZM8.83149 7.34731C8.54466 8.0155 8.03074 7.88251 7.80062 7.34731L6.96337 4.20082H7.67111L8.31671 6.67194L8.95926 4.20082H9.66722L8.83149 7.34731Z" fill="white"/>
        </svg>
    );
}
