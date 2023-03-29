import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import Step from "../Step/Step";

import stepsData from "../../data/stepsData";

import "swiper/css";
import "swiper/css/pagination";

require("./Carousel.css");

const Carousel = () => {
	return (
		<div className="carousel padding-helper">
			<h2>Create your resume in 3 easy steps!</h2>
			<Swiper
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper"
			>
				{stepsData.map((el) => {
					return (
						<SwiperSlide>
							<Step step={el} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Carousel;
