'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/project-card';

const projects = [
	{
		title: 'EcoMarkt',
		description:
			'A sustainable e-commerce marketplace connecting local farmers with urban consumers. Features real-time inventory tracking and carbon footprint estimation.',
		tags: ['Next.js', 'Firebase', 'Stripe', 'Tailwind'],
		category: 'Web Development',
		demoUrl: '#',
		repoUrl: '#',
	},
	{
		title: 'MindFlow AI',
		description:
			'AI-powered productivity assistant that categorizes tasks and suggests optimal work schedules based on user energy levels.',
		tags: ['Python', 'TensorFlow', 'FastAPI', 'React'],
		category: 'AI/ML',
		demoUrl: '#',
		repoUrl: '#',
	},
	{
		title: 'UrbanScout',
		description:
			'Cross-platform mobile app for reporting and tracking urban infrastructure issues. Uses geolocation and offline-first architecture.',
		tags: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
		category: 'Mobile',
		demoUrl: '#',
		repoUrl: '#',
	},
	{
		title: 'Portfolio v1',
		description:
			'The first iteration of my personal portfolio. Built with standard HTML/CSS and jQuery.',
		tags: ['HTML', 'CSS', 'jQuery'],
		category: 'Web Development',
		repoUrl: '#',
	},
];

export function Projects() {
	return (
		<section className='py-20 px-4'>
			<div className='container mx-auto'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='text-center mb-16'
				>
					<h2 className='text-3xl md:text-5xl font-bold mb-4 tracking-tighter'>
						Selected Missions
					</h2>
					<p className='text-muted-foreground max-w-2xl mx-auto'>
						A showcase of digital solutions architected and deployed across
						various domains.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
						>
							<ProjectCard {...project} />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
