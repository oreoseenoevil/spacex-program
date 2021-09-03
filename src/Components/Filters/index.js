import { useContext } from 'react'
import { ProgramContext } from '../../Context/ProgramContext'
import { Card } from '../UI/Card'
import { PillButton } from '../UI/PillButton'
import classes from './index.module.css'

export const Filters = props => {
  const { callback, setCallback } = useContext(ProgramContext)

  const clickHandler = value => {
    props.onSetClick(value + '')
    setCallback(!callback)
  }

  return (
    <Card>
      <h3 className={classes.filterName}>{props.name}</h3>
      <hr />
      <div className={classes.buttons}>
        {props.values.map((value, i) => (
          <PillButton
            key={i}
            active={props.active}
            value={value + ''}
            onClick={() => clickHandler(value)}
          >
            {value + ''}
          </PillButton>
        ))}
      </div>
    </Card>
  )
}
