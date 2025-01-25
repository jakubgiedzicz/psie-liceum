import "@mantine/core/styles.css";
import "./App.css";
import {
  AppShell,
  Burger,
  Group,
  MantineProvider,
  Image,
  Center,
  Flex} from "@mantine/core";
import { Link, Outlet } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import LinkGroup from "./Components/LinkGroup";
import Logo from "./assets/logo-preview.png";
import "@mantine/core/styles.css";
import styles from './App.module.css'

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
          <Group justify="space-around" align="stretch" h='100%'>
              <Link to={"/"}>
                <Image src={Logo} w={175} />
              </Link>
              <LinkGroup burger={true} />
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="xl"
            />
          </Group>
        </AppShell.Header>
        <AppShell.Navbar pb={opened ? 48 : 0} className={opened ? styles.navbar_shadow : ''}>
          {/* <LinkGroup burger={false} /> */}
        </AppShell.Navbar>
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
