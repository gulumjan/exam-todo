namespace TODO {
  type GetTodoResponse = iTodo[];
  type GetTodoRequest = void;

  type PostTodoResponse = iTodo[];
  type PostTodoRequest = iTodo;

  type DeleteTodoResponse = iTodo[];
  type DeleteTodoRequest = number;

  type EditTodoResponse = iTodo[];
  type EditTodoRequest = {
    id: number;
    data: iTodo;
  };
}
