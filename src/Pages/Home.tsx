import { BackgroundImage, Container, Stack, Text, Title } from "@mantine/core";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Container fluid h={700} p={0}>
        <BackgroundImage
          src="https://blog.tryfi.com/content/images/2024/03/happy-dog-yellow-flowers.webp"
          h={700}
        >
          <Stack justify="center" align="center" h={'30%'} bg={'rgba(15, 15, 15, 0.15)'} >
            <Title order={1} >Psie Liceum</Title>
            <Title order={2}>Weronika Roszkowska</Title>
            <Text size="lg">Psie Liceum to miejsce w którym twój pies nauczy się posłuszeństwa oraz dobrych manier</Text>
          </Stack>
        </BackgroundImage>
      </Container>
    </>
  );
};

export default Home;
