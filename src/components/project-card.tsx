'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
	title: string;
	description: string;
	tags: string[];
	category: string;
	demoUrl?: string;
	repoUrl?: string;
	imageUrl?: string;
}

export function ProjectCard({
	title,
	description,
	tags,
	category,
	demoUrl,
	repoUrl,
}: ProjectCardProps) {
	return (
		<motion.div
			whileHover={{ y: -10 }}
			transition={{ type: 'spring', stiffness: 300 }}
		>
			<Card className='h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-colors overflow-hidden group'>
				<div className='h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden'>
					{/* Abstract placeholder for project image - normally would use Next/Image */}
					<div className='absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors' />
					<div className='absolute inset-0 flex items-center justify-center opacity-30 text-6xl font-black text-white/10 select-none'>
						{category.toUpperCase()}
					</div>
				</div>

				<CardHeader>
					<div className='flex justify-between items-start'>
						<CardTitle className='text-xl font-bold text-primary'>
							{title}
						</CardTitle>
						<Badge variant='outline' className='text-xs'>
							{category}
						</Badge>
					</div>
					<CardDescription className='line-clamp-3'>
						{description}
					</CardDescription>
				</CardHeader>

				<CardContent>
					<div className='flex flex-wrap gap-2'>
						{tags.map((tag) => (
							<Badge
								key={tag}
								variant='secondary'
								className='bg-secondary/50 text-xs'
							>
								{tag}
							</Badge>
						))}
					</div>
				</CardContent>

				<CardFooter className='flex justify-between gap-4 mt-auto'>
					{repoUrl && (
						<Button
							variant='outline'
							size='sm'
							className='w-full gap-2'
							asChild
						>
							<a href={repoUrl} target='_blank' rel='noopener noreferrer'>
								<Github className='w-4 h-4' /> Code
							</a>
						</Button>
					)}
					{demoUrl && (
						<Button size='sm' className='w-full gap-2' asChild>
							<a href={demoUrl} target='_blank' rel='noopener noreferrer'>
								<ExternalLink className='w-4 h-4' /> Demo
							</a>
						</Button>
					)}
				</CardFooter>
			</Card>
		</motion.div>
	);
}
