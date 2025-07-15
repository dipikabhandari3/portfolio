import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import dynamic from "next/dynamic";

// ✅ Dynamic import for Lottie
const Lottie = dynamic(() => import("lottie-react"), { 
  ssr: false,
  loading: () => <div>Loading animation...</div>
});

//Lotties
import AnimationYellowBackground from "@/public/lotties/landing-page-yellow.json";
import AnimationLightBackground from "@/public/lotties/landing-page-light.json";

const ContainerLottie = styled.div`
	width: 600px;
	height: 600px;
	transition: all 0.3s ease;

	@media (max-width: 1400px) {
		width: 600px;
		height: 600px;
	}

	@media (max-width: 1200px) {
		width: 500px;
		height: 500px;
	}

	@media (max-width: 900px) {
		width: 400px;
		height: 400px;
	}

	@media (max-width: 425px) {
		width: 300px;
		height: 300px;
	}
`;

const AnimationsToShow = {
	dark: AnimationYellowBackground,
	light: AnimationLightBackground,
};

export default function LogoReact() {
	const theme = useTheme();
	const [isStopped] = useState(false);
	const [isPaused] = useState(false);
	const [isClient, setIsClient] = useState(false);
	const lottieRef = useRef();

	// ✅ Ensure we're on client side
	useEffect(() => {
		setIsClient(true);
	}, []);

	var defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: AnimationsToShow[theme.name],
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	// ✅ Don't render Lottie until client-side
	if (!isClient) {
		return <ContainerLottie><div>Loading animation...</div></ContainerLottie>;
	}

	return (
		<ContainerLottie>
			<Lottie
				lottieRef={lottieRef}
				style={{ height: "100%", width: "100%" }}
				animationData={AnimationsToShow[theme.name]}
				loop={true}
				autoplay={!isStopped && !isPaused}
				rendererSettings={{
					preserveAspectRatio: "xMidYMid slice",
				}}
			/>
		</ContainerLottie>
	);
}