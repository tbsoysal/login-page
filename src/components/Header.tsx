function Header() {
  return (
    <header>
      <p className="label" onClick={() => location.reload()}>
        Done
      </p>
      <h2 className="heading">Welcome</h2>
    </header>
  );
}

export default Header;
