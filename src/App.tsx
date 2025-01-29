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
import { useClickOutside, useDisclosure, useViewportSize } from "@mantine/hooks";
import LinkGroup from "./Components/LinkGroup";
import Logo from "./assets/logo-preview.png";
import "@mantine/core/styles.css";
import styles from "./App.module.css";
import classes from "./Components/LinkGroup.module.css";
import { useEffect } from "react";

function App() {
  const [openedBurger, handlersBurger] = useDisclosure();
  const [openedDesktop, handlersDesktop] = useDisclosure(true);
  const { height, width } = useViewportSize();
  const links = (mobile: boolean) => {
    if (mobile) {
      return <LinkGroup burger={false} />;
    } else {
      return <LinkGroup burger={true} />;
    }
  };
  const handleClick = () => {
    handlersDesktop.toggle()
    handlersBurger.toggle()
  }
  useEffect(() => {
    if(width>= 992){
      handlersBurger.close()
      handlersDesktop.open()
    }
  }, [width])
  return (
    <MantineProvider>
      <AppShell
        header={{ height: 200 }}
        navbar={{
          width: 300,
          breakpoint: "xs",
          collapsed: { mobile: !openedBurger, desktop: openedDesktop },
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
                <Burger opened={openedBurger} onClick={() => handleClick()} size="xl" hiddenFrom="md" />
              </Container>
            </header>

          </Group>
        </AppShell.Header>
        <AppShell.Navbar
          className={openedBurger ? styles.navbar_shadow : ""}
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
