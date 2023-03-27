import React from "react";
import { Session } from "next-auth";
import { Center, Stack, Text, Button, Input } from "@chakra-ui/react";
import { signIn, useSession, signOut, getSession } from "next-auth/react";
interface Props {
  session: Session | null;
  reloadSession: () => void;
}

const Auth = ({ session, reloadSession }: Props) => {
  const [userName, setUserName] = React.useState("");

  function handelChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { target } = e;
    const { value } = target;
    setUserName(value);
  }

  async function onSubmit() {
    try {
      // call createUserName mutation
    } catch (error: any) {
      console.error(error.message);
    }
  }

  return (
    <Center h="100vh" bg="whiteAlpha.200">
      <Stack align="center" spacing={4}>
        {session ? (
          <>
            <Text fontSize="3xl">Create a User Name</Text>
            <Input
              placeholder="Enter a userName"
              value={userName}
              onChange={handelChange}
            />
            <Button w="100%" onClick={onSubmit}>
              save
            </Button>
          </>
        ) : (
          <>
            <Text fontSize="3xl" color="white">
              {" "}
              MessageQL
            </Text>
            {/* add a left icon to this button */}
            <Button
              variant="outline"
              color="white"
              _hover={{ color: "gray", bg: "white" }}
              onClick={() => signIn("google")}
            >
              Continue with google
            </Button>
          </>
        )}
      </Stack>
    </Center>
  );
};

export default Auth;
