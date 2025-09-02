"use client";

import { create } from "../utils/action";
import { useActionState } from "react";

const Form = () => {
  const [msg, formAction] = useActionState(create, null);
  return (
    <>
      <form action={formAction}>
        Form
        <br />
        <input
          placeholder="title"
          name="title"
          className="border"
          defaultValue="title"
        />
        <br />
        <input
          placeholder="name"
          name="name"
          className="border"
          defaultValue="name"
        />
        <br />
        <button type="submit" className="border bg-red-500">
          Submit
        </button>
        <br />
        {msg}
      </form>
    </>
  );
};
export default Form;
