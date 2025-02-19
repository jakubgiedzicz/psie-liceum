import "@mantine/core/styles.css";
import "./App.css";
import {
  AppShell,
  Burger,
  Group,
  MantineProvider,
  Image,
  Container,
} from "@mantine/core";
import { Link, Outlet } from "react-router-dom";
import { useDisclosure, useViewportSize } from "@mantine/hooks";
import LinkGroup from "./Components/LinkGroup";
import Logo from "./assets/logo-preview.png";
import "@mantine/core/styles.css";
import styles from "./App.module.css";
import classes from "./Components/LinkGroup.module.css";
import { useEffect } from "react";

function App() {
  //is burger visible?
  const [openedBurger, handlersBurger] = useDisclosure();
  //is width >992
  const [openedDesktop, handlersDesktop] = useDisclosure(true);
  // @ts-ignore
  const { height, width } = useViewportSize();
  //is width 576<x<992
  const [menu, handlersMenu] = useDisclosure(true)
  const links = (mobile: boolean, desktop:boolean) => {
    if (mobile) {
      return <LinkGroup burger={false} openDesktop={desktop}/>;
    } else {
      return <LinkGroup burger={true} openDesktop={desktop}/>;
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
    if(width>576 && width <992){
      handlersMenu.open()
    } else {
      handlersMenu.close()
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
        <AppShell.Header w={'100dvw'}>
          <Group justify="space-around" h={"100%"}>
            <Link to={"/"}>
              <Image src={Logo} w={175} />
            </Link>
            <header className={classes.header}>
              <Container size="md">
                <div className={classes.inner}>{links(true, menu)}</div>
                <Burger opened={openedBurger} onClick={() => handleClick()} size="xl" hiddenFrom="md" />
              </Container>
            </header>

          </Group>
        </AppShell.Header>
        <AppShell.Navbar
          className={openedBurger ? styles.navbar_shadow + ' paws_bg' : ' paws_bg'}
        >
          {links(false, menu)}
        </AppShell.Navbar>
        <AppShell.Main w={'100dvw'}>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
