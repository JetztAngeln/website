"use client";
import {
    autoUpdate,
    flip,
    FloatingFocusManager,
    FloatingPortal,
    offset,
    shift,
    useClick,
    useDismiss,
    useFloating,
    useInteractions,
    useRole,
} from "@floating-ui/react";
import type { HTMLProps, ReactNode } from "react";
import React, { createContext, useContext, useMemo, useState } from "react";

interface DropdownOptions {
    initialOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export function useDropdown({
    initialOpen = false,
    open: controlledOpen,
    onOpenChange: setControlledOpen,
}: DropdownOptions = {}) {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);

    const open = controlledOpen ?? uncontrolledOpen;
    const setOpen = setControlledOpen ?? setUncontrolledOpen;

    const data = useFloating({
        open,
        onOpenChange: setOpen,
        whileElementsMounted: autoUpdate,
        placement: "bottom-end",
        middleware: [
            offset(5),
            flip({
                fallbackAxisSideDirection: "end",
            }),
            shift(),
        ],
    });

    const context = data.context;

    const click = useClick(context, {
        enabled: controlledOpen == null,
    });
    const dismiss = useDismiss(context);
    const role = useRole(context);

    const interactions = useInteractions([click, dismiss, role]);

    return useMemo(
        () => ({
            open,
            setOpen,
            ...interactions,
            ...data,
        }),
        [open, setOpen, interactions, data],
    );
}

type ContextType = ReturnType<typeof useDropdown> | null;

const DropdownContext = createContext<ContextType>(null);

export const useDropdownContext = () => {
    const context = useContext(DropdownContext);

    if (context == null) {
        throw new Error("Dropdown components must be wrapped in <Dropdown />");
    }

    return context;
};

export function Dropdown({
    children,
    ...options
}: {
    children: ReactNode;
} & DropdownOptions) {
    const dropdown = useDropdown(options);
    return (
        <DropdownContext.Provider value={dropdown}>
            {children}
        </DropdownContext.Provider>
    );
}

export function DropdownTrigger({
    children,
    asChild = false,
}: Readonly<{
    children: React.ReactElement;
    asChild?: boolean;
}>) {
    const { getReferenceProps, refs, open } = useDropdownContext();
    if (asChild) {

        return React.cloneElement(children, {
            ref: refs.setReference,
            ...getReferenceProps(children.props as React.HTMLAttributes<HTMLElement>),
            "data-state": open ? "open" : "closed",
        } as unknown as React.HTMLAttributes<HTMLElement>);
    }
    return (
        <button
            ref={refs.setReference}
            {...getReferenceProps()}
            type="button"
            className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            data-state={open ? "open" : "closed"}
        >
            {children}
        </button>
    );
}

export function DropdownContent({
    children,
    ...props
}: { children: ReactNode } & HTMLProps<HTMLDivElement>) {
    const { context: floatingContext, getFloatingProps, refs, floatingStyles } = useDropdownContext();

    if (!floatingContext.open) return null;

    return (
        <FloatingPortal>
            <FloatingFocusManager context={floatingContext} modal={false}>
                <div
                    ref={refs.setFloating}
                    {...getFloatingProps(props)}
                    className="z-40 right-0 rounded-xl border border-gray-200 bg-white shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark w-40 p-2"
                    style={floatingStyles}
                >
                    {children}
                </div>
            </FloatingFocusManager>
        </FloatingPortal>
    );
}
