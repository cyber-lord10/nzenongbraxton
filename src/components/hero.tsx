'use client';

import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
	return (
		<section className='relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background pt-20'>
			{/* Background Effect */}
			<div className='absolute inset-0 z-0 opacity-30 pointer-events-none'>
				<div className='absolute inset-0 bg-[linear-gradient(to_right,#00bcd412_1px,transparent_1px),linear-gradient(to_bottom,#00bcd412_1px,transparent_1px)] bg-[size:40px_40px]'></div>
				<div className='absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]'></div>

				{/* Floating particles (simulated) */}
				<div className='absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse'></div>
				<div className='absolute top-3/4 right-1/4 w-3 h-3 bg-primary rounded-full animate-pulse delay-700'></div>
				<div className='absolute top-1/2 right-10 w-2 h-2 bg-primary rounded-full animate-pulse delay-300'></div>
			</div>

			<div className='z-10 text-center px-4 max-w-5xl mx-auto space-y-2'>
				{/* Main Heading Group */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h1 className='text-4xl md:text-7xl font-bold tracking-wider font-[family-name:var(--font-orbitron)]'>
						<span className='text-white mr-4'>I'm</span>
						<span className='text-primary drop-shadow-[0_0_15px_rgba(0,229,255,0.7)]'>
							Nzenong Kombou
						</span>
					</h1>
					<h1 className='text-4xl md:text-7xl font-bold tracking-wider font-[family-name:var(--font-orbitron)] text-white mt-2'>
						Mc Braxton
					</h1>
				</motion.div>

				{/* Alias Container */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.5, duration: 0.8 }}
					className='mt-8 flex items-center justify-center gap-4'
				>
					<span className='text-muted-foreground font-mono text-lg md:text-xl'>
						alias:
					</span>
					<div className='relative group'>
						<div className='absolute -inset-1 bg-primary/40 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
						<span className='relative px-4 py-2 bg-black rounded-lg border border-primary/50 text-2xl md:text-4xl font-bold text-primary font-[family-name:var(--font-orbitron)] tracking-widest shadow-[0_0_20px_rgba(0,229,255,0.3)]'>
							CYBER-LORD
						</span>
					</div>
				</motion.div>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.0, duration: 0.8 }}
					className='mt-8 text-muted-foreground text-center max-w-2xl mx-auto text-base md:text-lg leading-relaxed'
				>
					<span className='text-primary font-bold'>Fullstack Developer</span>{' '}
					crafting digital experiences with code, creativity, and a passion for
					innovation
				</motion.p>

				{/* Action Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.2, duration: 0.8 }}
					className='flex flex-col sm:flex-row items-center justify-center gap-6 mt-12'
				>
					<Button
						size='lg'
						className='bg-primary text-black hover:bg-primary/80 font-bold px-8 min-w-[200px] text-lg rounded-none skew-x-[-10deg]'
					>
						<span className='skew-x-[10deg]'>View Projects</span>
					</Button>

					<Button
						size='lg'
						variant='outline'
						className='border-primary text-primary hover:bg-primary/10 font-bold px-8 min-w-[200px] text-lg rounded-none skew-x-[-10deg]'
					>
						<span className='skew-x-[10deg]'>Get In Touch</span>
					</Button>
				</motion.div>

				{/* Social Icons (Bottom) */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5, duration: 0.8 }}
					className='pt-16 flex gap-6 justify-center'
				>
					{/* Icons would go here, placeholders for now using lucide */}
				</motion.div>
			</div>
		</section>
	);
}
