import { userContext } from "../App";
import { useContext } from "react";
const ComponentD = () => {
const {isReadOnly} = useContext(userContext);
    return (
        <div>
            <h1>This is Component D</h1>
            {/* it will be disabled when we have read only context*/}
            <button disabled={isReadOnly}>click me</button>
        </div>
    );
}
export default ComponentD;