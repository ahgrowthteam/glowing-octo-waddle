import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ type = 'text', className = '', ...props }, ref) => {
        return (
            <input
                ref={ref}
                type={type}
                className={`flex min-h-[44px] w-full rounded-lg border border-ink/[0.12] bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted/75 transition-colors focus:outline-none focus-visible:border-cobalt focus-visible:ring-2 focus-visible:ring-cobalt/20 disabled:cursor-not-allowed disabled:opacity-50 ${className}`.trim()}
                {...props}
            />
        );
    }
);

Input.displayName = 'Input';
