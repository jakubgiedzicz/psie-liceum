import "@mantine/core/styles.css";
import "./App.css";
import {
  AppShell,
  Box,
  Burger,
  Group,
  MantineProvider,
  Image,
} from "@mantine/core";
import { Link, Outlet } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import LinkGroup from "./Components/LinkGroup";
import Logo from "./assets/logo-preview.png";

function App() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <MantineProvider>
      <AppShell
        header={{ height: 150 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened, desktop: true },
        }}
      >
        <AppShell.Header>
          <Group h="100%" justify="space-around">
            <Group h="100%" justify="flex-start" visibleFrom="sm" w={"70%"}>
              <LinkGroup burger={true} />
            </Group>
            <Box hiddenFrom="sm">
              <Link to={"/"}>
                <Image src={Logo} h={140}></Image>
              </Link>
            </Box>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="lg"
            />
          </Group>
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
