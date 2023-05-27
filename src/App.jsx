import { useDispatch, useSelector } from "react-redux";
import { Footer, Form, Header, Lists } from "./components";
import { useEffect } from "react";
import { saveTodo } from "./actions/todos";

function App() {
  const selector = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    let local = JSON.parse(localStorage.getItem('todos'))
   dispatch( saveTodo(local)   )
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-3">
          <div className="card my-5">
            <div className="card-header">
              <Header length={selector.length} />
            </div>
            <div className="card-body">
              <Form />
              <Lists selector={selector} />
            </div>
            <div className="card-footer">
              <Footer selector={selector} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
