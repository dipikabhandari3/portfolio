import React, { useContext } from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//ícones
import { School } from "@styled-icons/ionicons-outline/School";
import { LearningApp } from "@styled-icons/fluentui-system-filled/LearningApp";
import { Work } from "@styled-icons/material-rounded/Work";


const LearningAppIcon = styled(LearningApp)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const SchoolIcon = styled(School)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const WorkIcon = styled(Work)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;



const TimelineContent = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
`;

export const TitleContentTimeline = styled.h3`
	.vertical-timeline-element-title {
		color: ${(props) => props.theme.colors.branding};
	}
	@media (max-width: 1600px) {
		font-size: ${(props) => props.theme.fontSizes.xl};
	}

	@media (max-width: 1400px) {
		font-size: ${(props) => props.theme.fontSizes.lg};
	}

	@media (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}
`;

const BoldText = styled.h4`
	color: ${(props) => props.theme.colors.contrastText};
	font-weight: 800;
	margin-top: 2px;
	margin-bottom: 2px;
	span {
		font-weight: 400;
	}
`;

const DescriptionText = styled.p`
	color: ${(props) => props.theme.colors.body};
	font-weight: 400;
	margin-top: 5px;
	margin-bottom: 5px;
	font-size: 14px;
`;

export default function TimelineExperienciaFormacao(props) {
	const { language } = useContext(SettingsContext);
	const theme = useTheme();

	return (
		<VerticalTimeline lineColor={theme.colors.branding}>
			{/* Current Education */}
			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				contentStyle={{ borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<SchoolIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2023 - 2025</h3>
					<BoldText>
						Institution: <span>Illinois Institute of Technology, Chicago, IL</span>
					</BoldText>
					<BoldText>
						Degree: <span>Master of Science in Cyber Forensics and Security</span>
					</BoldText>
					<BoldText>
						GPA: <span>3.90 (Summa Cum Laude)</span>
					</BoldText>
					<DescriptionText>Merit-based Scholarship recipient</DescriptionText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* Teaching Assistant Experience */}
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>Jan 2023 - Aug 2023</h3>
					<BoldText>
						Company: <span>Islington College, Kathmandu, Nepal</span>
					</BoldText>
					<BoldText>
						Position: <span>Teaching Assistant, CCNA Tutor</span>
					</BoldText>
					<DescriptionText>• Optimized hardware and network troubleshooting using Cisco equipment, increasing network reliability by 80%</DescriptionText>
					<DescriptionText>• Taught networking protocols and concepts using Cisco Networking Equipment</DescriptionText>
					<DescriptionText>• Delivered training on network services and subnetting, boosting practical skills by 80%</DescriptionText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* Bachelor's Degree */}
			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<SchoolIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2019 - 2022</h3>
					<BoldText>
						Institution: <span>Islington College, Kathmandu, Nepal</span>
					</BoldText>
					<BoldText>
						Degree: <span>BSc. (Hons) Computer Networking and IT Security</span>
					</BoldText>
					<BoldText>
						GPA: <span>3.80 (First Class Honors)</span>
					</BoldText>
					<DescriptionText>Star Student achievement</DescriptionText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* Technical Support Experience */}
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>Jul 2022 - Nov 2022</h3>
					<BoldText>
						Company: <span>Techno Planet, Kathmandu, Nepal</span>
					</BoldText>
					<BoldText>
						Position: <span>Technical Support (Networking and IT)</span>
					</BoldText>
					<DescriptionText>• Configured Mikrotik network devices and switches, enhancing network efficiency and reliability</DescriptionText>
					<DescriptionText>• Configured Cambium APs and resolved device reset issues</DescriptionText>
					<DescriptionText>• Resolved printer issues and set up VPN connections to optimize system performance</DescriptionText>
					<DescriptionText>• Mapped shared drives and deployed Bitdefender antivirus to improve data security</DescriptionText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* Internship Experience */}
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>Sept 2021 - Dec 2021</h3>
					<BoldText>
						Company: <span>Employee Provident Fund, Kathmandu, Nepal</span>
					</BoldText>
					<BoldText>
						Position: <span>Internship as Technical Support (IT Support)</span>
					</BoldText>
					<DescriptionText>• Optimized Windows settings and resolved CPU hardware issues to reduce downtime</DescriptionText>
					<DescriptionText>• Managed and updated the office network and configured access points</DescriptionText>
					<DescriptionText>• Organized and strengthened IT infrastructure through precise cable crimping and efficient server rack management</DescriptionText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* Recent Certification */}
			<VerticalTimelineElement
				className="vertical-timeline-element--certification"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>2025</h3>
					<BoldText>
						Certification: <span>Tata Cybersecurity Security Analyst Job Simulation on Forage - June 2025</span>
					</BoldText>
					<BoldText>
						In Progress: <span>CompTIA Security+</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
		</VerticalTimeline>
	);
}