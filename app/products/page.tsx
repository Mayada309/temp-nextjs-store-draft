import ProductsContainer from '@/components/products/ProductsContainer';
import { use } from 'react';

type SearchParams = Promise<{ layout?: string; search?: string }>;

function ProductsPage(props: { searchParams: SearchParams }) {
  const searchParams = use(props.searchParams);
  const layout = searchParams.layout || 'grid';
  const search = searchParams.search || '';
  console.log(layout);

  return <ProductsContainer layout={layout} search={search} />;
}

export default ProductsPage;
