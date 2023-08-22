import React from "react";

const OtherGenre = () => {
	return (
		<div>
			<select className="text-white bg-black font-extrabold p-1 pl-0" name="cars" id="cars">
				<option className="" value="volvo">Other Genre</option>
				<option className="" value="saab">Saab</option>
				<option className="" value="mercedes">Mercedes</option>
				<option className="" value="audi">Audi</option>
			</select>
		</div>
	);
};

export default OtherGenre;
