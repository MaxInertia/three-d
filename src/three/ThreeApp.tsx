import { Canvas } from "@react-three/fiber";
import { SpinningBlocks } from "./SpinningBlocks";

export function ThreeApp() {
	return (
		<Canvas className={"canvas"}>
			<SpinningBlocks />
		</Canvas>
	);
}
