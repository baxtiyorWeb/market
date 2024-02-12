import { twMerge } from "tailwind-merge";

export const Div = ({ children, className }) => {
  return <div className={(twMerge("mb-10 w-full"), className)}>{children}</div>;
};
