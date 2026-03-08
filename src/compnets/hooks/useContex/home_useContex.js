import { useContext, } from "react";
import UseContexdata from "./useContex";

const HomeUseContex = () => {
    const { user } = useContext(UseContexdata);
    return <div>
        <h1>HomeUseContex</h1>    
        <h2>{user}</h2>
        </div>
}

export default HomeUseContex;