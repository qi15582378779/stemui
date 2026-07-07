import type { SVGProps } from "react";

export type IconProps = Omit<SVGProps<SVGSVGElement>, "color"> & {
    size?: number | string;
    color?: string;
    title?: string;
};
