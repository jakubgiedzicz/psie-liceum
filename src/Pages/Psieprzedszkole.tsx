import {
  Text,
  Title,
  useMantineTheme,
  Image,
  List,
  Center,
  Box,
  SimpleGrid,
  Stack,
  Accordion,
} from "@mantine/core";
import text_style from "../styles/Text.module.css";
import img from "../assets/beautiful-adorable-little-puppy-cute-600nw-2360693945.webp";
import {
  IconBone,
  IconCirclesRelation,
  IconDog,
  IconHandStop,
  IconPaw,
  IconPlus,
} from "@tabler/icons-react";
import { useEffect } from "react";
const data = [
  {
    value: "Socjalizacja",
    description:
      "Twój szczeniak pozna różne psy, nauczy się rozumieć ich mowę ciała i będzie czuł się pewnie w towarzystwie innych zwierząt",
  },
  {
    value: "Oswajanie dźwięków i sytuacji",
    description:
      "Hałas, ruch uliczny, nowe miejsca - pokażemy, że świat nie jest taki straszny!",
  },
  {
    value: "Zabawy rozwijające umysł",
    description:
      "Gry i łamigłówki, które pomogą rozwijać inteligencję szczeniaka",
  },
];
const Psieprzedszkole = () => {
  const items = data.map((i) => (
    <Accordion.Item key={i.value} value={i.value}>
      <Accordion.Control icon={<IconPlus size={32} />}>
        <Text fw={500}>{i.value}</Text>
      </Accordion.Control>
      <Accordion.Panel>
        <Text fw={400}>{i.description}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Psie Liceum - Psieprzedszkole";
  }, []);
  const theme = useMantineTheme();
  return (
    <Box className="paws_bg" px={"15%"}>
      <Title
        order={1}
        c={theme.colors.yellow[6]}
        className={text_style.title_shadow}
        my={16}
      >
        Psieprzedszkole{" "}
      </Title>
      <Title order={2} fw={300}>
        Pierwsze kroki w wielkim psim świecie{" "}
        <Text span fw={300}>
          (szczeniaki do 6 miesiąca życia)
        </Text>
      </Title>
      <SimpleGrid cols={{ base: 1, lg: 2 }} mt={32} spacing={32} pb={16}>
        <Center hiddenFrom="md">
          <Image src={img} radius="10% 10%" />
        </Center>
        <Stack>
          <Text c={theme.colors.gray[8]} my={16}>
            Twój szczeniak to eksplozja energii, ciekawości i miłości - ale też
            potrzebuje wsparcia w nauce, by wyrosnąć na zrównoważonego i
            szczęśliwego psa. Nasze Psieprzedszkole to miejsce, gdzie maluchy
            odkrywają świat, rozwijają swoje umiejętności i uczą się, jak być
            najlepszym towarzyszem dla swojego człowieka.{" "}
          </Text>
          <Stack>
            <Text fw={300} size="xl">
              Podczas kursu twój szczeniak nauczy się:
            </Text>
            <List my={16} ta="left" spacing={"md"}>
              <List.Item icon={<IconDog size={64} />}>
                <Text>
                  <Text span fw={500}>
                    Psich manier:
                  </Text>{" "}
                  Jak witać ludzi i czworonogi bez skakania, jak grzecznie
                  czekać na swoją kolej i jak zachowywać się w nowych
                  sytuacjach.
                </Text>
              </List.Item>
              <List.Item icon={<IconPaw size={64} />}>
                <Text>
                  <Text span fw={500}>
                    Podstawowych komend:
                  </Text>{" "}
                  'Siad', 'leżeć', 'zostań', 'daj łapę', 'puść' - wszystko w
                  oparciu o pozytywne wzmocnienia, by nauka była przyjemnością.
                </Text>
              </List.Item>
              <List.Item icon={<IconCirclesRelation size={64} />}>
                <Text>
                  <Text span fw={500}>
                    Chodzenia na smyczy:
                  </Text>{" "}
                  Koniec z ciągnięciem i plątaniem smyczy - twój pies nauczy się
                  spacerować spokojnie i z uwagą.
                </Text>
              </List.Item>
              <List.Item icon={<IconHandStop size={64} />}>
                <Text>
                  <Text span fw={500}>
                    Przywołania:
                  </Text>{" "}
                  'Do mnie!' stanie się najważniejszym i najbardziej radosnym
                  komendowym zaproszeniem w waszym życiu.{" "}
                </Text>
              </List.Item>
              <List.Item icon={<IconBone size={64} />}>
                <Text>
                  <Text span fw={500}>
                    Zabaw w kontrolowany sposób:
                  </Text>{" "}
                  Jak używać zabawek, co gryźć, a czego absolutnie nie (żegnaj,
                  skarpetki i buty!).{" "}
                </Text>
              </List.Item>
            </List>
          </Stack>
        </Stack>
        <Center visibleFrom="md">
          <Image src={img} radius="10% 10%" />
        </Center>
      </SimpleGrid>
      <Title order={2} fw={400}>
        Ale to nie wszystko! Nasze{" "}
        <Text
          span
          c={theme.colors.yellow[6]}
          className={text_style.title_shadow}
          inherit
        >
          Psieprzedszkole
        </Text>{" "}
        to także:
      </Title>
      <Accordion px={"15%"} py={32} transitionDuration={200}>
        {items}
      </Accordion>
      <Title order={2} fw={300} mt={16} bg={theme.colors.yellow[6]}>
        Kursy odbywają się w małych grupach, co zapewnia indywidualne podejście do
        każdego psiaka, a jednocześnie pozwala szczeniakom rozwijać umiejętności
        w towarzystwie rówieśników. Wszystko to w przyjaznej atmosferze, pełnej
        zabawy i… smakołyków!
      </Title>
    </Box>
  );
};

export default Psieprzedszkole;
