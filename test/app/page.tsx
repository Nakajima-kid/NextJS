import Link from "next/link";

const page = async () => {
  return (
    <>
      <nav>
        <div className="flex gap-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/about/"}>About</Link>
          <Link href={"/info"}>Info</Link>
        </div>
      </nav>

      <div>Home Page</div>
    </>
  );
};
export default page;
