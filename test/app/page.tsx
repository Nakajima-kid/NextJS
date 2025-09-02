import Navbar from "../components/Navbar";
import Counter from "../components/Counter";

const page = async () => {
  await new Promise((resolve)=>setInterval(resolve,1000))
  return (
    <>
      <Navbar></Navbar>
      <div>Home Page</div>
      <Counter></Counter>
    </>
  );
};
export default page;
