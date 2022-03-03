import React from 'react'
import styles from '/styles/Main/MainSection.module.css'
import Image from 'next/image'

function MainSection() {
  return (
    <div className="container">
      <div className="row position-relative">
        <div className="col" style={{ paddingTop: '8%' }}>
          <p className={`${styles.mainContext}`}>
            Получите качественное обучение по
            <span className={`${styles.textSpanColor}`}> оксфордской </span>
            методике
          </p>

          <div>
            <p className={`${styles.description}`}>
              За 7 лет в Учебном центре EUROPE SCHOOL обучалось более 40 000
              человек.
            </p>
          </div>

          <div className="d-flex flex-row align-items-center mb-3">
            <div className={`${styles.btnCourse} btn btn-warning me-2 py-2 `}>
              Записаться на курсы
            </div>
            <div>
              <Image
                src="/img/play.png"
                width={38}
                height={38}
                alt=""
                className={`${styles.playIcon}`}
              />
            </div>

            <div>
              <p
                className="m-0 ms-2"
                style={{ color: 'rgba(174, 174, 174, 1)', fontSize: '12px' }}
              >
                Начало занятий
              </p>
              <p
                className="m-0 mb-1 ms-2"
                style={{
                  color: 'rgba(30, 30, 30, 1)',
                  fontSize: '13px',
                  fontWeight: 500,
                }}
              >
                22 февраль 2022г.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <Image src="/img/woman.png" width={500} height={462} alt="" />
        </div>

        {/* <div
          className="position-absolute"
          style={{ bottom: '26px', left: '430px' }}
        >
          <Image
            src="/img/Ellipse29.png"
            width={110}
            height={110}
            alt=""
            className={styles.blueElipse}
          />
        </div> */}

      </div>
    </div>
  )
}

export default MainSection
