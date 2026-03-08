import React from "react";

export const CustomButton = React.memo(({ text, onClick }) => {
    console.log("CustomButton rendered", text);
    return (
        <button onClick={onClick}>{text}</button>
    )
})



