const TodoData = (props) => {

    const { todoList, deleteToDo } = props;

    const handleClick = (id) =>{
        deleteToDo(id)
    }
    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                return (
                    <div className={`todo-item ${index}`} key={item.id}>
                        <div>{item.id}</div>
                        <div>{item.name}</div>
                        <button 
                        style={{cursor:"pointer"}}
                        onClick= {()=> handleClick(item.id)}
                        >Delete</button>
                    </div>

                )
            })}
        </div>

    )

}
export default TodoData;