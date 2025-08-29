import Link from "next/link";

const Info = () => {
  return (
    <>
      <nav>
        <div className="flex gap-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/about/"}>About</Link>
          <Link href={"/info"}>Info</Link>
        </div>
      </nav>
      <div>Info Page</div>
    </>
  );
};
export default Info;
