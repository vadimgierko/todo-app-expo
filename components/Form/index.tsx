import { Todo } from "@/types";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

type FormProps = {
	input: string;
	handleInputChange: (value: string) => void;
	handleAddTodo: (todo: Todo) => void;
	pickImageAsync: () => Promise<void>;
};
export default function Form({
	input,
	handleInputChange,
	handleAddTodo,
	pickImageAsync,
}: FormProps) {
	return (
		<>
			<TextInput
				onChangeText={handleInputChange}
				value={input}
				placeholder="Input todo here..."
				placeholderTextColor="#ccc"
				style={styles.input}
			/>

			<View style={styles.btnsSection}>
				<Pressable
					onPress={() => handleAddTodo({ type: "text", value: input })}
					style={styles.button}
				>
					<Text style={styles.buttonText}>Add Text Todo</Text>
				</Pressable>
				<Pressable onPress={pickImageAsync} style={styles.button}>
					<Text style={styles.buttonText}>Add IMG Todo</Text>
				</Pressable>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	input: {
		width: "100%",
		height: 40,
		borderColor: "#fff",
		borderWidth: 1,
		borderRadius: 5,
		padding: 10,
		marginBottom: 10,
		color: "#fff",
	},
	button: {
		backgroundColor: "#1e90ff",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
		marginEnd: 7,
		marginBottom: 20,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
	},
	btnsSection: { display: "flex", flexDirection: "row" },
});
