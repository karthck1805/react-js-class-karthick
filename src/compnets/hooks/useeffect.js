import axios from "axios";
import { useEffect, useState } from "react";

const UseEffect = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        const getuserDetails = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            console.log(res.data)
            setUser(res.data);
        }
        getuserDetails();
    }, [])
    return (
        <div>
            <h1>UseEffect Hook</h1>

            {
                user.map((data) => {
                    return (
                        <div key={data.id}>
                            <h2>{data.name}</h2>
                            <p>{data.username}</p>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}
export default UseEffect;