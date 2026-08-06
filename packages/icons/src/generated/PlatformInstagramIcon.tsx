import type { PlatformIconProps } from "../types";

export function PlatformInstagramIcon({ size = 24, color = "currentColor", title, borderStyle = "solid", borderColor = "#111111", borderWidth = 0.6, ...props }: PlatformIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 12 12"
            fill="none"
            overflow="visible"
            color={color}
            aria-hidden={title ? undefined : true}
            role={title ? "img" : "presentation"}
            focusable="false"
            {...props}
        >
            {title ? <title>{title}</title> : null}
            <circle cx="6" cy="6" r="5.7" fill="white" stroke={borderColor} strokeWidth={borderWidth} strokeDasharray={borderStyle === "dashed" ? "1.2 1.2" : undefined}/>
<circle cx="5.9998" cy="5.99999" r="4.7" fill="url(#paint0_radial_9730_438812)"/>
<circle cx="5.9998" cy="5.99999" r="4.7" fill="url(#paint1_radial_9730_438812)"/>
<circle cx="5.9998" cy="5.99999" r="4.7" fill="url(#paint2_radial_9730_438812)"/>
<path d="M8.05605 4.38438C8.05605 4.62772 7.85877 4.82501 7.61543 4.82501C7.37209 4.82501 7.1748 4.62772 7.1748 4.38438C7.1748 4.14103 7.37209 3.94376 7.61543 3.94376C7.85877 3.94376 8.05605 4.14103 8.05605 4.38438Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M6 7.46875C6.81116 7.46875 7.46875 6.81116 7.46875 6C7.46875 5.18884 6.81116 4.53125 6 4.53125C5.18884 4.53125 4.53125 5.18884 4.53125 6C4.53125 6.81116 5.18884 7.46875 6 7.46875ZM6 6.88125C6.48671 6.88125 6.88125 6.48671 6.88125 6C6.88125 5.51329 6.48671 5.11875 6 5.11875C5.51329 5.11875 5.11875 5.51329 5.11875 6C5.11875 6.48671 5.51329 6.88125 6 6.88125Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M3.0625 5.8825C3.0625 4.89541 3.0625 4.40185 3.2546 4.02484C3.42358 3.6932 3.6932 3.42358 4.02484 3.2546C4.40185 3.0625 4.89541 3.0625 5.8825 3.0625H6.1175C7.10459 3.0625 7.59815 3.0625 7.97515 3.2546C8.30679 3.42358 8.57642 3.6932 8.74539 4.02484C8.9375 4.40185 8.9375 4.89541 8.9375 5.8825V6.1175C8.9375 7.10459 8.9375 7.59815 8.74539 7.97515C8.57642 8.30679 8.30679 8.57642 7.97515 8.74539C7.59815 8.9375 7.10459 8.9375 6.1175 8.9375H5.8825C4.89541 8.9375 4.40185 8.9375 4.02484 8.74539C3.6932 8.57642 3.42358 8.30679 3.2546 7.97515C3.0625 7.59815 3.0625 7.10459 3.0625 6.1175V5.8825ZM5.8825 3.65H6.1175C6.62075 3.65 6.96282 3.65046 7.22726 3.67206C7.48485 3.6931 7.61656 3.73125 7.70845 3.77807C7.92953 3.89072 8.10927 4.07047 8.22192 4.29155C8.26875 4.38343 8.30691 4.51515 8.32794 4.77274C8.34953 5.03718 8.35 5.37925 8.35 5.8825V6.1175C8.35 6.62075 8.34953 6.96282 8.32794 7.22726C8.30691 7.48485 8.26875 7.61656 8.22192 7.70845C8.10927 7.92953 7.92953 8.10927 7.70845 8.22192C7.61656 8.26875 7.48485 8.30691 7.22726 8.32794C6.96282 8.34953 6.62075 8.35 6.1175 8.35H5.8825C5.37925 8.35 5.03718 8.34953 4.77274 8.32794C4.51515 8.30691 4.38343 8.26875 4.29155 8.22192C4.07047 8.10927 3.89072 7.92953 3.77807 7.70845C3.73125 7.61656 3.6931 7.48485 3.67206 7.22726C3.65046 6.96282 3.65 6.62075 3.65 6.1175V5.8825C3.65 5.37925 3.65046 5.03718 3.67206 4.77274C3.6931 4.51515 3.73125 4.38343 3.77807 4.29155C3.89072 4.07047 4.07047 3.89072 4.29155 3.77807C4.38343 3.73125 4.51515 3.6931 4.77274 3.67206C5.03718 3.65046 5.37925 3.65 5.8825 3.65Z" fill="white"/>
<defs>
<radialGradient id="paint0_radial_9730_438812" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.65695 8.34999) rotate(-55.3758) scale(8.56729)">
<stop stopColor="#B13589"/>
<stop offset="0.79309" stopColor="#C62F94"/>
<stop offset="1" stopColor="#8A3AC8"/>
</radialGradient>
<radialGradient id="paint1_radial_9730_438812" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.32123 11.0357) rotate(-65.1363) scale(7.5852)">
<stop stopColor="#E0E8B7"/>
<stop offset="0.444662" stopColor="#FB8A2E"/>
<stop offset="0.71474" stopColor="#E2425C"/>
<stop offset="1" stopColor="#E2425C" stopOpacity="0"/>
</radialGradient>
<radialGradient id="paint2_radial_9730_438812" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.796233 1.6357) rotate(-8.1301) scale(13.0562 2.79259)">
<stop offset="0.156701" stopColor="#406ADC"/>
<stop offset="0.467799" stopColor="#6A45BE"/>
<stop offset="1" stopColor="#6A45BE" stopOpacity="0"/>
</radialGradient>
</defs>
        </svg>
    );
}
