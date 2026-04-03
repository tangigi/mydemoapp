// //props = properties
// 1. pass props to function parameter and get props.name or props.imagelink
// 2. destructure props in function parameter and get name and imageLink directly

import { useContext } from "react";
import { userContext } from "../App";

function Imagecard({name, imgLink}) {
    const {placeholder} = useContext(userContext);
    console.log("This is the Imagecard component");

    return (
        <>
            <h2>{name}</h2>
            <img src={imgLink} alt={`${name} - ${placeholder}`} />
        </>
    );
}

export default Imagecard;

//App.js > CardList,js > Imagecard.js
// prop       prop        consumrer
//prop drolling: passing props/property from parent to child to grandchild and so on....
// solution of prop drilling =  use a context