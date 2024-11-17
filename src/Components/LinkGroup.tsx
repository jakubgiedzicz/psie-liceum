import { Link } from "react-router-dom";
import { Text } from '@mantine/core'

type Props = {};

const LinkGroup = (props: Props) => {
  return (
    <>
      <Link to={"/"}>
        <Text>Logo</Text>
      </Link>
      <Link to={"o-mnie"}>
        <Text>O mnie</Text>
      </Link>
      <Link to={"oferta"}>
        <Text>Usługi</Text>
      </Link>
      <Link to={"kontakt"}>
        <Text>Kontakt</Text>
      </Link>
      <Link to={"blog"}>
        <Text>Blog</Text>
      </Link>
    </>
  );
};

export default LinkGroup;
