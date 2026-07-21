import { SignOutButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignOutButton redirectUrl="/" />
    </div>
  );
}
