import { ReactNode } from 'react';

function Container({ children, style, className, size }: ContainerProps) {
    const options: any = {
        fluid: 'fluid',
        sm: 'sm',
        base: 'base',
        xs: 'xs',
        md: 'md',
        lg: 'lg',
        xl: 'xl',
        '2xl': '2xl',
    };

    return (
        <div
            style={style}
            className={`mx-auto ${className}`}
            // className={`container ${size ? `container--${options[size]}` : 'container--fluid'}`}
        >
            {children}
        </div>
    );
}

export default Container;

interface ContainerProps {
    children: ReactNode;
    className?: any;
    style?: object;
    size?: string;
}