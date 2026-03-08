import axios from "axios"
import { useState } from "react"

export const PostData = () => {
    const [postdetails, setPostdetails] = useState({ name: "", phone: "" })
    const [Count,setCount] = useState(0)

    const increment = () => {
        setCount(Count + 1)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setPostdetails({ ...postdetails, [name]: value })
        console.log(postdetails)
    }
    const handleSubmit =async () =>  {
        try {
            const res = await axios.post("http://localhost:5000/api/test/create", postdetails)
            console.log(res)

        }catch (e){
            console.log(e)
        }
    }
    return (
        <div>
            <h1>Post Data</h1>
            <label>Name</label><br />
            <input type="text" name="name" onChange={handleChange} placeholder="Entere the name" /><br />
            <label>Name</label><br />
            <input type="text" name="phone" onChange={handleChange} placeholder="Entere the phone" /><br />
            <button onClick={() => { handleSubmit() }}>Submit</button>
            <button onClick={increment}>+{Count}</button>


        </div>

    )
}

