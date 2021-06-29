import { Box, Fade, Flex, Image, Progress, Text } from '@chakra-ui/react';

type MusicPlayerProps = {
  albumArt: string,
  title: string,
  band: string,
  show: boolean,
  progress: number
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ albumArt, title, band, show, progress } : MusicPlayerProps) => {
  const text = `${title} - ${band}`;

  return (
    <Fade in={show} unmountOnExit={true}>
      <Box py={4} data-testid={'MusicPlayer'}>
        <Flex alignItems={'center'} pb={4}>
          <Box pr={4} minW={'64px'}>
            <Image src={albumArt} />
          </Box>
          <Box pr={4} _hover={{ cursor: 'pointer' }}>
            <Image src="./assets/icons/play-small.svg" width={'24px'} height={'24px'} />
          </Box>
          <Text fontSize="sm" isTruncated>
            {text.substr(0, 45)}
            { text.length > 45 ? '...' : null }
          </Text>
        </Flex>
        <Progress value={progress} size="xs" colorScheme="brand" />
      </Box>
    </Fade>
  );
};