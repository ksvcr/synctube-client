import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
const ENDPOINT = 'http://127.0.0.1:3000'
interface IIoData {
    data?: string
}

let socket = io.connect(ENDPOINT)

function App() {
    const [response, setResponse] = useState<IIoData>({})

    useEffect(() => {
        socket.on('news', (data: IIoData) => {
            setResponse(data)
        })
    }, [])

    function handleSent() {
        socket.emit('my other event', { data: 'client req' })
    }

    return (
        <>
            <p>{response.data}</p>
            <button type="button" onClick={handleSent}>
                sent
            </button>
        </>
    )
}

export default App
