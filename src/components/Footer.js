import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		backgroundColor: "#312D2A",
		color: "#ffffff",
		paddingBottom: 40,
		"& h3": {
			color: "#AAA7A5"
		},
		"@media (max-width: 1024px)": {
			marginTop: 94,
			display: "flex",
			flexDirection: "column",
			width: "100%",
			flexDirection: "column",
			transform: "translateY(110px)",
			textAlign: "center"
		}
	},
	footerSection: {
		display: "flex",
		flexDirection: "column",
		"& ul": {
			listStyleType: "none",
			paddingLeft: 0
		},
		"& li a": {
			color: "#fff",
			textDecoration: "none"
		},
		"& li:nth-child(2n)": {
			padding: "10px 0"
		}
	}
}));

const FooterSection = data => {
	const classes = useStyles();
	return (
		<footer className={classes.root}>
			{data.data.footerSections.map((item, i) => (
				<div className={classes.footerSection} key={i}>
					<h3>{item.header}</h3>
					<ul>
						{item.links.map((item, i) => (
							<li key={i}>
								<a href="">{item}</a>
							</li>
						))}
					</ul>
				</div>
			))}
		</footer>
	);
};

export default FooterSection;
