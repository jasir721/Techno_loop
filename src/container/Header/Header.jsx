import React from "react";
import "./Header.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";
const Header = () => {
	return (
		<div className="header_container">
			<motion.div
				className="back_motion_left"
				initial={{ x: "-100vw" }}
				animate={{ x: "0vw" }}
				transition={{ duration: 1, type: "tween" }}
			></motion.div>
			<motion.div
				className="iit_pkd"
				initial={{ x: "-100vw" }}
				animate={{ x: "0vw" }}
				transition={{ duration: 1, type: "tween" }}
			>
				<div className="p2">
					IIT Palakkad is an premium institute in INdia in higher technological
					education and Research
				</div>
			</motion.div>
			<motion.div
				className="back_motion_right"
				initial={{ x: "50vw" }}
				animate={{ x: "0vw" }}
				transition={{ duration: 1, type: "tween" }}
			></motion.div>
			<motion.div
				className="place_card"
				initial={{ y: "-100vh" }}
				animate={{ y: "0vw" }}
				transition={{ duration: 2, type: "tween" }}
				// <motion.div
				whileHover={{ 
					scale: 1.05, 
					transition: { duration: 1 } 
				}}
			>
				<div className="pl">Placement</div>
			</motion.div>

			<motion.div
				className="intern_card"
				initial={{ y: "-100vh" }}
				animate={{ y: "0vw" }}
				transition={{ duration: 2, type: "tween" }}
				whileHover={{ 
					scale: 1.05, 
					transition: { duration: 1 } 
				}}

			>
				<div className="pl">Intern</div>
			</motion.div>
			<motion.div
				className="project_card"
				initial={{ y: "+100vh" }}
				animate={{ y: "0vw" }}
				transition={{ duration: 2, type: "tween" }}
				whileHover={{ 
					scale: 1.05, 
					transition: { duration: 1 } 
				}}
			>
				<div className="pl">Project</div>
			</motion.div>
		</div>
	);
};

export default Header;
