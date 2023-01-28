interface Tag {
  name: string;
  times_searched?: number;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface Point {
  coordinates: Coordinates;
  title: string;
  description: string;
  date: number;
  tags: Tag[];
  img_paths: string[];
  author: User;
  public: boolean;
  share_id: string;
}

interface List {
  title: string;
  points: Point[];
  img_path: string;
  description: string;
  date: number;
  tags: Tag[];
  author_name: string;
  public: boolean;
  upvotes: number;
  spotify_track_path: string;
  share_id: string;
}

interface User {
  id: number;
  email: string;
  name: string;
  userName: string;
  bio: string;
  imagePath: string;
  password: string;
  points: Point[];
  ownLists: List[];
  social_media_accounts: string[];
  downloaded_points: Point[];
  downloaded_lists: List[];
  liked_points: Point[];
  liked_lists: List[];
  disliked_points: Point[];
  disliked_lists: List[];
}

export type { Tag, User, Coordinates, Point, List };
