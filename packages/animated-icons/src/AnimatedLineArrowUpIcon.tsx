"use client";

import { useId, type SVGProps } from "react";

export interface AnimatedLineArrowUpIconProps
    extends Omit<SVGProps<SVGSVGElement>, "width" | "height" | "color"> {
    size?: number;
    color?: string;
    duration?: number;
}

export function AnimatedLineArrowUpIcon({
    size = 14,
    color = "#3D3D3A",
    duration = 0.9,
    className,
    style,
    ...props
}: AnimatedLineArrowUpIconProps) {
    const suffix = useId().replace(/[^a-zA-Z0-9_-]/g, "");
    const root = `smart-arrow-${suffix}`;
    const shoot = `smart-arrow-shoot-${suffix}`;
    const sparkle = `smart-arrow-sparkle-${suffix}`;
    const safeDuration = Math.max(0.01, duration);

    const css = `
        .${root} { overflow: visible; }
        .${root} .smart-arrow-arrow,
        .${root} .smart-arrow-star {
            transform-box: fill-box;
            transform-origin: center;
        }
        .${root}:hover .smart-arrow-arrow {
            animation: ${shoot} ${safeDuration}s cubic-bezier(.16,1,.3,1) forwards;
        }
        .${root}:hover .smart-arrow-star {
            animation: ${sparkle} ${safeDuration}s cubic-bezier(.25,.1,.25,1) forwards;
        }
        @keyframes ${shoot} {
            0% { transform: translateY(85%) scale(.5); opacity: 0; }
            15% { opacity: 1; }
            38% { transform: translateY(-15%) scale(1.1); opacity: 1; }
            55%, 100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        @keyframes ${sparkle} {
            0%, 27% { transform: scale(0) rotate(-15deg); opacity: 0; }
            50% { opacity: 1; }
            55% { transform: scale(1.3) rotate(5deg); opacity: 1; }
            72% { transform: scale(.85) rotate(0); }
            83% { transform: scale(1.15) rotate(0); }
            100% { transform: scale(1) rotate(0); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
            .${root} .smart-arrow-arrow,
            .${root} .smart-arrow-star {
                animation: none !important;
                transform: none !important;
                opacity: 1 !important;
            }
        }
    `;

    return (
        <>
            <style>{css}</style>
            <svg
                {...props}
                width={size}
                height={size}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${root}${className ? ` ${className}` : ""}`}
                style={{ cursor: "pointer", overflow: "visible", ...style }}
            >
                <g className="smart-arrow-star">
                    <path
                        d="M4.70667 5.95998L3.33333 5.33331L4.70667 4.70665L5.33333 3.33331L5.96 4.70665L7.33333 5.33331L5.96 5.95998L5.33333 7.33331L4.70667 5.95998ZM5.33333 14L5.96 12.6266L7.33333 12L5.96 11.3733L5.33333 9.99998L4.70667 11.3733L3.33333 12L4.70667 12.6266L5.33333 14ZM2.91333 8.24665L2 8.66665L2.91333 9.08665L3.33333 9.99998L3.75333 9.08665L4.66667 8.66665L3.75333 8.24665L3.33333 7.33331L2.91333 8.24665Z"
                        fill={color}
                    />
                </g>
                <g className="smart-arrow-arrow">
                    <path
                        d="M12.6667 13.6066C12.6667 14.1266 12.1067 14.44 11.66 14.18C9.47333 12.9066 8 10.5266 8 7.99998C8 6.17998 8.72 4.48665 9.83333 3.16665L8.56667 1.89998C8.36 1.69331 8.50667 1.33331 8.80667 1.33331H12.3333C12.52 1.33331 12.6667 1.47998 12.6667 1.66665V5.19331C12.6667 5.49331 12.3067 5.63998 12.1 5.42665L10.7867 4.11331C9.89333 5.21331 9.33333 6.58665 9.33333 7.99998C9.33333 10.0866 10.5733 12.0066 12.34 13.0333C12.54 13.1533 12.6667 13.3733 12.6667 13.6066Z"
                        fill={color}
                    />
                </g>
            </svg>
        </>
    );
}

export default AnimatedLineArrowUpIcon;
