import News from './News';
import { NewsItem } from '../types/news.types';

export default async function NewsWrapper() {
  const res = await fetch('https://ades.kg:8086/news/getAllNews', {
    ...(typeof window === "undefined"
      ? { next: { revalidate: 3600 } }
      : {}),
  } as RequestInit & { next?: { revalidate: number } });

  if (!res.ok) {
    throw new Error('Failed to fetch news');
  }

  const news: NewsItem[] = await res.json();

  return <News initialNews={news} />;
}
