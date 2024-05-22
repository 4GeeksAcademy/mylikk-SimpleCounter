import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({counter}) => {
	return (
		<div className="text-center bg-black fs-1 text-white m-1">
			<div className="row mx-auto justify-content-center">
			<div className="clock col-1"><i class="fa-regular fa-clock"></i></div>
			<div className="sixth col-1">{Math.floor(counter/100000%10)}</div>
			<div className="fifth col-1">{Math.floor(counter/10000%10)}</div>
			<div className="fourth col-1">{Math.floor(counter/1000%10)}</div>
			<div className="third col-1">{Math.floor(counter/100%10)}</div>
			<div className="second col-1">{Math.floor(counter/10%10)}</div>
			<div className="first col-1">{Math.floor(counter/1%10)}</div>
		
			</div>
		</div>
	);
};

export default Home;
