import type { SVGProps } from "react";

export type IconProps = Omit<SVGProps<SVGSVGElement>, "color"> & {
    size?: number | string;
    color?: string;
    title?: string;
};

export type PlatformBorderStyle = "solid" | "dashed";

export type PlatformIconProps = IconProps & {
    borderStyle?: PlatformBorderStyle;
    borderColor?: string;
};
