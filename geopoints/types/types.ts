interface Tag {
  name: string;
  timesSearched?: number;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface Point {
  coordinates: Coordinates;
  title: string;
  description: string;
  date: number;
  tags: Tag[];
  imgPaths: string[];
  author: User;
  public: boolean;
  share_id?: string;
}

interface List {
  title: string;
  author: User;
  imgPath: string;
  description: string;
  createdAt: number;
  tags: Tag[];
  public: boolean;
  spotifyPath?: string;
  points: Point[];
}

interface User {
  id: number;
  email: string;
  userName: string;
  name?: string;
  bio?: string;
  imagePath?: string;
  password?: string;
  ownLists: List[];
  instagram?: string;
  facebook?: string;
  likedPoints: Point[];
  likedLists: List[];
}

export type { Tag, User, Coordinates, Point, List };
