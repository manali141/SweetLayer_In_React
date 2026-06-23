function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footerContain">

          {/* Info */}
          <div className="footerInfo">
            <h2>Sweet Layers</h2>
            <p>
              Crafting sweet moments and beautiful layers for your special occasions.
            </p>
          </div>

          {/* Menu */}
          <div className="footerMenu">
            <a href="/" className="nav-link">Home</a>
            <a href="/Menu" className="nav-link">Cakes</a>
            <a href="/my-orders" className="nav-link">My Orders</a>
          </div>

        </div>

        <hr />

        <div className="footerCopyRight">
          <p>© 2026 Sweet Layers Bakery. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;