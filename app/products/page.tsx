import ProductsContainer from '@/components/products/ProductsContainer';

function ProductsPage({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) {
  const layout = searchParams.layout || 'grid';
  const search = searchParams.search || '';
  console.log(layout);

  return <ProductsContainer layout={layout} search={search} />;
}

export default ProductsPage;
