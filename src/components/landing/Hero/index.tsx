import { type Variants, motion } from 'framer-motion'

import Translate from '@docusaurus/Translate'

import HeroSvg from './img/hero.svg'

import SocialLinks from '@site/src/components/SocialLinks'
import { MovingButton } from '../../magicui/moving-border'
import styles from './styles.module.css'

const variants: Variants = {
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 100,
      duration: 0.3,
      delay: i * 0.3,
    },
  }),
  hidden: { opacity: 0, y: 30 },
}

function Circle() {
  return <div className={styles.circle} />
}

function Name() {
  return (
    <motion.div
      className={styles.hero_text}
      custom={1}
      initial="hidden"
      animate="visible"
      variants={variants}
      onMouseMove={(e) => {
        e.currentTarget.style.setProperty('--x', `${e.clientX}px`)
        e.currentTarget.style.setProperty('--y', `${e.clientY}px`)
      }}
    >
      <Translate id="homepage.hero.greet">你好! 我是</Translate>
      <span
        className={styles.name}
        // onMouseMove={(e) => {
        //   const bounding = e.currentTarget.getBoundingClientRect()
        //   e.currentTarget.style.setProperty('--mouse-x', `${bounding.x}px`)
        //   e.currentTarget.style.setProperty('--mouse-y', `${bounding.y}px`)
        // }}
      >
        <Translate id="homepage.hero.name">東方</Translate>
      </span>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <motion.div className={styles.hero}>
      <div className={styles.intro}>
        <Name />
        <motion.p custom={2} initial="hidden" animate="visible" variants={variants} className="max-lg:px-4">
          <Translate id="homepage.hero.text" values={{ br: <br />, cvLink: (<a href="https://east-lu.me/onlineCV/" target="_blank" rel="noopener noreferrer">東方異聞錄</a>) }}>
            {`我是一名解決方案架構師、資深TPM。{br}熱愛技術與分享，喜歡探索新事物，並且樂於與人交流。{br}目前網站正在邁向新版本，若要參考我的CV請前往 {cvLink}`}
          </Translate>
        </motion.p>
        <motion.div custom={3} initial="hidden" animate="visible" variants={variants}>
          <SocialLinks />
        </motion.div>
      </div>
      <motion.div className={styles.background}>
        <HeroSvg />
        <Circle />
      </motion.div>
    </motion.div>
  )
}
