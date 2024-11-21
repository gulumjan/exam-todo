"use client";
import { FC } from "react";
import scss from "./AddTodo.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAddTodoMutation } from "@/redux/api/todo";

const AddTodo: FC = () => {
  const { register, handleSubmit } = useForm<TODO.PostTodoRequest>();
  const [addTodo] = useAddTodoMutation();

  const onSubmit: SubmitHandler<TODO.PostTodoRequest> = async (data) => {
    console.log(data);
    try {
      const res = await addTodo(data).unwrap();
      console.log("Sucess added", res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className={scss.AddTodo}>
      <div className="container">
        <div className={scss.content}>
          <h1>Add Todo</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Title" {...register("title")} type="text" />
            <input placeholder="Image URL" {...register("image")} type="text" />
            <button type="submit">send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddTodo;
