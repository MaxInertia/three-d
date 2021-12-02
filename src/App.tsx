import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThreeApp } from "./three/ThreeApp";
import { MyContextProvider } from "./Context";

function App() {
	const [view, setView] = useState<"react" | "three">("react");
	return (
		<MyContextProvider value={{ x: "foo" }}>
			<div className="App">
				{view === "react" && (
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<p className="App-link" onClick={() => setView("three")}>
							View Three
						</p>
					</header>
				)}
				{view === "three" && <ThreeApp />}
			</div>
		</MyContextProvider>
	);
}

export default App;
