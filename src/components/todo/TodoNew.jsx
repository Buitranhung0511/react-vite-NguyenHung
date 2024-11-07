import { useState } from "react";

const TodoNew = (props) => {

  const [valueInput, setValueInput] = useState("Nguyen Hung")

  const { addNewToDo } = props;
  const handleClick = () => {
    addNewToDo(valueInput);
    setValueInput(""); //set = rỗng để khi add 1 dữ liệu vào xong thì ô input sẽ clear dữ liệu 
  }

  const handleOnChange = (name) => {
    setValueInput(name)

  }

  return (
    <div className='todo-new'>
      <input type="text" placeholder='Enter Your Task'
        onChange={(event) => handleOnChange(event.target.value)}
        value={valueInput} // kiểm soát dữ liệu user input vào 
      />


      <button className='todo-btn'
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      >Add</button>
      <div>
        My check input is = {valueInput}
      </div>
    </div>
  )

}


export default TodoNew;