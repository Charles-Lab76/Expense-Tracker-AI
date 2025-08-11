import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return <SignIn />;
}
export const dynamic = 'force-dynamic';  // This ensures the page is always rendered on the server