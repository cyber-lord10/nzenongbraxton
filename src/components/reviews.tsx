'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { Star } from 'lucide-react';

const reviews = [
	{
		name: 'Alex Rivera',
		role: 'CTO, StartHub',
		content:
			'An absolute wizard with Next.js. Delivered our platform 2 weeks ahead of schedule with flawless code.',
		rating: 5,
	},
	{
		name: 'Sarah Chen',
		role: 'Product Manager, TechFlow',
		content:
			'The attention to detail in the UI animations is unmatched. Our user engagement increased by 40%.',
		rating: 5,
	},
	{
		name: 'Marcus Johnson',
		role: 'Founder, EcoSystm',
		content:
			"Cyber-Lord doesn't just write code, he architects solutions. A true partner in development.",
		rating: 5,
	},
	{
		name: 'Emily Davis',
		role: 'Lead Designer, CreativeArts',
		content:
			'Finally, a developer who understands design systems perfectly. A joy to collaborate with.',
		rating: 5,
	},
];

export function Reviews() {
	return (
		<section className='py-20 bg-black/20'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl md:text-5xl font-bold text-center mb-12 font-[family-name:var(--font-orbitron)] text-glow'>
					Client Transmissions
				</h2>

				<Carousel
					opts={{
						align: 'start',
					}}
					className='w-full max-w-5xl mx-auto'
				>
					<CarouselContent>
						{reviews.map((review, index) => (
							<CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
								<div className='p-1'>
									<Card className='bg-card/30 backdrop-blur-md border border-primary/10'>
										<CardContent className='flex flex-col aspect-square justify-between p-6'>
											<div className='flex gap-1 mb-4'>
												{[...Array(review.rating)].map((_, i) => (
													<Star
														key={i}
														className='h-4 w-4 fill-primary text-primary'
													/>
												))}
											</div>
											<blockquote className='text-lg italic text-muted-foreground mb-4'>
												"{review.content}"
											</blockquote>
											<div>
												<div className='font-bold text-primary'>
													{review.name}
												</div>
												<div className='text-sm text-muted-foreground'>
													{review.role}
												</div>
											</div>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</section>
	);
}
