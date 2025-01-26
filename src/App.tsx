import "@mantine/core/styles.css";
import "./App.css";
import {
  AppShell,
  Burger,
  Group,
  MantineProvider,
  Image,
  Center,
  Flex,
  Container,
  Stack,
} from "@mantine/core";
import { Link, Outlet } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import LinkGroup from "./Components/LinkGroup";
import Logo from "./assets/logo-preview.png";
import "@mantine/core/styles.css";
import styles from "./App.module.css";
import classes from "./Components/LinkGroup.module.css";

function App() {
  const [opened, { toggle }] = useDisclosure();
  const links = (mobile: boolean) => {
    if (mobile) {
      return <LinkGroup burger={false} />;
    } else {
      return <LinkGroup burger={true} />;
    }
  };
  return (
    <MantineProvider>
      <AppShell
        header={{ height: 200 }}
        navbar={{
          width: 300,
          breakpoint: "md",
          collapsed: { mobile: !opened, desktop: true },
        }}
      >
        <AppShell.Header>
          <Group justify="space-around" h={"100%"}>
            <Link to={"/"}>
              <Image src={Logo} w={175} />
            </Link>
            <header className={classes.header}>
              <Container size="md">
                <div className={classes.inner}>{links(true)}</div>
                <Burger opened={opened} onClick={toggle} size="xl" hiddenFrom="md" />
              </Container>
            </header>

          </Group>
        </AppShell.Header>
        <AppShell.Navbar
          className={opened ? styles.navbar_shadow : ""}
          hiddenFrom="md"
        >
          {links(false)}
        </AppShell.Navbar>
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
