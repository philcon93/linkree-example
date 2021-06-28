import { Box, Flex, Image, Text, Spacer } from '@chakra-ui/react';

type Props = {
    title: string,
    subtitle?: string,
    onClick: () => void,
    image?: string,
    imageClick?: () => void,
    rightAlignText?: string
}

export const ListItem: React.FC<Props> = ({ title, subtitle, onClick, image, imageClick, rightAlignText }: Props) => {

  return (
    <Flex alignItems={'center'}>
      {
        image &&
          <Box paddingRight={5} _hover={{ cursor: 'pointer' }} onClick={imageClick}>
            <Image src={image} />
          </Box>
      }
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        py={4}
        borderBottom={'1px solid #DADEE0'}
        _hover={{ cursor: 'pointer' }}
        onClick={onClick}
        flex={1}>
        <Box>
          <Text fontSize="md">{title}</Text>
          { subtitle && <Text fontSize="sm" paddingTop={1}>{subtitle}</Text>}
        </Box>
        <Spacer />
        {
          rightAlignText ?
          <Text fontSize="xs">{rightAlignText}</Text> :
          <Image src="./assets/icons/arrow.svg" transform={'rotate(270deg)'}/>
        }
      </Flex>
    </Flex>
  );
};
