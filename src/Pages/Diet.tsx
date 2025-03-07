import {
  Stack,
  Title,
  useMantineTheme,
  Text,
  List,
  Button,
} from "@mantine/core";
import text_styles from "../styles/Text.module.css";
import { useEffect } from "react";
import styles from './Diet.module.css'
import { Link } from "react-router-dom";

const Diet = () => {
  const theme = useMantineTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Psie Liceum - Konsultacje dietetyczne";
  }, []);
  return (
    <Stack align="center" mt={32} className="paws_bg" pb={"20vh"}>
      <Title
        order={1}
        c={theme.colors.yellow[6]}
        className={text_styles.title_shadow}
        mx={"10%"}
      >
        {" "}
        Konsultacje dietetyczne
      </Title>
      <Text w={"80%"} ta={"left"} mx={"10%"} fw={500}>
        Oferuję specjalistyczne konsultacje dietetyczne dla psów, które
        wspierają zdrowie oraz samopoczucie Twojego zwierzaka. Każdy pies wymaga
        indywidualnie dopasowanej diety, która wspiera jego naturalne potrzeby i
        kondycję. Pomagam właścicielom dobrać najlepsze karmy i zdrową dietę dla
        psa, biorąc pod uwagę wiek, rasę, aktywność fizyczną oraz ewentualne
        alergie i problemy zdrowotne.
      </Text>
      <Title bg={theme.colors.yellow[6]} w={"100%"} py={16}>Cel konsultacji:</Title>
        <List listStyleType="none" w={"50%"} mx={"10%"} className={styles.list}>
          <List.Item>Ustalenie problemów żywieniowych</List.Item>
          <List.Item>Pomoc w doborze odpowiedniej diety</List.Item>
          <List.Item>Wyliczenie zapotrzebowania kalorycznego</List.Item>
          <List.Item>
            Określenie zaleceń dietetycznych w zakresie zapotrzebowania
            energetycznego psa oraz możliwych ograniczeń żywieniowych
          </List.Item>
        </List>
      <Button component={Link} to={"/cennik"} size="lg" variant="outline">Sprawdź ofertę!</Button>
    </Stack>
  );
};

export default Diet;
