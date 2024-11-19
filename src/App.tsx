import "@mantine/core/styles.css";
import "./App.css";
import {
  AppShell,
  Box,
  Burger,
  Group,
  MantineProvider,
  Image,
  Center,
  Container,
  Flex,
} from "@mantine/core";
import { Link, Outlet } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import LinkGroup from "./Components/LinkGroup";
import Logo from "./assets/logo-preview.png";
import "@mantine/core/styles.css";

function App() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <MantineProvider>
      <AppShell
        header={{ height: 200 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened, desktop: true },
        }}
      >
        <AppShell.Header>
          {/* <Container>
            <Box w={175}>
              <Link to={"/"}>
                <Image src={Logo}/>
              </Link>
            </Box>
            <Group justify="space-around">
              <LinkGroup burger={true} />
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="lg"
              />
            </Group>
          </Container> */}
          <Center className="center_space">
            <Flex h={200} align={'center'} ml={64}>
            <Link to={"/"}>
                <Image src={Logo} w={175}/>
              </Link>
            </Flex>
            <Group wrap={'wrap'} ml={32} justify="center" visibleFrom="sm">
              <LinkGroup burger={true}/>
            </Group>
            <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="lg"
              />
          </Center>
        </AppShell.Header>
        <AppShell.Navbar>
          <LinkGroup burger={false} />
        </AppShell.Navbar>
        <AppShell.Main w={"100dvw"}>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
