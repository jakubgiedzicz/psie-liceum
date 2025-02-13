import {
  BackgroundImage,
  Box,
  Center,
  Container,
  Divider,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import about_me_img from "../assets/about_me_avatar.jpg";
import text_styles from "../styles/Text.module.css";
import test from "../assets/certificate-text-samples.jpg";
import { useLayoutEffect } from "react";
import styles from "./AboutMe.module.css";
import paws from "../assets/prints.png";
const AboutMe = () => {
  const theme = useMantineTheme();
  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <SimpleGrid mx={"15%"}
          cols={{ base: 1, md: 2 }}
          mt={32}>
        <Stack justify="center">
        <Title textWrap="wrap" order={1} c={theme.colors.yellow[6]}
              className={text_styles.title_shadow}>
          Cześć, jestem Weronika - trenerka psów z pasją
        </Title>
        <Text ta={'left'} c={theme.colors.gray[8]}>
        Prywatnie - właścicielka rottweilerki Lily, mopsów Szreka i Fiony
              oraz kota Pusiaki, który zarządza naszym domem jak prawdziwy boss.
              Na co dzień pomagam budować wyjątkowe relacje między ludźmi a ich
              czworonożnymi przyjaciółmi - oparte na zrozumieniu, zaufaniu i
              pozytywnych metodach wychowania.
        </Text>
        <Text ta={'left'}>
        Ale to nie wszystko - jestem także tatuażystką i specjalizuję się
              w tworzeniu portretów zwierząt. Uwielbiam uwieczniać ich wyjątkową
              energię i charakter na skórze moich klientów.
        </Text>
        <Text fw={500} ta={'left'}>
              Moja praca to dla mnie coś więcej niż zawód - to sposób na
              dzielenie się miłością do zwierząt w każdej formie, czy to podczas
              treningu, żywieniowej konsultacji czy w studiu tatuażu.
            </Text>
        </Stack>
          <Image src={about_me_img} radius={'5%'} h={400}/>
      </SimpleGrid>
      <Stack mt={64}>
        <Text ta={'left'} c={theme.colors.gray[8]} px={'15%'}>
        Szkolenia i konsultacje, które prowadzę, skupiają się na
            indywidualnych potrzebach każdego psa - od nauki nowych
            umiejętności, po dobór odpowiedniej diety, tworząc indywidualne
            plany żywieniowe. Bo wierzę, że szczęśliwy pies to zdrowy pies, a
            najlepsze relacje rodzą się z harmonii. Pozwól mi pomóc ci stworzyć
            piękniejszy świat dla ciebie i twojego pupila - na co dzień, a może
            nawet… na zawsze na twojej skórze?🖤
        </Text>
        <Title order={3} fw={500} py={32}>
          Pozwól mi pokazać, jak piękne może być życie na czterech łapach.
          </Title>
        <Title order={2} bg={theme.colors.yellow[6]} fw={400} px={'15%'} py={40}>
            Powtarzam, że <Text span fw={500} inherit>każdy pies jest wyjątkowy</Text> - tak samo jak ty. Razem
            stworzymy duet nie do pokonania! 💪🐕
          </Title>
          <Title
          order={1}
          c={theme.colors.yellow[6]}
          className={text_styles.title_shadow}
        >
          Moje certyfikaty
        </Title>
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing={32}
          verticalSpacing={{ base: 64 }}
          px={"10%"}
          mt={32}
          pb={32}
        >
          <Image src={test} />
          <Image src={test} />
          <Image src={test} />
          <Image src={test} />
        </SimpleGrid>
      </Stack>
      {/* <Container fluid p={0}>
        <SimpleGrid
          mx={"10%"}
          cols={{ base: 1, md: 2 }}
          spacing={{ base: 64, xl: 96 }}
          verticalSpacing={{ base: 16 }}
        >
          <Stack justify="center">
            <Title
              order={1}
              c={theme.colors.yellow[6]}
              className={text_styles.title_shadow}
            >
              Cześć, jestem Weronika - trenerka psów z pasją
            </Title>
            <Text mt={16} fw={500}>
              Prywatnie - właścicielka rottweilerki Lily, mopsów Szreka i Fiony
              oraz kota Pusiaki, który zarządza naszym domem jak prawdziwy boss.🐾
              Na co dzień pomagam budować wyjątkowe relacje między ludźmi a ich
              czworonożnymi przyjaciółmi - oparte na zrozumieniu, zaufaniu i
              pozytywnych metodach wychowania.
            </Text>
          </Stack>
          <BackgroundImage src={about_me_img}/>
          <Stack justify="center">
            <Text>
              Ale to nie wszystko - jestem także tatuażystką i specjalizuję się
              w tworzeniu portretów zwierząt. Uwielbiam uwieczniać ich wyjątkową
              energię i charakter na skórze moich klientów.
            </Text>
            <Text fw={500}>
              Moja praca to dla mnie coś więcej niż zawód - to sposób na
              dzielenie się miłością do zwierząt w każdej formie, czy to podczas
              treningu, żywieniowej konsultacji czy w studiu tatuażu.
            </Text>
          </Stack>
          <Stack justify="center">
            Szkolenia i konsultacje, które prowadzę, skupiają się na
            indywidualnych potrzebach każdego psa - od nauki nowych
            umiejętności, po dobór odpowiedniej diety, tworząc indywidualne
            plany żywieniowe. Bo wierzę, że szczęśliwy pies to zdrowy pies, a
            najlepsze relacje rodzą się z harmonii. Pozwól mi pomóc ci stworzyć
            piękniejszy świat dla ciebie i twojego pupila - na co dzień, a może
            nawet… na zawsze na twojej skórze?🖤
          </Stack>
        </SimpleGrid>
        <Title order={2} mt={64}>
            Powtarzam, że każdy pies jest wyjątkowy - tak samo jak ty. Razem
            stworzymy duet nie do pokonania! 💪🐕
          </Title>
          <Title order={3} fw={500} mt={16}>
          Pozwól mi pokazać, jak piękne może być życie na czterech łapach.
          </Title>
        <Divider my={8} size={"sm"} />
        <Title
          order={1}
          c={theme.colors.yellow[6]}
          className={text_styles.title_shadow}
        >
          Moje certyfikaty
        </Title>
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing={32}
          verticalSpacing={{ base: 64 }}
          px={"10%"}
          mt={32}
        >
          <Image src={test} />
          <Image src={test} />
          <Image src={test} />
          <Image src={test} />
        </SimpleGrid>
      </Container> */}
    </>
  );
};

export default AboutMe;
