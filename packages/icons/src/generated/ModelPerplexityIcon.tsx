import type { ModelIconProps } from "../types";

export function ModelPerplexityIcon({ size = 24, color = "currentColor", title, borderWidth = 1.2, ...props }: ModelIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 44 44"
            fill="none"
            overflow="visible"
            color={color}
            aria-hidden={title ? undefined : true}
            role={title ? "img" : "presentation"}
            focusable="false"
            {...props}
        >
            {title ? <title>{title}</title> : null}
            <path d="M22 0.599609C33.8189 0.599609 43.4004 10.1811 43.4004 22C43.4004 33.8189 33.8189 43.4004 22 43.4004C10.1811 43.4004 0.599609 33.8189 0.599609 22C0.599609 10.1811 10.1811 0.599609 22 0.599609Z" fill="white" stroke="#111111" strokeWidth={borderWidth}/>
<path fillRule="evenodd" clipRule="evenodd" d="M12.3514 6.6001L21.1218 14.6807V14.6789V6.61874H22.8291V14.7169L31.6387 6.6001V15.8132H35.2557V29.1022H31.6499V37.306L22.8291 29.5563V37.395H21.1218V29.6841L12.3614 37.4001V29.1022H8.7443V15.8132H12.3514V6.6001ZM19.8347 17.4996H10.4515V27.4158H12.3592V24.2879L19.8347 17.4996ZM14.0685 25.0361V33.637L21.1218 27.4247V18.6297L14.0685 25.0361ZM22.8782 27.3425V18.6215L29.9335 25.0282V29.1022H29.9426V33.5492L22.8782 27.3425ZM31.6499 27.4158H33.5484V17.4996H24.2351L31.6499 24.2176V27.4158ZM29.9315 15.8132V10.4792L24.1421 15.8132H29.9315ZM19.848 15.8132H14.0587V10.4792L19.848 15.8132Z" fill="#111111"/>
        </svg>
    );
}
