import { createStore } from "redux"
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        running: true
    },
    reducers: {
        increment: state => {
            state.count += 1
        },
        decrement: state => {
            state.count -= 1
        },
        toggleRunning: state => {
            state.running = !state.running
        },
        incrementBy: (state, action) => {
            state.count += action.payload
        }
    }
})

const store = createStore(slice.reducer)

store.subscribe(render)

function render() {
    const state = store.getState()
    const count = document.querySelector("#count")
    
    // get the current count and display it
    count.textContent = `Count: ${state.count}`
    
    // show a play button or pause button based on state
    document.querySelector("#play").textContent = state.running ? "⏸" : "▶️"
}

setInterval(() => {
    const state = store.getState()
    // check if the app is paused or not
    if (state.running) {
        // dispatch an action to increase the count by 1
        store.dispatch(slice.actions.increment())
    }
}, 1000)

document.querySelector("#plus").addEventListener("click", () => {
    // dispatch an action to increase the count by 1
    store.dispatch(slice.actions.incrementBy(10))
})

document.querySelector("#minus").addEventListener("click", () => {
    // dispatch an action to decrease the count by 1
    store.dispatch(slice.actions.decrement())
})

document.querySelector("#play").addEventListener("click", () => {
    // check if the app is paused or not
    // dispatch an action to either play or pause the counter
    store.dispatch(slice.actions.toggleRunning())
})