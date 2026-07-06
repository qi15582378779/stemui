"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export type AnimatedTabsItem<T extends string = string> = {
    id: T;
    ariaLabel?: string;
    disabled?: boolean;
};

export type AnimatedTabsProps<
    T extends string = string,
    Item extends AnimatedTabsItem<T> = AnimatedTabsItem<T>
> = {
    tabs: Item[];
    active: T;
    onChange: (id: T) => void;
    renderTab: (tab: Item, isActive: boolean) => ReactNode;
    className?: string;
    listClassName?: string;
    tabClassName?: string | ((tab: Item, isActive: boolean) => string);
    indicatorClassName?: string;
    scrollable?: boolean;
    variant?: "underline" | "pill";
};

const cn = (...values: Array<string | false | null | undefined>) => values.filter(Boolean).join(" ");

export function AnimatedTabs<
    T extends string = string,
    Item extends AnimatedTabsItem<T> = AnimatedTabsItem<T>
>({
    tabs,
    active,
    onChange,
    renderTab,
    className,
    listClassName,
    tabClassName,
    indicatorClassName,
    scrollable,
    variant = "underline"
}: AnimatedTabsProps<T, Item>) {
    const tabRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });

    const enabledTabs = tabs.filter((tab) => !tab.disabled);

    useEffect(() => {
        const updateIndicator = () => {
            const current = tabRefs.current[active];
            if (!current) return;
            setIndicatorStyle({
                width: current.offsetWidth,
                left: current.offsetLeft
            });
        };

        updateIndicator();

        const current = tabRefs.current[active];
        if (!current) return;

        const observer = new ResizeObserver(updateIndicator);
        observer.observe(current);
        window.addEventListener("resize", updateIndicator);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", updateIndicator);
        };
    }, [active, tabs]);

    const focusTab = (id: T) => {
        tabRefs.current[id]?.focus();
    };

    const getAdjacentTabId = (currentId: T, direction: 1 | -1) => {
        const index = enabledTabs.findIndex((tab) => tab.id === currentId);
        if (index === -1) return null;
        const next = enabledTabs[index + direction];
        return next?.id ?? null;
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>, tab: Item) => {
        if (tab.disabled) return;

        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onChange(tab.id);
            return;
        }

        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
            const nextId = getAdjacentTabId(tab.id, 1);
            if (!nextId) return;
            event.preventDefault();
            focusTab(nextId);
            onChange(nextId);
            return;
        }

        if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
            const prevId = getAdjacentTabId(tab.id, -1);
            if (!prevId) return;
            event.preventDefault();
            focusTab(prevId);
            onChange(prevId);
            return;
        }

        if (event.key === "Home" && enabledTabs.length > 0) {
            event.preventDefault();
            focusTab(enabledTabs[0].id);
            onChange(enabledTabs[0].id);
            return;
        }

        if (event.key === "End" && enabledTabs.length > 0) {
            const lastTab = enabledTabs[enabledTabs.length - 1];
            event.preventDefault();
            focusTab(lastTab.id);
            onChange(lastTab.id);
        }
    };

    const resolveTabClassName = (tab: Item, isActive: boolean) =>
        typeof tabClassName === "function" ? tabClassName(tab, isActive) : tabClassName;

    if (variant === "pill") {
        return (
            <div role="tablist" className={cn("relative inline-flex items-center gap-0.5 rounded-full bg-black/[0.04] p-[3px]", className)}>
                <div
                    aria-hidden
                    className={cn("absolute inset-y-[3px] rounded-full bg-white transition-all duration-300", indicatorClassName)}
                    style={{ width: indicatorStyle.width, left: indicatorStyle.left }}
                />
                {tabs.map((tab) => {
                    const isActive = tab.id === active;
                    return (
                        <div
                            key={tab.id}
                            ref={(element) => {
                                tabRefs.current[tab.id] = element;
                            }}
                            role="tab"
                            tabIndex={tab.disabled ? -1 : 0}
                            aria-label={tab.ariaLabel}
                            aria-selected={isActive}
                            aria-disabled={tab.disabled}
                            onClick={() => {
                                if (tab.disabled) return;
                                onChange(tab.id);
                            }}
                            onKeyDown={(event) => handleKeyDown(event, tab)}
                            className={cn(
                                "relative z-10 cursor-pointer rounded-full transition-all duration-300 focus-visible:outline-none",
                                tab.disabled && "cursor-not-allowed opacity-50",
                                resolveTabClassName(tab, isActive)
                            )}
                        >
                            {renderTab(tab, isActive)}
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className={cn("relative", className)}>
            <div role="tablist" className={cn("flex h-full items-center gap-6", scrollable && "overflow-x-auto", listClassName)}>
                {tabs.map((tab) => {
                    const isActive = tab.id === active;
                    return (
                        <div
                            key={tab.id}
                            ref={(element) => {
                                tabRefs.current[tab.id] = element;
                            }}
                            role="tab"
                            tabIndex={tab.disabled ? -1 : 0}
                            aria-label={tab.ariaLabel}
                            aria-selected={isActive}
                            aria-disabled={tab.disabled}
                            onClick={() => {
                                if (tab.disabled) return;
                                onChange(tab.id);
                            }}
                            onKeyDown={(event) => handleKeyDown(event, tab)}
                            className={cn(
                                "shrink-0 cursor-pointer transition-colors focus-visible:outline-none",
                                tab.disabled && "cursor-not-allowed opacity-50",
                                resolveTabClassName(tab, isActive)
                            )}
                        >
                            {renderTab(tab, isActive)}
                        </div>
                    );
                })}
            </div>
            <span
                aria-hidden
                className={cn("absolute bottom-0 h-[3px] rounded-full bg-current transition-all duration-300", indicatorClassName)}
                style={{ width: indicatorStyle.width, transform: `translateX(${indicatorStyle.left}px)` }}
            />
        </div>
    );
}
