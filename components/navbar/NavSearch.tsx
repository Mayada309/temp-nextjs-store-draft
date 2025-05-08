/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { Input } from '../ui/input';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useState, useEffect } from 'react';

function NavSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setsearch] = useState<string>(
    searchParams.get('search')?.toString() || ''
  );

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    replace(`/products?${params.toString()}`);
  }, 300);

  useEffect(() => {
    if (!searchParams.get('search')) {
      setsearch('');
    }
  }, [searchParams.get('search')]);

  return (
    <Input
      type='search'
      placeholder='search product ...'
      value={search}
      onChange={(e) => {
        setsearch(e.target.value);
        handleSearch(e.target.value);
      }}
      className='max-w-xs dark:bg-muted'
    />
  );
}

export default NavSearch;
