import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '/styles/navbar/navbar.module.css'
import { BiLogIn } from 'react-icons/bi'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <Image src="/img/Vector.png" width={70} height={62} alt="" />
            </a>
          </Link>

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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <h3 className="mt-2 me-4"> Europe School </h3>
              </li>
              <li className="nav-item">
                <p className={`${styles.orSign} me-3`}>|</p>
              </li>
              <li className="nav-item">
                <p className={`${styles.description}`}>
                  Инновационный учебный <br /> центр в Узбекистане
                </p>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="position-relative">
                  <h5 className={`${styles.phone} float-end`}>
                    +998 (95) 177-94-94 <br />
                    <span className={`${styles.workingTime} float-end`}>
                      Пн-cб 10:00-19:00
                    </span>
                  </h5>
                </div>
              </li>

              <li className="nav-item ms-3">
                <div className={`${styles.btnCourse} btn btn-outline-warning`}>
                  Записаться на курсы
                </div>
                <div className={`${styles.btnAccount} btn btn-primary ms-2`}>
                  <BiLogIn className={`${styles.btnAccountIcon} me-1`} />
                  Личный кабинет
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
