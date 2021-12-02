import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThreeApp } from "./three/ThreeApp";

function App() {
	const [view, setView] = useState<"react" | "three">("react");
	return (
		<div className="App">
			{view === "react" && (
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<a className="App-link" onClick={() => setView("three")}>
						View Three
					</a>
				</header>
			)}
			{view === "three" && <ThreeApp />}
		</div>
	);
}

export default App;
