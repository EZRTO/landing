import { notFound } from 'next/navigation';

export const dynamic = 'error';

export default function CatchAllNotFoundPage() {
  notFound();
} 