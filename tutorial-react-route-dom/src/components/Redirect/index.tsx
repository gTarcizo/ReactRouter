import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

export const Redirect = () => {
    const [time, setTime] = useState(3)
    const timeout = useRef(0)
    const navigate = useNavigate()

    useEffect(()=> {
        clearTimeout(timeout.current)
        timeout.current = setTimeout(() => {
            setTime(t => t-1)
        }, 1000);
        if( time <= 0) navigate('/')

        return ()=>{
            clearTimeout(timeout.current)
        }
    }, [time])

    return (
    <div className='redirect'>
        <h1>Redirecting!</h1>
        <h3>Getting out of here in: {time}</h3>
    </div>
    )
}