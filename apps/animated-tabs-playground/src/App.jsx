import { AnimatedTabsPage } from "./pages/AnimatedTabsPage";

const pages = [
    {
        id: "animated-tabs",
        label: "Animated Tabs",
        description: "Measure base behavior and styled integration side by side.",
        component: AnimatedTabsPage
    }
];

export function App() {
    const activePage = pages[0];
    const ActivePage = activePage.component;

    return (
        <main className="page">
            <section className="shell">
                <header className="hero">
                    <p className="eyebrow">Component Playground</p>
                    <h1>Inspect each workspace component on its own page before publishing.</h1>
                    <p className="lede">
                        The app shell stays stable while each component lives in an isolated page
                        module. Adding the next component should be a file-level change, not a
                        rewrite of the main app.
                    </p>
                </header>

                <section className="layout">
                    <aside className="sidebar">
                        <div className="section-label">Pages</div>
                        <nav className="page-nav" aria-label="Component pages">
                            {pages.map((page) => (
                                <button
                                    key={page.id}
                                    type="button"
                                    className={`page-link${page.id === activePage.id ? " is-active" : ""}`}
                                >
                                    <span>{page.label}</span>
                                    <small>{page.description}</small>
                                </button>
                            ))}
                        </nav>
                    </aside>

                    <div className="content">
                        <ActivePage />
                    </div>
                </section>
            </section>
        </main>
    );
}
