import type { IconProps } from "../types";

export function LineDevHeartReactionIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            color={color}
            aria-hidden={title ? undefined : true}
            role={title ? "img" : "presentation"}
            focusable="false"
            {...props}
        >
            {title ? <title>{title}</title> : null}
            <g clipPath="url(#clip0_10613_185264)">
<mask id="mask0_10613_185264" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
<path d="M16 0H0V16H16V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_10613_185264)">
<path d="M12.6667 9.33333V11.3333H14.6667V12.6667H12.6661L12.6667 14.6667H11.3334L11.3327 12.6667H9.33341V11.3333H11.3334V9.33333H12.6667ZM13.4954 3.17132C15.0034 4.68332 15.0554 7.09133 13.6527 8.66133L12.7061 7.716C13.5934 6.7 13.5467 5.10665 12.5514 4.11332C11.5494 3.11399 9.93808 3.07132 8.89141 4.01132L8.00141 4.80999L7.11075 4.01199C6.06077 3.07065 4.4501 3.11199 3.4481 4.11465C2.45477 5.10799 2.40477 6.698 3.3201 7.74867L8.94141 13.3793L8.00008 14.3233L2.34677 8.662C0.944101 7.09133 0.996768 4.67932 2.5041 3.17132C4.0141 1.66199 6.42943 1.61132 8.00008 3.01932C9.56608 1.61332 11.9867 1.65999 13.4954 3.17132Z" fill="currentColor"/>
</g>
</g>
<defs>
<clipPath id="clip0_10613_185264">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
        </svg>
    );
}
