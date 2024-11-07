import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';
import { useState } from 'react';
const App = () => {

  const [todoList, setTodoList] = useState([
    // {id:1, name: "Learning React"},
    // {id:2, name: "Watching Youtube"}
  ])

  const addNewToDo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000), //truyền hàm random vào đây để khi thêm mới 1 cái id sẽ thay đổi 
      name: name
    }

    setTodoList([...todoList, newTodo])
  }

  const randomIntFromInterval = (min, max) => { // Hàm này để sử dụng random id với xác suất nhỏ, nhưng vẫn có khả năng
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  return (
    <div className="todo-content">

      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewToDo={addNewToDo}
      />

      {todoList.length > 0
        ?
        < TodoData
          todoList={todoList}
        />
        :
        <div className='todo-image'>
          <img src={reactLogo} className='logo' />
        </div>

      }

      {/* {todoList.length > 0 &&
        < TodoData
          todoList={todoList}
        />
      }
      {todoList.length === 0 &&

        <div className='todo-image'>
          <img src={reactLogo} className='logo' />
        </div>
      } */}
    </div>
  )
}

export default App
