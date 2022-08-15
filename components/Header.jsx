
function Header(){

    return (
    // Nav Bar
      <nav className="navbar navbar-expand-md navbar-dark">
        <a className="navbar-brand" href="">مِهرآفرین</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse nav-div w-100 order-3" id="navbarTogglerDemo01">

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#footer">تماس</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">همکاری</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">اعضا</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#events">پویش ها</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">فعالیت ها</a>
            </li>
          </ul>
        </div>
    </nav>
    );
}

export default Header;