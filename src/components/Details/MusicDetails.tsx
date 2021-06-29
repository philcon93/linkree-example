import { Box } from '@chakra-ui/react';
import { ListItem, MusicPlayer } from '../index';
import { MusicLinkDetails } from '../../store/interfaces'
import { useState } from 'react';

type Props = {
    musicDetails: MusicLinkDetails
}

export const MusicDetails: React.FC<Props> = ({ musicDetails } : Props) => {
    const { song, platforms } = musicDetails;
    const [ showMusicPlayer, setShowMusicPlayer ] = useState(false)

    return (
        <Box data-testid={'MusicDetails'}>
            <MusicPlayer
                title={song.title}
                band={song.band}
                albumArt={song.image}
                show={showMusicPlayer}
                progress={20} />
            {platforms.map((platform, index) => (
                <ListItem
                    key={index}
                    title={platform.name}
                    image={platform.image}
                    imageClick={() => window.open(platform.url)}
                    onClick={() => setShowMusicPlayer(!showMusicPlayer)} />
            ))}
        </Box>
    );
};