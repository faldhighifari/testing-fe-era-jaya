import React from 'react';
import {useNavigate} from "react-router-dom"

const Save= () => {
const navigate = useNavigate();
	
return (
	<>
		<h1 style={{color:"green"}}>GeeksForGeeks</h1>
		<button onClick={()=>navigate("/about")}>About</button>
	</>
)
};

export default Save;
