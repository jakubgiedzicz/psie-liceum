import "@mantine/core/styles.css";
import "./App.css";
import { AppShell, Box, Burger, Group, MantineProvider, Text } from "@mantine/core";
import { Link, Outlet } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import LinkGroup from "./Components/LinkGroup";

function App() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <MantineProvider>
      <AppShell header={{ height: 100 }} navbar={{width: 300, breakpoint: 'sm', collapsed:{ mobile: !opened, desktop: true }}}>
        <AppShell.Header >
          <Group h='100%' justify="space-around" visibleFrom="sm">
            <LinkGroup />
            </Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </AppShell.Header>
        <AppShell.Navbar>
        <LinkGroup />
        </AppShell.Navbar>
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
