import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Layout from "./components/layout";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import { Todo } from "types";

const initTodos: Todo[] = [];
// const initTodos: Todo[] = [
// 	{ type: "text", value: "learn react native basics" },
// 	{ type: "text", value: "learn expo basics" },
// 	{
// 		type: "text",
// 		value:
// 			"check out the ability to use strapi for free (how to deploy the app)",
// 	},
// 	{
// 		type: "img",
// 		value:
// 			"file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Ftodo-app-expo-632a2958-2e7a-4777-8a45-79e2a5df2d82/ImagePicker/88399924-bc0a-4b6a-93ad-d1358c0afc99.jpeg",
// 	},
// ];

export default function App() {
	const [todos, setTodos] = useState(initTodos);
	const [input, setInput] = useState("");

	function handleInputChange(value: string) {
		setInput(value);
	}

	function handleAddTodo(todo: Todo) {
		if (!todo.value.trim().length)
			return alert("Your todo is empty! Type smth!");

		setTodos((prev) => [...prev, todo]);
		setInput("");
	}

	function handleRemoveTodo(index: number) {
		setTodos((prev) => prev.filter((_, i) => i !== index));
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

	useEffect(() => console.log(todos), [todos]);

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
