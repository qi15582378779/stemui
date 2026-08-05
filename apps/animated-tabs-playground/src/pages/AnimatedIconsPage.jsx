import { useState } from "react";

import {
    AnimatedDashboardIcon,
    AnimatedLineArrowUpIcon,
    AnimatedLineLinkAttachmentIcon,
    AnimatedLineListTaskIcon
} from "@stemui/animated-icons";

const previewSwatches = [
    { id: "ink", name: "Ink", color: "#111827" },
    { id: "amber", name: "Amber", color: "#d97706" },
    { id: "rose", name: "Rose", color: "#e11d48" },
    { id: "teal", name: "Teal", color: "#0f766e" },
    { id: "violet", name: "Violet", color: "#7c3aed" }
];

const animatedIcons = [
    {
        id: "AnimatedDashboardIcon",
        label: "Dashboard",
        fileName: "AnimatedDashboardIcon.tsx",
        description: "Hover to drop the dashboard blocks into place.",
        component: AnimatedDashboardIcon,
        supportsTriggerSelection: true
    },
    {
        id: "AnimatedLineArrowUpIcon",
        label: "Line Arrow Up",
        fileName: "AnimatedLineArrowUpIcon.tsx",
        description: "Hover to launch the arrow and reveal the sparkle.",
        component: AnimatedLineArrowUpIcon,
        supportsTriggerSelection: false
    },
    {
        id: "AnimatedLineLinkAttachmentIcon",
        label: "Line Link Attachment",
        fileName: "AnimatedLineLinkAttachmentIcon.tsx",
        description: "Hover to bring the two link pieces together.",
        component: AnimatedLineLinkAttachmentIcon,
        supportsTriggerSelection: false
    },
    {
        id: "AnimatedLineListTaskIcon",
        label: "Line List Task",
        fileName: "AnimatedLineListTaskIcon.tsx",
        description: "Hover to scroll the list and reveal the next task state.",
        component: AnimatedLineListTaskIcon,
        supportsTriggerSelection: true
    }
];

export function AnimatedIconsPage() {
    const [selectedIconId, setSelectedIconId] = useState(animatedIcons[0].id);
    const [activeSwatchId, setActiveSwatchId] = useState(previewSwatches[0].id);
    const [activeTrigger, setActiveTrigger] = useState("hover");
    const selectedIcon =
        animatedIcons.find((icon) => icon.id === selectedIconId) ?? animatedIcons[0];
    const activeSwatch =
        previewSwatches.find((swatch) => swatch.id === activeSwatchId) ?? previewSwatches[0];
    const Icon = selectedIcon.component;
    const triggerProps = selectedIcon.supportsTriggerSelection
        ? { trigger: activeTrigger }
        : {};

    return (
        <div className="page-stack">
            <section className="card">
                <div className="section-label">Animated Icon Grid</div>
                <div className="icon-toolbar">
                    <div className="icon-toolbar-copy">
                        <div className="icon-stats">
                            <strong>{animatedIcons.length}</strong>
                            <span>animated icon ready to preview</span>
                        </div>
                        <p className="icon-toolbar-note">
                            Select an icon on the left and hover the large preview on the right.
                        </p>
                    </div>
                </div>

                <div className="icon-browser">
                    <div className="icon-catalog" role="list" aria-label="Available animated icons">
                        {animatedIcons.map((icon) => {
                            const TileIcon = icon.component;
                            const isActive = icon.id === selectedIcon.id;

                            return (
                                <button
                                    key={icon.id}
                                    type="button"
                                    className={`icon-tile${isActive ? " is-active" : ""}`}
                                    onClick={() => setSelectedIconId(icon.id)}
                                    aria-label={icon.id}
                                    title={icon.id}
                                >
                                    <span className="icon-tile-stage animated-icon-tile-stage">
                                        <TileIcon size={36} color="#111827" aria-hidden="true" />
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    <article className="icon-detail">
                        <div className="icon-detail-stage animated-icon-detail-stage">
                            <Icon
                                size={96}
                                color={activeSwatch.color}
                                {...triggerProps}
                                aria-label={selectedIcon.label}
                            />
                        </div>
                        <div className="icon-detail-copy">
                            <p className="icon-detail-label">Animated Icon</p>
                            <h2>{selectedIcon.id}</h2>
                            <code>{selectedIcon.fileName}</code>
                            <p className="icon-toolbar-note">{selectedIcon.description}</p>
                        </div>
                        <div className="icon-size-strip">
                            <span className="icon-row-label">Sizes</span>
                            {[16, 24, 32].map((size) => (
                                <span key={size}>
                                    {size} <Icon size={size} color={activeSwatch.color} aria-hidden="true" />
                                </span>
                            ))}
                        </div>
                        <div className="icon-swatch-strip" aria-label="Preview animated icon colors">
                            <span className="icon-row-label">Color test</span>
                            <div className="icon-swatch-list" role="list">
                                {previewSwatches.map((swatch) => {
                                    const isActive = swatch.id === activeSwatch.id;

                                    return (
                                        <button
                                            key={swatch.id}
                                            type="button"
                                            className={`icon-swatch${isActive ? " is-active" : ""}`}
                                            onClick={() => setActiveSwatchId(swatch.id)}
                                            aria-pressed={isActive}
                                            aria-label={`Preview ${selectedIcon.id} with ${swatch.name}`}
                                            title={`${swatch.name} ${swatch.color}`}
                                        >
                                            <span
                                                className="icon-swatch-chip"
                                                style={{ backgroundColor: swatch.color }}
                                            />
                                            <span>{swatch.name}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="animated-icon-trigger-strip" aria-label="Animated icon triggers">
                            <span className="icon-row-label">Triggers</span>
                            <div className="animated-icon-trigger-list">
                                {(selectedIcon.supportsTriggerSelection
                                    ? [
                                          ["hover", "Hover"],
                                          ["click", "Click"]
                                      ]
                                    : [["hover", "Hover"]]
                                ).map(([trigger, label]) => (
                                    <button
                                        key={trigger}
                                        type="button"
                                        className={`animated-icon-trigger-chip${activeTrigger === trigger ? " is-active" : ""}`}
                                        onClick={() => setActiveTrigger(trigger)}
                                        aria-pressed={activeTrigger === trigger}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                            <p>
                                {selectedIcon.supportsTriggerSelection
                                    ? "Select a trigger, then operate the large preview above to test it."
                                    : "This icon currently plays when the icon itself is hovered."}
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="card">
                <div className="section-label">Usage</div>
                <pre className="usage-block">{`import { useState } from "react";
import { AnimatedLineListTaskIcon } from "@stemui/animated-icons";

function Example() {
    return (
        <AnimatedLineListTaskIcon
            size={24}
            color="#7c3aed"
            duration={0.9}
            trigger="hover"
            loop={false}
            aria-label="Task list"
            onClick={() => console.log("icon clicked")}
        />
    );
}

// trigger: "hover" | "click"

function ParentControlledExample() {
    const [active, setActive] = useState(false);

    return (
        <div onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
            <AnimatedLineListTaskIcon
                active={active}
                loop={false}
            />
        </div>
    );
}`}</pre>
            </section>
        </div>
    );
}
