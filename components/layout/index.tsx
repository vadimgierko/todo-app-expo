import { StyleSheet, View } from "react-native";
import Header from "./Header";
import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<View style={styles.container}>
			<Header />
			{children}
			<Footer />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#25292e",
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
});
