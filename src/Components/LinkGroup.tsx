import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuLabel,
  MenuTarget,
  Text,
  useMantineTheme,
} from "@mantine/core";
import styles from "./LinkGroup.module.css";
import { useDisclosure } from "@mantine/hooks";

type Props = {
  burger: boolean;
};

const LinkGroup = (props: Props) => {
  let location = useLocation();
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <>
      <Box>
        <Link to={"o-mnie"}>
          <Text
            fw={700}
            c={
              location.pathname === "/o-mnie"
                ? theme.colors.cyan[4]
                : theme.colors.gray[9]
            }
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
      <Menu trigger="hover" closeDelay={200}>
      <MenuTarget>
        <Link to={"konsultacje-indywidualne"}>
          <Text
            fw={700}
            c={
              location.pathname === "/konsultacje-indywidualne"
                ? theme.colors.cyan[4]
                : theme.colors.gray[9]
            }
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
      </MenuTarget>
      <MenuDropdown>
        <MenuItem>
          <Link to={"konsultacje-indywidualne"}>
            <Text
              fw={700}
              c={
                location.pathname === "/konsultacje-indywidualne"
                  ? theme.colors.cyan[4]
                  : theme.colors.gray[9]
              }
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
        </MenuItem>
        <MenuItem>
          <Link to={"konsultacje-dietetyczne"}>
            <Text
              fw={700}
              c={
                location.pathname === "/konsultacje-dietetyczne"
                  ? theme.colors.cyan[4]
                  : theme.colors.gray[9]
              }
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
        </MenuItem>
      </MenuDropdown>
      </Menu>
      <Menu trigger="hover" closeDelay={200}>
      <MenuTarget>
        <Link to={"zajecia-grupowe"}>
          <Text
            fw={700}
            c={
              location.pathname === "/zajecia-grupowe"
                ? theme.colors.cyan[4]
                : theme.colors.gray[9]
            }
            className={
              props.burger
                ? styles.hover_text
                : styles.hover_text + " " + styles.burger_element
            }
            size="xl"
          >
            Zajęcia grupowe
          </Text>
        </Link>
      </MenuTarget>
      <MenuDropdown>
        <MenuItem>
          <Link to={"Psieprzedszkole"}>
            <Text
              fw={700}
              c={
                location.pathname === "/psieprzedszkole"
                  ? theme.colors.cyan[4]
                  : theme.colors.gray[9]
              }
              className={
                props.burger
                  ? styles.hover_text
                  : styles.hover_text + " " + styles.burger_element
              }
              size="xl"
            >
              Psieprzedszkole
            </Text>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={"psiapodstawowka"}>
            <Text
              fw={700}
              c={
                location.pathname === "/psiapodstawowka"
                  ? theme.colors.cyan[4]
                  : theme.colors.gray[9]
              }
              className={
                props.burger
                  ? styles.hover_text
                  : styles.hover_text + " " + styles.burger_element
              }
              size="xl"
            >
              Psiapodstawówka
            </Text>
          </Link>
        </MenuItem>
      </MenuDropdown>
      </Menu>
      <Link to={"cennik"}>
        <Text
          fw={700}
          c={
            location.pathname === "/cennik"
              ? theme.colors.cyan[4]
              : theme.colors.gray[9]
          }
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
          c={
            location.pathname === "/kontakt"
              ? theme.colors.cyan[4]
              : theme.colors.gray[9]
          }
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
          c={
            location.pathname === "/blog"
              ? theme.colors.cyan[4]
              : theme.colors.gray[9]
          }
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
    </>
  );
};

export default LinkGroup;
