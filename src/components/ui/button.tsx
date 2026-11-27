import * as React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'discord' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
    primary:
        'bg-ink text-white hover:bg-[#1E2129] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_1px_2px_rgba(16,17,20,0.16)]',
    secondary:
        'bg-white text-ink border border-ink/[0.14] hover:border-ink/30 hover:bg-cream shadow-xs',
    outline:
        'bg-transparent text-ink border border-ink/[0.16] hover:bg-ink/[0.04] hover:border-ink/30',
    ghost: 'bg-transparent text-ink-secondary hover:bg-ink/[0.05] hover:text-ink',
    discord: 'bg-discord text-white hover:bg-discord-hover shadow-xs',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
    sm: 'min-h-[36px] px-3.5 py-1.5 text-[13px]',
    md: 'min-h-[42px] px-5 py-2.5 text-[14px]',
    lg: 'min-h-[48px] px-6 py-3 text-[15px]',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', size = 'md', type = 'button', className = '', ...props }, ref) => {
        return (
            <button
                ref={ref}
                type={type}
                className={`inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] transition-all active:scale-[0.985] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`.trim()}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';
