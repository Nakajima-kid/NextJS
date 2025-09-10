import Link from "next/link";
import { Button } from "../ui/button";

const Logo = () => {
  return (
    <Button variant={'outline'} size={'default'} asChild>
      <Link href="/">Logo</Link>
    </Button>
  );
};
export default Logo;
