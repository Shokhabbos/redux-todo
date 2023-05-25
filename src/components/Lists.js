import { useSelector } from "react-redux";

import List from "./List";

const Lists = () => {
  const selector = useSelector((state) => state.todos);
  console.log(selector);

  return (
    <ul className="list-group">
      {selector.length > 0 ? (
        selector.map((todo, i) => (
          <List key={i} title={todo.text} id={todo.id} />
        ))
      ) : (
        <h3 className="text-center">Todos not found</h3>
      )}
    </ul>
  );
};

export default Lists;
