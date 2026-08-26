import React from "react";

const css = `
.line-flow-icon { display:inline-flex; line-height:0; color:currentColor; transform-box:view-box; transform-origin:center 78%; will-change:transform; }
.line-flow-icon .line-flow-row-fill { transform-box:fill-box; transform-origin:left center; will-change:transform,opacity; }
.line-flow-icon .line-flow-row-stroke { stroke-dasharray:var(--line-flow-length,5); stroke-dashoffset:0; opacity:1; transform-box:view-box; transform-origin:center; will-change:stroke-dashoffset,transform,opacity; }
.line-flow-icon:hover .line-flow-row-fill, .line-flow-icon.is-looping .line-flow-row-fill { animation:line-flow-fill-row 2.4s linear var(--line-flow-delay,0s) infinite both; }
.line-flow-icon:hover .line-flow-row-stroke, .line-flow-icon.is-looping .line-flow-row-stroke { animation:line-flow-stroke-row 2.4s linear var(--line-flow-delay,0s) infinite both; }
.line-flow-icon [data-line-flow-index="1"] { --line-flow-delay:.30s; }
.line-flow-icon [data-line-flow-index="2"] { --line-flow-delay:.60s; }
.line-flow-icon [data-line-flow-index="3"] { --line-flow-delay:.90s; }
@keyframes line-flow-fill-row { 0%{transform:translate(0,0) scaleX(.35);opacity:1}18%{transform:translate(0,0) scaleX(1);opacity:1}48%{transform:translate(0,0) scaleX(1);opacity:1}68%{transform:translate(0,0) scaleX(1);opacity:1;animation-timing-function:cubic-bezier(.4,0,.2,1)}88%{transform:translate(2px,-2px) scaleX(.82);opacity:.55}100%{transform:translate(4px,-4px) scaleX(.68);opacity:0} }
@keyframes line-flow-stroke-row { 0%{stroke-dashoffset:calc(var(--line-flow-length,5) * .62);transform:translate(0,0);opacity:1}18%{stroke-dashoffset:0;transform:translate(0,0);opacity:1}48%{stroke-dashoffset:0;transform:translate(0,0);opacity:1}68%{stroke-dashoffset:0;transform:translate(0,0);opacity:1;animation-timing-function:cubic-bezier(.4,0,.2,1)}88%{stroke-dashoffset:0;transform:translate(2px,-2px);opacity:.55}100%{stroke-dashoffset:0;transform:translate(4px,-4px);opacity:0} }
.line-flow-icon:hover, .line-flow-icon.is-looping { animation:line-flow-icon 2.4s linear infinite both; }
@keyframes line-flow-icon { 0%,65%{transform:translateY(0) rotate(0deg) scale(1)}76%{transform:translateY(-3px) rotate(-2.4deg) scale(1.04);animation-timing-function:cubic-bezier(.34,1.56,.64,1)}87%{transform:translateY(.55px) rotate(.9deg) scale(.993)}96%,100%{transform:translateY(0) rotate(0deg) scale(1)} }
@media (prefers-reduced-motion:reduce){.line-flow-icon,.line-flow-icon .line-flow-row{animation:none!important;transform:none!important;opacity:1!important}}
`;

export interface LineFileBillIconProps
    extends Omit<React.SVGProps<SVGSVGElement>, "width" | "height"> {
    size?: number;
    loop?: boolean;
}

export function LineFileBillIcon({
    size = 24,
    loop = false,
    ...props
}: LineFileBillIconProps) {
    return (
        <span className={loop ? "line-flow-icon is-looping" : "line-flow-icon"}>
            <style>{css}</style>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="none"
                data-line-flow-prepared="true"
                width={size}
                height={size}
                aria-hidden="true"
                {...props}
            >
                <path
                    d="M13 9.5V7.75C13 7.15326 12.7629 6.58097 12.341 6.15901C11.919 5.73705 11.3467 5.5 10.75 5.5H9.75C9.55109 5.5 9.36032 5.42098 9.21967 5.28033C9.07902 5.13968 9 4.94891 9 4.75V3.75C9 3.15326 8.76295 2.58097 8.34099 2.15901C7.91903 1.73705 7.34674 1.5 6.75 1.5H5.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    data-line-flow-piece-index="0"
                />
                <path
                    d="M5.5 10H10.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    data-line-flow-piece-index="1"
                    className="line-flow-row line-flow-row-stroke"
                    data-line-flow-index="0"
                />
                <path
                    d="M5.5 12H8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    data-line-flow-piece-index="2"
                    className="line-flow-row line-flow-row-stroke"
                    data-line-flow-index="1"
                />
                <path
                    d="M7 1.5H3.75C3.336 1.5 3 1.836 3 2.25V13.75C3 14.164 3.336 14.5 3.75 14.5H12.25C12.664 14.5 13 14.164 13 13.75V7.5C13 5.9087 12.3679 4.38258 11.2426 3.25736C10.1174 2.13214 8.5913 1.5 7 1.5Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    data-line-flow-piece-index="3"
                    className="line-flow-shell"
                />
            </svg>
        </span>
    );
}

export default LineFileBillIcon;
