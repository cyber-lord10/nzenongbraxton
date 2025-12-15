'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/project-card';

// Reusing project data for now - in a real app this would come from a CMS or API
const allProjects = [
	{
		title: 'EcoMarkt',
		description:
			'A sustainable e-commerce marketplace connecting local farmers with urban consumers.',
		tags: ['Next.js', 'Firebase', 'Stripe'],
		category: 'Web',
		repoUrl: '#',
	},
	{
		title: 'MindFlow AI',
		description: 'AI-powered productivity assistant.',
		tags: ['Python', 'TensorFlow', 'React'],
		category: 'AI',
		repoUrl: '#',
	},
	{
		title: 'UrbanScout',
		description: 'Cross-platform mobile app for urban issues.',
		tags: ['Flutter', 'Dart'],
		category: 'Mobile',
		repoUrl: '#',
	},
	{
		title: 'CryptoDash',
		description: 'Real-time cryptocurrency dashboard with price alerts.',
		tags: ['React', 'WebSocket', 'Chart.js'],
		category: 'Web',
		repoUrl: '#',
	},
	{
		title: 'DevOps Pipeline',
		description: 'Automated CI/CD pipeline generator.',
		tags: ['Go', 'Docker', 'Kubernetes'],
		category: 'DevOps',
		repoUrl: '#',
	},
];

export default function ProjectsPage() {
	return (
		<main className='min-h-screen pt-24 pb-12 px-4'>
			<div className='container mx-auto'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className='text-center mb-12'
				>
					<h1 className='text-4xl md:text-6xl font-bold font-[family-name:var(--font-orbitron)] text-primary mb-4 text-glow'>
						Mission Log
					</h1>
					<p className='text-muted-foreground max-w-2xl mx-auto'>
						Comprehensive archive of deployed solutions, prototypes, and
						experiments.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{allProjects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: index * 0.1 }}
						>
							<ProjectCard {...project} />
						</motion.div>
					))}
				</div>
			</div>
		</main>
	);
}
