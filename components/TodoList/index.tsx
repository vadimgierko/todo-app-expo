import { FlatList, StyleSheet } from "react-native";
import TodoListItem from "./TodoListItem";
import { Todo } from "@/types";

type TodoListProps = {
	todos: Todo[];
	handleRemoveTodo: (index: number) => void;
};

export default function TodoList({ todos, handleRemoveTodo }: TodoListProps) {
	return (
		<FlatList
			data={todos}
			renderItem={({ item, index }) => (
				<TodoListItem
					item={item}
					index={index}
					handleRemoveTodo={handleRemoveTodo}
				/>
			)}
			keyExtractor={(item, index) => index.toString()}
			contentContainerStyle={styles.flatListContent}
		/>
	);
}

const styles = StyleSheet.create({
	flatListContent: {
		alignItems: "flex-start",
	},
});
