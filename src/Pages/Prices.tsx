import {
  Box,
  Center,
  Container,
  List,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import text_styles from "../styles/Text.module.css";

const Prices = () => {
  return (
    <>
      <Container>
        <Stack mih={650} pt={32}>
          <List size="xl" listStyleType="none" spacing={"md"}>
            <List.Item>
              <Title order={1} fw={600} my={32} size={36}>
                Konsultacje indywidualne:
              </Title>
            </List.Item>
            <List.Item>
              <Text className="" size="lg">
                Konsultacja behawioralna: 150zł
              </Text>
            </List.Item>
            <List.Item>
              <Text size="lg">Konsultacja dietetyczna: 150zł</Text>
            </List.Item>
            <List.Item>
              <Text size="lg">Konsultacja ogólna: 170zł</Text>
            </List.Item>
          </List>
          <List size="xl" listStyleType="none" spacing={"md"}>
            <List.Item>
              <Title order={1} fw={600} my={32} size={36}>
                Zajęcia indywidualne:
              </Title>
            </List.Item>
            <List.Item>
              <Text size="lg">Zajęcia behawioralne: 150zł</Text>
            </List.Item>
            <List.Item>
              <Text td={"underline"} size="lg">
                Pakiet 10 zajęć behawioralnych: 900zł
              </Text>
            </List.Item>
          </List>
          <Stack>
          <List size="xl" listStyleType="none" spacing={"md"} my={48}>
            <List.Item>
              <Text size="md" fs={'italic'} c={'dark'}>Konsultacje mogą trwać do 2 godzin</Text>
            </List.Item>
            <List.Item>
              <Text size="md" fs={'italic'} c={'dark'}>
                Zajęcia trwają około godziny, odbywają się na zamkniętym dworze
              </Text>
            </List.Item>
          </List>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Prices;
