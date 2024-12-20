import TodoData from './TodoData';
import TodoNew from './TodoNew';
import './todo.css';
import reactLogo from '../../assets/react.svg';//Ben Trong Todo => Layout => Assets. De lui
import { useState } from 'react';

const TodoApp = () => {
    
    const [todoList, setTodoList] = useState([
      // {id:1, name: "Learning React"},
      // {id:2, name: "Watching Youtube"}
    ])
  
    const addNewToDo = (name) => {
      const newTodo = {
        id: randomIntFromInterval(1, 100), //truyền hàm random vào đây để khi thêm mới 1 cái id sẽ thay đổi 
        name: name
      }
      setTodoList([...todoList, newTodo])
    }
  
    const deleteToDo = (id) => {
      const newTodo = todoList.filter(item => item.id !== id)// giữ lại các các id giống cái id bắt được từ function 
      setTodoList(newTodo);
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
            deleteToDo={deleteToDo}
          />
          :
          <div className='todo-image'>
            <img src={reactLogo} className='logo' />
          </div>
  
        }
  
      </div>
    )
  }


  export default TodoApp