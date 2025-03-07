import "./App.css";
import {
  AppShell,
  Burger,
  Group,
  MantineProvider,
  Image,
  Container,
} from "@mantine/core";
import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/Button.css';
import '@mantine/core/styles/global.css';
import '@mantine/core/styles/AppShell.css';
import '@mantine/core/styles/Burger.css';
import '@mantine/core/styles/Group.css';
import '@mantine/core/styles/Image.css';
import '@mantine/core/styles/Container.css';
import { Link, Outlet, useLocation } from "react-router-dom";
import { useDisclosure, useViewportSize } from "@mantine/hooks";
import LinkGroup from "./Components/LinkGroup";
import Logo from "./assets/logo-preview.png";
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
  const location = useLocation()
  const links = (mobile: boolean, desktop:boolean) => {
    if (mobile) {
      return <LinkGroup burger={false} openDesktop={desktop}/>;
    } else {
      return <LinkGroup burger={true} openDesktop={desktop}/>;
    }
  };
  useEffect(() => {
    handlersBurger.close()
    handlersDesktop.open()
  },[location])
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
        header={{ height: 140 }}
        navbar={{
          width: 300,
          breakpoint: "xs",
          collapsed: { mobile: !openedBurger, desktop: openedDesktop },
        }}
      >
        <AppShell.Header w={'100dvw'}>
          <Group justify="space-around" h={"100%"}>
            <Link to={"/"} aria-label="Main page" aria-labelledby="Main page link">
              <Image src={Logo} h={120} fit="contain" alt="Logo" aria-label="Logo Image"/>
            </Link>
            <header className={classes.header}>
              <Container size="md">
                <div className={classes.inner}>{links(true, menu)}</div>
                <Burger opened={openedBurger} onClick={() => handleClick()} size="xl" hiddenFrom="md" aria-label="Navigation menu button"/>
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
