import { FaGithub } from 'react-icons/fa'
import styles from './styles.module.scss'
import { FiX } from 'react-icons/fi'

export function SigninButton() {
  const isUserLoggedIN = true

  return isUserLoggedIN ? (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#04d361" />
      Renan Cesar
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#eba417" />
      Sign in Github
    </button>
  )
}
