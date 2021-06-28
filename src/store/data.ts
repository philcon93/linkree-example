import { LinkTypes } from './interfaces';

export const responseData = {
    user: {
        profileImage: 'https://avatars.githubusercontent.com/u/13529653?v=4',
        name: 'Phil Connah',
        username: 'philcon93'
    },
    links: [
        {
            title: 'Instagram', type: LinkTypes.Classic, classicDetails: { url: 'https://www.instagram.com/phillycheese93' }
        },
        {
            title: 'Github', type: LinkTypes.Classic, classicDetails: { url: 'https://github.com/philcon93' }
        },
        {
            title: 'Shows', type: LinkTypes.Event, eventsDetails: [
                { date: '01/04/2019', location: 'The Forum, Melbourne', remainingTickets: 10, url: 'https://www.songkick.com/' },
                { date: '02/04/2019', location: 'Venue Name, Canberra', remainingTickets: 0, url: 'https://www.songkick.com/' },
                { date: '03/04/2019', location: 'Venue Name, Sydney', remainingTickets: 2, url: 'https://www.songkick.com/'  },
                { date: '04/04/2019', location: 'Venue Name, Brisbane', remainingTickets: 12, url: 'https://www.songkick.com/' }
            ]
        },
        {
            title: 'Music', type: LinkTypes.Music, musicDetails: {
                song: {
                    title: 'Siona Records: 2nd Anniversary',
                    band: 'Miss Monique', 
                    image: './assets/album-art.png'
                },
                platforms: [
                    {
                        name: 'Spotify',
                        image: './assets/icons/spotify.svg',
                        url: 'https://open.spotify.com/artist/29TpNOsTNYbLb6Xa10H0PR'
                    },
                    {
                        name: 'Apple Music',
                        image: './assets/icons/apple-music.svg',
                        url: 'https://music.apple.com/us/search?term=Miss%20Monique'
                    },
                    {
                        name: 'Soundcloud',
                        image: './assets/icons/soundcloud.svg',
                        url: 'https://soundcloud.com/alesia-arkusha'
                    },
                    {
                        name: 'YouTube Music',
                        image: './assets/icons/youtube.svg',
                        url: 'https://music.youtube.com/channel/UCE9PYNPQ7AJxlCns31vvZGg'
                    }
                ]
            }
        },
    ],
    theme: {
        backgroundColour: '#39E09B',
        textColour: '#263238',
        borderRadius: 4
    }
};