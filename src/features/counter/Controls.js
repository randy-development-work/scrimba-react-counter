import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, incrementBy, toggleRunning } from "./counterSlice"

function Controls() {
    const dispatch = useDispatch()
    const running = useSelector(state => state.running)
    
    function handleMinusClick() {
        dispatch(decrement())
    }
    
    return (
        <div>
            <button id="minus" onClick={handleMinusClick}>-</button>
            <button id="plus" onClick={() => dispatch(incrementBy(10))}>+</button>
            <button id="play" onClick={() => dispatch(toggleRunning())}>{running ? "⏸" : "▶️"}</button>
        </div>
    )
}

export default Controls