import axios from 'axios'
import { useEffect, useState } from 'react'

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
      <h1>Placeholder</h1>
    </main>
  )
}

export default App
