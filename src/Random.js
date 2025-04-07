import { useState } from "react";


function Random(){

    var [set,setfunc] = useState(0)
    function ran(){
        set = Math.floor(Math.random()*100)+1;
        setfunc(set)
    }
    return(
        <div className="style2">
            <h2>Random</h2>
            <h1>{set}</h1>
            <button  className="but" onClick={ran}>*</button>
        </div>
    )
}

export default Random