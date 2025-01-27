import { Group, Text, Title, useMantineTheme, Image, List, Grid } from "@mantine/core";
import React from "react";
import text_style from "../styles/Text.module.css";
import img from "../assets/beautiful-adorable-little-puppy-cute-600nw-2360693945.webp";
import { IconBone, IconCirclesRelation, IconDog, IconHandStop, IconPaw } from "@tabler/icons-react";
type Props = {};

const Psieprzedszkole = (props: Props) => {
  const theme = useMantineTheme();
  return (
    <>
      <Title
        order={1}
        c={theme.colors.yellow[7]}
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
      <Group justify="space-evenly" m={32} wrap="nowrap">
        <Text w='40%'>
          Twój szczeniak to eksplozja energii, ciekawości i miłości - ale też
          potrzebuje wsparcia w nauce, by wyrosnąć na zrównoważonego i
          szczęśliwego psa. Nasze Psieprzedszkole to miejsce, gdzie maluchy
          odkrywają świat, rozwijają swoje umiejętności i uczą się, jak być
          najlepszym towarzyszem dla swojego człowieka.{" "}
        </Text>
        <Image src={img} radius="10% 10%"/>
      </Group>
      <Text fw={300} size="xl">Podczas kursu twój szczeniak nauczy się:</Text>
      <List spacing={16} my={16}>
        <List.Item icon={<IconDog size={64}/>}><Text><Text span fw={500}>Psich manier:</Text> Jak witać ludzi i czworonogi bez skakania, jak grzecznie czekać na swoją kolej i jak zachowywać się w nowych sytuacjach.</Text></List.Item>
        <List.Item icon={<IconPaw size={64}/>}><Text><Text span fw={500}>Podstawowych komend:</Text> 'Siad', 'leżeć', 'zostań', 'daj łapę', 'puść' - wszystko w oparciu o pozytywne wzmocnienia, by nauka była przyjemnością.</Text></List.Item>
        <List.Item icon={<IconCirclesRelation size={64}/>}><Text><Text span fw={500}>Chodzenia na smyczy:</Text> Koniec z ciągnięciem i plątaniem smyczy - twój pies nauczy się spacerować spokojnie i z uwagą.</Text></List.Item>
        <List.Item icon={<IconHandStop size={64}/>}><Text><Text span fw={500}>Przywołania:</Text> 'Do mnie!' stanie się najważniejszym i najbardziej radosnym komendowym zaproszeniem w waszym życiu. </Text></List.Item>
        <List.Item icon={<IconBone size={64}/>}><Text><Text span fw={500}>Zabaw w kontrolowany sposób:</Text> Jak używać zabawek, co gryźć, a czego absolutnie nie (żegnaj, skarpetki i buty!). </Text></List.Item>
      </List>
      <Title order={2} fw={400}>Ale to nie wszystko! Nasze <Text span c={theme.colors.yellow[7]} className={text_style.title_shadow} inherit>Psieprzedszkole</Text> to także:</Title>
      <Grid mx='10%' my={32}>
      <Grid.Col span={4}>
        <Title order={3}>
          Socjalizacja
        </Title>
        <Text>
        Twój szczeniak pozna różne psy, nauczy się rozumieć ich mowę ciała i będzie czuł się pewnie w towarzystwie innych zwierząt.
        </Text>
      </Grid.Col>
      <Grid.Col span={4}>
        <Title order={3}>
        Oswajanie dźwięków i sytuacji
        </Title>
        <Text>
        Hałas, ruch uliczny, nowe miejsca - pokażemy, że świat nie jest taki straszny! 
        </Text>
      </Grid.Col>
      <Grid.Col span={4}>
        <Title order={3}>
        Zabawy rozwijające umysł
        </Title>
        <Text>
        Gry i łamigłówki, które pomogą rozwijać inteligencję szczeniaka. 
        </Text>
      </Grid.Col>
    </Grid>
    <Title order={2} fw={300} my={16}>Kurs odbywa się w małych grupach, co zapewnia indywidualne podejście do każdego psiaka, a jednocześnie pozwala szczeniakom rozwijać umiejętności w towarzystwie rówieśników. Wszystko to w przyjaznej atmosferze, pełnej zabawy i… smakołyków!</Title>
    </>
  );
};

export default Psieprzedszkole;
