import { NavLink as Link } from "react-router-dom";
import {
  Burger,
  Center,
  Container,
  Grid,
  Group,
  Menu,
  NavLink,
  Stack,
} from "@mantine/core";
import classes from "./LinkGroup.module.css";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";

type Props = {
  burger: boolean;
};
const links = [
  { link: "/o-mnie", label: "O mnie" },
  {
    link: "konsultacje",
    label: "Konsultacje indywidualne",
    links: [
      { link: "/konsultacje-behawioralne", label: "Konsultacje behawioralne" },
      { link: "/konsultacje-dietetyczne", label: "Konsultacje dietetyczne" },
    ],
  },
  {
    link: "/zajecia-grupowe",
    label: "Zajęcia grupowe",
    links: [
      { link: "/psieprzedszkole", label: "Psieprzedszkole" },
      { link: "/psiapodstawowka", label: "Psiapodstawówka" },
    ],
  },
  { link: "/cennik", label: "Cennik" },
  { link: "/kontakt", label: "Kontakt" },
  { link: "/blog", label: "Blog" },
];
const LinkGroup = (props: Props) => {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>
        <NavLink
          component={Link}
          to={item.link}
          label={item.label}
          className={classes.link}
        />
      </Menu.Item>
    ));
    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
          position={props.burger ? "right" : "bottom"}
        >
          <Menu.Target>
            <NavLink
              key={link.label}
              component={Link}
              to={link.link}
              className={classes.link}
              label={link.label}
              rightSection={props.burger ? <IconChevronRight size={16} stroke={1.5} /> : <IconChevronDown size={16} stroke={1.5} />}
            />
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <NavLink
        key={link.label}
        component={Link}
        to={link.link}
        className={classes.link}
        label={link.label}
      />
    );
  });
  const mobile = (mobile: boolean) => {
    if (!mobile) {
      return (
        <Group gap={5} visibleFrom="md" wrap="nowrap">
          {items}
        </Group>
      );
    } else {
      return (
        <Stack gap={32} hiddenFrom="md" h='100%' justify="center">
          {items}
        </Stack>
      );
    }
  };
  return (
    <>
      {mobile(props.burger)}
    </>
  );
};

export default LinkGroup;
