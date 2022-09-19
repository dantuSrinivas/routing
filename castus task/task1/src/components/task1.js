import React from 'react'
import Card from './Card'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Task1 = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(0)

    async function apiCall() {
        try {
            const response = await axios.get("https://devapi.2gathers.com/api/events/list-events/?userId=5")
            console.log(response.data.listOfHostEvents[0].category)
            setData(response.data.listOfHostEvents)
            setLoading(1)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        // const timer = setTimeout(() => {
        //     setLoading(3)
        //     setData([])
        // }, 15000)
        apiCall()
        // return () => { clearTimeout(timer) }
    }, [])

    useEffect(() => {
        console.log("render")
    })

    if (loading === 1) {

    }

    return (
        <div className='items'>
            {
                loading === 1 ?
                    data.map((events) =>
                        <Card key={events.eventId} events={events} />
                    )
                    :
                    loading === 0 ?

                        <h1 className='center'>Loading....</h1>
                        :
                        <h1 className='center'>Time Out....</h1>
            }
        </div>
    )
}

export default Task1