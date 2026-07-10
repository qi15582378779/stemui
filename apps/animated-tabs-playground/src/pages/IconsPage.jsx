import { useMemo, useState } from "react";

import * as Icons from "@stemui/icons";

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

export function IconsPage() {
    const [query, setQuery] = useState("");
    const [selectedIconId, setSelectedIconId] = useState(null);
    const icons = useMemo(
        () =>
            Object.entries(Icons)
                .filter(([, value]) => typeof value === "function")
                .map(([name, component]) => ({
                    id: name,
                    label: toLabel(name),
                    displayName: toDisplayName(name),
                    sourceFileName: toSourceFileName(name),
                    component
                }))
                .sort((left, right) => left.label.localeCompare(right.label)),
        []
    );

    const normalizedQuery = query.trim().toLowerCase();
    const filteredIcons = useMemo(
        () =>
            icons.filter((icon) => {
                if (!normalizedQuery) {
                    return true;
                }

                return [icon.id, icon.label, icon.sourceFileName].some((value) =>
                    value.toLowerCase().includes(normalizedQuery)
                );
            }),
        [icons, normalizedQuery]
    );

    const selectedIcon =
        filteredIcons.find((icon) => icon.id === selectedIconId) ?? filteredIcons[0] ?? icons[0];
    const usageIconId = selectedIcon?.id ?? "YourIcon";

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
                                </button>
                            );
                        })}
                    </div>

                    {selectedIcon ? (
                        <article className="icon-detail">
                            <div className="icon-detail-stage">
                                <selectedIcon.component size={52} title={selectedIcon.label} />
                            </div>
                            <div className="icon-detail-copy">
                                <p className="icon-detail-label">{selectedIcon.displayName}</p>
                                <h2>{selectedIcon.id}</h2>
                                <code>{selectedIcon.sourceFileName}.svg</code>
                            </div>
                            <div className="icon-size-strip">
                                <span className="icon-row-label">Sizes</span>
                                <span>
                                    16 <selectedIcon.component size={16} />
                                </span>
                                <span>
                                    20 <selectedIcon.component size={20} color="#0f172a" />
                                </span>
                                <span>
                                    24 <selectedIcon.component size={24} color="#d97706" />
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
