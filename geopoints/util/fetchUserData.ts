// we use this function to fetch the user data client side only, for ease of development
// todo fix types

const fetchUserData = async (userEmail: string) => {
  if (userEmail) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/users/${userEmail}`
    );
    if (!res.ok) {
      throw new Error('Error fetching user data');
    }
    const userData = await res.json();
    return userData;
  }
};

export default fetchUserData;
