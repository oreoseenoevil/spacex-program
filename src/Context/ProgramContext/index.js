import { createContext, useContext, useEffect, useState } from 'react'
import { getDataAPI } from '../../Helpers'
import { API_URL, LAND, LAUNCH, YEAR } from '../../Keys'

export const useProgramContext = () => useContext(ProgramContext)

const defaultValues = {
  data: [],
  setData: () => {}
}

export const ProgramContext = createContext(defaultValues)

export const ProgramContextProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [launchedYear, setLaunchedYear] = useState('')
  const [successfulLaunch, setSuccessfulLaunch] = useState('')
  const [successfulLanding, setSuccessfulLanding] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [callback, setCallback] = useState(false)

  useEffect(() => {
    const getPrograms = async () => {
      setIsLoading(true)
      try {
        const res = await getDataAPI(
          `${API_URL}&${LAUNCH}=${successfulLaunch}&${LAND}=${successfulLanding}&${YEAR}=${launchedYear}`
        )

        setData(res.data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    getPrograms()
  }, [callback, successfulLanding, launchedYear, successfulLaunch])

  return (
    <ProgramContext.Provider
      value={{
        isLoading,
        callback,
        setCallback,
        data,
        setData,
        launchedYear,
        setLaunchedYear,
        successfulLaunch,
        setSuccessfulLaunch,
        setSuccessfulLanding,
        successfulLanding
      }}
    >
      {children}
    </ProgramContext.Provider>
  )
}
