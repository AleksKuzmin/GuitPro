import Link from "next/link";
import SignOut from "./SignOut";
import NavStyles from "./styles/NavStyles";
import { useUser } from "./User";
export default function Nav() {
  const user = useUser();
  console.log("user", user);

  return (
    <NavStyles>
<<<<<<< HEAD
      <Link href="/products">Guitars</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/account">Account</Link>
=======
      <Link href="/products">Products</Link>
      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
          <SignOut />
        </>
      )}
      {!user && (
        <>
          <Link href="/signin">Sign In</Link>
        </>
      )}
>>>>>>> 8f07b39534f0804fff9c5ebaa8f86306b1e475ea
    </NavStyles>
  );
}
