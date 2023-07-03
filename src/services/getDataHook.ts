import axios, { AxiosError } from "axios"
import { useCallback, useEffect, useState } from "react"
type voidFunc = () => void

// Generic '<T>'
export default function useData<T>(url: string,
    initState: T = [] as T,
    errorCallback?: voidFunc): [T, React.Dispatch<React.SetStateAction<T>>, voidFunc, boolean] {
    const [data, setData] = useState<T>(initState)
    const [loading, setLoading] = useState(true)

    // const getData = useCallback(async () => {
    //     try {
    //         setLoading(true)
    //         const resData = (await axios.get<T>(url)).data
    //         setData(resData)
    //     } catch (error) {
    //         if (error instanceof AxiosError) {
    //             console.error(error)
    //             if (errorCallback) errorCallback()
    //         }
    //     } finally {
    //         setLoading(false)
    //     }

    // }, [url])
    // useEffect(() => {
    //     getData()
    // }, [getData])

    const getData = async () => {
        try {
            setLoading(true)
            const resData = (await axios.get<T>(url)).data
            setData(resData)
        } catch (error) {
            if (error instanceof AxiosError) {
                console.error(error)
                if (errorCallback) errorCallback()
            }
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getData()
    }, [url])
    const revalidate = useCallback(() => getData(), [getData])
    return [data, setData, revalidate, loading]
}