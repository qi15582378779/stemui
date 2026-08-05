import type { PlatformIconProps } from "../types";

export function PlatformCoingeckoIcon({ size = 24, color = "currentColor", title, borderStyle = "solid", borderColor = "#111111", borderWidth = 0.6, ...props }: PlatformIconProps) {
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
<circle cx="5.9998" cy="5.99999" r="4.7" fill="#A6FA56"/>
<path d="M2.62451 7.80811C3.54206 5.91317 3.08329 3.43977 4.5793 3.06078C6.05536 2.68179 7.03275 3.34003 7.81067 3.55945C8.5886 3.77886 9.22689 3.89854 9.36652 4.63657C9.56599 5.6738 6.43435 7.16981 7.15243 9.14454C4.81866 9.3839 4.22025 8.7855 3.72158 8.54614C3.32265 8.34667 2.82398 7.96768 2.62451 7.80811Z" fill="#111111" stroke="#111111" strokeWidth="0.199468" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.35186 3.39983C7.35186 2.9411 6.51417 2.56214 5.99561 2.98099L7.35186 3.39983Z" fill="#111111" stroke="#111111" strokeWidth="0.199468" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.15479 5.73381C6.81303 6.25243 7.55106 6.07291 9.02712 5.45456" stroke="white" strokeWidth="0.199468" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.55628 4.71642C5.89535 4.71642 6.17458 4.43719 6.17458 4.09812C6.17458 3.75906 5.89535 3.47983 5.55628 3.47983C5.21722 3.47983 4.93799 3.75906 4.93799 4.09812C4.93799 4.43719 5.21722 4.71642 5.55628 4.71642Z" fill="#111111" stroke="white" strokeWidth="0.199468" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.36903 5.07544C8.44881 5.07544 8.52859 4.99566 8.52859 4.91588C8.52859 4.8361 8.44881 4.75632 8.36903 4.75632C8.28925 4.75632 8.20947 4.8361 8.20947 4.91588C8.20947 4.99566 8.28925 5.07544 8.36903 5.07544Z" fill="white"/>
        </svg>
    );
}
