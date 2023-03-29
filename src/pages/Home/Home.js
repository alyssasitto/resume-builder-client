import { useSelector } from "react-redux";
import useScrollPosition from "../../hooks/useScrollPosition";

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

	const scrollPostion = useScrollPosition();

	console.log(modalState);

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
