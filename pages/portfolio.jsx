import React, { useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { Fade } from "react-awesome-reveal";

//Context
import { SettingsContext } from "@/context/SettingsContext";

//Styled-components
import { TitleSection, ContainerTitleSection, BodyText } from "@/styles/ui";

//Icons - using only confirmed available ones
import { Robot } from "@styled-icons/fa-solid/Robot";
import { GithubOutline } from "@styled-icons/evaicons-outline/GithubOutline";
import { Java } from "@styled-icons/fa-brands/Java";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Python } from "@styled-icons/boxicons-logos/Python";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Live } from "@styled-icons/fluentui-system-filled/Live";
import { Password } from "@styled-icons/fluentui-system-filled/Password";
import { ShieldKeyhole } from "@styled-icons/fluentui-system-filled/ShieldKeyhole";
import { JournalBookmark } from "@styled-icons/bootstrap/JournalBookmark";
import { Wifi } from "@styled-icons/bootstrap/Wifi";
import { Terminal } from "@styled-icons/boxicons-regular/Terminal";
import { Django } from "@styled-icons/boxicons-logos/Django";
import { Sqlite } from "@styled-icons/simple-icons/Sqlite";
import { Bootstrap } from "@styled-icons/boxicons-logos/Bootstrap";
import { Kalilinux } from "@styled-icons/simple-icons/Kalilinux";
import { Mysql } from "@styled-icons/simple-icons/Mysql";
import { Postgresql } from "@styled-icons/simple-icons/Postgresql";
import { VpnKey } from "@styled-icons/material-rounded/VpnKey";
import { Api } from "@styled-icons/material-rounded/Api";

//Custom components
import Tooltip from "@/components/Tooltip";

const ContainerGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 60%;
	gap: 20px;
	transition: all 0.3s ease;

	@media (max-width: 1600px) {
		width: 85%;
	}

	@media (max-width: 900px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const WrapperProjectCard = styled.div`
	position: relative;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-direction: column;
	min-height: 270px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	border-radius: 4px;
	padding: 20px;
	transition: all 0.3s ease;
	border: 1px solid ${(props) => props.theme.colors.backgroundPage};

	.created_at {
		color: ${(props) => props.theme.colors.inactiveTitle};
		font-size: 12px;
		position: absolute;
		bottom: 10px;
	}

	:hover {
		border: 1px solid ${(props) => props.theme.colors.branding};
		transform: scale(1.01);
		box-shadow: 0px 0px 20px 0px ${(props) => props.theme.colors.branding}5E;
	}

	.title-body {
		margin-top: 50px;

		.divider {
			margin-bottom: 20px;
		}
	}
`;

const WrapperTechStack = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	height: 34px;
	width: 100%;
	margin-bottom: 10px;

	> div {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
	}

	svg {
		width: 22px;
		height: 22px;
		margin-right: 3px;
		color: ${(props) => props.theme.colors.inactiveTitle};
		transition: all 0.3s ease;
	}

	a {
		svg {
			&:hover {
				cursor: pointer;
				color: ${(props) => props.theme.colors.branding};
			}
		}
	}
`;

const WrapperTextChip = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	position: absolute;
	top: 10px;
	right: 10px;

	div {
		span {
			color: ${(props) => props.theme.colors.inactiveTitle};
			font-size: 12px;
			font-weight: 800;
			padding: 2px 8px 2px 8px;
			border-radius: 4px;
			margin-right: 3px;
			margin-left: 3px;
		}

		@media (max-width: 601px) {
			margin-bottom: 10px;
			font-size: 10px;
		}
	}

	@media (max-width: 601px) {
		display: none;
	}
`;

const ChipTechOptions = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-top: 20px;
	margin-bottom: 20px;
	width: 60%;

	svg {
		min-width: 28px;
		min-height: 28px;
		width: 28px;
		height: 28px;
		color: ${(props) => props.theme.colors.branding};
		margin-right: 10px;

		@media (max-width: 601px) {
			min-width: 18px;
			min-height: 18px;
			width: 18px;
			height: 18px;
		}
	}

	@media (max-width: 1600px) {
		width: 85%;
	}

	@media (max-width: 601px) {
		display: none;
	}
`;

const WrapperButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	position: absolute;
	right: 10px;
	bottom: 10px;
	transition: all 0.3s ease;
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		padding: 5px;
		color: ${(props) => props.theme.colors.branding};
		border-radius: 4px;
	}
`;

const Chip = styled.span`
	color: ${(props) => (props.active == true ? props.theme.colors.backgroundSecondary : props.theme.colors.inactiveTitle)};
	background-color: ${(props) => (props.active == true ? props.theme.colors.branding : props.theme.colors.backgroundSecondary)};
	border: 1px solid ${(props) => (props.active == true ? props.theme.colors.branding : props.theme.colors.inactiveTitle)};
	padding: 2px 7px 3px 7px;
	margin: 3px;
	border-radius: 4px;
	font-weight: 700;
	transition: all 0.3s ease;

	&:hover {
		cursor: pointer;
	}

	@media (max-width: 601px) {
		font-weight: 700;
		font-size: 10px;
	}
`;

export const TitleSpan = styled.h3`
	z-index: 2;
	position: absolute;
	top: 0;
	left: 0;
	padding: 5px 15px 5px 10px;
	color: ${(props) => props.theme.colors.backgroundPage};
	background-color: ${(props) => props.theme.colors.branding};
	font-size: ${(props) => props.theme.fontSizes.md};
	border-radius: 4px 0 18px 0;

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}

	@media (max-width: 600px) {
		font-size: ${(props) => props.theme.fontSizes.xs};
	}
`;

const SectionPortifolio = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	min-height: 100vh;
	padding-top: 60px;
`;

export default function Portifolio() {
	const { language } = useContext(SettingsContext);
	const [stack, setStack] = useState("ALL");

	// Your projects from resume
	const projects = [
		{
			id: 1,
			name: "ML-Based JavaScript Detection",
			description: "Built an ML pipeline to detect obfuscated JavaScript using Random Forest, SVM, Logistic Regression, and KNN. Achieved classification accuracy up to 100% with automated performance reporting.",
			category: "Machine Learning",
			date: "2025-04-01",
			technologies: ["python", "machine-learning", "security", "data-analysis"],
			githubUrl: "https://github.com/dipika-bhandari/obfuscated-js-detection",
			liveUrl: null,
			featured: true
		},
		{
			id: 2,
			name: "Secure Database Architecture",
			description: "Implemented Role-Based Access Control (RBAC) with AES-256, TLS, and TDE encryption. Developed structured access controls and compliance policies for business management systems.",
			category: "Security",
			date: "2024-11-01",
			technologies: ["database", "security", "encryption", "compliance"],
			githubUrl: "https://github.com/dipika-bhandari/secure-database-architecture",
			liveUrl: null,
			featured: true
		},
		{
			id: 3,
			name: "Penetration Testing Lab",
			description: "Conducted structured penetration testing on vulnerable system (Acme). Identified vulnerabilities through targeted exploitation using industry-standard tools and methodologies.",
			category: "Penetration Testing",
			date: "2023-12-01",
			technologies: ["pentesting", "security", "vulnerability-assessment", "kali-linux"],
			githubUrl: "https://github.com/dipika-bhandari/penetration-testing-lab",
			liveUrl: null,
			featured: true
		},
		{
			id: 4,
			name: "Hotel Management System",
			description: "Developed a full-stack web application using Django with secure online booking and payment features. Applied RUP methodology and conducted comprehensive security testing including SQL injection and XSS vulnerability testing.",
			category: "Web Development",
			date: "2022-08-01",
			technologies: ["python", "django", "html", "css", "javascript", "sqlite", "bootstrap"],
			githubUrl: "https://github.com/dipika-bhandari/hotel-management-system",
			liveUrl: "https://dipika-hotel-management.herokuapp.com",
			featured: false
		},
		{
			id: 5,
			name: "WiFi Security Analysis",
			description: "Conducted WPA2-PSK vulnerability analysis and penetration testing using Kali Linux. Researched and documented Wi-Fi security threats with ethical and legal considerations.",
			category: "Network Security",
			date: "2021-01-01",
			technologies: ["wifi-security", "kali-linux", "pentesting", "network-security"],
			githubUrl: "https://github.com/dipika-bhandari/wifi-security-analysis",
			liveUrl: null,
			featured: false
		}
	];

	// Technology icon mapping using only available icons
	const techIcons = {
		"python": { name: "Python", icon: <Python /> },
		"javascript": { name: "JavaScript", icon: <Javascript /> },
		"java": { name: "Java", icon: <Java /> },
		"html": { name: "HTML5", icon: <Html5 /> },
		"css": { name: "CSS3", icon: <Css3 /> },
		"django": { name: "Django", icon: <Django /> },
		"sqlite": { name: "SQLite", icon: <Sqlite /> },
		"bootstrap": { name: "Bootstrap", icon: <Bootstrap /> },
		"mysql": { name: "MySQL", icon: <Mysql /> },
		"postgresql": { name: "PostgreSQL", icon: <Postgresql /> },
		"machine-learning": { name: "Machine Learning", icon: <Robot /> },
		"security": { name: "Security", icon: <ShieldKeyhole /> },
		"pentesting": { name: "Penetration Testing", icon: <Password /> },
		"kali-linux": { name: "Kali Linux", icon: <Kalilinux /> },
		"database": { name: "Database", icon: <Mysql /> },
		"encryption": { name: "Encryption", icon: <VpnKey /> },
		"compliance": { name: "Compliance", icon: <VpnKey /> },
		"vulnerability-assessment": { name: "Vulnerability Assessment", icon: <Password /> },
		"wifi-security": { name: "WiFi Security", icon: <Wifi /> },
		"network-security": { name: "Network Security", icon: <Api /> },
		"data-analysis": { name: "Data Analysis", icon: <Terminal /> },
		"default": { name: "Project", icon: <JournalBookmark /> }
	};

	// Filter functionality
	const categories = ["ALL", "Machine Learning", "Security", "Penetration Testing", "Web Development", "Network Security"];

	const filteredProjects = stack === "ALL"
		? projects
		: projects.filter(project => project.category === stack);

	function handleFilter(category) {
		setStack(category);
	}

	function formatDate(dateString) {
		const date = new Date(dateString);
		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const year = date.getFullYear();
		return `${day}/${month}/${year}`;
	}

	return (
		<SectionPortifolio id="section-portifolio">
			<ContainerTitleSection>
				<TitleSection>{language.portifolioPage.title}</TitleSection>
			</ContainerTitleSection>

			{/* Filter Chips */}
			<ChipTechOptions>
				{categories.map((category) => (
					<Chip
						key={category}
						onClick={() => handleFilter(category)}
						active={stack === category}>
						{category}
					</Chip>
				))}
			</ChipTechOptions>

			<ContainerGrid>
				{filteredProjects.map((project, index) => (
					<Fade triggerOnce key={project.id} delay={index * 100}>
						<WrapperProjectCard>
							<WrapperTextChip>
								<div>
									<span>{project.category}</span>
								</div>
							</WrapperTextChip>

							<TitleSpan>{project.name}</TitleSpan>

							<div className="title-body">
								<BodyText>{project.description}</BodyText>
							</div>

							<WrapperTechStack>
								<div>
									{project.technologies.map((tech, techIndex) => (
										<div key={techIndex}>
											<Tooltip toolTipText={techIcons[tech]?.name || tech}>
												{techIcons[tech]?.icon || techIcons.default.icon}
											</Tooltip>
										</div>
									))}
								</div>

								<WrapperButtons>
									{project.liveUrl && (
										<a href={project.liveUrl} target="_blank" rel="noreferrer">
											<Live />
										</a>
									)}
									{project.githubUrl && (
										<a href={project.githubUrl} target="_blank" rel="noreferrer">
											<GithubOutline />
										</a>
									)}
								</WrapperButtons>
							</WrapperTechStack>

							<span className="created_at">
								{language.portifolioPage.createdLabel}: {formatDate(project.date)}
							</span>
						</WrapperProjectCard>
					</Fade>
				))}
			</ContainerGrid>
		</SectionPortifolio>
	);
}