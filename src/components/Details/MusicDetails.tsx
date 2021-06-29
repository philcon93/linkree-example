import { Box } from '@chakra-ui/react';
import { ListItem, MusicPlayer } from '../index';
import { MusicLinkDetails } from '../../store/interfaces'

type Props = {
    musicDetails: MusicLinkDetails
}

export const MusicDetails: React.FC<Props> = ({ musicDetails } : Props) => {
    const { song, platforms } = musicDetails;

    return (
        <Box data-testid={'MusicDetails'}>
            <MusicPlayer
                title={song.title}
                band={song.band}
                albumArt={song.image}
                progress={20} />
            {platforms.map((platform, index) => (
                <ListItem
                    key={index}
                    title={platform.name}
                    image={platform.image}
                    onClick={() => window.open(platform.url)} />
            ))}
        </Box>
    );
};