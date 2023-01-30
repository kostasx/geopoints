// we use this function to fetch the user data client side only, for ease of develpment
// todo fix types
const baseUrl = 'http://localhost:3000';
const fetchUserData = async (userEmail: string) => {
  if (userEmail) {
    console.log({ userEmail });
    const res = await fetch(`${baseUrl}/api/users/${userEmail}`);
    if (!res.ok) {
      throw new Error('error fetching user data');
    }
    const userData = await res.json();
    return userData;
  }
};

export default fetchUserData;
