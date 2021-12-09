import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

function App() {
    const [todos, setTodos] = useState(['post mail', 'collect mail', 'destroy mail'])
    const [currentInputValue, setCurrentInputValue] = useState('')

    const addOneTodo = () => {
        console.log(`WOOOOOOOOOOOOOOOO!`, currentInputValue)
        const newListOfTodos = [...todos, currentInputValue]; //todos.concat([currentInputValue]);
        setTodos(newListOfTodos)
    }

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentInputValue(event.target.value);
    }

    const onTodoClick = (index: number) => {
        console.log('blah')
        const leftOverTodos = todos.filter((todo: any, i: number ) => i !== index);
        setTodos(leftOverTodos);
    }

    function handleKeyDownWithinInput(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            console.log(`Enter is pressed: ${e.key}`);
            addOneTodo();
        }
    }

  return (
    <div className="App">
      <header className="App-header">
          <input onChange={onInputChange} onKeyDown={handleKeyDownWithinInput} placeholder='What needs to be done?'/>
          {todos.map((todo,index) =>
              <div onClick={() => onTodoClick(index)}>
                  {todo}
              </div>
          )}
      </header>
    </div>
  );
}

export default App;
