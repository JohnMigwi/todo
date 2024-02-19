import { useState } from "react";

function TodoEngine() {
    const [userInput, setUserInput] = useState('');
    const [todo, setTodo] = useState([]);

    // get user input
    function inputHandler(event) {
        setUserInput(event.target.value);
    }

    // handle list
    function handleListing() {
        setTodo(prevTodo => [...prevTodo, userInput]);
        setUserInput(''); // Clear the input field after submitting
    }

    return (
        <div className="max-w-md mx-auto mt-10 bg-gray-100 p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold mb-4 text-center">Todo List</h1>
            <div className="flex items-center bg-white rounded-md shadow-md overflow-hidden">
                <input
                    type="text"
                    placeholder="Enter New Todo"
                    value={userInput}
                    onChange={inputHandler}
                    className="flex-1 py-2 px-4 border-none focus:outline-none"
                />
                <button
                    onClick={handleListing}
                    className="py-2 px-4 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
                >
                    Submit
                </button>
            </div>
            <ul className="mt-4">
                {todo.map((item, index) => (
                    <li key={index} className="py-2 bg-white shadow-md rounded-md mb-2 px-4">{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoEngine;
    