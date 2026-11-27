'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
    id: string;
    title: React.ReactNode;
    content: React.ReactNode;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    items?: AccordionItem[];
    defaultOpenId?: string;
}

export function Accordion({
    items = [],
    defaultOpenId,
    className = '',
    children,
    ...props
}: AccordionProps) {
    const [openId, setOpenId] = React.useState<string | null>(defaultOpenId ?? null);

    if (!items.length && children) {
        return (
            <div className={`divide-y divide-ink/[0.08] ${className}`.trim()} {...props}>
                {children}
            </div>
        );
    }

    if (!items.length) {
        return (
            <div
                className={`rounded-xl border border-ink/[0.09] bg-white px-4 py-3 text-sm text-ink-muted ${className}`.trim()}
                {...props}
            />
        );
    }

    return (
        <div className={`divide-y divide-ink/[0.08] border-y border-ink/[0.08] ${className}`.trim()} {...props}>
            {items.map((item) => {
                const isOpen = openId === item.id;
                const panelId = `accordion-panel-${item.id}`;
                const triggerId = `accordion-trigger-${item.id}`;
                return (
                    <div key={item.id} className="t-acc" data-open={isOpen ? 'true' : 'false'}>
                        <button
                            id={triggerId}
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            onClick={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
                            className="flex w-full items-center justify-between gap-4 py-4 text-left font-display text-[15px] font-semibold text-ink transition-colors hover:text-cobalt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt"
                        >
                            <span>{item.title}</span>
                            <ChevronDown
                                className={`h-4 w-4 shrink-0 text-ink-muted transition-transform duration-200 ${
                                    isOpen ? 'rotate-180 text-ink' : ''
                                }`}
                                aria-hidden="true"
                            />
                        </button>
                        <div
                            id={panelId}
                            role="region"
                            aria-labelledby={triggerId}
                            className="t-acc-panel"
                        >
                            <div className="t-acc-panel-inner">
                                <div className="pb-4 text-sm leading-relaxed text-ink-secondary">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
