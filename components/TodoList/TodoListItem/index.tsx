import { Todo } from "@/types";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type TodoListItemProps = {
	item: Todo;
	index: number;
	handleRemoveTodo: (index: number) => void;
};

export default function TodoListItem({
	item,
	index,
	handleRemoveTodo,
}: TodoListItemProps) {
	return (
		<View>
			{item.type === "text" ? (
				<Text style={styles.todoText}>
					🚀 {item.value}{" "}
					<Pressable
						style={styles.removeButton}
						onPress={() => handleRemoveTodo(index)}
					>
						<Text style={{ color: "white" }}>X</Text>
					</Pressable>
				</Text>
			) : (
				<View style={styles.todoImgType}>
					<Text style={styles.todoText}>🚀 </Text>
					<Image source={{ uri: item.value }} style={styles.todoImg} />
					<Pressable
						style={styles.removeButton}
						onPress={() => handleRemoveTodo(index)}
					>
						<Text style={{ color: "white" }}>X</Text>
					</Pressable>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	todoImg: {
		width: 200,
		height: 200,
		marginBottom: 20,
	},
	todoText: {
		color: "white",
		fontSize: 18,
		marginVertical: 5,
	},
	todoImgType: {
		display: "flex",
		flexDirection: "row",
	},
	removeButton: {
		backgroundColor: "#ff0000",
		borderRadius: 50,
		padding: 5,
		marginLeft: 10,
	},
});
