import { ProgramItem } from './ProgramItem'
import classes from './index.module.css'
import { VscLoading } from 'react-icons/vsc'
import { Fragment, useContext } from 'react'
import { ProgramContext } from '../../Context/ProgramContext'

export const Programs = () => {
  const { data, isLoading } = useContext(ProgramContext)

  return (
    <Fragment>
      {data.length === 0 && !isLoading && (
        <div className={classes.centered}>
          <h3>No Missions found.</h3>
        </div>
      )}
      {isLoading && (
        <div className={classes.centered}>
          <VscLoading className={classes.loading} size="5em" />
        </div>
      )}
      {data.length > 0 && !isLoading && (
        <div className={classes.programs}>
          {data.map(item => (
            <ProgramItem
              missionName={item.mission_name}
              flightNumber={item.flight_number}
              launchYear={item.launch_year}
              launchSuccess={item.launch_success}
              landSuccess={item.rocket}
              missionID={item.mission_id}
              missionImage={item.links.mission_patch_small}
              key={item.flight_number}
            />
          ))}
        </div>
      )}
    </Fragment>
  )
}
