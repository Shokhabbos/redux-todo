const Form = () => {
  return (
    <form className="mb-3 d-flex justify-content-between align-items-center">
      <input
        type="text"
        className="form-control w-75"
        id="exampleFormControlInput1"
        placeholder="Add todo"
      />
      <button className="btn btn-success">Add</button>
    </form>
  );
};

export default Form;
