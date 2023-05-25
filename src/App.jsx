import { Footer, Form, Header, Lists } from "./components";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-3">
          <div className="card my-5">
            <div className="card-header">
              <Header />
            </div>
            <div className="card-body">
              <Form />
              <Lists />
            </div>
            <div className="card-footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
