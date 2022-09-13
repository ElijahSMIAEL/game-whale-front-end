import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}. Welcome to GameWhale</h1>
    </main>
  )
}

export default Landing
