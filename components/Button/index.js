import styles from './Button.module.css'

const Button = ({ type = "button", name = "btn", classes, onClick, disabled, children }) => {
  const extraProps = [];
  if (disabled) {
    extraProps['disabled'] = true
  }

  return <button
    type={type}
    name={name}
    className={`${styles.btn} ${styles.btn__primary} ${classes}`}
    onClick={onClick}
    {...extraProps}
  >
    {children}
  </button>
}

export default Button