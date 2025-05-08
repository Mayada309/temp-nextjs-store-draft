import { Button } from '../ui/button';
import { FaHeart } from 'react-icons/fa';
function FavouriteToggleButton({ productId }: { productId: string }) {
  return (
    <div>
      <Button size={'icon'} variant={'outline'} className='p-2 cursor-pointer'>
        <FaHeart />
      </Button>
    </div>
  );
}

export default FavouriteToggleButton;
