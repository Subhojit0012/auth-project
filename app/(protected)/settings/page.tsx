import { auth, signOut } from "@/auth";

const SettingPage = async () => {
  const session = await auth();
  // serialize the auth session
  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
};

export default SettingPage;
