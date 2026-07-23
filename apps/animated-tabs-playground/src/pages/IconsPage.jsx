import { useMemo, useState } from "react";

import * as Icons from "@stemui/icons";

const recentIconIdSet = new Set(Icons.recentIconIds ?? []);

const previewSwatches = [
    { id: "ink", name: "Ink", color: "#111827" },
    { id: "amber", name: "Amber", color: "#d97706" },
    { id: "rose", name: "Rose", color: "#e11d48" },
    { id: "teal", name: "Teal", color: "#0f766e" },
    { id: "violet", name: "Violet", color: "#7c3aed" }
];

const toLabel = (componentName) => componentName.replace(/Icon$/, "");

const toSourceFileName = (componentName) =>
    componentName
        .replace(/Icon$/, "")
        .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
        .toLowerCase();

const toDisplayName = (componentName) =>
    componentName
        .replace(/^Line/, "")
        .replace(/Icon$/, "")
        .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
        .trim();

const getPrefixGroup = (componentName) => {
    const normalizedName = componentName.replace(/Icon$/, "");
    const match = normalizedName.match(/^[A-Z]+(?=[A-Z][a-z]|$)|^[A-Z][a-z]+/);

    return (match?.[0] ?? "misc").toLowerCase();
};

export function IconsPage() {
    const [query, setQuery] = useState("");
    const [selectedIconId, setSelectedIconId] = useState(null);
    const [activeSwatchId, setActiveSwatchId] = useState(previewSwatches[0].id);
    const [activePrefixFilter, setActivePrefixFilter] = useState("all");
    const icons = useMemo(
        () =>
            Object.entries(Icons)
                .filter(([, value]) => typeof value === "function")
                .map(([name, component]) => ({
                    id: name,
                    label: toLabel(name),
                    displayName: toDisplayName(name),
                    sourceFileName: toSourceFileName(name),
                    prefixGroup: getPrefixGroup(name),
                    isNew: recentIconIdSet.has(name),
                    component
                }))
                .sort(
                    (left, right) =>
                        Number(right.isNew) - Number(left.isNew) ||
                        left.label.localeCompare(right.label)
                ),
        []
    );
    const prefixFilters = useMemo(() => {
        const prefixes = Array.from(new Set(icons.map((icon) => icon.prefixGroup))).sort();

        return [{ id: "all", label: "All" }, ...prefixes.map((prefix) => ({ id: prefix, label: prefix }))];
    }, [icons]);

    const normalizedQuery = query.trim().toLowerCase();
    const filteredIcons = useMemo(
        () =>
            icons.filter((icon) => {
                if (activePrefixFilter !== "all" && icon.prefixGroup !== activePrefixFilter) {
                    return false;
                }

                if (!normalizedQuery) {
                    return true;
                }

                return [icon.id, icon.label, icon.sourceFileName].some((value) =>
                    value.toLowerCase().includes(normalizedQuery)
                );
            }),
        [activePrefixFilter, icons, normalizedQuery]
    );
    const prefixCounts = useMemo(() => {
        const counts = { all: icons.length };

        icons.forEach((icon) => {
            counts[icon.prefixGroup] = (counts[icon.prefixGroup] ?? 0) + 1;
        });

        return counts;
    }, [icons]);

    const selectedIcon =
        filteredIcons.find((icon) => icon.id === selectedIconId) ?? filteredIcons[0] ?? icons[0];
    const usageIconId = selectedIcon?.id ?? "YourIcon";
    const activeSwatch =
        previewSwatches.find((swatch) => swatch.id === activeSwatchId) ?? previewSwatches[0];

    return (
        <div className="page-stack">
            <section className="card">
                <div className="section-label">Pipeline</div>
                <div className="flow-note">
                    UI engineer drops SVG files into <code>packages/icons/svg</code>. The package
                    build script converts them into typed React components and exports them from{" "}
                    <code>@stemui/icons</code>.
                </div>
            </section>

            <section className="card">
                <div className="section-label">Icon Grid</div>
                <div className="icon-toolbar">
                    <div className="icon-toolbar-copy">
                        <div className="icon-stats">
                            <strong>{filteredIcons.length}</strong>
                            <span>
                                {filteredIcons.length === icons.length
                                    ? "icons ready to scan"
                                    : `matching results out of ${icons.length}`}
                            </span>
                        </div>
                        <p className="icon-toolbar-note">Search by component name or source file.</p>
                    </div>
                    <label className="icon-search">
                        <span className="sr-only">Search icons</span>
                        <input
                            type="search"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="Search by component or svg file"
                        />
                    </label>
                </div>
                <div className="icon-prefix-bar" role="tablist" aria-label="Filter icons by prefix">
                    {prefixFilters.map((filter) => {
                        const isActive = filter.id === activePrefixFilter;

                        return (
                            <button
                                key={filter.id}
                                type="button"
                                className={`icon-prefix-pill${isActive ? " is-active" : ""}`}
                                onClick={() => setActivePrefixFilter(filter.id)}
                                aria-pressed={isActive}
                            >
                                <span>{filter.label}</span>
                                <span>{prefixCounts[filter.id] ?? 0}</span>
                            </button>
                        );
                    })}
                </div>
                <div className="icon-browser">
                    <div className="icon-catalog" role="list" aria-label="Available icons">
                        {filteredIcons.map((icon) => {
                            const Icon = icon.component;
                            const isActive = selectedIcon?.id === icon.id;

                            return (
                                <button
                                    key={icon.id}
                                    type="button"
                                    className={`icon-tile${isActive ? " is-active" : ""}`}
                                    onClick={() => setSelectedIconId(icon.id)}
                                    aria-label={icon.id}
                                    title={icon.id}
                                >
                                    <span className="icon-tile-stage icon-tile-stage--compact">
                                        <Icon size={24} title={icon.label} />
                                    </span>
                                    {icon.isNew ? (
                                        <span
                                            className="icon-new-dot"
                                            aria-label="New icon"
                                            title="New"
                                        />
                                    ) : null}
                                </button>
                            );
                        })}
                    </div>

                    {selectedIcon ? (
                        <article className="icon-detail">
                            <div
                                className="icon-detail-stage"
                                style={{ color: activeSwatch.color }}
                            >
                                <selectedIcon.component size={52} title={selectedIcon.label} />
                            </div>
                            <div className="icon-detail-copy">
                                <p className="icon-detail-label">{selectedIcon.displayName}</p>
                                <h2>{selectedIcon.id}</h2>
                                <code>{selectedIcon.sourceFileName}.svg</code>
                            </div>
                            <div className="icon-swatch-strip" aria-label="Preview icon colors">
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
                            <div className="icon-size-strip">
                                <span className="icon-row-label">Sizes</span>
                                <span>
                                    16{" "}
                                    <selectedIcon.component
                                        size={16}
                                        color={activeSwatch.color}
                                    />
                                </span>
                                <span>
                                    20{" "}
                                    <selectedIcon.component
                                        size={20}
                                        color={activeSwatch.color}
                                    />
                                </span>
                                <span>
                                    24{" "}
                                    <selectedIcon.component
                                        size={24}
                                        color={activeSwatch.color}
                                    />
                                </span>
                            </div>
                        </article>
                    ) : null}
                </div>
                {filteredIcons.length === 0 ? (
                    <div className="icon-empty">No icons match the current search.</div>
                ) : null}
            </section>

            <section className="card">
                <div className="section-label">Usage</div>
                <pre className="usage-block">{`import { ${usageIconId} } from "@stemui/icons";

function Example() {
    return <${usageIconId} size={18} color="currentColor" />;
}`}</pre>
            </section>
        </div>
    );
}
