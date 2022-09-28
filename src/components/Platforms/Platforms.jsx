import styles from './Platforms.module.css'
const Platforms = (props) => {
  return (
    <>
    <div className={styles.platform}>
      {props.platform.platform.name}
    </div>
    </>
  )
}

export default Platforms
