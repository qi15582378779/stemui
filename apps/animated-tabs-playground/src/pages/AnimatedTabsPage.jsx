import { useState } from "react";

import {
    AnimatedLineArrowUpIcon,
    AnimatedLineLinkAttachmentIcon
} from "@stemui/animated-icons";
import { AnimatedTabs } from "@stemui/animated-tabs";

const tabs = [
    { id: "post", ariaLabel: "Post" },
    { id: "engage", ariaLabel: "Engage" },
    { id: "publish", ariaLabel: "Publish" },
    { id: "schedule", ariaLabel: "Schedule" },
    { id: "analytics", ariaLabel: "Analytics" }
];

const animatedIconGroups = [
    {
        id: "growth",
        ariaLabel: "Growth",
        icons: [
            {
                id: "line-arrow-up",
                label: "LineArrowUpIcon",
                ariaLabel: "Animated line arrow up icon",
                component: AnimatedLineArrowUpIcon
            }
        ]
    },
    {
        id: "general",
        ariaLabel: "General",
        icons: [
            {
                id: "line-link-attachment",
                label: "LineLinkAttachmentIcon",
                ariaLabel: "Animated line link attachment icon",
                component: AnimatedLineLinkAttachmentIcon
            }
        ]
    }
];

export function AnimatedTabsPage() {
    const [animatedIconGroup, setAnimatedIconGroup] = useState("growth");
    const [underlineActive, setUnderlineActive] = useState("post");
    const [baseUnderlineActive, setBaseUnderlineActive] = useState("engage");
    const [pillActive, setPillActive] = useState("engage");
    const [basePillActive, setBasePillActive] = useState("post");
    const [scrollable, setScrollable] = useState(false);
    const activeAnimatedIconGroup =
        animatedIconGroups.find((group) => group.id === animatedIconGroup) ??
        animatedIconGroups[0];

    return (
        <div className="page-stack">
            <section className="controls">
                <label className="toggle">
                    <input
                        type="checkbox"
                        checked={scrollable}
                        onChange={(event) => setScrollable(event.target.checked)}
                    />
                    <span>Enable scrollable underline list</span>
                </label>
            </section>

            <section className="card">
                <div className="section-label">Animated Icons</div>
                <AnimatedTabs
                    tabs={animatedIconGroups}
                    active={animatedIconGroup}
                    onChange={setAnimatedIconGroup}
                    variant="pill"
                    className="animated-category-tabs"
                    tabClassName={(tab, isActive) =>
                        `animated-category-tab${isActive ? " is-active" : ""}`
                    }
                    indicatorClassName="animated-category-indicator"
                    renderTab={(tab) => tab.ariaLabel}
                />
                <div className="animated-icon-grid">
                    {activeAnimatedIconGroup.icons.map((icon) => {
                        const Icon = icon.component;

                        return (
                            <div className="animated-icon-card" key={icon.id}>
                                <div className="animated-icon-stage">
                                    <Icon size={56} aria-label={icon.ariaLabel} />
                                </div>
                                <code>{icon.label}</code>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="card">
                <div className="section-label">Base Demo</div>
                <div className="demo-grid">
                    <div className="demo-block">
                        <div className="demo-title">Underline</div>
                        <div className="demo-preview">
                            <AnimatedTabs
                                tabs={tabs}
                                active={baseUnderlineActive}
                                onChange={setBaseUnderlineActive}
                                scrollable={scrollable}
                                renderTab={(tab) => tab.ariaLabel}
                            />
                        </div>
                    </div>

                    <div className="demo-block">
                        <div className="demo-title">Pill</div>
                        <div className="demo-preview">
                            <AnimatedTabs
                                tabs={tabs.slice(0, 3)}
                                active={basePillActive}
                                onChange={setBasePillActive}
                                variant="pill"
                                renderTab={(tab) => tab.ariaLabel}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="card">
                <div className="section-label">Styled Demo</div>
                <div className="demo-grid">
                    <div className="demo-block">
                        <div className="demo-title">Underline</div>
                        <AnimatedTabs
                            tabs={tabs}
                            active={underlineActive}
                            onChange={setUnderlineActive}
                            scrollable={scrollable}
                            className="underline-root"
                            listClassName="underline-list"
                            tabClassName={(tab, isActive) =>
                                `underline-tab${isActive ? " is-active" : ""}${tab.id === "analytics" ? " is-quiet" : ""}`
                            }
                            indicatorClassName="underline-indicator"
                            renderTab={(tab) => <span>{tab.ariaLabel}</span>}
                        />
                    </div>

                    <div className="demo-block">
                        <div className="demo-title">Pill</div>
                        <AnimatedTabs
                            tabs={tabs.slice(0, 3)}
                            active={pillActive}
                            onChange={setPillActive}
                            variant="pill"
                            className="pill-root"
                            tabClassName={(tab, isActive) => `pill-tab${isActive ? " is-active" : ""}`}
                            indicatorClassName="pill-indicator"
                            renderTab={(tab) => <span>{tab.ariaLabel}</span>}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
