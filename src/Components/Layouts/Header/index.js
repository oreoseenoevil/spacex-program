import { useContext } from 'react'
import { ProgramContext } from '../../../Context/ProgramContext'
import classes from './index.module.css'

export const Header = ({ name }) => {
  const { data } = useContext(ProgramContext)
  return (
    <header className={classes.header}>
      <h1 className={classes.headerName}>{name}</h1>
      <h1 className={classes.headerName}>Total Results: {data.length}</h1>
    </header>
  )
}
