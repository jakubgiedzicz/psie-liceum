import { NavLink as Link } from "react-router-dom";
import { Burger, Center, Container, Grid, Group, Menu, NavLink, Stack } from "@mantine/core";
import classes from "./LinkGroup.module.css";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from '@tabler/icons-react';

type Props = {
  burger: boolean;
};
const links = [
  { link: '/o-mnie', label: 'O mnie' },
  {
    link: '/konsultacje',
    label: 'Konsultacje indywidualne',
    links: [
      { link: '/konsultacje-behawioralne', label: 'Konsultacje behawioralne' },
      { link: '/konsultacje-dietetyczne', label: 'Konsultacje dietetyczne' }
    ],
  },
  {
    link: '/zajecia-grupowe',
    label: 'Zajęcia grupowe',
    links: [
      { link: '/psieprzedszkole', label: 'Psieprzedszkole' },
      { link: '/psiapodstawowka', label: 'Psiapodstawówka' }
    ],
  },
  { link: '/cennik', label: 'Cennik' },
  { link: '/kontakt', label: 'Kontakt' },
  { link: '/blog', label: 'Blog' },
];
const LinkGroup = (props: Props) => {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}><NavLink component={Link} to={item.link} label={item.label}/></Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
          <NavLink key={link.label} component={Link} to={link.link} className={classes.link} label={link.label} rightSection={<IconChevronDown size={16} stroke={1.5}/>}/>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <NavLink key={link.label} component={Link} to={link.link} className={classes.link} label={link.label}/>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Group gap={5} visibleFrom="sm" wrap="nowrap">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}

export default LinkGroup;
