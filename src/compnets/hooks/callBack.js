import { useCallback, useState } from "react";
import { CustomButton } from "../common/CustomButton";

const CallBack = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(100);
    // useCallBack (()=>{},[dependencies]) is used to memoize a function, 

    const inc1 =useCallback( () => {
        setCount(count + 1);
    },[count])
    const inc2 = useCallback( () => {
        setCount1(count1 + 1);
    },[count1]) 


    return (
        <div>
            <h1>CallBack</h1>
            <CustomButton text="Increment Count" onClick={inc1} />
            <CustomButton text="Increment Count1" onClick={inc2} />

        </div>
    )
}

export default CallBack;