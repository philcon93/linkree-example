import { Box, Flex, Image, Progress, Text } from '@chakra-ui/react';

type MusicPlayerProps = {
  albumArt?: string,
  title: string,
  band: string,
  progress: number
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ albumArt = 'album-art.png', title, band, progress } : MusicPlayerProps) => (
  <Box py={4}>
    <Flex alignItems={'center'} pb={4}>
      <Box pr={4} minW={'64px'}>
        <Image src={`./assets/${albumArt}`} />
      </Box>
      <Box pr={4}>
        <Image src="./assets/icons/play-small.svg" width={'24px'} height={'24px'} />
      </Box>
      <Text fontSize="sm" isTruncated>{title} - {band}</Text>
    </Flex>
    <Progress value={progress} size="xs" colorScheme="brand" />
  </Box>
);