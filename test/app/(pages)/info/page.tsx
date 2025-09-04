import Form from "../../components/Form";
import Navbar from "../../components/Navbar";
import Image from "next/image";

const url = "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU";

const Info = () => {
  return (
    <>
      <Navbar></Navbar>
      <div>Info Page</div>
      <Image src={url} width={400} height={400} alt="test" className="mb-4"/>
      <Form></Form>
    </>
  );
};
export default Info;
