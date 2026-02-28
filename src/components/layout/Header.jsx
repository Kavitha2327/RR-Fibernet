const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <img src="/logo.jpeg" alt="RR Fibernet" />
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Tariff Plans</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;