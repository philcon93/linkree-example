import { Link } from '@chakra-ui/react';
import { Theme } from '../../store/interfaces';

type Props = {
  theme?: Theme,
  title: string,
  url?: string,
  isExternal?: boolean
}

export const ClassicLink: React.FC<Props> = ({ theme, title, url, isExternal }: Props) => (
    <Link
      display={'flex'}
      bg={theme?.backgroundColour}
      border={`1px solid ${theme?.backgroundColour}`}
      _hover={{ backgroundColor: theme?.textColour, color: theme?.backgroundColour }}
      _focus={{ backgroundColor: theme?.textColour, color: theme?.backgroundColour }}
      color={theme?.textColour}
      borderRadius={theme?.borderRadius}
      height="48px"
      alignItems={'center'}
      justifyContent={'center'}
      href={url}
      isExternal={isExternal}>
      <span>{title}</span>
    </Link>
);

ClassicLink.defaultProps = {
  theme: {
    backgroundColour: '#39E09B',
    textColour: '#263238',
    borderRadius: 4
  },
  isExternal: true
}