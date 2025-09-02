"use client";

import { useFormStatus } from "react-dom";
import { create } from "../utils/action";
import { useActionState } from "react";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="bg-red-500">
      {pending ? "Submitting" : "Submit"}
    </button>
  );
};

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
        <SubmitButton />
        <br />
        {msg}
      </form>
    </>
  );
};
export default Form;
