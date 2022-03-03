import React from 'react'
import styles from '/styles/navbar/NavbarMenu.module.css'

function NavbarMenu() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

              <li className="nav-item me-4">
                <h6 className={ `nav-link ${ styles.navItem, styles.active }` } aria-current="page"  >
                  Курсы
                </h6>
              </li>

              <li className="nav-item me-4">
                <h6 className={ `nav-link ${ styles.navItem }` } aria-current="page"  >
                  Преподаватели
                </h6>
              </li>

              <li className="nav-item me-4">
                <h6 className={ `nav-link ${ styles.navItem }` } aria-current="page"  >
                  Отзывы
                </h6>
              </li>

              <li className="nav-item me-4">
                <h6 className={ `nav-link ${ styles.navItem }` } aria-current="page"  >
                  Адреса
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarMenu
