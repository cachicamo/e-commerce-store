import { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaUser } from 'react-icons'

import AuthContext from '../context/AuthContext'

import styles from '../styles/Header.module.css'

const Header = () => {

  const router = useRouter()
  const isHome = router.pathname === "/"
  const isLogin = router.pathname === "/login"

  const goBack = (e) => {
    e.preventDefault()
    router.push('/')
  }

  const { user } = useContext(AuthContext)
  return (
    <div className={styles.nav}>
      {!isHome && (
        <div className={styles.back}>
          <a href="#" onClick={goBack}>
            {"<-"} Back{" "}
          </a>
        </div>
      )}
      <div className={styles.title}>
        <Link href="/">
          <a>
            <h1>jpAIsys Store</h1>
          </a>
        </Link>
      </div>

      <div className={styles.auth}>
        {user && (
          <Link href="/account">
            {/* <a><FaUser /></a> */}
            <a><img src="/user_avatar.png" alt={user.email} /></a>
          </Link>
        )} 
        {!user && !isLogin && (
          <Link href="/login">
            <a>Log in</a>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header
