export enum PageStatus {
    Loading = 'Loading',
    Success = 'Success',
    Error = 'Error',
    Update = 'Update'
}

export enum LinkTypes {
    Classic = 'classic',
    Event = 'events', 
    Music = 'music',
}

interface ClassicLinkDetails {
    url: string
}

interface MusicLinkPlatform {
    name: string,
    image: string,
    url: string
}

export interface MusicLinkDetails {
    song: {
        title: string,
        band: string,
        image: string
    },
    platforms: MusicLinkPlatform[]
}

export interface EventLink {
    date: string,
    location: string,
    url: string,
    remainingTickets: number
}

interface Link {
    id: string,
    title: string,
    type: LinkTypes,
    classicDetails?: ClassicLinkDetails,
    eventsDetails?: EventLink[],
    musicDetails?: MusicLinkDetails
}

export interface Theme {
    backgroundColour: string,
    textColour: string,
    borderRadius: number
}

export interface ResponseData {
    user: {
      profileImage: string,
      name: string,
      username: string
    },
    links: Link[],
    theme: Theme
}