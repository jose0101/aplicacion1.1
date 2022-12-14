
// export const myAction = ( state ) => {

// }
export const setEntries = ( state, entries ) => {
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
    
}

export const updateEntries = (/* state */) => {
    
}

export const addEntries = (/* state */) => {
    
}

export const deletEntries = ( state, id) => {
    state.entries = state.entries.filter(entry => entry.id !== id)    
}