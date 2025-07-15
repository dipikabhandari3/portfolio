import Head from "next/head";
import { useTheme } from "styled-components";

export default function HeadTag(props) {
	const theme = useTheme();
	return (
		<Head>
			<title>Dipika Bhandari | {props.title}</title>
			<meta name="theme-color" content={theme.colors.branding} /> {/* <!-- Chrome, Firefox OS and Opera -->*/}
			<meta name="msapplication-navbutton-color" content={theme.colors.branding} /> {/* <!-- Windows Phone -->*/}
			<meta name="apple-mobile-web-app-status-bar-style" content={theme.colors.branding} /> {/*<!-- iOS Safari -->*/}
			<meta name="description" content={props.metaDescription || "Cybersecurity professional specializing in penetration testing, cyber forensics, and security assessment. MS in Cyber Forensics and Security from Illinois Institute of Technology."} />
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
			<meta name="keywords" content={props.keywords || "cybersecurity, penetration testing, cyber forensics, security assessment, Kali Linux, Metasploit, network security, vulnerability assessment, digital forensics, information security"} />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest"></link>
		</Head>
	);
}
