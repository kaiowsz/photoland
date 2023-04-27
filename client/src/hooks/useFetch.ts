import { useState, useEffect } from "react";
import { request } from "../request"

const useFetch = (url: string) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            try {
                const res = await request.get(url)
                setData(res.data.data)
            } catch (error: any) {
                setError(error)
            }
            setIsLoading(false)
        }
        fetchData()
    }, [url])

    return { data, isLoading, error }
}

export { useFetch }