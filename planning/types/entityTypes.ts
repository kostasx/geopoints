interface Tag {
    name: string,
    times_searched: number
}

interface Coordinates {
    latitude: number,
    longitude: number
}

interface Stats {
    likes: number,
    dislikes: number,
    downloads: number,
}

interface Point {
    coordinates: Coordinates,
    title: string,
    description: string,
    date: number,
    tags: Tag[],
    img_paths: string[],
    author: User,
    public: boolean,
    stats: Stats,
    share_id: string
}

interface List {
    title: string,
    points: Point[],
    img_path: string,
    description: string,
    date: number,
    tags: Tag[],
    author_name: string,
    public: boolean,
    upvotes: number,
    spotify_track_path: string,
    stats: Stats,
    share_id: string,
}

interface User {
    name: string,
    email: string,
    img_path: string,
    bio: string,
    password: string,
    points: Point[],
    lists: List[],
    social_media_accounts: string[],
    downloaded_points: Point[],
    downloaded_lists: List[],
    liked_points: Point[],
    liked_lists: List[],
    disliked_points: Point[],
    disliked_lists: List[],
}