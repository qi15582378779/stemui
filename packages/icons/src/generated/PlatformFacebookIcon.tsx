import type { PlatformIconProps } from "../types";

export function PlatformFacebookIcon({ size = 24, color = "currentColor", title, borderStyle = "solid", borderColor = "#111111", borderWidth = 0.6, ...props }: PlatformIconProps) {
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
<g clipPath="url(#clip0_9730_438833)">
<path d="M10.6686 6.00133C10.6682 3.3899 8.56427 1.27295 5.96855 1.27295C3.37284 1.27295 1.26855 3.39022 1.26855 6.00196C1.26855 8.35291 2.97354 10.303 5.20695 10.6692L5.23391 10.6729V7.3687H4.04041V6.00133H5.23391V4.96004C5.22795 4.90738 5.22482 4.8462 5.22482 4.78439C5.22482 3.86262 5.96761 3.11523 6.88373 3.11523C6.92792 3.11523 6.9718 3.11713 7.01537 3.12028L7.00973 3.11996C7.38551 3.12532 7.74908 3.15875 8.10386 3.21835L8.06187 3.21236V4.37601H7.46888C7.44193 4.37222 7.4109 4.37002 7.37956 4.37002C7.0044 4.37002 6.70007 4.67591 6.70007 5.0537C6.70007 5.07514 6.70101 5.09627 6.70289 5.1174L6.70258 5.11456V6.00133H8.00608L7.79766 7.3687H6.70258V10.6729C8.96325 10.3027 10.6682 8.35228 10.6686 6.00133Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_9730_438833">
<rect width="9.4" height="9.4" fill="white" transform="translate(1.29736 1.27264)"/>
</clipPath>
</defs>
        </svg>
    );
}
