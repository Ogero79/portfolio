export default function DesignPage() {
  const swatches = [
    { label: 'Accent', value: 'var(--accent)', description: 'Primary brand glow' },
    { label: 'Surface', value: 'var(--surface)', description: 'Glass surface base' },
    { label: 'Foreground', value: 'var(--foreground)', description: 'Body text' },
  ];

  return (
    <main className="page-shell py-24">
      <div className="section-heading">
        <span className="section-label">Design tokens</span>
        <h1 className="section-title">Visual primitives at a glance</h1>
        <p className="section-subtitle">Reference sheet used while crafting this bespoke portfolio interface.</p>
      </div>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="glass-panel soft p-6 rounded-3xl">
          <h2 className="text-sm uppercase tracking-widest text-slate-400/80 mb-4">Palette</h2>
          <div className="space-y-4">
            {swatches.map((swatch) => (
              <div key={swatch.label} className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-2xl border border-[rgba(148,163,184,0.28)]"
                  style={{ background: swatch.value }}
                ></div>
                <div>
                  <strong className="block text-sm text-white">{swatch.label}</strong>
                  <span className="text-xs text-slate-400/80">{swatch.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel soft p-6 rounded-3xl">
          <h2 className="text-sm uppercase tracking-widest text-slate-400/80 mb-4">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <button className="button-primary">Primary CTA</button>
            <button className="button-secondary">Secondary CTA</button>
            <button className="ghost-button">Ghost button</button>
          </div>
        </div>
      </section>

      <section className="mt-10 glass-panel soft p-6 rounded-3xl">
        <h2 className="text-sm uppercase tracking-widest text-slate-400/80 mb-4">Card shell</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((card) => (
            <div key={card} className="skill-card">
              <span className="tag-badge">Token {card}</span>
              <p className="text-sm text-slate-300/80 mt-3">
                Glass panel example showing how tokens combine to form elevated modules.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
