import { Box, Card, Image, SimpleGrid, Title, Text, Button, useMantineTheme } from "@mantine/core"
import przedszkole from '../assets/beautiful-adorable-little-puppy-cute-600nw-2360693945.webp'
import { Link } from "react-router-dom"
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { useEffect } from "react"

const Group = () => {
  const theme = useMantineTheme()
  useEffect(() => {
      window.scrollTo(0, 0);
      document.title = "Psie Liceum - Zajęcia grupowe";
    }, []);
  return (
    <Box className="paws_bg" px={'12%'}>
      <SimpleGrid cols={{ base: 1, lg: 2 }} pt={64}>
        <Card shadow="sm" withBorder>
          <Card.Section>
            <Image  src={przedszkole}/>
          </Card.Section>
          <Title order={3} mt='md' mb='xs'>
            Psieprzedszkole
          </Title>
          <Text size="sm" c='dimmed'>
            Kursy i zajęcia dla szczeniaków do 6 miesiąca życia
          </Text>
          <Button component={Link} to='/psieprzedszkole' mt='md' radius='md' variant="light" color={theme.colors.yellow[6]} leftSection={<IconArrowLeft size={16}/>}>
          Sprawdź ofertę
          </Button>
        </Card>
        <Card shadow="sm" withBorder>
          <Card.Section>
            <Image  src={przedszkole}/>
          </Card.Section>
          <Title order={3} mt='md' mb='xs'>
            Psiapodstawówka
          </Title>
          <Text size="sm" c='dimmed'>
            Kursy i zajęcia dla psów po 6 miesiącu życia
          </Text>
          <Button component={Link} to='/psiapodstawowka' mt='md' radius='md' variant="light" color={theme.colors.yellow[6]} rightSection={<IconArrowRight size={16}/>}>
          Sprawdź ofertę
          </Button>
        </Card>
      </SimpleGrid>
    </Box>
  )
}

export default Group