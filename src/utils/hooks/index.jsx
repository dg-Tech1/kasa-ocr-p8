import { useState, useEffect } from 'react' // import des hooks, gérer les composants et effet de cotés.

//appel api avec loader
export function useFetch(url) { // export de l'url intérogée.
  const [data, setData] = useState({}) // état qui sera utilisé pour stocker les données API
  const [isLoading, setLoading] = useState(true) // état en cours de chargement, affichage indicateur de chargement....
  const [error, setError] = useState(false) // affichage des erreurs le cas échéants

  useEffect(() => { //Ce code utilise le hook useEffect pour effectuer une requête à une adresse web 
    if (!url) return //spécifique. Il gère l'état du chargement, stocke les données récupérées et signale les 
    setLoading(true)//erreurs. Les résultats sont renvoyés sous forme d'objet contenant ces états.
    async function fetchData() {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])
  return { isLoading, data, error }
}
