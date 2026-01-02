export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <span className="brand-mark">trained</span>
          <span className="brand-accent">byvivek</span>
        </div>
        <nav className="nav">
          <a href="#about">Home</a>
          <a href="#transformations">Transformations</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn btn-small" href="#contact">
          Get Started
        </a>
      </div>
    </header>
  );
}
