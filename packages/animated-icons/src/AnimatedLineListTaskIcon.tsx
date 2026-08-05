"use client";

import { useId, useState, type SVGProps } from "react";

export interface AnimatedLineListTaskIconProps
    extends Omit<SVGProps<SVGSVGElement>, "width" | "height" | "color"> {
    size?: number;
    color?: string;
    duration?: number;
    loop?: boolean;
    trigger?: "all" | "hover" | "focus" | "click" | "keyboard" | "controlled";
    active?: boolean;
}

export function AnimatedLineListTaskIcon({
    size = 24,
    color = "currentColor",
    duration = 0.9,
    loop = false,
    trigger = "all",
    active,
    className,
    style,
    onClick,
    onKeyDown,
    tabIndex,
    ...props
}: AnimatedLineListTaskIconProps) {
    const [internalActive, setInternalActive] = useState(false);
    const isControlled = active !== undefined;
    const isActive = active ?? internalActive;
    const suffix = useId().replace(/[^a-zA-Z0-9_-]/g, "");
    const root = `task-list-${suffix}`;
    const belt = `task-list-belt-${suffix}`;
    const line = `task-list-line-${suffix}`;
    const check = `task-list-check-${suffix}`;
    const safeDuration = Math.max(0.01, duration);
    const hoverSelector = trigger === "all" || trigger === "hover" ? `.${root}:hover` : "";
    const focusSelector =
        trigger === "all" || trigger === "focus" || trigger === "keyboard"
            ? `.${root}:focus-visible`
            : "";
    const clickSelector =
        trigger === "all" || trigger === "click" || trigger === "keyboard" || trigger === "controlled"
            ? `.${root}.task-list-active`
            : "";
    const activationSelectors = [hoverSelector, focusSelector, clickSelector]
        .filter(Boolean)
        .map((selector) => `${selector} .task-list-belt`)
        .join(",\n");
    const lineSelectors = [hoverSelector, focusSelector, clickSelector]
        .filter(Boolean)
        .map((selector) => `${selector} .task-list-r2-line`)
        .join(",\n");
    const checkSelectors = [hoverSelector, focusSelector, clickSelector]
        .filter(Boolean)
        .map((selector) => `${selector} .task-list-r2-check`)
        .join(",\n");

    const css = `
        .${root} { overflow: hidden; }
        .${root} .task-list-belt { transform-box: view-box; }
        .${root} .task-list-line { stroke-dasharray: 100; }
        .${root} .task-list-check { transform-box: fill-box; transform-origin: center; }
        ${activationSelectors},
        .${root}.task-list-loop .task-list-belt {
            animation: ${belt} ${safeDuration}s cubic-bezier(.66,0,.34,1) forwards;
        }
        ${lineSelectors},
        .${root}.task-list-loop .task-list-r2-line {
            animation: ${line} ${safeDuration}s cubic-bezier(.4,0,.2,1) forwards;
        }
        ${checkSelectors},
        .${root}.task-list-loop .task-list-r2-check {
            animation: ${check} ${safeDuration}s ease-out forwards;
        }
        @keyframes ${belt} {
            0%, 22% { transform: translateY(0); }
            31%, 56% { transform: translateY(-4.421px); }
            65%, 90% { transform: translateY(-8.842px); }
            99%, 100% { transform: translateY(-13.264px); }
        }
        @keyframes ${line} {
            0%, 1% { stroke-dashoffset: 100; }
            14%, 100% { stroke-dashoffset: 0; }
        }
        @keyframes ${check} {
            0%, 15% { opacity: 0; transform: scale(.4); }
            19% { opacity: 1; transform: scale(1.2); }
            22%, 100% { opacity: 1; transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
            .${root} .task-list-belt,
            .${root} .task-list-line,
            .${root} .task-list-check {
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
                stroke={color}
                strokeWidth="1.2"
                strokeLinecap="square"
                xmlns="http://www.w3.org/2000/svg"
                role="button"
                tabIndex={tabIndex ?? 0}
                aria-pressed={isActive}
                className={`${root}${loop ? " task-list-loop" : ""}${isActive ? " task-list-active" : ""}${className ? ` ${className}` : ""}`}
                onClick={(event) => {
                    if (!isControlled) {
                        setInternalActive((current) => !current);
                    }
                    onClick?.(event);
                }}
                onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        if (!isControlled) {
                            setInternalActive((current) => !current);
                        }
                    }
                    onKeyDown?.(event);
                }}
                style={{ cursor: "pointer", overflow: "hidden", ...style }}
            >
                <g className="task-list-belt">
                    <path d="M2.32 3.947L3.267 4.894L5.162 3" />
                    <path className="task-list-line" pathLength="100" d="M7.373 3.947H14.32" />
                    <path d="M2.32 8.369L3.267 9.316L5.162 7.422" />
                    <path className="task-list-line" pathLength="100" d="M7.373 8.369H14.32" />
                    <path className="task-list-check task-list-r2-check" d="M2.32 12.79L3.267 13.737L5.162 11.843" />
                    <path className="task-list-line task-list-r2-line" pathLength="100" d="M7.373 12.79H14.32" />
                    <path className="task-list-check" d="M2.32 17.211L3.267 18.158L5.162 16.264" opacity="0" />
                    <path className="task-list-line" pathLength="100" d="M7.373 17.211H14.32" />
                </g>
            </svg>
        </>
    );
}

export default AnimatedLineListTaskIcon;
