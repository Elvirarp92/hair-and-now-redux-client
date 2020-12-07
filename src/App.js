import { useEffect, useState } from 'react'
import { SalonCard } from './components/molecules'
import { buildUrl, getRequest } from './services/api.services'

function App() {
  const [salons, setSalons] = useState([])

  useEffect(() => {
    getRequest(buildUrl('/salons'))
      .then((response) => setSalons(response.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <main>
      {salons &&
        salons.map((salon) => <SalonCard key={salon.id} id={salon.id} name={salon.name} />)}
      <div>
        Icons made by{' '}
        <a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
          Freepik
        </a>{' '}
        from{' '}
        <a href='https://www.flaticon.com/' title='Flaticon'>
          www.flaticon.com
        </a>
      </div>
      <div>
        Icons made by{' '}
        <a href='https://www.flaticon.com/authors/gregor-cresnar' title='Gregor Cresnar'>
          Gregor Cresnar
        </a>{' '}
        from{' '}
        <a href='https://www.flaticon.com/' title='Flaticon'>
          www.flaticon.com
        </a>
      </div>
    </main>
  )
}

export default App
