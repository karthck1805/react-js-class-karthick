import axios from "axios"
import { useEffect, useState } from "react"

export const GetData = () => {
    const [details, setdetails] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/test/all")
                console.log(res.data)
                setdetails(res.data.data)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [])
    const deleteData = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/test/delete/${id}`)
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <h1>Get Data</h1>

            {details.map((item) => {
                return (
                    <div key={item._id}>
                        <p>{item.name}</p>
                        <button onClick={() => deleteData(item._id)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
};

