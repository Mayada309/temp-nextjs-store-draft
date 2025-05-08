import Link from 'next/link';
import { Button } from '../ui/button';
import HeroCarousel from './HeroCarousel';

function Hero() {
  return (
    <div>
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
        <div className=''>
          <h1 className='max-w-2xl capitalize font-bold text-4xl tracking-tight sm:text-6xl'>
            we are changing the way people shop
          </h1>
          <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit laboriosam ducimus in officia ex eum quidem accusamus,
            fugiat incidunt et est earum deleniti, eaque excepturi molestiae
            optio doloribus sint deserunt?
          </p>
          <Button asChild size={'lg'} className='mt-10'>
            <Link href={'/products'}>Our Products</Link>
          </Button>
        </div>
        <HeroCarousel />
      </section>
    </div>
  );
}

export default Hero;
