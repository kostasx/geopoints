const users: unknown[] = [
  {
    email: 'test1@test.com',
    user_name: 'test1',
  },
  {
    email: 'test2@test.com',
    user_name: 'test2',
  },
];

const user1points: unknown[] = [
  {
    title: 'skate spot',
    public: false,
    longitude: 2345346679,
    latitude: 2345436679,
    listId: 1,
  },
];

const points: unknown[] = [
  {
    authorId: 2,
    title: 'hunting spot 1',
    public: false,
    longitude: 234536679,
    latitude: 234534679,
    listId: 1,
  },
  {
    authorId: 2,
    title: 'hunting spot 2',
    public: false,
    longitude: 23457679,
    latitude: 234435679,
    listId: 1,
  },
  {
    authorId: 3,
    title: 'reading spot',
    public: false,
    longitude: 234235679,
    latitude: 23478905679,
    listId: 2,
  },
];

const tags: unknown[] = [
  {
    name: 'hunt',
  },
  {
    name: 'read',
  },
  {
    name: 'skate',
  },
];

const lists: unknown[] = [
  {
    authorId: 1,
    title: 'List test 1',
  },
  {
    authorId: 2,
    title: 'List test 2',
  },
];

export { users, points, tags, lists };
