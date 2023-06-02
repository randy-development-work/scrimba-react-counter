import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment } from "./counterSlice"

function Counter() {
    const dispatch = useDispatch()
    const count = useSelector(state => state.count)
    const running = useSelector(state => state.running)
    
    useEffect(() => {
        const id = setInterval(() => {
            if (running) {
                dispatch(increment())
            }
        }, 1000)
        
        // cleanup function for when the feature is unmounted
        // prevents running of the counter in the background
        return function cleanup() {
            clearInterval(id)
        }
    }, [running])
    
    return (
        <h1 id="count">Count: {count}</h1>
    )
}

export default Counter