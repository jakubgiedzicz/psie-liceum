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
  Divider,
} from "@mantine/core";
import Logo from "../assets/logo-preview.png";
import LogoIg from "../assets/Instagram_Glyph_Gradient.svg";
import styles from "./LinkGroup.module.css";
import { useDisclosure } from "@mantine/hooks";

type Props = {
  burger: boolean;
};

const LinkGroup = (props: Props) => {
  let location = useLocation();
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const isBurgerIg = (burger: boolean) => {
    if (burger) {
      return (
        <Box w={32} ml={32}>
          <a href="https://www.instagram.com/jakub.giedzicz/">
            <Image src={LogoIg} />
          </a>
        </Box>
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
                size="xl"
              >
                Zajęcia grupowe
              </Text>
            </Link>
          </Menu.Target>
          <MenuDropdown>
            <Menu.Item>Psieprzedszkole</Menu.Item>
            <Menu.Item>Psiapodstawówka</Menu.Item>
          </MenuDropdown>
        </Menu>
      );
    } else {
      return (
        <>
          <Text
            onClick={toggle}
            fw={700}
            className={
              styles.hover_text +
              " " +
              styles.oferta +
              " " +
              styles.burger_element
            }
            c={location.pathname === "/oferta" ? "red" : theme.colors.gray[8]}
            size="xl"
          >
            Zajęcia grupowe
          </Text>
          <Collapse in={opened} bg="rgb(245, 245, 245)">
            <Divider />
            <Box className={styles.subcollapse}>
              <Text mt={4} size="lg">
                Psieprzedszkole
              </Text>
            </Box>
            <Box className={styles.subcollapse}>
              <Text mt={4} size="lg">
                Psiapodstawówka
              </Text>
            </Box>
            <Divider />
          </Collapse>
        </>
      );
    }
  };
  return (
    <>
      <Box pl={props.burger ? 40 : 0}>
        <Link to={"o-mnie"}>
          <Text
            fw={700}
            c={location.pathname === "/o-mnie" ? "red" : theme.colors.gray[8]}
            className={
              props.burger
                ? styles.hover_text
                : styles.hover_text + " " + styles.burger_element
            }
            size="xl"
          >
            O mnie
          </Text>
        </Link>
      </Box>
      <Link to={"kontakt"}>
        <Text
          fw={700}
          c={location.pathname === "/kontakt" ? "red" : theme.colors.gray[8]}
          className={
            props.burger
              ? styles.hover_text
              : styles.hover_text + " " + styles.burger_element
          }
          size="xl"
        >
          Konsultacje indywidualne
        </Text>
      </Link>
      {isBurgerMenu(props.burger)}
      <Link to={"kontakt"}>
        <Text
          fw={700}
          c={location.pathname === "/kontakt" ? "red" : theme.colors.gray[8]}
          className={
            props.burger
              ? styles.hover_text
              : styles.hover_text + " " + styles.burger_element
          }
          size="xl"
        >
          Cennik
        </Text>
      </Link>
      <Link to={"kontakt"}>
        <Text
          fw={700}
          c={location.pathname === "/kontakt" ? "red" : theme.colors.gray[8]}
          className={
            props.burger
              ? styles.hover_text
              : styles.hover_text + " " + styles.burger_element
          }
          size="xl"
        >
          Kontakt
        </Text>
      </Link>
      <Link to={"blog"}>
        <Text
          fw={700}
          c={location.pathname === "/blog" ? "red" : theme.colors.gray[8]}
          className={
            props.burger
              ? styles.hover_text
              : styles.hover_text + " " + styles.burger_element
          }
          size="xl"
        >
          Blog
        </Text>
      </Link>
      {isBurgerIg(props.burger)}
    </>
  );
};

export default LinkGroup;
//konsultacje indy, zajecia grupowe > psieprzedszkole - psiapodstawowka, cennik, kontakt, blog
