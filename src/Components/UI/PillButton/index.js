import classes from './index.module.css'

export const PillButton = ({ active, value, children, ...rest }) => {
  return (
    <button
      className={`${classes.button} ${active === value && classes.active}`}
      {...rest}
    >
      {children}
    </button>
  )
}
