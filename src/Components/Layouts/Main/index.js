import { Programs } from '../../Programs'
import { SideBar } from '../../SideBar'
import classes from './index.module.css'

export const Main = () => {
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <SideBar />
      </div>

      <div className={classes.tables}>
        <Programs />
      </div>
    </div>
  )
}
