import type { IconProps } from "../types";

export function LineFileCompareIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <g clipPath="url(#clip0_10399_439704)">
<mask id="mask0_10399_439704" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="18">
<path d="M0 0H16V17.1489H0V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_10399_439704)">
<path d="M4.23216 12.4164H3.31603C3.07306 12.4164 2.84004 12.3199 2.66823 12.1481C2.49642 11.9763 2.3999 11.7432 2.3999 11.5003V2.33898C2.3999 2.09601 2.49642 1.86299 2.66823 1.69118C2.84004 1.51937 3.07306 1.42285 3.31603 1.42285H10.6451C10.888 1.42285 11.1211 1.51937 11.2929 1.69118C11.4647 1.86299 11.5612 2.09601 11.5612 2.33898V3.25511" stroke="currentColor" strokeWidth="1.27832" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M12.6704 4H5.79943C5.29347 4 4.8833 4.41016 4.8833 4.91613V14.0774C4.8833 14.5834 5.29347 14.9935 5.79943 14.9935H12.6704C13.1764 14.9935 13.5865 14.5834 13.5865 14.0774V4.91613C13.5865 4.41016 13.1764 4 12.6704 4Z" stroke="currentColor" strokeWidth="1.27832" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M6.71582 6.84717H11.7545M6.71582 9.42352H10.1425M6.71582 12.3439H9.1504" stroke="currentColor" strokeWidth="1.27832" strokeMiterlimit="10" strokeLinecap="round"/>
</g>
</g>
<defs>
<clipPath id="clip0_10399_439704">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
        </svg>
    );
}
