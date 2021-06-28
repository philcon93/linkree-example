import { ListItem, MusicPlayer } from '../index';
import { MusicLinkDetails } from '../../store/interfaces'

type Props = {
    musicDetails: MusicLinkDetails
}

export const MusicDetails: React.FC<Props> = ({ musicDetails } : Props) => {
    const { song, platforms } = musicDetails;

    return (
        <>
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
                    url={platform.url} />
            ))}
        </>
    );
};