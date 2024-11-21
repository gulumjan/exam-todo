import { api as index } from "..";

export const api = index.injectEndpoints({
  endpoints: (builder) => ({
    addTodo: builder.mutation<TODO.PostTodoResponse, TODO.PostTodoRequest>({
      query: (data) => ({
        url: `/api/add-todo`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    getTodo: builder.query<TODO.GetTodoResponse, TODO.GetTodoRequest>({
      query: () => ({
        url: `/api/get-todo`,
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    deleteTodo: builder.mutation<
      TODO.DeleteTodoResponse,
      TODO.DeleteTodoRequest
    >({
      query: (id) => ({
        url: `/api/delete-todo?id=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
    editTodo: builder.mutation<TODO.EditTodoResponse, TODO.EditTodoRequest>({
      query: ({ id, data }) => ({
        url: `/api/edit-todo?id=${id}`,
        method: "PATCH",
        body: { id, data },
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useAddTodoMutation,
  useGetTodoQuery,
  useDeleteTodoMutation,
  useEditTodoMutation,
} = api;
