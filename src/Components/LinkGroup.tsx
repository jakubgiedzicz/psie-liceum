import { NavLink as Link } from "react-router-dom";
import { Grid, Group, NavLink, Stack } from "@mantine/core";
import styles from "./LinkGroup.module.css";
import { useDisclosure } from "@mantine/hooks";

type Props = {
  burger: boolean;
};

const LinkGroup = (props: Props) => {
  const [opened, { toggle }] = useDisclosure(false);
  console.log(props.burger);
  return (
    <Grid align="center" h='100%'>
      <Grid.Col span='content'>
        <NavLink
          component={Link}
          to="o-mnie"
          label="O mnie"
          className={styles.hover_text}
        />
      </Grid.Col>
      <Grid.Col span='content'>
        <Stack gap={0}>
          <NavLink
            label="Konsultacje indywidualne"
            className={styles.hover_text}
          >
            <NavLink
              component={Link}
              to="konsultacje-behawioralne"
              label="Konsultacje behawioralne"
              className={styles.hover_text}
            />
            <NavLink
              component={Link}
              to="konsultacje-dietetyczne"
              label="Konsultacje dietetyczne"
              className={styles.hover_text}
            />
          </NavLink>
        </Stack>
      </Grid.Col>
      <Grid.Col span='content'>
        <Stack gap={0}>
          <NavLink label="Zajęcia grupowe" className={styles.hover_text}>
            <NavLink
              component={Link}
              to="psieprzedszkole"
              label="Psieprzedszkole"
              className={styles.hover_text}
            />
            <NavLink
              component={Link}
              to="psiapodstawowka"
              label="Psiapodstawowka"
              className={styles.hover_text}
            />
          </NavLink>
        </Stack>
      </Grid.Col>
      <Grid.Col span='content'>
        <NavLink
          component={Link}
          to="cennik"
          label="Cennik"
          className={styles.hover_text}
        />
      </Grid.Col>
      <Grid.Col span='content'>
        <NavLink
          component={Link}
          to="kontakt"
          label="Kontakt"
          className={styles.hover_text}
        />
      </Grid.Col>
      <Grid.Col span='content'>
        <NavLink
          component={Link}
          to="blog"
          label="Blog"
          className={styles.hover_text}
        />
      </Grid.Col>
    </Grid>
  );
};

export default LinkGroup;
