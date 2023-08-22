import { React, useState, useRef, useEffect, useCallback } from "react";

const slides = [
	{
		url: "https://images.unsplash.com/photo-1682685797140-c17807f8f217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
		title: "BigRock",
	},
	{
		url: "https://images.unsplash.com/photo-1674574124475-16dd78234342?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
		title: "Couple",
	},
	{
		url: "https://images.unsplash.com/photo-1684749841085-f144067c42ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
		title: "GirlInFlowers",
	},
	{
		url: "https://images.unsplash.com/photo-1684737992807-470ed4fe86d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
		title: "StarryNight",
	},
];

const ImageSlider = ({ parentWidth }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const timerRef = useRef(null);

	const slideStyles = (slideIndex) => ({
		width: `${parentWidth}px`,
		borderRadius: "10px",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundImage: `url(${slides[slideIndex].url})`,
	});

	const leftArrowStyles = {
		position: "absolute",
		top: "50%",
		left: "32px",
		zIndex: 1,
		cursor: "pointer",
		transform: "translate(0, -50%)",
		fontSize: "45px",
		color: "#fff",
	};

	const rightArrowStyles = {
		position: "absolute",
		top: "50%",
		right: "32px",
		zIndex: 1,
		cursor: "pointer",
		transform: "translate(0, -50%)",
		fontSize: "45px",
		color: "#fff",
	};

	const SlideContainerStyles = {
		display: "flex",
		height: "100%",
		transition: "transform ease-out 0.3s",
	};

	const goToPrev = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const goToNext = useCallback(() => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	}, [currentIndex]);

	function goToSlide(slideIndex) {
		setCurrentIndex(slideIndex);
	}

	const getSlideContainerStylesWithWidth = () => ({
		...SlideContainerStyles,
		width: parentWidth * slides.length,
		transform: `translateX(${-(currentIndex * parentWidth)}px)`,
	});

	useEffect(() => {
		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}
		timerRef.current = setTimeout(() => {
			goToNext();
		}, 2000);
		return () => clearTimeout(timerRef.current);
	}, [goToNext]);

	return (
		<div className="h-[100%] relative">
			<div style={leftArrowStyles} onClick={goToPrev}>
				❰
			</div>
			<div style={rightArrowStyles} onClick={goToNext}>
				❱
			</div>
			{/* <div style={slideStyles}></div> */}
			<div className="overflow-hidden h-[100%]">
				<div style={getSlideContainerStylesWithWidth()}>
					{slides.map((_, slideIndex) => (
						<div key={slideIndex} style={slideStyles(slideIndex)}></div>
					))}
				</div>
			</div>
			<div className="flex justify-center">
				{slides.map((slide, slideIndex) => (
					<div
						key={slideIndex}
						className="mt-0 mb-0 mr-[3px] ml-[3px] cursor-pointer text-xl"
						onClick={() => goToSlide(slideIndex)}>
						⚫
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageSlider;
