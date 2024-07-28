import { StyleSheet, Text, View } from "react-native";
import { A } from "@expo/html-elements";

export default function Footer() {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();

	return (
		<View>
			<Text style={styles.footer}>
				2024{currentYear > 2024 && `-${currentYear}`} &copy; Vadim Gierko |{" "}
				{[
					{ href: "https://www.vadimgierko.com/web-development", icon: "🌍" },
					{ href: "https://github.com/vadimgierko", icon: "😼" },
					{
						href: "https://github.com/vadimgierko/todo-app-expo",
						icon: "[code]",
					},
				].map((link, i) => (
					<A
						href={link.href}
						hrefAttrs={{ target: "_blank" }}
						style={styles.iconLink}
						key={"link" + i}
					>
						{link.icon}
						{i < 2 && " | "}
					</A>
				))}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	footer: { color: "white", textAlign: "center", paddingVertical: 10 },
	iconLink: {},
});
