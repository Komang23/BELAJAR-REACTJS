export default function Conditional() {
  return <TodoList />;
}

function Todo({ text, isComplated, isDeleted = false }) {
  if (isDeleted) {
    return null;
  } else if (isComplated) {
    return (
      <li>
        <del>{text}</del>
      </li>
    );
  } else {
    return <li>{text}</li>;
  }
}

function TodoList() {
  return (
    <ul>
      <Todo
        isComplated={true}
        text=" isComplate true maka tulisan di coret"
        isDeleted={true}
      ></Todo>
      <Todo
        isComplated={true}
        text=" isComplate true maka tulisan di coret"
      ></Todo>
      <Todo
        isComplated={false}
        text=" isComplate false maka tulisan tidak di coret"
      ></Todo>
    </ul>
  );
}
