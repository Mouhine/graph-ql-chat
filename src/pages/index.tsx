import { NextPageContext } from "next";
import { Button, Box } from "@chakra-ui/react";
import { signIn, useSession, signOut, getSession } from "next-auth/react";
import Chat from "@/components/chat/Chat";
import Auth from "@/components/Auth/Auth";
export default function Home() {
  function reloadSession() {}
  const { data: session, status } = useSession();
  return (
    <Box>
      {session?.user.username ? (
        <Chat />
      ) : (
        <Auth session={session} reloadSession={reloadSession} />
      )}
    </Box>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
