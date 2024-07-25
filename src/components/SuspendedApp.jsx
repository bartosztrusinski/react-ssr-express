import { lazy, Suspense } from 'react';

import Loading from './Loading';

const posts = [
  {
    id: 1,
    title: 'Exploring the Universe',
    content:
      'In this post, we will delve into the mysteries of the universe and discuss various astronomical phenomena.',
  },
  {
    id: 2,
    title: 'The Beauty of Nebulas',
    content:
      'Nebulas are some of the most breathtaking sights in the night sky. Join us as we explore their colors and formations.',
    author: 'Jane Smith',
    date: '2022-09-20',
  },
  {
    id: 3,
    title: 'The Search for Exoplanets',
    content:
      'Exoplanets are planets that orbit stars outside of our solar system. Learn about the latest discoveries in exoplanet research.',
    author: 'David Johnson',
    date: '2022-09-25',
  },
  {
    id: 4,
    title: 'The Life Cycle of Stars',
    content:
      'Stars go through fascinating stages of development, from birth to death. Discover the secrets of stellar evolution.',
    author: 'Sarah Thompson',
    date: '2022-09-30',
  },
  {
    id: 5,
    title: 'Black Holes: The Cosmic Abyss',
    content:
      'Black holes are mysterious objects with immense gravitational pull. Explore the mind-bending properties of these cosmic abysses.',
    author: 'Michael Anderson',
    date: '2022-10-05',
  },
];

const Sidebar = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import('./Sidebar'), 1000))
    )
);
const Posts = lazy(
  () =>
    new Promise((resolve) => setTimeout(() => resolve(import('./Posts')), 2000))
);

export default function SuspendedApp() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Sidebar />
      </Suspense>
      <main>
        <h1>My posts</h1>
        <Suspense fallback={<Loading />}>
          <Posts posts={posts} />
        </Suspense>
      </main>
    </div>
  );
}
