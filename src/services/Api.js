 import axios from "axios";

 class Api {
    get = async ()=>{
        return  await axios.get("http://localhost:3001/items", {
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json",
                //handling response 304 on browser
                "Cache-Control":"no-cache, no-store",
                "Pragma": "no-cache",
                "Expires": 0,
            },
        });
    }
    
    getBy = async(id)=>{
        return await axios.get("http://localhost:3001/items/"+ id, {
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json",
                //handling response 304 on browser
                "Cache-Control":"no-cache, no-store",
                "Pragma": "no-cache",
                "Expires": 0,
            },
        });
    }

    create = async(state=[])=>{
        return await axios.post("http://localhost:3001/items", state,{
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json",
            },
        })
    }

    update = async(id, state=[])=>{
        return await axios.put("http://localhost:3001/items/" + id, state, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json"
            },
        })   
    }

    delete = async(id)=>{
        return await axios.delete("http://localhost:3001/items/"+ id, {
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json"
            },
        })   
    }
}  
export default Api;
