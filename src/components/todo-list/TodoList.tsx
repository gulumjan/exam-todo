"use client";
import { FC, useState } from "react";
import scss from "./TodoList.module.scss";
import {
  useDeleteTodoMutation,
  useEditTodoMutation,
  useGetTodoQuery,
} from "@/redux/api/todo";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

const TodoList: FC = () => {
  const { data } = useGetTodoQuery();

  const [deleteTodo] = useDeleteTodoMutation();
  const [edit, setEdit] = useState<null | number>(null);
  const { register, handleSubmit } = useForm<iTodo>();
  const [editTodo] = useEditTodoMutation();

  const handleDelete = async (id: number) => {
    try {
      const res = await deleteTodo(id).unwrap();
      console.log("Success deleted", res);
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdate: SubmitHandler<iTodo> = async (data) => {
    try {
      const res = await editTodo({ id: edit!, data });
      console.log("Succes updated", res);
      setEdit(null);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className={scss.TodoList}>
      <div className="container">
        <div className={scss.content}>
          {data?.map((el) => (
            <div className={scss.card} key={el.id}>
              {edit === el.id ? (
                <form onSubmit={handleSubmit(onUpdate)}>
                  <Image
                    width={200}
                    height={200}
                    src={
                      el.image ||
                      "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                    }
                    alt=""
                  />
                  <input
                    placeholder="Title"
                    defaultValue={el.title}
                    {...register("title")}
                    type="text"
                  />
                  <input
                    placeholder="Image URL"
                    defaultValue={el.image}
                    {...register("image")}
                    type="text"
                  />
                  <div className={scss.btns}>
                    <button>Save</button>
                  </div>
                </form>
              ) : (
                <>
                  <Image
                    width={200}
                    height={200}
                    src={
                      el.image ||
                      "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                    }
                    alt=""
                  />

                  <p>{el.title}</p>
                  <div className={scss.btns}>
                    <button onClick={() => handleDelete(el.id)}>Delete</button>
                    <button onClick={() => setEdit(el.id)}>Edit</button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodoList;
