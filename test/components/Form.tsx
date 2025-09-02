"use client";

const Form = () => {
  return (
    <>
      <form>
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
        <button type="submit" className="border bg-red-500">Submit</button>
      </form>
    </>
  );
};
export default Form;
