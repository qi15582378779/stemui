import type { IconProps } from "../types";

export function Logo2GoogleIcon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
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
            <path fillRule="evenodd" clipRule="evenodd" d="M14.1249 8.14192C14.1249 7.69875 14.0851 7.27261 14.0113 6.86353H8.125V9.28111H11.4886C11.3437 10.0624 10.9034 10.7243 10.2414 11.1675V12.7356H12.2613C13.4431 11.6475 14.1249 10.0453 14.1249 8.14192Z" fill="#4285F4"/>
<path fillRule="evenodd" clipRule="evenodd" d="M8.12471 14.2502C9.81219 14.2502 11.227 13.6905 12.2611 12.736L10.2411 11.1679C9.6815 11.5429 8.96561 11.7645 8.12471 11.7645C6.49689 11.7645 5.11907 10.665 4.62759 9.18774H2.53955V10.807C3.56795 12.8496 5.68156 14.2502 8.12471 14.2502Z" fill="#34A853"/>
<path fillRule="evenodd" clipRule="evenodd" d="M4.62781 9.18763C4.50281 8.81264 4.43179 8.41207 4.43179 8.00015C4.43179 7.58822 4.50281 7.18766 4.62781 6.81266V5.19336H2.53977C2.11647 6.0371 1.875 6.99164 1.875 8.00015C1.875 9.00868 2.11647 9.96318 2.53977 10.8069L4.62781 9.18763Z" fill="#FBBC05"/>
<path fillRule="evenodd" clipRule="evenodd" d="M8.12471 4.23577C9.04234 4.23577 9.86615 4.55111 10.5139 5.17041L12.3065 3.37782C11.2241 2.36931 9.80935 1.75 8.12471 1.75C5.68156 1.75 3.56795 3.15055 2.53955 5.19314L4.62759 6.81244C5.11907 5.33519 6.49689 4.23577 8.12471 4.23577Z" fill="#EA4335"/>
        </svg>
    );
}
