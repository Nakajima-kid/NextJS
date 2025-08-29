import Link from "next/link";

const About = () => {
  return (
    <>
      <nav>
        <div className="flex gap-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/about/"}>About</Link>
          <Link href={"/info"}>Info</Link>
        </div>
      </nav>
      <div>About Page</div>
    </>
  );
};
export default About;
