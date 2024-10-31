import './style.css';

const MyComponent = () => {
  //const hoidanit ="Nguyen Hung";// String
  //const hoidanit = 25;//number
  //const hoidanit = undefine;//undefine
  //const hoidanit = [1,2,3];
  const hoidanit ={
    name : "Nguyen hung",
    age: 25
  }
  return (
    <>
      <div className="">{JSON.stringify(hoidanit)} Tuoi HOCHOIDANIT </div>
      <div>{console.log("NGUYEN HUNG")}</div>
      <div className="child"
        style={{ borderRadius: "10px" }}
      >Child</div>

    </>
  );
}

export default MyComponent