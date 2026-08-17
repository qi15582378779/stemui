"use client";

import { useId, useState, type SVGProps } from "react";

export interface BlinkingEyeIconProps
    extends Omit<SVGProps<SVGSVGElement>, "width" | "height" | "color"> {
    size?: number;
    duration?: number;
    eyeColor?: string;
    pupilColor?: string;
    loop?: boolean;
    trigger?: "hover" | "click";
    active?: boolean;
}

export function BlinkingEyeIcon({
    size = 24,
    duration = 3.2,
    eyeColor = "#fff",
    pupilColor = "#111",
    loop = false,
    trigger = "hover",
    active,
    className,
    style,
    onClick,
    onKeyDown,
    ...props
}: BlinkingEyeIconProps) {
    const [internalActive, setInternalActive] = useState(false);
    const isControlled = active !== undefined;
    const isActive = active ?? internalActive;
    const isInteractive = !loop && (isControlled || trigger === "click");
    const suffix = useId().replace(/[^a-zA-Z0-9_-]/g, "");
    const root = `blinking-eye-${suffix}`;
    const eyeBlink = `blinking-eye-blink-${suffix}`;
    const pupilLook = `blinking-eye-look-${suffix}`;
    const safeDuration = Math.max(0.01, duration);
    const activationSelector = loop
        ? `.${root}.blinking-eye-loop`
        : isControlled || trigger === "click"
            ? `.${root}.blinking-eye-active`
            : `.${root}:hover`;
    const animationMode = loop ? "infinite" : "1 forwards";

    const css = `
        .${root} { overflow: visible; }
        .${root} .blinking-eye-shape,
        .${root} .blinking-eye-pupil {
            transform-box: fill-box;
            transform-origin: center;
        }
        ${activationSelector} .blinking-eye-shape {
            animation: ${eyeBlink} ${safeDuration}s cubic-bezier(.4, 0, .2, 1) ${animationMode};
        }
        ${activationSelector} .blinking-eye-pupil {
            animation: ${pupilLook} ${safeDuration}s cubic-bezier(.4, 0, .2, 1) ${animationMode};
        }
        @keyframes ${eyeBlink} {
            0%, 4%, 13%, 100% { transform: scaleY(1); }
            7% { transform: scaleY(.08); }
            10% { transform: scaleY(1.04); }
        }
        @keyframes ${pupilLook} {
            0%, 4% { transform: translateX(0) scaleY(1); }
            7% { transform: translateX(0) scaleY(.08); }
            10% { transform: translateX(0) scaleY(1.04); }
            13% { transform: translateX(0) scaleY(1); }
            27%, 40% { transform: translateX(-1.35px) scaleY(1); }
            57%, 70% { transform: translateX(1.35px) scaleY(1); }
            82%, 100% { transform: translateX(0) scaleY(1); }
        }
        @media (prefers-reduced-motion: reduce) {
            .${root} .blinking-eye-shape,
            .${root} .blinking-eye-pupil {
                animation: none !important;
                transform: none !important;
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
                className={`${root}${loop ? " blinking-eye-loop" : ""}${isActive ? " blinking-eye-active" : ""}${className ? ` ${className}` : ""}`}
                role={isInteractive ? "button" : props.role ?? (props["aria-label"] ? "img" : undefined)}
                tabIndex={isInteractive ? 0 : props.tabIndex}
                aria-pressed={isInteractive ? isActive : undefined}
                onClick={(event) => {
                    if (!isControlled && trigger === "click" && !loop) {
                        setInternalActive((current) => !current);
                    }
                    onClick?.(event);
                }}
                onKeyDown={(event) => {
                    if (
                        isInteractive &&
                        (event.key === "Enter" || event.key === " ")
                    ) {
                        event.preventDefault();
                        if (!isControlled) {
                            setInternalActive((current) => !current);
                        }
                    }
                    onKeyDown?.(event);
                }}
                style={{
                    cursor: isInteractive ? "pointer" : undefined,
                    display: "block",
                    flexShrink: 0,
                    ...style
                }}
            >
                <g className="blinking-eye-shape">
                    <path d="M8.00001 4.01636C4.96579 4.01636 2.39173 5.68068 1.43359 8.00015C2.39173 10.3196 4.96579 11.9839 8.00001 11.9839C11.0342 11.9839 13.6083 10.3196 14.5664 8.00015C13.6083 5.68068 11.0342 4.01636 8.00001 4.01636Z" fill={eyeColor} />
                    <path d="M8.00005 10.9879C6.34989 10.9879 5.01221 9.65022 5.01221 8.00005C5.01221 6.34989 6.34989 5.01221 8.00005 5.01221C9.65022 5.01221 10.9879 6.34989 10.9879 8.00005C10.9879 9.65022 9.65022 10.9879 8.00005 10.9879Z" fill={eyeColor} />
                </g>
                <path
                    className="blinking-eye-pupil"
                    d="M6.00806 8.0002C6.00806 8.52848 6.21792 9.03513 6.59147 9.40868C6.96502 9.78224 7.47167 9.9921 7.99995 9.9921C8.52824 9.9921 9.03489 9.78224 9.40844 9.40868C9.78199 9.03513 9.99185 8.52848 9.99185 8.0002C9.99185 7.47191 9.78199 6.96527 9.40844 6.59171C9.03489 6.21816 8.52824 6.0083 7.99995 6.0083C7.47167 6.0083 6.96502 6.21816 6.59147 6.59171C6.21792 6.96527 6.00806 7.47191 6.00806 8.0002Z"
                    fill={pupilColor}
                />
            </svg>
        </>
    );
}

export default BlinkingEyeIcon;
