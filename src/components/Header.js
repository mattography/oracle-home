import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: "#3A3632",
		height: 70,
		marginTop: -20
	},
	navlinks: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		padding: 20,
		margin: 10,
		"& li": {
			fontFamily: "OpenSans",
			color: "#ffffff",
			padding: 10,
			listStyleType: "none"
		},
		"& a": {
			textDecoration: "none",
			color: "#fff"
		}
	},
	logo: {
		content: "",
		backgroundImage: `url(
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 231 30' preserveAspectRatio='xMinYMid'%3E%3Cpath d='M99.61,19.52h15.24l-8.05-13L92,30H85.27l18-28.17a4.29,4.29,0,0,1,7-.05L128.32,30h-6.73l-3.17-5.25H103l-3.36-5.23m69.93,5.23V0.28h-5.72V27.16a2.76,2.76,0,0,0,.85,2,2.89,2.89,0,0,0,2.08.87h26l3.39-5.25H169.54M75,20.38A10,10,0,0,0,75,.28H50V30h5.71V5.54H74.65a4.81,4.81,0,0,1,0,9.62H58.54L75.6,30h8.29L72.43,20.38H75M14.88,30H32.15a14.86,14.86,0,0,0,0-29.71H14.88a14.86,14.86,0,1,0,0,29.71m16.88-5.23H15.26a9.62,9.62,0,0,1,0-19.23h16.5a9.62,9.62,0,1,1,0,19.23M140.25,30h17.63l3.34-5.23H140.64a9.62,9.62,0,1,1,0-19.23h16.75l3.38-5.25H140.25a14.86,14.86,0,1,0,0,29.71m69.87-5.23a9.62,9.62,0,0,1-9.26-7h24.42l3.36-5.24H200.86a9.61,9.61,0,0,1,9.26-7h16.76l3.35-5.25h-20.5a14.86,14.86,0,0,0,0,29.71h17.63l3.35-5.23h-20.6' transform='translate(-0.02 0)' style='fill:%23C74634'/%3E%3C/svg%3E")`,
		top: 30,
		left: 40,
		width: 130,
		height: 17,
		position: "absolute"
	},
	search: {
		color: "#fff",
		fontSize: 20,
		content: "",
		backgroundImage: `url(
			"data:image/svg+xml,%3Csvg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m10.1212266 1c5.0372326 0 9.1212266 4.08405043 9.1212266 9.1213526 0 2.1536493-.7465159 4.133053-1.9948779 5.6935382l5.7524247 5.7518269-1.4332625 1.4332823-5.7516795-5.7524977c-1.5605211 1.2485582-3.5400409 1.995203-5.6938314 1.995203-5.03723262 0-9.1212266-4.0840504-9.1212266-9.1213527 0-5.03730217 4.08399398-9.1213526 9.1212266-9.1213526zm0 2.02696725c-3.91778498 0-7.09428736 3.17654628-7.09428736 7.09438535 0 3.9178392 3.17650238 7.0943854 7.09428736 7.0943854 3.9177849 0 7.0942873-3.1765462 7.0942873-7.0943854 0-3.91783907-3.1765024-7.09438535-7.0942873-7.09438535z' fill='%23FBF9F8' fill-rule='evenodd'/%3E%3C/svg%3E"
    )`,
		backgroundSize: "100%",
		width: 20,
		height: 20,
		position: "relative",
		top: 10
	},
	rightNav: {
		position: "absolute",
		display: "flex",
		top: 20,
		right: 40,
		"& a:not(:first-child)": {
			margin: "0 10px"
		}
	},
	userButton: {
		display: "flex",
		color: "#fff",
		fontWeight: "bold",
		borderRadius: 5,
		padding: 6,
		backgroundColor: "#312D2A",
		fontSize: 14,
		cursor: "pointer",
		width: 160,
		height: 38,
		justifyContent: "center",
		"@media (max-width: 1180px)": {
			width: 40,
			backgroundColor: "#3A3632"
		},
		"& span": {
			position: "relative",
			lineHeight: "1.8em",
			paddingLeft: 5,
			fontFamily: "OpenSans",
			"@media (max-width: 1180px)": {
				display: "none"
			}
		}
	},
	user: {
		height: 25,
		width: 25,
		backgroundImage: `url(
      "data:image/svg+xml,%3Csvg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cpath d='M12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 Z M14,17 L10,17 C8.9456382,17 8.08183488,17.8158778 8.00548574,18.8507377 L8,19 L7.9999083,20.0644348 C9.20489006,20.6632768 10.5631221,21 12,21 C13.437276,21 14.7958624,20.6630902 16.001093,20.0639371 L16,19 C16,17.9456382 15.1841222,17.0818349 14.1492623,17.0054857 L14,17 Z M12,3 C7.02943725,3 3,7.02943725 3,12 C3,14.6709139 4.16346432,17.0700862 6.011229,18.7183529 C6.15016737,16.7059643 7.77779862,15.1043091 9.80035966,15.0048953 L10,15 L14,15 C16.1140799,15 17.8451043,16.6400557 17.9901616,18.7172556 C19.8369514,17.0692289 21,14.6704367 21,12 C21,7.02943725 16.9705627,3 12,3 Z M12,5 C14.206,5 16,6.794 16,9 C16,11.206 14.206,13 12,13 C9.794,13 8,11.206 8,9 C8,6.794 9.794,5 12,5 Z M12,7 C10.897,7 10,7.897 10,9 C10,10.103 10.897,11 12,11 C13.103,11 14,10.103 14,9 C14,7.897 13.103,7 12,7 Z' fill='%23FBF9F8'%3E%3C/path%3E%3C/svg%3E")`
	},
	contactButton: {
		display: "flex",
		color: "#fff",
		fontWeight: "bold",
		borderRadius: 5,
		border: "1px solid #fff",
		padding: 8,
		fontSize: 14,
		cursor: "pointer",
		width: 160,
		height: 38,
		justifyContent: "center",
		"@media (max-width: 1180px)": {
			width: 40,
			border: 0
		},
		"& span": {
			position: "relative",
			lineHeight: "1.3em",
			paddingLeft: 5,
			fontFamily: "OpenSans",
			"@media (max-width: 1180px)": {
				display: "none"
			}
		}
	},
	contact: {
		height: 21,
		width: 20,
		backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.47665 10.8665L7.44975 6.89343L6.74264 1.94368H2.5C2.5 1.94368 -1.03553 6.89343 6.03553 13.9645C13.1066 21.0356 18.0563 17.5 18.0563 17.5L18.0563 13.2574L13.1066 12.5503L9.1335 16.5234' stroke='white' stroke-width='2' stroke-miterlimit='10'/%3E%3C/svg%3E")`
	}
}));

const Header = data => {
	const {
		data: { navigation }
	} = data;
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.logo} />
			<ul className={classes.navlinks}>
				<li className={classes.search} />
				{navigation.map((item, i) => (
					<li key={i}>
						<a href="">{item.title}</a>
					</li>
				))}
			</ul>
			<div className={classes.rightNav}>
				<a className={classes.userButton}>
					<div className={classes.user} />
					<span>View Accounts</span>
				</a>
				<a className={classes.contactButton}>
					<div className={classes.contact} />
					<span>Contact Sales</span>
				</a>
			</div>
		</div>
	);
};

export default Header;
