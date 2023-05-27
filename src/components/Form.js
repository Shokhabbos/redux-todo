import { useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../actions/todos";

const Form = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim() !== "") {
      dispatch(
        addTodo({
          id: uuidv4(),
          title: inputRef.current.value,
          status: false,
        })
      );
    }
    formRef.current.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
      className="mb-3 d-flex justify-content-between align-items-center"
    >
      <input
        type="text"
        ref={inputRef}
        className="form-control w-75"
        id="exampleFormControlInput1"
        placeholder="Add todo"
      />
      <button className="btn btn-success">Add</button>
    </form>
  );
};

export default Form;
