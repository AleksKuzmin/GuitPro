import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import SignOut from './SignOut';

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/products">Guitars</Link>
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
    </NavStyles>
  );
}
