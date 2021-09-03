import { Card } from '../../UI/Card'
import { Image } from '../../UI/Image'
import classes from './index.module.css'

export const ProgramItem = props => {
  return (
    <Card>
      <div className={classes.programItem}>
        <div className={classes.content}>
          <Image src={props.missionImage} alt={props.missionName} />
          <div>
            <h3 className={classes.title}>
              {props.missionName} #{props.flightNumber}
            </h3>
          </div>
          <div>
            <span className={classes.property}>Mission IDS:</span>
            <ul className={classes.lists}>
              {props.missionID.length === 0 ? (
                <li className={classes.listItem}>no IDS</li>
              ) : (
                props.missionID.map((item, i) => (
                  <li key={i} className={classes.listItem}>
                    {item}
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className={classes.group}>
            <span className={classes.property}>Launch Year:</span>
            <span className={classes.listItem}>{props.launchYear}</span>
          </div>
          <div className={classes.group}>
            <span className={classes.property}>Successful Launch:</span>
            <span className={classes.listItem}>{props.launchSuccess + ''}</span>
          </div>
          <div className={classes.group}>
            <span className={classes.property}>Successful Landing:</span>
            {props.landSuccess.first_stage.cores.map((item, i) => (
              <span className={classes.listItem} key={i}>
                {item.land_success ? 'true' : 'false'}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
