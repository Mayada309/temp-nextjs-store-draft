import { cn } from '@/lib/utils';

function EmptyList({
  heading = 'No items found.',
  className,
}: {
  heading?: string;
  className?: string;
}) {
  return <div className={cn('text-xl ', className)}>{heading}</div>;
}

export default EmptyList;
