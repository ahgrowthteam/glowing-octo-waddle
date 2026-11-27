import * as React from 'react';

export type CardVariant = 'default' | 'subtle' | 'dark';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
}

const VARIANT_CLASSES: Record<CardVariant, string> = {
    default: 'bg-white border border-ink/[0.09] text-ink surface-card',
    subtle: 'bg-surface-subtle border border-ink/[0.08] text-ink',
    dark: 'bg-[#101114] border border-white/10 text-white surface-dark-card dark-surface',
};

export function Card({ variant = 'default', className = '', ...props }: CardProps) {
    return (
        <div
            className={`rounded-xl ${VARIANT_CLASSES[variant]} ${className}`.trim()}
            {...props}
        />
    );
}

export function CardHeader({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={`flex flex-col gap-1.5 p-6 ${className}`.trim()} {...props} />;
}

export function CardTitle({ className = '', ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3
            className={`font-display text-lg font-semibold tracking-tight leading-snug ${className}`.trim()}
            {...props}
        />
    );
}

export function CardDescription({ className = '', ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return <p className={`text-sm text-ink-muted leading-relaxed ${className}`.trim()} {...props} />;
}

export function CardContent({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={`px-6 pb-6 ${className}`.trim()} {...props} />;
}

export function CardFooter({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={`flex items-center px-6 pb-6 pt-0 ${className}`.trim()} {...props} />;
}
