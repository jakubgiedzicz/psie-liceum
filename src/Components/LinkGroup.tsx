import { NavLink as Link } from "react-router-dom";
import {
  Group,
  Menu,
  NavLink,
  Stack,
} from "@mantine/core";
import classes from "./LinkGroup.module.css";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import { ReactElement } from "react";

type Props = {
  burger: boolean;
  openDesktop: boolean
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
];
const links2 = [
  { link: "/o-mnie", label: "O mnie" },
      { link: "/konsultacje-behawioralne", label: "Konsultacje behawioralne" },
      { link: "/konsultacje-dietetyczne", label: "Konsultacje dietetyczne" },
      { link: "/psieprzedszkole", label: "Psieprzedszkole" },
      { link: "/psiapodstawowka", label: "Psiapodstawówka" },
  { link: "/cennik", label: "Cennik" },
  { link: "/kontakt", label: "Kontakt" },
];
const LinkGroup = (props: Props) => {
  var items:ReactElement[]
  if(!props.burger && !props.openDesktop || props.burger && props.openDesktop){
  items = links.map((link) => {
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
          trigger="click-hover"
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
              onClick={(e) => e.preventDefault()}
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
  })} else {
    items = links2.map((link) => 
      <NavLink
    key={link.label}
    component={Link}
    to={link.link}
    className={classes.link}
    label={link.label}
  />
    )
  }
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
