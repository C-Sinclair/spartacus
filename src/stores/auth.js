import { writable } from "svelte/store";

const LOCAL_STORAGE_KEY = 'is-spartacus'

function createStore() {
    const isLoggedInCache = typeof window !== 'undefined' 
    ? window.localStorage?.getItem(LOCAL_STORAGE_KEY)
    : false
    return writable(isLoggedInCache)
}

export const isLoggedIn = createStore()

isLoggedIn.subscribe(val => {
    if (typeof window !== 'undefined') {
        window.localStorage?.setItem(LOCAL_STORAGE_KEY, val)
    }
})