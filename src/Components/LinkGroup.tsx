import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Text,
  Image,
  useMantineTheme,
  Menu,
  MenuDropdown,
  Collapse,
  Divider,
} from "@mantine/core";
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
  return (
    <>
      <Box pl={props.burger ? 40 : 0}>
        <Link to={"o-mnie"}>
          <Text
            fw={700}
            c={location.pathname === "/o-mnie" ? theme.colors.cyan[4] : theme.colors.gray[9]}
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
          c={location.pathname === "/kontakt" ? theme.colors.cyan[4] : theme.colors.gray[9]}
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
      <Link to={"konsultacje-dietetyczne"}>
        <Text
          fw={700}
          c={location.pathname === "/konsultacje-dietetyczne" ? theme.colors.cyan[4] : theme.colors.gray[9]}
          className={
            props.burger
              ? styles.hover_text
              : styles.hover_text + " " + styles.burger_element
          }
          size="xl"
        >
          Konsultacje dietetyczne
        </Text>
      </Link>
      <Link to={"kontakt"}>
        <Text
          fw={700}
          c={location.pathname === "/kontakt" ? theme.colors.cyan[4] : theme.colors.gray[9]}
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
          c={location.pathname === "/kontakt" ? theme.colors.cyan[4] : theme.colors.gray[9]}
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
          c={location.pathname === "/blog" ? theme.colors.cyan[4] : theme.colors.gray[9]}
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
