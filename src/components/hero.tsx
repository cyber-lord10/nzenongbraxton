'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Hero() {
	const [text, setText] = useState('');
	const fullText = 'Cyber-Lord';

	useEffect(() => {
		let i = 0;
		const interval = setInterval(() => {
			setText(fullText.slice(0, i + 1));
			i++;
			if (i === fullText.length) clearInterval(interval);
		}, 150);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className='relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background'>
			{/* Background Effect */}
			<div className='absolute inset-0 z-0 opacity-20 pointer-events-none'>
				<div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]'></div>
				<div className='absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 blur-[100px]'></div>
			</div>

			<div className='z-10 text-center px-4'>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='text-4xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70'
				>
					Nzenong Kombou Mc Braxton
				</motion.h1>

				<motion.div className='mt-4 text-2xl md:text-5xl font-mono text-primary h-16 flex items-center justify-center'>
					<span>{text}</span>
					<span className='animate-pulse ml-1'>_</span>
				</motion.div>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5, duration: 0.8 }}
					className='mt-6 text-muted-foreground max-w-lg mx-auto text-lg'
				>
					Fullstack Developer | AI Enthusiast | Tech Visionary
				</motion.p>
			</div>
		</section>
	);
}
