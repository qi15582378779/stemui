import type { IconProps } from "../types";

export function FillTiktolkArrowShareIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path d="M8.77837 3.5182C8.7785 3.41679 8.80833 3.31764 8.86421 3.23301C8.92008 3.14837 8.99957 3.08197 9.09272 3.04199C9.18593 3.00203 9.28883 2.99025 9.38865 3.00812C9.48847 3.02599 9.58084 3.07272 9.65443 3.14253L14.6783 7.92694C15.1201 8.34803 15.1047 9.05857 14.6452 9.45965L9.63749 13.8291C9.56237 13.8944 9.47012 13.9367 9.37171 13.9509C9.27324 13.9652 9.17278 13.9509 9.08226 13.9096C8.99174 13.8685 8.91495 13.8021 8.86106 13.7185C8.80718 13.6349 8.7785 13.5376 8.77837 13.4381V11.4589C8.77837 11.4589 3.40119 10.4904 1.6768 13.6559C1.51591 13.9515 0.889275 14.0547 1.01706 12.582C1.54978 9.87227 2.6383 5.64059 8.77837 5.64059V3.5182Z" fill="currentColor"/>
        </svg>
    );
}
