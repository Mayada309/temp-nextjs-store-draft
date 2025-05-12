import BreadCrumbs from '@/components/single-product/BreadCrumbs';
import { fetchSingleProduct } from '@/utils/actions';
import Image from 'next/image';
import { formatCurrency } from '@/utils/format';
import FavouriteToggleButton from '@/components/products/FavouriteToggleButton';
import AddToCart from '@/components/single-product/AddToCart';
import ProductRating from '@/components/single-product/ProductRating';
import { use } from 'react';

type Params = Promise<{ id: string }>;

async function SingleProduct({ params }: { params: Params }) {
  const { id } = await params;
  const product = await fetchSingleProduct(id);
  const { name, image, company, description, price } = product;
  const dollarsAmount = formatCurrency(price);

  return (
    <section>
      <BreadCrumbs name={name} />
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        {/* IMAGE FIRST COLUMN*/}
        <div className='relative h-full'>
          <Image
            src={image}
            alt={name}
            fill
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-cover rounded w-full  '
          />
        </div>
        {/* PRODUCT INFO SECOND COLUMN*/}
        <div className=''>
          <div className='flex gap-x-8 items-center '>
            <h1 className='capitalize text-3xl font-bold '>{name}</h1>
            <FavouriteToggleButton productId={id} />
          </div>
          <ProductRating productId={id} />
          <h4 className='mt-2 text-xl'>{company}</h4>
          <p className='mt-3 text-md text-muted-foreground bg-muted inline-block p-2 rounded-lg font-semibold '>
            {dollarsAmount}
          </p>
          <p className='mt-6 leading-8 text-muted-foreground '>{description}</p>
          <AddToCart productId={id} />
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
