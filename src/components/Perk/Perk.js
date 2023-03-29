require("./Perk.css");

const Perk = ({ perk }) => {
	return (
		<div className="perk">
			<img src={perk.img} />
			<h3>{perk.heading}</h3>
			<p>{perk.description}</p>
		</div>
	);
};

export default Perk;
