"use client";

import { useId, useState, type SVGProps } from "react";

export interface AnimatedDashboardIconProps
    extends Omit<SVGProps<SVGSVGElement>, "width" | "height" | "color"> {
    size?: number;
    color?: string;
    duration?: number;
    loop?: boolean;
    trigger?: "hover" | "click";
    active?: boolean;
}

export function AnimatedDashboardIcon({
    size = 18,
    color = "#3D3D3A",
    duration = 1.1,
    loop = false,
    trigger = "hover",
    active,
    className,
    style,
    onClick,
    ...props
}: AnimatedDashboardIconProps) {
    const [internalActive, setInternalActive] = useState(false);
    const suffix = useId().replace(/[^a-zA-Z0-9_-]/g, "");
    const root = `dashboard-icon-${suffix}`;
    const top = `dashboard-top-${suffix}`;
    const bottomLeft = `dashboard-bl-${suffix}`;
    const bottomRight = `dashboard-br-${suffix}`;
    const isControlled = active !== undefined;
    const isActive = active ?? internalActive;
    const activationSelector = isControlled
        ? `.${root}.dashboard-active`
        : trigger === "click"
            ? `.${root}.dashboard-active`
            : `.${root}:hover`;
    const loopSelector = `.${root}.dashboard-loop`;
    const animationMode = loop ? "infinite" : "forwards";
    const safeDuration = Math.max(0.01, duration);

    const css = `
        .${root} .dashboard-part {
            transform-box: fill-box;
            transform-origin: center;
        }
        ${activationSelector} .dashboard-top,
        ${loopSelector} .dashboard-top {
            animation: ${top} ${safeDuration}s cubic-bezier(0.22, 1, 0.36, 1) ${animationMode};
        }
        ${activationSelector} .dashboard-bl,
        ${loopSelector} .dashboard-bl {
            animation: ${bottomLeft} ${safeDuration + 0.1}s cubic-bezier(0.22, 1, 0.36, 1) ${animationMode};
            animation-delay: ${safeDuration * 0.18}s;
        }
        ${activationSelector} .dashboard-br,
        ${loopSelector} .dashboard-br {
            animation: ${bottomRight} ${safeDuration + 0.2}s cubic-bezier(0.22, 1, 0.36, 1) ${animationMode};
            animation-delay: ${safeDuration * 0.36}s;
        }
        @keyframes ${top} {
            0% { transform: translateY(-14px) scale(0.8); opacity: 0; }
            18% { opacity: 1; }
            59% { transform: translateY(1.5px) scale(1.05); }
            82% { transform: translateY(-0.5px) scale(1.02); }
            100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        @keyframes ${bottomLeft} {
            0% { transform: translate(-12px, 6px) rotate(-15deg); opacity: 0; }
            16% { opacity: 1; }
            55% { transform: translate(1.2px, 0) rotate(2deg); }
            80% { transform: translate(-0.3px, 0) rotate(0deg); }
            100% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
        }
        @keyframes ${bottomRight} {
            0% { transform: translate(12px, 6px) rotate(15deg); opacity: 0; }
            14% { opacity: 1; }
            50% { transform: translate(-1.2px, 0) rotate(-2deg); }
            75% { transform: translate(0.3px, 0) rotate(0deg); }
            100% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
            .${root} .dashboard-part {
                animation: none !important;
                opacity: 1 !important;
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
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${root}${loop ? " dashboard-loop" : ""}${isActive ? " dashboard-active" : ""}${className ? ` ${className}` : ""}`}
                role={trigger === "click" || isControlled ? "button" : undefined}
                tabIndex={trigger === "click" || isControlled ? 0 : undefined}
                aria-pressed={trigger === "click" || isControlled ? isActive : undefined}
                onClick={(event) => {
                    if (!isControlled && trigger === "click") {
                        setInternalActive((current) => !current);
                    }
                    onClick?.(event);
                }}
                style={{ color, cursor: trigger === "click" || isControlled ? "pointer" : undefined, ...style }}
            >
                <rect className="dashboard-part dashboard-top" x="3.99" y="3.99" width="10.13" height="3.94" rx="0.56" fill="currentColor" />
                <rect className="dashboard-part dashboard-bl" x="3.99" y="10.18" width="3.94" height="3.94" rx="0.56" fill="currentColor" />
                <rect className="dashboard-part dashboard-br" x="10.18" y="10.18" width="3.94" height="3.94" rx="0.56" fill="currentColor" />
            </svg>
        </>
    );
}

export default AnimatedDashboardIcon;
