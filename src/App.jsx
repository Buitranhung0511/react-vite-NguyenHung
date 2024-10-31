import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';
const App = () => {
  const nguyenhung ="Cu Queo NewYork";
  const age = 25;
  const data = {
    address:"Dong Thap",
    contry:"Viet Nam"

  }
  return (
    <div className="todo-content">

      <div className="todo-title">Todo List</div>
      <TodoNew/>
      <TodoData
      name = {nguyenhung}
      age = {age}
      data={data}
      /> 
      <div className='todo-image'>
        <img src={reactLogo} className='logo'/>
      </div>

    </div>
  )
}

export default App
