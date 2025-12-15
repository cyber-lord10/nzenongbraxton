import { Hero } from '@/components/hero';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Reviews } from '@/components/reviews';

export default function Home() {
	return (
		<main className='min-h-screen'>
			<Hero />
			<Skills />
			<Projects />
			<Reviews />
		</main>
	);
}
