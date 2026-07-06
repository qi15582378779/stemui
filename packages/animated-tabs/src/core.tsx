"use client";

import { useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

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
    const rootRef = useRef<HTMLDivElement | null>(null);
    const listRef = useRef<HTMLDivElement | null>(null);
    const tabRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });

    const enabledTabs = tabs.filter((tab) => !tab.disabled);

    useLayoutEffect(() => {
        const updateIndicator = () => {
            const current = tabRefs.current[active];
            const container = variant === "underline" ? listRef.current : rootRef.current;
            if (!current || !container) return;
            setIndicatorStyle({
                width: current.offsetWidth,
                left: current.offsetLeft
            });
        };

        updateIndicator();

        const observer = new ResizeObserver(updateIndicator);
        const list = listRef.current ?? rootRef.current;

        Object.values(tabRefs.current).forEach((tab) => {
            if (tab) observer.observe(tab);
        });

        if (list) observer.observe(list);

        window.addEventListener("resize", updateIndicator);
        list?.addEventListener("scroll", updateIndicator);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", updateIndicator);
            list?.removeEventListener("scroll", updateIndicator);
        };
    }, [active, tabs, variant]);

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
            <div
                ref={rootRef}
                role="tablist"
                className={cn("stemui-animated-tabs stemui-animated-tabs--pill", className)}
            >
                <div
                    aria-hidden
                    className={cn("stemui-animated-tabs__indicator stemui-animated-tabs__indicator--pill", indicatorClassName)}
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
                                "stemui-animated-tabs__tab stemui-animated-tabs__tab--pill",
                                tab.disabled && "stemui-animated-tabs__tab--disabled",
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
        <div ref={rootRef} className={cn("stemui-animated-tabs stemui-animated-tabs--underline", className)}>
            <div
                ref={listRef}
                role="tablist"
                className={cn(
                    "stemui-animated-tabs__list stemui-animated-tabs__list--underline",
                    scrollable && "stemui-animated-tabs__list--scrollable",
                    listClassName
                )}
            >
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
                                "stemui-animated-tabs__tab stemui-animated-tabs__tab--underline",
                                tab.disabled && "stemui-animated-tabs__tab--disabled",
                                resolveTabClassName(tab, isActive)
                            )}
                        >
                            {renderTab(tab, isActive)}
                        </div>
                    );
                })}
                <div
                    aria-hidden
                    className={cn(
                        "stemui-animated-tabs__indicator stemui-animated-tabs__indicator--underline",
                        indicatorClassName
                    )}
                    style={{ width: indicatorStyle.width, transform: `translateX(${indicatorStyle.left}px)` }}
                />
            </div>
        </div>
    );
}
