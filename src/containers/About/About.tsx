import React from 'react'

import ScrollingText from '../../components/UI/ScrollingText/ScrollingText'
import styles from './About.module.scss'
import photo from '../../assets/images/mkhb_grayscale.jpg'

const about = () => {
  const abilities = [
    { id: 0, label: 'UI developer' },
    { id: 1, label: 'researcher' },
    { id: 2, label: 'UX hobbyist' },
    { id: 3, label: 'tinkerer' },
    { id: 4, label: 'curious mind' },
    { id: 5, label: 'jiu jitsu purple belt' },
    { id: 6, label: 'Lego addict' },
  ]

  return (
    <div className={styles.About}>
      <div>
        Hi! I'm Mariah, a highly motivated <ScrollingText items={abilities} />{' '}
        in pursuit of best practices, intuitive designs, and compelling groups
        of three.
      </div>
      <img
        src={photo}
        alt="Mariah"
        style={{ borderRadius: '50px', contentVisibility: 'auto' }}
      />
    </div>
  )
}

export default about
