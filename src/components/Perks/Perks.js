import Perk from "../Perk/Perk";
import perksData from "../../data/perksData.js";

require("./Perks.css");

const Perks = () => {
	return (
		<section className="perks padding-helper">
			<h2>Why build with us?</h2>
			{perksData.map((el) => {
				return <Perk perk={el} />;
			})}
		</section>
	);
};

export default Perks;
