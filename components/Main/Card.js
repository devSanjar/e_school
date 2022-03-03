import React from 'react'
import Image from 'next/image'
import styles from '/styles/Main/Card.module.css'

function Card() {
  return (
    <div className="container my-5">
      <div className="d-flex">
        <div className={`${styles.card} me-5`}>
          <div className="card-body">
            <Image
              src="/img/Earth-Globe.png"
              className="card-img-top ms-4 text-center"
              alt=""
              width={130}
              height={130}
            />
            <h5 className={`${styles.cardTite} card-title text-center`}>
              General English
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
