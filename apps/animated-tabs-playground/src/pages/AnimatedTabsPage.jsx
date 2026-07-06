import { useState } from "react";

import { AnimatedTabs } from "@stemui/animated-tabs";

const tabs = [
    { id: "post", ariaLabel: "Post" },
    { id: "engage", ariaLabel: "Engage" },
    { id: "publish", ariaLabel: "Publish" },
    { id: "schedule", ariaLabel: "Schedule" },
    { id: "analytics", ariaLabel: "Analytics" }
];

export function AnimatedTabsPage() {
    const [underlineActive, setUnderlineActive] = useState("post");
    const [baseUnderlineActive, setBaseUnderlineActive] = useState("engage");
    const [pillActive, setPillActive] = useState("engage");
    const [basePillActive, setBasePillActive] = useState("post");
    const [scrollable, setScrollable] = useState(false);

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
