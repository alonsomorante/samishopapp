import './styles/style.css'
import { useStarWarsData } from './hooks/useStarWarsData'
import LoadingCell from './components/LoadingCell'
import NoticeCell from './components/NoticeCell'
import Header from './components/Header'
import Person from './components/Person'

function App () {
  const { people, loading, error } = useStarWarsData()

  return (
    <>
      <main>
        <h2 className='header__desktop'>Ravn Star Wars Registry</h2>
        {
          loading
            ? (
              <>
                <Header>
                  People of Star Wars
                </Header>
                <LoadingCell />
              </>
              )
            : (
              <Person people={people} />
              )
        }
        {error && <NoticeCell />}
      </main>
    </>
  )
}

export default App
