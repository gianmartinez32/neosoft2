import axios from "axios"
export const getBooks = async ()=>{
    const url = "https://backendneosoft.herokuapp.com/api/libros/all";
    return axios.get(url).then((res,rej)=>{
    return res.data
   
}).catch((err)=>{
    console.log('TYPE ERR:',err);
})

}

export const crearLibro = async (body) =>{
    const url = "https://backendneosoft.herokuapp.com/api/libros/create"
    let data = await axios.post(url,body);
    console.log(data)
}

export const getPrestamos = async ()=>{
    const url = "https://backendneosoft.herokuapp.com/api/prestamos/all";
    return axios.get(url).then((res,rej)=>{
    return res.data
   
}).catch((err)=>{
    console.log('TYPE ERR:',err);
})

}

export const crearPrestamo = async (body) =>{
    const url = "https://backendneosoft.herokuapp.com/api/prestamos/create"
    let data = await axios.post(url,body);
    console.log(data)
}