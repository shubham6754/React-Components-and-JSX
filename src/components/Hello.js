import React from "react";

const Hello=()=>{
    // return(
    //     <div>
    //     <h1>Hello Vishwas</h1>
    //     </div>
    // )

    return React.createElement('div',null,React.createElement('h1',null,'hello Vishwas'))
}

export default Hello