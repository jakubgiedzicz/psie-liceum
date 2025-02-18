import {
  Box,
  Center,
  Image,
  Modal,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import about_me_img from "../assets/about_me_avatar.jpg";
import text_styles from "../styles/Text.module.css";
import test from "../assets/certificate-text-samples.jpg";
import styles from "../Pages/AboutMe.module.css";
import { useEffect, useState } from "react";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
const AboutMe = () => {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const [images, setImages] = useState([
    {
      id: 0,
      img: test,
    },
    { id: 1, img: about_me_img },
    { id: 2, img: test },
    { id: 3, img: test },
  ]);
  const [index, setIndex] = useState(0)
  const carouselItems = images.map((i) => (
    <Carousel.Slide key={i.id}>
      <Image src={i.img} />
    </Carousel.Slide>
  ));
  const handleModalOpen = (id: number) => {
    setIndex(id)
    setOpened(true)
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Psie Liceum - O mnie";
  }, []);
  return (
    <Box className={"paws_bg"}>
      <SimpleGrid mx={"15%"} cols={{ base: 1, md: 2 }} mt={32}>
        <Stack justify="center">
          <Title
            textWrap="wrap"
            order={1}
            c={theme.colors.yellow[6]}
            className={text_styles.title_shadow}
          >
            Cześć, jestem Weronika - trenerka psów z pasją
          </Title>
          <Text ta={"left"} c={theme.colors.gray[8]}>
            Prywatnie - właścicielka rottweilerki Lily, mopsów Szreka i Fiony
            oraz kota Pusiaki, który zarządza naszym domem jak prawdziwy boss.
            Na co dzień pomagam budować wyjątkowe relacje między ludźmi a ich
            czworonożnymi przyjaciółmi - oparte na zrozumieniu, zaufaniu i
            pozytywnych metodach wychowania.
          </Text>
          <Text ta={"left"}>
            Ale to nie wszystko - jestem także tatuażystką i specjalizuję się w
            tworzeniu portretów zwierząt. Uwielbiam uwieczniać ich wyjątkową
            energię i charakter na skórze moich klientów.
          </Text>
          <Text fw={500} ta={"left"}>
            Moja praca to dla mnie coś więcej niż zawód - to sposób na dzielenie
            się miłością do zwierząt w każdej formie, czy to podczas treningu,
            żywieniowej konsultacji czy w studiu tatuażu.
          </Text>
        </Stack>
        <Image src={about_me_img} radius={"5%"} h={400} />
      </SimpleGrid>
      <Stack mt={64}>
        <Text ta={"left"} c={theme.colors.gray[8]} px={"15%"}>
          Szkolenia i konsultacje, które prowadzę, skupiają się na
          indywidualnych potrzebach każdego psa - od nauki nowych umiejętności,
          po dobór odpowiedniej diety, tworząc indywidualne plany żywieniowe. Bo
          wierzę, że szczęśliwy pies to zdrowy pies, a najlepsze relacje rodzą
          się z harmonii. Pozwól mi pomóc ci stworzyć piękniejszy świat dla
          ciebie i twojego pupila - na co dzień, a może nawet… na zawsze na
          twojej skórze?🖤
        </Text>
        <Title order={3} fw={500} py={32}>
          Pozwól mi pokazać, jak piękne może być życie na czterech łapach.
        </Title>
        <Title
          order={2}
          bg={theme.colors.yellow[6]}
          fw={400}
          px={"15%"}
          py={40}
        >
          Powtarzam, że{" "}
          <Text span fw={500} inherit>
            każdy pies jest wyjątkowy
          </Text>{" "}
          - tak samo jak ty. Razem stworzymy duet nie do pokonania! 💪🐕
        </Title>
        <Title
          order={1}
          c={theme.colors.yellow[6]}
          className={text_styles.title_shadow}
        >
          Moje certyfikaty
        </Title>
        <Center>
          <SimpleGrid
            cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
            spacing={32}
            verticalSpacing={{ base: 64 }}
            px={"10%"}
            mt={32}
            pb={32}
            maw={"70%"}
          >
            <Modal
              opened={opened}
              onClose={() => setOpened(false)}
              title="Moje certyfikaty"
              centered
            >
              <Carousel withIndicators loop initialSlide={index}>
                {carouselItems}
              </Carousel>
            </Modal>
            <Image src={test} onClick={() => handleModalOpen(0)} className={styles.pointer} />
            <Image src={about_me_img} onClick={() => handleModalOpen(1)} className={styles.pointer} />
            <Image src={test} onClick={() => handleModalOpen(2)} className={styles.pointer}/>
            <Image src={test} onClick={() => handleModalOpen(3)} className={styles.pointer}/>
          </SimpleGrid>
        </Center>
      </Stack>
    </Box>
  );
};

export default AboutMe;
