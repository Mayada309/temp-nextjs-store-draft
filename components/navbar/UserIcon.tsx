import { LuUser } from 'react-icons/lu';
import { currentUser, auth } from '@clerk/nextjs/server';

async function UserIcon() {
  const { userId } = auth();

  const user = await currentUser();

  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={profileImage}
        alt='img'
        className='w-6 h-6 rounded-full object-cover'
      />
    );
  }
  return <LuUser className='w-6 h-6 bg-primary rounded-full text-white' />;
}

export default UserIcon;
