import * as Icons from "@stemui/icons";

const toLabel = (componentName) => componentName.replace(/Icon$/, "");

const toSourceFileName = (componentName) =>
    componentName
        .replace(/Icon$/, "")
        .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
        .toLowerCase();

export function IconsPage() {
    const icons = Object.entries(Icons)
        .filter(([, value]) => typeof value === "function")
        .map(([name, component]) => ({
            id: name,
            label: toLabel(name),
            sourceFileName: toSourceFileName(name),
            component
        }))
        .sort((left, right) => left.label.localeCompare(right.label));

    const firstIcon = icons[0]?.id ?? "YourIcon";

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
                <div className="icon-grid">
                    {icons.map((icon) => {
                        const Icon = icon.component;
                        return (
                            <article key={icon.id} className="icon-card">
                                <div className="icon-stage">
                                    <Icon size={32} title={icon.label} />
                                </div>
                                <div className="icon-meta">
                                    <strong>{icon.id}</strong>
                                    <code>{icon.sourceFileName}.svg</code>
                                </div>
                                <div className="icon-row">
                                    <Icon size={18} />
                                    <Icon size={24} color="#0f172a" />
                                    <Icon size={30} color="#d97706" />
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="card">
                <div className="section-label">Usage</div>
                <pre className="usage-block">{`import { ${firstIcon} } from "@stemui/icons";

function Example() {
    return <${firstIcon} size={18} color="currentColor" />;
}`}</pre>
            </section>
        </div>
    );
}
