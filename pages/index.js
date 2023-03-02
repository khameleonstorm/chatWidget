import styles from '../styles/Home.module.css'
import { IoIosChatbubbles } from "react-icons/io"
import { useEffect, useState } from 'react'

export default function Home() {
  const [showGreet, setShowGreet] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreet(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])


  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <IoIosChatbubbles />
      </div>
      {showGreet &&<div className={styles.greeting}><p>Hey! Need help?</p></div>}
    </div>
  )
}
