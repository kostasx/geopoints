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
  author: User;
  img_path: string;
  description: string;
  createdAt: number;
  tags: Tag[];
  public: boolean;
  spotify_path?: string;
  points: Point[];
}

interface User {
  id: number;
  email: string;
  user_name: string;
  name?: string;
  bio?: string;
  image_path?: string;
  password?: string;
  own_lists: List[];
  instagram?: string;
  facebook?: string;
  liked_points: Point[];
  liked_lists: List[];
}

export type { Tag, User, Coordinates, Point, List };
