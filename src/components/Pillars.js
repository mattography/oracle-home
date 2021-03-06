import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
	pillarWrapper: {
		flexGrow: 1,
		display: "flex",
		flexDirection: "row",
		maxWidth: "100%",
		height: "100vh",
		"@media (max-width: 1024px)": {
			display: "flex",
			flexDirection: "column",
			width: "100%"
		}
	},
	pillarContentWrapper: {
		width: "33.33%",
		"@media (max-width: 1024px)": {
			width: "100%"
		}
	},
	pillarContent: {
		color: "#fff",
		margin: "0 40px auto",
		maxWidth: 400,
		textAlign: "left",
		flexDirection: "column",
		justifyContent: "center",
		transform: "translateY(150px)",
		"& h1": {
			fontFamily: "OracleSansVF",
			marginTop: "-25px",
			fontWeight: 800
		},
		"& p": {
			lineHeight: "1.3em",
			fontFamily: "OracleSansVF"
		},
		"@media (max-width: 1024px)": {
			transform: "translateY(0px)",
			margin: "20px auto"
		}
	},
	pillarTitle: {
		fontFamily: "OracleSansVF",
		fontSize: 25,
		fontWeight: 300
	},
	subsubTitleStyle: {
		fontSize: 16,
		fontFamily: "OracleSansVF",
		fontWeight: 600,
		marginBottom: -10
	},
	pillarButton: {
		width: "auto",
		height: 37,
		marginTop: 15,
		backgroundColor: "transparent",
		border: "1px solid #fff",
		borderRadius: 5,
		color: "#fff",
		cursor: "pointer",
		fontFamily: "OracleSansVF",
		fontSize: 12,
		fontWeight: 500,
		padding: 10,
		"&:hover": {
			backgroundColor: "#fff",
			color: "#000"
		}
	},
	noSubTitle: {
		paddingTop: 15
	}
}));
const Pillars = data => {
	const {
		data: { pillars }
	} = data;
	const classes = useStyles();
	return (
		<div className={classes.pillarWrapper}>
			{pillars.map((pillar, i) => (
				<div
					className={classes.pillarContentWrapper}
					style={{
						textAlign: "center",
						backgroundSize: "cover",
						backgroundImage: `url(${pillar.background})`
					}}
					key={i}
				>
					<div className={classes.pillarContent}>
						<p className={classes.pillarTitle}>{pillar.title}</p>
						<h1>{pillar.subtitle}</h1>
						<p className={classes.subsubTitleStyle}>{pillar.subsubTitle}</p>
						<p className={pillar.subsubTitle ? "" : classes.noSubTitle}>
							{pillar.content}
						</p>
						<button className={classes.pillarButton}>
							{pillar.buttonText}
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Pillars;
