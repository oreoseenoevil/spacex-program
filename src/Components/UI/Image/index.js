import classes from './index.module.css'

export const Image = ({ src, alt }) => {
  return <img className={classes.image} src={src} alt={alt} />
}