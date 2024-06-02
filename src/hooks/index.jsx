import { useState, useEffect } from 'react'

export function useFetch(url) {
    const [data, setData] = useState({})
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
            } catch (err) {
                setError(true)
            }
        }
        fetchData()
    }, [url])
    return { data, error }
}
