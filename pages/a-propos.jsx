import React, { useContext } from "react";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//Third's librarys
import styled from "styled-components";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

//Custom components
import SocialNetworkRowStack from "@/components/SocialNetworkRowStack";
import TechGrid from "@/components/TechsGrid";

const WrapperAboutMe = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 60%;

	@media (max-width: 1600px) {
		width: 85%;
	}

	.container {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: row;
		width: 100%;

		@media (max-width: 900px) {
			align-items: center;
			justify-content: center;
			flex-direction: column;
			width: 100%;
			height: auto;
		}

		.left-view {
			display: flex;
			align-items: flex-start;
			justify-content: flex-start;
			flex-direction: column;
			width: 30%;
			height: 100%;

			@media (max-width: 1200px) {
				width: 45%;
			}

			@media (max-width: 900px) {
				width: 100%;
				align-items: center;
				justify-content: center;
				margin-top: 20px;
			}
		}

		.right-view {
			display: flex;
			align-items: flex-start;
			justify-content: flex-start;
			flex-direction: column;
			width: 70%;
			height: 100%;

			.tech-and-cv {
				display: flex;
				align-items: center;
				justify-content: space-between;

				@media (max-width: 601px) {
					flex-direction: column;
				}
			}

			@media (max-width: 1200px) {
				width: 55%;
			}

			@media (max-width: 900px) {
				width: 100%;
				align-items: flex-start;
				justify-content: flex-start;
				margin-top: 20px;
			}

			h3 {
				color: ${(props) => props.theme.colors.branding};
				font-size: 26px;

				@media (max-width: 900px) {
					font-size: 18px;
				}
			}

			p {
				color: ${(props) => props.theme.colors.body};
				font-size: ${(props) => props.theme.fontSizes.md};
				text-align: justify;
				margin-top: 15px;
				margin-bottom: 15px;

				strong {
					font-weight: 700;
					color: ${(props) => props.theme.colors.branding};
				}

				@media (max-width: 600px) {
					font-size: ${(props) => props.theme.fontSizes.sm};
				}
			}
		}
	}
`;

const ProfileCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 300px;
	height: 420px;
	border: 2px solid ${(props) => props.theme.colors.branding};
	background-color: ${(props) => props.theme.colors.backgroundPage};
	border-radius: 8px;
	flex-direction: column;
	overflow: hidden;
	position: relative;

	@media (max-width: 601px) {
		width: 100%;
	}

	.image-rounded {
		border-radius: 50%;
	}

	.background {
		width: 100%;
		height: 150px;
		background-color: ${(props) => props.theme.colors.branding};
	}

	.img {
		width: 140px;
		height: 140px;
		border-radius: 50%;
		border: 5px solid ${(props) => props.theme.colors.branding};
		background-color: ${(props) => props.theme.colors.backgroundSecondary};
		position: absolute;
		top: 30px;
	}

	.content {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-direction: column;
		width: 100%;
		height: 100%;
		padding: 20px;

		h3 {
			color: ${(props) => props.theme.colors.title};
			margin-top: 60px;
			text-align: center;
		}

		.location {
			color: ${(props) => props.theme.colors.body};
			margin-bottom: 10px;
			font-size: 14px;
			margin-top: 5px;
			font-weight: 400;
			text-decoration: none;
		}

		.degree {
			color: ${(props) => props.theme.colors.body};
			margin-bottom: 20px;
			font-size: 12px;
			text-align: center;
			font-weight: 300;
		}

		p {
			text-align: center;
			color: ${(props) => props.theme.colors.body};
		}
	}

	.professional-stats {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		width: 90%;
		height: 60px;
		background: ${(props) => props.theme.colors.backgroundSecondary};
		border-radius: 8px;
		padding: 10px;
		position: absolute;
		bottom: 15px;

		.stats {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			p {
				font-size: 16px;
				font-weight: 900;
				color: ${(props) => props.theme.colors.title};
				margin-bottom: 5px;
			}

			span {
				font-size: 9px;
				color: ${(props) => props.theme.colors.body};
				text-align: center;
			}
		}
	}
`;

const ButtonCV = styled.a`
	z-index: 1;
	position: relative;
	width: 200px;
	height: 44px;
	margin-top: 15px;
	margin-bottom: 15px;
	font-size: ${(props) => props.theme.fontSizes.lg};
	transition: all 0.3s ease;
	border: none;
	text-decoration: none;
	color: ${(props) => props.theme.colors.background};
	border-radius: 4px;
	background-color: ${(props) => props.theme.colors.branding};
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}

	@media (max-width: 601px) {
		width: 100%;
	}

	@media (max-width: 425px) {
		width: 100%;
	}
`;

const SectionAProposDeMoi = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 80px;
	width: 100%;
	//height: auto;
`;

export default function AProposDeMoi(props) {
	const { language } = useContext(SettingsContext);

	// Professional data from resume
	const professionalData = {
		name: "Dipika Bhandari",
		location: "Chicago, IL",
		degree: "Master of Science in Cyber Forensics and Security",
		university: "Illinois Institute of Technology",
		gpa: "3.90",
		experience: "2+",
		skills: "15+",
		certifications: "2"
	};

	return (
		<SectionAProposDeMoi id="section-a-propos">
			<WrapperAboutMe>
				<div className="container">
					<div className="left-view">
						<Fade triggerOnce delay={200}>
							<ProfileCard>
								<div className="background" />
								<div className="img">
									<Image
										src="/img/dipika-profile.jpg"
										alt={language.aboutMePage.alt_dev_img}
										fill
										className="image-rounded"
										style={{ objectFit: "cover" }}
									/>
								</div>
								<div className="content">
									<h3>{professionalData.name}</h3>
									<div className="location">{professionalData.location}</div>
									<div className="degree">
										{professionalData.degree}<br />
										{professionalData.university}
									</div>
									<div className="professional-stats">
										<div className="stats">
											<p>{professionalData.gpa}</p>
											<span>GPA</span>
										</div>
										<div className="stats">
											<p>{professionalData.experience}</p>
											<span>Years Experience</span>
										</div>
										<div className="stats">
											<p>{professionalData.skills}</p>
											<span>Tech Skills</span>
										</div>
									</div>
								</div>
							</ProfileCard>
						</Fade>
					</div>
					<div className="right-view">
						<Fade triggerOnce delay={200}>
							<h3>{language.aboutMePage.title}</h3>
							<p>{language.aboutMePage.paragraph_one}</p>
							<p>{language.aboutMePage.paragraph_two}</p>
							<p>{language.aboutMePage.paragraph_three}</p>
							<div className="tech-and-cv">
								<SocialNetworkRowStack />
								<ButtonCV href="/resume/Dipika_Bhandari_Resume.pdf" target="_blank" data-splitbee-event="Download CV">
									Download Resume
								</ButtonCV>
							</div>
						</Fade>
					</div>
				</div>
				<TechGrid />
			</WrapperAboutMe>
		</SectionAProposDeMoi>
	);
}