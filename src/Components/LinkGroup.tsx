import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Text,
  Image,
  useMantineTheme,
  Menu,
  MenuDropdown,
  Collapse,
  Container,
} from "@mantine/core";
import Logo from "../assets/logo-preview.png";
import LogoIg from "../assets/Instagram_Glyph_Gradient.svg";
import { useEffect } from "react";
import styles from "./LinkGroup.module.css";
import { useDisclosure } from "@mantine/hooks";

type Props = {
  burger: boolean;
};

const LinkGroup = (props: Props) => {
  let location = useLocation();
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const isBurgerLogo = (burger: boolean) => {
    if (burger) {
      return (
        <Link to={"/"}>
          <Image src={Logo} h={140} />
        </Link>
      );
    }
  };
  const isBurgerIg = (burger: boolean) => {
    if (burger) {
      return (
        <Container size={64}>
          <a href="https://www.instagram.com/jakub.giedzicz/">
            <Image src={LogoIg} />
          </a>
        </Container>
      );
    }
  };
  const isBurgerMenu = (burger: boolean) => {
    if (burger) {
      return (
        <Menu trigger="hover" closeDelay={400}>
          <Menu.Target>
            <Link to={"oferta"}>
              <Text
                fw={700}
                c={
                  location.pathname === "/oferta" ? "red" : theme.colors.gray[8]
                }
                className={styles.hover_text}
              >
                Usługi
              </Text>
            </Link>
          </Menu.Target>
          <MenuDropdown>
            <Menu.Item>Konsultacje</Menu.Item>
            <Menu.Item>Szkolenia indywidualne</Menu.Item>
            <Menu.Item>Szkolenia grupowe</Menu.Item>
          </MenuDropdown>
        </Menu>
      );
    } else {
      return (
        <>
          <Text
            onClick={toggle}
            fw={700}
            className={styles.hover_text}
            c={location.pathname === "/oferta" ? "red" : theme.colors.gray[8]}
          >
            Oferta
          </Text>
          <Collapse in={opened}>
            <Text>Konsultacje</Text>
            <Text>Szkolenia indywidualne</Text>
            <Text>Szkolenia grupowe</Text>
          </Collapse>
        </>
      );
    }
  };
  useEffect(() => {
    console.log(location);
  }, []);
  return (
    <>
      {isBurgerLogo(props.burger)}
      <Box pl={props.burger ? 40 : 0}>
        <Link to={"o-mnie"}>
          <Text
            fw={700}
            c={location.pathname === "/o-mnie" ? "red" : theme.colors.gray[8]}
            className={styles.hover_text}
          >
            O mnie
          </Text>
        </Link>
      </Box>
      {isBurgerMenu(props.burger)}
      <Link to={"kontakt"}>
        <Text
          fw={700}
          c={location.pathname === "/kontakt" ? "red" : theme.colors.gray[8]}
          className={styles.hover_text}
        >
          Kontakt
        </Text>
      </Link>
      <Link to={"blog"}>
        <Text
          fw={700}
          c={location.pathname === "/blog" ? "red" : theme.colors.gray[8]}
          className={styles.hover_text}
        >
          Blog
        </Text>
      </Link>
      {isBurgerIg(props.burger)}
    </>
  );
};

export default LinkGroup;
