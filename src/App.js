import { Footer } from './Components/Layouts/Footer'
import { Header } from './Components/Layouts/Header'
import { Main } from './Components/Layouts/Main'
import { ProgramContextProvider } from './Context/ProgramContext'

function App() {

  return (
    <ProgramContextProvider>
      <div className="App">
        <Header name="SpaceX Launch Program" />
        <Main />
        <Footer name="Jessie Tarrosa" />
      </div>
    </ProgramContextProvider>
  )
}

export default App
