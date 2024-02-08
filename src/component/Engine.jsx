import {useState} from "react";

function TodoEngine (){

    const [userInput, setUserInput] = useState('');
    const [todo, setTodo] = useState([]);


//get user input
    function inputHandler(event){
      setUserInput(event.target.value)
    };
    
//handle list
    function handleListing (){
       setTodo(todo =>[...todo, userInput])
       setUserInput(' ');
    };
    return (
        <>
         <input type="text" placeholder="Enter New Todo" onChange={inputHandler} value={userInput}/>
         <button onClick={handleListing}>Submit</button>
         {todo.map(todo=>(<li>{todo}</li>))}
        </>
    );
};

export default TodoEngine; 