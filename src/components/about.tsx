const About = () => {
  return (
    <section className="py-20 px-4" id="about" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center gap-4 mb-12">
          <span className="text-secondary font-mono text-sm tracking-widest uppercase">01 / About</span>
          <div className="h-px flex-1" style={{ backgroundColor: "var(--border)" }}></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-14 items-start">

          {/* Photo */}
          <div className="shrink-0 w-full lg:w-64">
            <div className="relative">
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-secondary rounded-2xl"></div>
              <img
                src="./my-portfolio-icon.jpg"
                alt="Akinola Victor"
                className="relative rounded-2xl w-full lg:w-64 h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "var(--fg)" }}>
              Building software that
              <span className="text-secondary"> solves real problems.</span>
            </h2>

            <p className="text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              I'm a software engineer based in Lagos. I build scalable, user-centric applications across the stack — from system architecture to the UI layer. My background in Mathematics sharpens how I approach problem decomposition and logic.
            </p>

            <p className="text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              Currently studying at Lagos State University while shipping production software. I focus on building things that are fast, accessible, and maintainable.
            </p>

            <div className="flex gap-8 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
              <div>
                <p className="text-2xl font-bold" style={{ color: "var(--fg)" }}>10+</p>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>Projects shipped</p>
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: "var(--fg)" }}>2+</p>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>Years experience</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;