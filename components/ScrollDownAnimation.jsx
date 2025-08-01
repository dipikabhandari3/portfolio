import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import Lottie from "lottie-react";

import ScrollDownLottie from "@/public/lotties/scroll-down.json";
import ScrollDownLottieLight from "@/public/lotties/scroll-down-light.json";
import { scrollToSection } from "./SmoothScroll";

const ContainerLottie = styled.div`
	width: 80px;
	height: 80px;
	transition: all 0.3s ease;
	z-index: 1;
	position: absolute;
	bottom: 40px;

	@media (max-width: 601px) {
		display: none;
	}
`;

export default function ScrollDownAnimation() {
	const theme = useTheme();
	const [isStopped] = useState(false);
	const [isPaused] = useState(false);


	const lottieRef = React.useRef();

	var defaultOptions = {
		loop: true,
		autoplay: !isStopped && !isPaused,
		animationData: theme.name == "dark" ? ScrollDownLottie : ScrollDownLottieLight,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},

	};


	return (
		<ContainerLottie>
			<a style={{ textDecoration: "none" }} href="#section-services" onClick={scrollToSection}>
				<Lottie
					lottieRef={lottieRef}
					style={{ pointerEvents: "none", height: "100%", width: "100%" }}
					animationData={defaultOptions.animationData}
					loop={defaultOptions.loop}
					autoplay={defaultOptions.autoplay}
					rendererSettings={defaultOptions.rendererSettings}
				/>
			</a>
		</ContainerLottie>
	);
}
