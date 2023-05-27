import { useDispatch } from "react-redux";
import { checkedTodo, deleteTodo } from "../actions/todos";

const List = ({ id, title, status }) => {
  const dispatch = useDispatch()
  const handleChange = (e) => {
    dispatch(checkedTodo({
      id, 
      title,
      status: e.target.checked
    })  )
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
        onChange={handleChange}
          className="form-check-input"
          type="checkbox"
          value=""
          id={id}
        />
        <label className={`form-check-label mx-3 ${status ? 'text-decoration-line-through' : ''}`} htmlFor={id}>
          {title}
        </label>
      </div>
      <button onClick={()=> dispatch(deleteTodo(id) )  }  className="btn btn-danger">delete</button>
    </li>
  );
};

export default List;
