import { Group, Stack, Title, Box, Text, Image, useMantineTheme } from '@mantine/core'
import Logo from '../assets/logo-preview.png';
import LogoIg from "../assets/Instagram_Glyph_Gradient.svg";
import styles from './Footer.module.css'

type Props = {}

const Footer = (props: Props) => {
  const theme = useMantineTheme()
  return (
    <>
    <Group mih={250} mt={64} justify="space-around">
          <Stack w={'50%'}>
            <Title order={1} c={theme.colors.yellow[6]} className={styles.footer_text_shadow}>Masz pytania? Porozmawiajmy.</Title>
            <Text fw={600}>
              Jestem po to, aby pomagać. Odezwij się telefonicznie, mailowo lub
              przez moje social media.
            </Text>
            <Group>
              <a href="https://www.facebook.com/veranika.baranouskaya.9">
                <Image src={LogoIg} w={64} />
              </a>
              <Stack>
                <Group gap={4}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 2.5C3 2.22386 3.22386 2 3.5 2H9.08579C9.21839 2 9.34557 2.05268 9.43934 2.14645L11.8536 4.56066C11.9473 4.65443 12 4.78161 12 4.91421V12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5V2.5ZM3.5 1C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V4.91421C13 4.51639 12.842 4.13486 12.5607 3.85355L10.1464 1.43934C9.86514 1.15804 9.48361 1 9.08579 1H3.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5H7.5C7.77614 5 8 4.77614 8 4.5C8 4.22386 7.77614 4 7.5 4H4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H10.5C10.7761 11 11 10.7761 11 10.5C11 10.2239 10.7761 10 10.5 10H4.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                <Text ta={'left'} fw={500}>E-mail: weronika@gmail.com</Text>
                </Group>
                <Group gap={4}>
                  <Box>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2.5C4 2.22386 4.22386 2 4.5 2H10.5C10.7761 2 11 2.22386 11 2.5V12.5C11 12.7761 10.7761 13 10.5 13H4.5C4.22386 13 4 12.7761 4 12.5V2.5ZM4.5 1C3.67157 1 3 1.67157 3 2.5V12.5C3 13.3284 3.67157 14 4.5 14H10.5C11.3284 14 12 13.3284 12 12.5V2.5C12 1.67157 11.3284 1 10.5 1H4.5ZM6 11.65C5.8067 11.65 5.65 11.8067 5.65 12C5.65 12.1933 5.8067 12.35 6 12.35H9C9.1933 12.35 9.35 12.1933 9.35 12C9.35 11.8067 9.1933 11.65 9 11.65H6Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                  </Box>
                  <Text ta={'left'} fw={500}>Tel: +48 123 465 789</Text>
                </Group>
              </Stack>
            </Group>
          </Stack>
          <Image src={Logo} maw={175} />
        </Group>
    </>
  )
}

export default Footer