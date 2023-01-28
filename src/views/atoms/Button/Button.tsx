 function Button(props:ButtonProps) {
    const {
        children,
        label = "",
        onClick,
        as = "button",
        href,
        variant = "primary",
        kind = "solid",
        type = "button",
        size = "md",
        radius = "xs",
        ref,
        disabled,
        block,
        icon,
        iconPosition,
        className,
        style,
    } = props;

    const prefix = "button";

    const Tag = `${as}` as React.ElementType;
    const content = label || children;

    return (
        <Tag 
            href={href}
            type={type}
            ref={ref}
            style={style}
            onClick={onClick}
            disabled={disabled}
            className={`
                ${className}
                ${block ? 'w-full' : ""}
                ${prefix} ${kind ? `${prefix}-${kind}` : ''} 
                ${variant ? `${prefix}-${variant}` : ''} 
                ${size ? `${prefix}-${size}` : ''}`.trim()
            }
        >
            {content}

            {/* {icon && (
                 <span
                     className={
                         `${prefix}-icon`,
                         iconPosition && `${prefix}-icon-${iconPosition}`,
                     }
                 >
                     {icon}
                 </span>
             )} */}
        </Tag>
    );
}

export default Button;

interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
    onClick?: any;
    ref?: any;
    label?: string;
    as?: string | "a" | "button";
    variant?: string | "primary" | "secondary" | "link" | "success" | "warning" | "danger" | "info";
    kind?: string | "solid" | "outline" | "ghost" | "subtle";
    type?: string | "submit" | "button" | "reset";
    size?: string | "md";
    radius?: string | "md";
    href?: string;
    block?: boolean;
    active?: boolean;
    disabled?: boolean;
    isLoading?: boolean;
    style?: any;
    icon?: any;
    iconPosition?: any;
}
