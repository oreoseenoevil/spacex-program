import { useContext } from 'react'
import { ProgramContext } from '../../Context/ProgramContext'
import { Filters } from '../Filters'
import { Card } from '../UI/Card'
import { PillButton } from '../UI/PillButton'

export const SideBar = props => {
  const {
    launchedYear,
    setLaunchedYear,
    successfulLanding,
    setSuccessfulLanding,
    successfulLaunch,
    setSuccessfulLaunch
  } = useContext(ProgramContext)

  let years = []

  for (let i = 2006; i < 2021; i++) {
    years.push(i)
  }

  const divStyle = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  }

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 700
  }

  const buttonStyle = {
    padding: '.5rem 2rem',
    borderRadius: '.5rem',
    background: '#fff',
    color: '#000',
    border: '1px solid #999',
    cursor: 'pointer',
  }

  const resetHandler = () => {
    setLaunchedYear('')
    setSuccessfulLanding('')
    setSuccessfulLaunch('')
  }

  return (
    <Card>
      <div style={divStyle}>
        <h3 style={titleStyle}>Filters</h3>
        <PillButton style={buttonStyle} onClick={resetHandler}>
          Reset
        </PillButton>
      </div>
      <Filters
        name="Launch Year"
        values={years}
        active={launchedYear}
        onSetClick={setLaunchedYear}
      />
      <Filters
        name="Successful Launch"
        values={[true, false]}
        active={successfulLaunch}
        onSetClick={setSuccessfulLaunch}
      />
      <Filters
        name="Successful Landing"
        values={[true, false]}
        active={successfulLanding}
        onSetClick={setSuccessfulLanding}
      />
    </Card>
  )
}
