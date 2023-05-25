import { useSelector } from "react-redux";

import List from "./List";

const Lists = () => {
  const selector = useSelector((state) => state.todos);
  console.log(selector);

  return (
    <ul className="list-group">
      {selector.map((todo, i) => (
        <List key={i} title={todo.text} id={todo.id} />
      ))}
    </ul>
  );
};

export default Lists;
