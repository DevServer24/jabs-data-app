import * as React from "react";
interface ButtonProps {
    id?: string;
    className?: string;
    onClick?: React.ReactEventHandler<HTMLButtonElement>;
    type?: "button" | "reset" | "submit";
    variant?: "default" | "secondary" | "link";
    onLoading?: React.ReactEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;
export { Button };
