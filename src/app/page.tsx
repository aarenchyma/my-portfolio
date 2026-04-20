import Navbar from "../components/navBar";
import Projects from "../components/projects";
import About from "../components/about";
import HeroText from "../components/heroText";

const Home = () => {
  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--fg)" }}>
      <Navbar />

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center px-4" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-5xl mx-auto w-full pt-24 pb-16">

          <p className="text-secondary font-mono text-sm tracking-widest uppercase mb-6">
            Available for work
          </p>

          <HeroText />

          <p className="text-base md:text-xl max-w-2xl mt-6 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
            Software engineer based in Lagos. I build production-grade web and mobile applications — from backend architecture to polished UIs.
          </p>

          <div className="flex items-center gap-6 mt-10 text-2xl">
            <a href="https://github.com/Alphaboy20023" target="_blank" rel="noopener noreferrer"
              className="hover:text-secondary transition-colors" style={{ color: "var(--fg-muted)" }}>
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/victor-akinola-27a33b320/" target="_blank" rel="noopener noreferrer"
              className="hover:text-secondary transition-colors" style={{ color: "var(--fg-muted)" }}>
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://x.com/prime_victor1?s=21&t=Z1QhoYzPavAh5Tqb3mWWtQ" target="_blank" rel="noopener noreferrer"
              className="hover:text-secondary transition-colors" style={{ color: "var(--fg-muted)" }}>
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://wa.link/lakfbz" target="_blank" rel="noopener noreferrer"
              className="hover:text-secondary transition-colors" style={{ color: "var(--fg-muted)" }}>
              <i className="fa-brands fa-square-whatsapp"></i>
            </a>
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <a href="#projects"
              className="bg-secondary text-dark-primary px-6 py-3 rounded-lg font-semibold hover:bg-secondary/80 transition-colors">
              See my work
            </a>
            <a href="/documents/Akinola_Victor_CV.pdf"
              className="px-6 py-3 rounded-lg font-semibold transition-colors hover:text-secondary"
              style={{ border: "1px solid var(--border)", color: "var(--fg-muted)" }}>
              Download CV
            </a>
          </div>
        </div>
      </section>

      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-secondary font-mono text-sm tracking-widest uppercase">03 / Contact</span>
            <div className="h-px flex-1" style={{ backgroundColor: "var(--border)" }}></div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--fg)" }}>
                Have a project in mind?
              </h2>
              <p className="text-base max-w-md" style={{ color: "var(--fg-muted)" }}>
                I'm open to freelance work, collaborations, and full-time roles. Reach out directly and I'll get back within 24 hours.
              </p>
            </div>
            <a href="mailto:timivictor565@gmail.com"
              className="shrink-0 bg-secondary text-dark-primary font-bold px-8 py-4 rounded-lg hover:bg-secondary/80 transition-colors text-center">
              timivictor565@gmail.com
            </a>
          </div>

          <div className="mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm"
            style={{ borderTop: "1px solid var(--border)", color: "var(--fg-muted)" }}>
            <p>© {new Date().getFullYear()} Akinola Victor</p>
            <div className="flex gap-6">
              <a href="https://github.com/Alphaboy20023" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/victor-akinola-27a33b320/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">LinkedIn</a>
              <a href="mailto:timivictor565@gmail.com" className="hover:text-secondary transition-colors">Email</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;