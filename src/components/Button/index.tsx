import { ButtonHTMLAttributes } from "react";

type Props = {
  variant?: "default" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: Props) => (
  <button
    {...props}
    className={`${
      props.variant === "secondary"
        ? "bg-gray-400 hover:bg-gray-500"
        : "bg-blue-700 hover:bg-blue-800"
    } text-white disabled:bg-blue-400 disabled:hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none dark:focus:ring-blue-800`}
  />
);
