import { Image, StyleSheet, Text } from "react-native";

const appImg = require("./../../../assets/favicon.png");

export default function Header() {
	return (
		<>
			<Image source={appImg} style={styles.image} />
			<Text style={styles.title}>Todo Expo App by VG</Text>
			<Text style={styles.descrption}>
				Simple native app that allows users to add text or image todos, built
				for learning purposes using Expo & React Native for the first time.
			</Text>
		</>
	);
}

const styles = StyleSheet.create({
	image: {
		width: 50,
		height: 50,
		marginBottom: 20,
	},
	title: {
		color: "#fff",
		fontSize: 20,
		marginBottom: 10,
	},
	descrption: {
		color: "#fff",
		textAlign: "center",
		fontSize: 15,
		marginBottom: 20,
	},
});
