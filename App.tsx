import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Layout from "./components/layout";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import { Todo } from "types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
	const [todos, setTodos] = useState<Todo[]>([]);
	console.log("todos:", todos);

	const [input, setInput] = useState("");

	const TODOS_KEY_IN_ASYNC_STORAGE = "todo-app-expo-todos";

	function handleInputChange(value: string) {
		setInput(value);
	}

	async function handleAddTodo(todo: Todo) {
		if (!todo.value.trim().length)
			return alert("Your todo is empty! Type smth!");

		const updatedTodos = [...todos, todo];

		await updateTodosInAsyncStorage(updatedTodos);

		setInput("");
	}

	async function handleRemoveTodo(index: number) {
		const updatedTodos = todos.filter((_, i) => i !== index);

		await updateTodosInAsyncStorage(updatedTodos);
	}

	async function updateTodosInAsyncStorage(updatedTodos: Todo[]) {
		try {
			await AsyncStorage.setItem(
				TODOS_KEY_IN_ASYNC_STORAGE,
				JSON.stringify(updatedTodos)
			);

			setTodos(updatedTodos);
		} catch (e) {
			console.error("Error occured while updating todos in async storage...");
		}
	}

	const pickImageAsync = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			quality: 1,
		});

		if (!result.canceled) {
			console.log(result);
			handleAddTodo({ type: "img", value: result.assets[0].uri });
		} else {
			//alert("You did not select any image.");
		}
	};

	useEffect(() => {
		async function getTodosFromAsyncStorage() {
			const storedTodosString = await AsyncStorage.getItem(
				TODOS_KEY_IN_ASYNC_STORAGE
			);

			if (!storedTodosString) {
				setTodos([]);
				console.log("There are no todos stored on the device so far...");
			} else {
				const storedTodosParsed = JSON.parse(storedTodosString);
				setTodos(storedTodosParsed);
				console.log("There are todos stored on the device:", storedTodosParsed);
			}
		}

		getTodosFromAsyncStorage();
	}, []);

	return (
		<Layout>
			<Form
				input={input}
				handleInputChange={handleInputChange}
				handleAddTodo={handleAddTodo}
				pickImageAsync={pickImageAsync}
			/>

			<TodoList todos={todos} handleRemoveTodo={handleRemoveTodo} />
		</Layout>
	);
}
