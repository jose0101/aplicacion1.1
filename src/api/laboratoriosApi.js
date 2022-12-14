import axios from 'axios'


const laboratoriosApi = axios.create({
    baseURL: 'https://info-4138c-default-rtdb.firebaseio.com'
})



// console.log( process.env.NODE_ENV ) // TEST durante testing, 

export default laboratoriosApi


