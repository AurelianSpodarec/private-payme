import { ReactNode } from 'react';

function Section({ className, style, children, size, id }: SectionProps) {
    const options = {
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
        <section
            style={style}
            id={id}
            // className={`section
            //  ${className ? className : ''} ${
            //     size ? `section--${options[size]}` : `section--${options.base}`
            // }`}
            className={className}
        >
            {children}
        </section>
    );
}

export default Section;

interface SectionProps {
    className?: string;
    id?: string;
    style?: object;
    children: ReactNode;
    size?: 'fluid' | 'sm' | 'base' | 'xs' | 'md' | 'lg' | 'xl' | '2xl';
}