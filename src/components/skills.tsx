'use client';

import { motion } from 'framer-motion';

const skills = [
	'HTML',
	'CSS',
	'JavaScript',
	'jQuery',
	'Bootstrap',
	'Tailwind CSS',
	'React',
	'Next.js',
	'Laravel',
	'PHP',
	'MySQL',
	'MongoDB',
	'Flutter',
	'DevOps',
];

export function Skills() {
	return (
		<section className='py-20 bg-background overflow-hidden'>
			<div className='container mx-auto px-4 mb-10 text-center'>
				<h2 className='text-3xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500'>
					Order of the Day
				</h2>
			</div>

			<div className='relative flex overflow-x-hidden'>
				<div className='animate-marquee whitespace-nowrap py-12 flex items-center'>
					{skills.map((skill, index) => (
						<span
							key={index}
							className='mx-8 text-4xl md:text-6xl font-bold text-muted-foreground/20 hover:text-primary transition-colors cursor-default'
						>
							{skill}
						</span>
					))}
				</div>

				<div className='absolute top-0 animate-marquee2 whitespace-nowrap py-12 flex items-center'>
					{skills.map((skill, index) => (
						<span
							key={`duplicate-${index}`}
							className='mx-8 text-4xl md:text-6xl font-bold text-muted-foreground/20 hover:text-primary transition-colors cursor-default'
						>
							{skill}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
