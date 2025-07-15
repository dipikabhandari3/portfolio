import React from "react";
import styled from "styled-components";

//Icons - using only confirmed available icons for cybersecurity
import { Postgresql } from "@styled-icons/simple-icons/Postgresql";
import { Sqlite } from "@styled-icons/simple-icons/Sqlite";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Python } from "@styled-icons/boxicons-logos/Python";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Git } from "@styled-icons/boxicons-logos/Git";
import { Linux } from "@styled-icons/fa-brands/Linux";
import { Windows } from "@styled-icons/boxicons-logos/Windows";
import { Django } from "@styled-icons/boxicons-logos/Django";
import { Bootstrap } from "@styled-icons/boxicons-logos/Bootstrap";
import { Mysql } from "@styled-icons/simple-icons/Mysql";
import { Visualstudiocode } from "@styled-icons/simple-icons/Visualstudiocode";
import { CodeBlock } from "@styled-icons/boxicons-regular/CodeBlock";
import { MagnifyingGlass } from "@styled-icons/entypo/MagnifyingGlass";
import { ShieldKeyhole } from "@styled-icons/fluentui-system-filled/ShieldKeyhole";
import { Api } from "@styled-icons/material-rounded/Api";
import { Oracle } from "@styled-icons/simple-icons/Oracle";
import { CloudUpload } from "@styled-icons/material-rounded/CloudUpload";
import { Terminal } from "@styled-icons/boxicons-regular/Terminal";
import { Cog } from "@styled-icons/heroicons-solid/Cog";
import { Server } from "@styled-icons/heroicons-solid/Server";

const TechGrid = styled.div`
	margin-top: 60px;
	margin-bottom: 40px;
	width: 100%;
	padding: 40px 0;

	svg {
		width: 58px;
		height: 58px;
		color: ${(props) => props.theme.colors.title};
		transition: color 0.4s ease, transform 0.4s ease;
		opacity: 0.8;
	}

	svg:hover {
		color: ${(props) => props.theme.colors.branding};
		opacity: 1;
		transform: scale(1.1);
	}

	.slider {
		height: 120px;
		margin: auto;
		position: relative;
		width: 100%;
		display: grid;
		place-items: center;
		overflow: hidden;
	}

	.slide-track {
		display: flex;
		width: calc(150px * 60);
		animation: scrollRightToLeft 65s linear infinite;
		gap: 20px;
	}

	.slide-track:hover {
		animation-play-state: paused;
	}

	.slide:hover {
		animation-play-state: paused;
	}

	@keyframes scrollRightToLeft {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.slide {
		height: 80px;
		width: 150px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		cursor: pointer;
		padding: 10px;
		border-radius: 8px;
		transition: background-color 0.3s ease;
	}

	.slide:hover {
		background-color: ${(props) => props.theme.colors.branding}10;
	}

	.slider::before,
	.slider::after {
		background: linear-gradient(to right, 
			${(props) => props.theme.colors.backgroundPage} 0%, 
			${(props) => props.theme.colors.backgroundPage}00 100%);
		content: "";
		height: 100%;
		position: absolute;
		width: 80px;
		z-index: 2;
		pointer-events: none;
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

export const TitleSection = styled.h2`
	font-weight: 700;
	color: ${(props) => props.theme.colors.branding};
	font-size: 26px;
	padding-top: 30px;
	text-align: center;

	@media (max-width: 900px) {
		font-size: 18px;
	}
`;

export default function TechsGrid() {
	return (
		<TechGrid>
			<div className="slider">
				<div className="slide-track">
					{/* First set - Cybersecurity and Development technologies */}
					<div className="slide">
						<Linux title="Kali Linux" />
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
						<Oracle title="Splunk" />
					</div>
					<div className="slide">
						<CodeBlock title="PuTTY" />
					</div>
					<div className="slide">
						<Oracle title="Palo Alto" />
					</div>
					<div className="slide">
						<Python title="Python" />
					</div>
					<div className="slide">
						<Javascript title="JavaScript" />
					</div>
					<div className="slide">
						<Django title="Django" />
					</div>
					<div className="slide">
						<Html5 title="HTML5" />
					</div>
					<div className="slide">
						<Css3 title="CSS3" />
					</div>
					<div className="slide">
						<Bootstrap title="Bootstrap" />
					</div>
					<div className="slide">
						<Postgresql title="PostgreSQL" />
					</div>
					<div className="slide">
						<Sqlite title="SQLite" />
					</div>
					<div className="slide">
						<Mysql title="MySQL" />
					</div>
					<div className="slide">
						<Visualstudiocode title="VS Code" />
					</div>
					<div className="slide">
						<Git title="Git" />
					</div>
					<div className="slide">
						<Linux title="Linux" />
					</div>
					<div className="slide">
						<Windows title="Windows" />
					</div>
					<div className="slide">
						<CodeBlock title="Bash Scripting" />
					</div>
					<div className="slide">
						<Postgresql title="SQL" />
					</div>
					<div className="slide">
						<Server title="Server Management" />
					</div>
					<div className="slide">
						<Cog title="Penetration Testing" />
					</div>
					<div className="slide">
						<ShieldKeyhole title="Vulnerability Assessment" />
					</div>
					<div className="slide">
						<Terminal title="Command Line" />
					</div>
					<div className="slide">
						<CloudUpload title="Cloud Security" />
					</div>
					<div className="slide">
						<Api title="Network Security" />
					</div>

					{/* Duplicate set for seamless infinite loop */}
					<div className="slide">
						<Linux title="Kali Linux" />
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
						<Oracle title="Splunk" />
					</div>
					<div className="slide">
						<CodeBlock title="PuTTY" />
					</div>
					<div className="slide">
						<Oracle title="Palo Alto" />
					</div>
					<div className="slide">
						<Python title="Python" />
					</div>
					<div className="slide">
						<Javascript title="JavaScript" />
					</div>
					<div className="slide">
						<Django title="Django" />
					</div>
					<div className="slide">
						<Html5 title="HTML5" />
					</div>
					<div className="slide">
						<Css3 title="CSS3" />
					</div>
					<div className="slide">
						<Bootstrap title="Bootstrap" />
					</div>
					<div className="slide">
						<Postgresql title="PostgreSQL" />
					</div>
					<div className="slide">
						<Sqlite title="SQLite" />
					</div>
					<div className="slide">
						<Mysql title="MySQL" />
					</div>
					<div className="slide">
						<Visualstudiocode title="VS Code" />
					</div>
					<div className="slide">
						<Git title="Git" />
					</div>
					<div className="slide">
						<Linux title="Linux" />
					</div>
					<div className="slide">
						<Windows title="Windows" />
					</div>
					<div className="slide">
						<CodeBlock title="Bash Scripting" />
					</div>
					<div className="slide">
						<Postgresql title="SQL" />
					</div>
					<div className="slide">
						<Server title="Server Management" />
					</div>
					<div className="slide">
						<Cog title="Penetration Testing" />
					</div>
					<div className="slide">
						<ShieldKeyhole title="Vulnerability Assessment" />
					</div>
					<div className="slide">
						<Terminal title="Command Line" />
					</div>
					<div className="slide">
						<CloudUpload title="Cloud Security" />
					</div>
					<div className="slide">
						<Api title="Network Security" />
					</div>
				</div>
			</div>
		</TechGrid>
	);
}