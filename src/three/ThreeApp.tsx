import { Canvas } from "@react-three/fiber";
import { SpinningBlocks } from "./SpinningBlocks";
import { MyContextProvider, useMyContext } from "../Context";

export function ThreeApp() {
	const value = useMyContext();
	return (
		<Canvas className={"canvas"}>
			{/* Context above Canvas needs to be recreated to be accessible to children */}
			<MyContextProvider value={value}>
				<SpinningBlocks />
			</MyContextProvider>
		</Canvas>
	);
}
