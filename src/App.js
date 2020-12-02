import axios from 'axios'
import { useEffect, useState } from 'react'
import { SalonCard } from './components/molecules'

function App() {
  const cancelTokenSource = axios.CancelToken.source()

  const [salons, setSalons] = useState([])
  const [err, setError] = useState(undefined)

  function refreshSalons() {
    axios
      .get(`http://localhost:5000/salons`, { cancelToken: cancelTokenSource.token })
      .then((response) => setSalons(response.data))
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('call cancelled')
        } else {
          setError(err)
        }
      })
  }

  useEffect(() => refreshSalons(), [])

  return (
    <main>
      {salons.map((salon) => (
        <SalonCard key={salon.id} id={salon.id} name={salon.name}/>
      ))}
    </main>
  )
}

export default App
