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
import Footer from "./Components/Footer";
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
          <Center className="center_space" mx={16}>
            <Flex h={200} align={"center"}>
              <Link to={"/"}>
                <Image src={Logo} w={175} />
              </Link>
            </Flex>
            <Group wrap={"wrap"} justify="center" visibleFrom="sm">
              <LinkGroup burger={true} />
            </Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="xl"
            />
          </Center>
        </AppShell.Header>
        <AppShell.Navbar pb={opened ? 48 : 0} className={opened ? styles.navbar_shadow : ''}>
          <LinkGroup burger={false} />
        </AppShell.Navbar>
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
        <Footer />
      </AppShell>
    </MantineProvider>
  );
}

export default App;
