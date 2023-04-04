import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Builder from "./pages/Builder/Builder";

import IsPrivate from "./components/isPrivate";
import IsAnonymous from "./components/isAnonymous";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/login"
					element={
						<IsAnonymous>
							<Login />
						</IsAnonymous>
					}
				/>
				<Route
					path="/signup"
					element={
						<IsAnonymous>
							<Signup />
						</IsAnonymous>
					}
				/>
				<Route
					path="/builder"
					element={
						<IsPrivate>
							<Builder />
						</IsPrivate>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
