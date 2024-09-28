import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type BaseResponse = {
  success?: boolean;
  message?: string;
  errorCode?: string;
  data?: object;
};
