import laboratoriosApi  from "../../../../api/laboratoriosApi";
// export const myAction = async ({ commit }) => {

// }

export const loadEntries = async ( { commit } ) => {
    const {data} = await laboratoriosApi.get('/entries.json')
    if (!data){
        commit('setEntries',[])
        return
    }
    const entries = []
    for (let id of Object.keys(data)){
        entries.push({
            id,
            ...data[id]
        })
    }
    commit('setEntries', entries)
    console.log(entries)
}

export const updateEntries = async (/* { commit } */) => {

}

export const createEntries = async (/* { commit } */) => {

}

export const deleteEntry = async ({ commit }, id ) => {

    await laboratoriosApi.delete(`/entries/${ id }.json`)
    commit('deleteEntry', id)

    return id
}