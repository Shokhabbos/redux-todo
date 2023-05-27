import { useSelector } from "react-redux";

import List from "./List";

const Lists = ({selector}) => {

  return (
    <ul className="list-group">
      {selector.length > 0 ? (
        selector.map((todo, i) => (
          <List key={i} title={todo.title} id={todo.id} status={todo.status} />
        ))
      ) : (
        <h3 className="text-center">Todos not found</h3>
      )}
    </ul>
  );
};

export default Lists;
