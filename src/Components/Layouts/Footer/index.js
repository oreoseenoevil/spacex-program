import classes from './index.module.css'

export const Footer = ({name}) => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerDetails}>
        <span className={classes.spanOne}>
          Developed By:
        </span>
        <span className={classes.spanTwo}>
          {name}
        </span>
      </div>
    </div>
  )
}