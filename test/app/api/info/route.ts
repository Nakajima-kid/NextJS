import { log } from "console";

export const GET = async () => {
  log({ msg: "Hello" });
  return Response.json({ msg: "Hello" });
};
