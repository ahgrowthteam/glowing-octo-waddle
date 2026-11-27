import * as React from 'react';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
    ({ className = '', ...props }, ref) => {
        return (
            <label
                ref={ref}
                className={`block text-sm font-medium text-ink leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`.trim()}
                {...props}
            />
        );
    }
);

Label.displayName = 'Label';
