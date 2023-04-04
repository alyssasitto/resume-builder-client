import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../../features/signupModalSlice";

import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import Banner from "../../components/Banner/Banner";
import Perks from "../../components/Perks/Perks";
import CtaCard from "../../components/CtaCard/CtaCard";
import Footer from "../../components/Footer/Footer";
import SignupModal from "../../components/SignupModal/SignupModal";

require("./Home.css");

const Home = () => {
	const modalState = useSelector((state) => state.signupModal.value);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setModal(false));
	}, []);

	return (
		<div className="home">
			<Header />
			<Carousel />
			<Banner />
			<Perks />
			<CtaCard />
			<Footer />
			{modalState && <SignupModal />}
		</div>
	);
};

export default Home;
