import React, { createContext, useContext, useState } from 'react';

type CollapsibleContextType = {
    isOpen: boolean;
    toggle: () => void;
};

const CollapsibleContext = createContext<CollapsibleContextType | undefined>(undefined);

interface CollapsibleProps {
    children: React.ReactNode;
    defaultOpen?: boolean;
}

export function Collapsible({ children, defaultOpen = false }: CollapsibleProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <CollapsibleContext.Provider value={{ isOpen, toggle }}>
            <div className="w-full">{children}</div>
        </CollapsibleContext.Provider>
    );
}

interface CollapsibleTriggerProps {
    children: React.ReactNode;
    className?: string;
}

export function CollapsibleTrigger({ children, className = '' }: CollapsibleTriggerProps) {
    const context = useContext(CollapsibleContext);
    if (!context) throw new Error('CollapsibleTrigger must be used within a Collapsible');

    return (
        <button className="bg-blue-700" type="button" onClick={context.toggle} className={className}>
            {children}
        </button>
    );
}

interface CollapsibleContentProps {
    children: React.ReactNode;
    className?: string;
}

export function CollapsibleContent({ children, className = '' }: CollapsibleContentProps) {
    const context = useContext(CollapsibleContext);
    if (!context) throw new Error('CollapsibleContent must be used within a Collapsible');

    if (!context.isOpen) return null;

    return <div className={className}>{children}</div>;
}
