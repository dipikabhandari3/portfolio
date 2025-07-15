import React, { useContext } from "react";

//Third's librarys
import styled, { keyframes } from "styled-components";
import { useTheme } from "styled-components";
import dynamic from "next/dynamic";

//Custom components
import Head from "@/components/Head";
import SocialNetworkRowStack from "@/components/SocialNetworkRowStack";
import { scrollToSection } from "@/components/SmoothScroll";

//Context
import { SettingsContext } from "@/context/SettingsContext";

// ✅ DYNAMIC IMPORTS - Client-only components
const TypeAnimation = dynamic(() => 
  import("react-type-animation").then(mod => ({ default: mod.TypeAnimation })), 
  { 
    ssr: false,
    loading: () => <div className="type-string" style={{minHeight: '72px', color: 'transparent'}}>Loading...</div>
  }
);

const ProgressBar = dynamic(() => import("react-scroll-progress-bar"), { 
  ssr: false 
});

const LogoReact = dynamic(() => import("@/components/LandingPageAnimation"), { 
  ssr: false,
  loading: () => <div style={{width: '600px', height: '600px'}}></div>
});

const FloatNavigationBar = dynamic(() => import("@/components/FloatNavigationBar"), { 
  ssr: false 
});

const ScrollDownAnimation = dynamic(() => import("@/components/ScrollDownAnimation"), { 
  ssr: false 
});

// Animated background effect
const float = keyframes`
	0% { transform: translateY(0px); }
	50% { transform: translateY(-20px); }
	100% { transform: translateY(0px); }
`;

const pulse = keyframes`
	0% { transform: scale(1); opacity: 0.8; }
	50% { transform: scale(1.05); opacity: 1; }
	100% { transform: scale(1); opacity: 0.8; }
`;

const LandingPageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	position: relative;

	@media (max-width: 930px) {
		flex-direction: column;
	}

	@media (max-width: 850px) {
		margin-bottom: 60px;
	}
`;

const TitleLandingContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	padding: 10px;
	z-index: 2;

	.grid-exp {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		transition: all 0.3s ease;
		gap: 20px;
		justify-items: center;
		width: 100%;
	}

	.type-string {
		font-size: 60px;
		font-weight: 800;
		color: ${(props) => props.theme.colors.branding};
		text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
		animation: ${pulse} 3s ease-in-out infinite;
		white-space: nowrap;
		line-height: 1.1;
		min-width: 750px;
		text-align: left;

		@media (max-width: 1400px) {
			font-size: 40px;
			min-width: 580px;
		}

		@media (max-width: 1200px) {
			font-size: 36px;
			min-width: 520px;
		}

		@media (max-width: 900px) {
			font-size: 28px;
			min-width: 410px;
		}

		@media (max-width: 601px) {
			font-size: 24px;
			text-align: center;
			width: 100%;
			white-space: normal;
			min-width: unset;
		}
	}

	@media (max-width: 601px) {
		align-items: center;
	}
`;

const SubTitleLanding = styled.div`
	font-weight: 400;
	color: ${(props) => props.theme.colors.body};
	text-align: left;
	margin-top: 10px;
	margin-bottom: 10px;
	width: 100%;
	line-height: 1.6;

	span {
		font-weight: 800;
		color: ${(props) => props.theme.colors.branding};
	}

	@media (max-width: 1980px) {
		font-size: ${(props) => props.theme.fontSizes.lg};
	}

	@media (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	@media (max-width: 600px) {
		text-align: center;
	}
`;

const HighlightBadge = styled.div`
	display: inline-flex;
	align-items: center;
	background: linear-gradient(135deg, ${(props) => props.theme.colors.branding}20, ${(props) => props.theme.colors.branding}10);
	border: 1px solid ${(props) => props.theme.colors.branding}40;
	color: ${(props) => props.theme.colors.branding};
	padding: 8px 16px;
	border-radius: 20px;
	font-size: 14px;
	font-weight: 600;
	margin: 5px 10px 5px 0;
	animation: ${float} 8s ease-in-out infinite;

	&:nth-child(2) {
		animation-delay: 1s;
	}

	&:nth-child(3) {
		animation-delay: 2s;
	}

	@media (max-width: 600px) {
		margin: 5px;
		font-size: 12px;
		padding: 6px 12px;
	}
`;

const BadgeContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 20px 0;
	
	@media (max-width: 600px) {
		justify-content: center;
	}
`;

const ContainerAnimation = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	position: relative;

	@media (max-width: 930px) {
		order: -1;
	}
`;

const ButtonSaibaMais = styled.button`
	z-index: 1;
	position: relative;
	width: 200px;
	height: 50px;
	margin-top: 25px;
	margin-bottom: 15px;
	transition: all 0.3s ease;
	font-size: ${(props) => props.theme.fontSizes.lg};
	border: none;
	color: ${(props) => props.theme.colors.background};
	border-radius: 8px;
	background: linear-gradient(135deg, ${(props) => props.theme.colors.branding}, ${(props) => props.theme.colors.branding}CC);
	font-weight: 700;
	box-shadow: 0 4px 15px ${(props) => props.theme.colors.branding}40;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
		transition: left 0.5s;
	}

	&:hover {
		cursor: pointer;
		transform: translateY(-2px);
		box-shadow: 0 6px 20px ${(props) => props.theme.colors.branding}60;

		&::before {
			left: 100%;
		}
	}

	&:active {
		transform: translateY(0);
	}

	@media (max-width: 601px) {
		width: 70%;
	}

	@media (max-width: 425px) {
		width: 100%;
	}
`;

const StatsContainer = styled.div`
	display: flex;
	gap: 30px;
	margin: 20px 0;
	
	@media (max-width: 600px) {
		gap: 20px;
		justify-content: center;
	}
`;

const StatItem = styled.div`
	text-align: center;
	
	.number {
		font-size: 28px;
		font-weight: 800;
		color: ${(props) => props.theme.colors.branding};
		display: block;
		
		@media (max-width: 600px) {
			font-size: 24px;
		}
	}
	
	.label {
		font-size: 12px;
		color: ${(props) => props.theme.colors.body};
		text-transform: uppercase;
		font-weight: 600;
		margin-top: 5px;
	}
`;

const SectionHomePage = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80%;
	min-height: 100vh;
	position: relative;
`;

export default function HomePage() {
	const theme = useTheme();
	const { language } = useContext(SettingsContext);

	return (
		<SectionHomePage id="section-home">
			<FloatNavigationBar />
			{typeof window !== 'undefined' && (
				<ProgressBar bgcolor={theme.colors.branding} height={5} />
			)}
			<LandingPageContainer>
				<TitleLandingContainer>
					<SubTitleLanding>{language.landingPage.apresentationText}</SubTitleLanding>

					<TypeAnimation
						sequence={[
							"Dipika Bhandari", 3000,
							"Cybersecurity Expert", 3000,
							"Penetration Tester", 3000,
							"Security Analyst", 3000,
						]}
						speed={50}
						className="type-string"
						repeat={Infinity}
					/>

					<BadgeContainer>
						<HighlightBadge>🎓 MS Cyber Forensics</HighlightBadge>
						<HighlightBadge>🔒 Penetration Testing</HighlightBadge>
						<HighlightBadge>🏆 3.90 GPA</HighlightBadge>
					</BadgeContainer>

					<SubTitleLanding>{language.landingPage.resumeText}</SubTitleLanding>

					<StatsContainer>
						<StatItem>
							<span className="number">2+</span>
							<span className="label">Years Experience</span>
						</StatItem>
						<StatItem>
							<span className="number">15+</span>
							<span className="label">Security Tools</span>
						</StatItem>
						<StatItem>
							<span className="number">5</span>
							<span className="label">Major Projects</span>
						</StatItem>
					</StatsContainer>

					<a href="#section-a-propos" onClick={scrollToSection}>
						<ButtonSaibaMais>{language.landingPage.buttonText}</ButtonSaibaMais>
					</a>
					<SocialNetworkRowStack />
				</TitleLandingContainer>
				<ContainerAnimation>
					<LogoReact />
				</ContainerAnimation>
			</LandingPageContainer>
			<ScrollDownAnimation />
		</SectionHomePage>
	);
}