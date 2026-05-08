function Imagecard({name,imglink}){
    console.log("this is imagecard component");
    return(
        <div>
            <h2>{name}</h2>
            <img src={imglink} alt="placeholder"/>
        </div>
    );
}

export default Imagecard;