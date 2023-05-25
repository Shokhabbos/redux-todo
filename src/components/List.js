const List = ({ id, title }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id={id}
        />
        <label className="form-check-label mx-3" htmlFor={id}>
          {title}
        </label>
      </div>
      <button className="btn btn-danger">delete</button>
    </li>
  );
};

export default List;
