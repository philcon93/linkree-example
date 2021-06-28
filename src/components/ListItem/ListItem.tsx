import { Box, Flex, Image, Text, Spacer } from '@chakra-ui/react';

type Props = {
    title: string,
    subtitle?: string,
    url: string,
    image?: string,
    rightAlignText?: string
}

export const ListItem: React.FC<Props> = ({ title, subtitle, url, image, rightAlignText }: Props) => {

  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      py={4}
      borderBottom={'1px solid #263238'}
      _hover={{ cursor: 'pointer' }}
      onClick={() => location.assign(url)}>
      {
        image &&
        <Box paddingRight={5}>
          <Image src={`./assets/icons/${image}.svg`} />
        </Box>
      }
      <Box>
        <Text fontSize="md">{title}</Text>
        { subtitle && <Text fontSize="sm">{subtitle}</Text>}
      </Box>
      <Spacer />
      {
        rightAlignText ?
        <Text fontSize="xs">{rightAlignText}</Text> :
        <Image src="./assets/icons/arrow.svg" transform={'rotate(270deg)'}/>
      }
    </Flex>
  );
};
