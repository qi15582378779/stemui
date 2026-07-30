import type { IconProps } from "../types";

export function AvatarSocial21Icon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            color={color}
            aria-hidden={title ? undefined : true}
            role={title ? "img" : "presentation"}
            focusable="false"
            {...props}
        >
            {title ? <title>{title}</title> : null}
            <rect x="0.458333" y="0.458333" width="23.0833" height="23.0833" rx="11.5417" stroke="#111111" strokeOpacity="0.06" strokeWidth="0.916667"/>
<path d="M5.51318 11.7365C5.51318 8.15413 8.41731 5.25 11.9997 5.25C15.5822 5.25 18.4863 8.15413 18.4863 11.7365V18.75H5.51318V11.7365Z" fill="#426746"/>
<mask id="mask0_8260_194747" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="8" y="7" width="8" height="5">
<g clipPath="url(#clip0_8260_194747)">
<path d="M8.30566 9.5841C10.7693 7.40426 13.233 7.40426 15.6967 9.5841C13.233 11.7639 10.7693 11.7639 8.30566 9.5841Z" fill="black"/>
</g>
</mask>
<g mask="url(#mask0_8260_194747)">
<rect width="7.38794" height="3.28099" transform="translate(8.30566 7.94922)" fill="white"/>
<rect x="8.51709" y="8.28516" width="3.30961" height="3.28099" rx="1.6405" fill="#111111"/>
</g>
<defs>
<clipPath id="clip0_8260_194747">
<rect width="7.38794" height="3.28099" fill="white" transform="translate(8.30566 7.94922)"/>
</clipPath>
</defs>
        </svg>
    );
}
