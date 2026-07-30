"use client";

import { useId, type SVGProps } from "react";

export interface AnimatedLineLinkAttachmentIconProps
    extends Omit<SVGProps<SVGSVGElement>, "width" | "height" | "color"> {
    size?: number;
    color?: string;
    duration?: number;
}

export function AnimatedLineLinkAttachmentIcon({
    size = 24,
    color = "currentColor",
    className,
    duration = 0.6,
    style,
    ...props
}: AnimatedLineLinkAttachmentIconProps) {
    const suffix = useId().replace(/[^a-zA-Z0-9_-]/g, "");
    const root = `link-icon-${suffix}`;
    const top = `link-top-${suffix}`;
    const bottom = `link-bottom-${suffix}`;

    const css = `
        .${root} { overflow: visible; }
        .${root} .link-top,
        .${root} .link-bottom {
            transform-box: view-box;
            transform-origin: center;
        }
        .${root}:hover .link-top {
            animation: ${top} ${duration}s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .${root}:hover .link-bottom {
            animation: ${bottom} ${duration}s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes ${top} {
            0% { transform: translate(5px, -5px); opacity: 0; }
            42% { opacity: 1; }
            100% { transform: translate(0, 0); opacity: 1; }
        }
        @keyframes ${bottom} {
            0% { transform: translate(-5px, 5px); opacity: 0; }
            42% { opacity: 1; }
            100% { transform: translate(0, 0); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
            .${root}:hover .link-top,
            .${root}:hover .link-bottom {
                animation: none;
                transform: none;
                opacity: 1;
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
                overflow="visible"
                xmlns="http://www.w3.org/2000/svg"
                className={`${root}${className ? ` ${className}` : ""}`}
                style={{
                    color,
                    display: "block",
                    flexShrink: 0,
                    overflow: "visible",
                    ...style
                }}
            >
                <g className="link-top">
                    <path
                        d="M10.0513 3.54901C10.6589 2.94153 11.6438 2.94153 12.2513 3.54901C12.8587 4.1565 12.8587 5.14142 12.2513 5.74891L10.9942 7.00598C10.7338 7.26631 10.7338 7.68845 10.9942 7.94878C11.2545 8.20911 11.6766 8.20911 11.937 7.94878L13.1941 6.69171C14.3223 5.56353 14.3223 3.73439 13.1941 2.60621C12.0659 1.47803 10.2367 1.47803 9.10853 2.60621L6.5944 5.12037C5.46622 6.24855 5.46622 8.07771 6.5944 9.20585C6.85473 9.46625 7.27686 9.46625 7.5372 9.20585C7.79753 8.94551 7.79753 8.52338 7.5372 8.26305C6.92973 7.65558 6.92973 6.67065 7.5372 6.06317L10.0513 3.54901Z"
                        fill="currentColor"
                    />
                </g>
                <g className="link-bottom">
                    <path
                        d="M9.40415 6.79433C9.14381 6.53397 8.72168 6.53397 8.46135 6.79433C8.20101 7.05466 8.20101 7.47679 8.46135 7.73712C9.06881 8.34459 9.06881 9.32953 8.46135 9.93699L5.94718 12.4512C5.3397 13.0587 4.35477 13.0587 3.74729 12.4512C3.13981 11.8437 3.13981 10.8588 3.74729 10.2513L5.00437 8.99419C5.26472 8.73386 5.26472 8.31173 5.00437 8.05139C4.74402 7.79106 4.32191 7.79106 4.06156 8.05139L2.80448 9.30846C1.6763 10.4367 1.6763 12.2658 2.80448 13.394C3.93267 14.5222 5.76181 14.5222 6.89001 13.394L9.40415 10.8799C10.5323 9.75166 10.5323 7.92252 9.40415 6.79433Z"
                        fill="currentColor"
                    />
                </g>
            </svg>
        </>
    );
}

export default AnimatedLineLinkAttachmentIcon;
