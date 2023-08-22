import React from "react";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";

const App = () => {
	return (
		<>
			<div className="bg-black">
				<Navbar />
			</div>
			<div className="w-[1200px] h-[500px] ml-auto mr-auto mt-5 mb-0">
				<ImageSlider parentWidth={1200} />
			</div>
		</>
	);
};

export default App;
