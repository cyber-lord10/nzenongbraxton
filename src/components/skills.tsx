'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search } from 'lucide-react';

// Categorized Skills Data
const skillData = [
	{
		category: 'Frontend',
		items: [
			'HTML',
			'CSS',
			'JavaScript',
			'React',
			'Next.js',
			'Tailwind CSS',
			'Bootstrap',
			'jQuery',
		],
	},
	{ category: 'Backend', items: ['Laravel', 'PHP', 'Node.js', 'Express'] },
	{
		category: 'Database',
		items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
	},
	{
		category: 'Mobile & Tools',
		items: ['Flutter', 'Dart', 'Git', 'Docker', 'DevOps'],
	},
];

export function Skills() {
	const [filter, setFilter] = useState('');

	// Flatten and filter skills
	const filteredSkills = skillData
		.flatMap((cat) => cat.items)
		.filter((item) => item.toLowerCase().includes(filter.toLowerCase()));

	return (
		<section id='skills' className='py-20 bg-background/50 relative'>
			<div className='container mx-auto px-4 mb-10 text-center'>
				<h2 className='text-3xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-200 font-[family-name:var(--font-orbitron)] mb-8 text-glow'>
					Arsenal & Capabilities
				</h2>

				{/* Search Bar */}
				<div className='max-w-md mx-auto relative mb-12'>
					<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
						<Search className='h-5 w-5 text-muted-foreground' />
					</div>
					<input
						type='text'
						className='w-full pl-10 pr-4 py-3 bg-secondary/20 border border-primary/30 rounded-full focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground/50 transition-all shadow-[0_0_10px_rgba(0,229,255,0.1)] focus:shadow-[0_0_20px_rgba(0,229,255,0.3)]'
						placeholder='Search protocol or technology...'
						value={filter}
						onChange={(e) => setFilter(e.target.value)}
					/>
				</div>

				{/* Categories Grid (Visible when no search) */}
				{filter === '' ? (
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{skillData.map((category, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.1 }}
								className='bg-card/50 backdrop-blur-sm border border-primary/20 p-6 rounded-xl hover:border-primary/60 transition-colors group'
							>
								<h3 className='text-xl font-bold text-primary mb-4 font-mono'>
									{category.category}
								</h3>
								<div className='flex flex-wrap gap-2 justify-center'>
									{category.items.map((skill, sIdx) => (
										<span
											key={sIdx}
											className='px-3 py-1 bg-secondary/50 rounded-full text-sm hover:bg-primary hover:text-black transition-colors cursor-default'
										>
											{skill}
										</span>
									))}
								</div>
							</motion.div>
						))}
					</div>
				) : (
					/* Search Results */
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className='flex flex-wrap justify-center gap-4 min-h-[200px]'
					>
						{filteredSkills.length > 0 ? (
							filteredSkills.map((skill, idx) => (
								<motion.span
									key={idx}
									layout
									className='px-6 py-3 bg-primary/10 border border-primary text-primary text-xl font-bold rounded-lg shadow-[0_0_10px_rgba(0,229,255,0.2)]'
								>
									{skill}
								</motion.span>
							))
						) : (
							<p className='text-muted-foreground'>
								No matching protocols found.
							</p>
						)}
					</motion.div>
				)}
			</div>

			{/* Background Marquee (Decorative only now) */}
			<div className='absolute inset-x-0 bottom-0 opacity-10 pointer-events-none overflow-hidden'>
				<div className='animate-marquee whitespace-nowrap py-4'>
					{Array(3)
						.fill(skillData.flatMap((c) => c.items))
						.flat()
						.map((skill, i) => (
							<span key={i} className='mx-8 text-6xl font-black text-primary'>
								{skill}
							</span>
						))}
				</div>
			</div>
		</section>
	);
}
