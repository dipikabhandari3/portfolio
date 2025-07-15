import React from "react";
import styled from "styled-components";

// Using only icons that exist in your packages
import { Postgresql } from "@styled-icons/simple-icons/Postgresql";
import { Sqlite } from "@styled-icons/simple-icons/Sqlite";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Python } from "@styled-icons/boxicons-logos/Python";
import { Django } from "@styled-icons/boxicons-logos/Django";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Git } from "@styled-icons/boxicons-logos/Git";
import { Bootstrap } from "@styled-icons/boxicons-logos/Bootstrap";
import { Mysql } from "@styled-icons/simple-icons/Mysql";
import { Linux } from "@styled-icons/fa-brands/Linux";
import { Windows } from "@styled-icons/boxicons-logos/Windows";
import { Visualstudiocode } from "@styled-icons/simple-icons/Visualstudiocode";
import { CodeBlock } from "@styled-icons/boxicons-regular/CodeBlock";
import { MagnifyingGlass } from "@styled-icons/entypo/MagnifyingGlass";
import { WindowWrench } from "@styled-icons/fluentui-system-filled/WindowWrench";
import { ShieldKeyhole } from "@styled-icons/fluentui-system-filled/ShieldKeyhole";
import { Api } from "@styled-icons/material-rounded/Api";
import { Oracle } from "@styled-icons/simple-icons/Oracle";

const Carrousel = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;

	svg {
		width: 38px;
		height: 38px;
		color: #4b4b4b;
		transition: all 0.3s ease;
	}

	svg:hover {
		transform: translateZ(20px);
		color: ${(props) => props.theme.colors.branding};
		scale: 1.3;
	}

	.slider {
		height: 80px;
		margin: auto;
		position: relative;
		width: 100%;
		display: grid;
		place-items: center;
		overflow: hidden;
		/* background-color: #ccc; */
	}

	//Slide track width = total number of slides (9x2=18) x individual slide width (250px)
	.slide-track {
		display: flex;
		width: 100%;
		animation: scroll 25s linear infinite;
	}

	.slide-track:hover {
		animation-play-state: paused;
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		//Moves the slide track leftwards (-250px) by half (18 images / 2 = 9) of its width
		100% {
			transform: translateX(calc(-250px));
		}
	}

	.slide {
		height: 50px;
		width: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		//padding: 10px;
		//perspective: 100px;
		//background-color: #683636;
		//margin: 10px;
	}

	.slider::before,
	.slider::after {
		background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
		content: "";
		height: 100%;
		position: absolute;
		width: 15%;
		z-index: 2;
	}

	.slider::before {
		left: 0;
		top: 0;
	}

	.slider::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}
`;

export default function SlideTechs() {
	return (
		<Carrousel>
			<div className="slider">
				<div className="slide-track">
					{/* Cybersecurity Tools */}
					<div className="slide">
						<Linux title="Kali Linux" />
					</div>
					<div className="slide">
						<WindowWrench title="Metasploit" />
					</div>
					<div className="slide">
						<ShieldKeyhole title="Burp Suite" />
					</div>
					<div className="slide">
						<Api title="Nmap" />
					</div>
					<div className="slide">
						<Api title="Wireshark" />
					</div>
					<div className="slide">
						<MagnifyingGlass title="Autopsy" />
					</div>
					<div className="slide">
						<CodeBlock title="PuTTY" />
					</div>
					<div className="slide">
						<Oracle title="Splunk" />
					</div>
					<div className="slide">
						<Oracle title="Palo Alto" />
					</div>

					{/* Programming Languages */}
					<div className="slide">
						<Python />
					</div>
					<div className="slide">
						<Javascript />
					</div>
					<div className="slide">
						<Django />
					</div>
					<div className="slide">
						<Html5 />
					</div>
					<div className="slide">
						<Css3 />
					</div>
					<div className="slide">
						<Bootstrap />
					</div>

					{/* Databases */}
					<div className="slide">
						<Postgresql />
					</div>
					<div className="slide">
						<Sqlite />
					</div>
					<div className="slide">
						<Mysql />
					</div>

					{/* Development Tools */}
					<div className="slide">
						<Visualstudiocode />
					</div>
					<div className="slide">
						<Git />
					</div>

					{/* Operating Systems */}
					<div className="slide">
						<Linux />
					</div>
					<div className="slide">
						<Windows />
					</div>

					{/* Additional Tools */}
					<div className="slide">
						<CodeBlock title="Bash Scripting" />
					</div>
					<div className="slide">
						<Oracle title="Server Management" />
					</div>
				</div>
			</div>
		</Carrousel>
	);
}