import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Page not found</p>
      <Link href="/login">Go to Home</Link>
    </div>
  );
}