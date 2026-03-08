import React, { type ButtonHTMLAttributes, type ReactNode } from 'react';

/**
 * Props for the Button component.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** The visual style of the button. Defaults to 'primary'. */
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    /** The size of the button. Defaults to 'md'. */
    size?: 'sm' | 'md' | 'lg';
    /** Whether the button should take up the full width of its container. */
    fullWidth?: boolean;
    /** Custom className to append to the button. */
    className?: string;
    /** Button content. */
    children: ReactNode;
}

/**
 * A reusable Button component with BEM-style modifier classes.
 * 
 * @example
 * <Button variant="primary" size="lg" fullWidth>Click Me</Button>
 */
const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    children,
    ...props
}) => {
    // Combine BEM classes based on props
    // btn--variant and btn--size as requested
    const classes = [
        'btn',
        `btn--${variant}`,
        `btn--${size}`,
        fullWidth ? 'btn--full-width' : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;
