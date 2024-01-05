import { ReactNode } from "react";

export interface CardProps {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    hoverClassName?: string;
}


export interface ComponentProps {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    hoverClassName?: string;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
}
