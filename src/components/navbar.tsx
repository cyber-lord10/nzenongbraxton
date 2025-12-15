'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, Sun, Monitor, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Navbar() {
	const { setTheme } = useTheme();
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#projects', label: 'Projects' },
		{ href: '#experience', label: 'Experience' },
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-background/80 backdrop-blur-md border-b border-border shadow-lg py-2'
					: 'bg-transparent py-4'
			}`}
		>
			<div className='container mx-auto px-4 flex items-center justify-between'>
				<Link
					href='/'
					className='text-2xl font-bold font-mono tracking-tighter text-primary hover:text-primary/80 transition-colors'
				>
					&lt;CyberLord /&gt;
				</Link>

				{/* Desktop Nav */}
				<div className='hidden md:flex items-center gap-8'>
					{navLinks.map((link) => (
						<Link
							key={link.label}
							href={link.href}
							className='text-sm font-medium hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary decoration-2'
						>
							{link.label}
						</Link>
					))}

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant='outline'
								size='icon'
								className='rounded-full border-primary/20 hover:border-primary'
							>
								<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
								<Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
								<span className='sr-only'>Toggle theme</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='end'>
							<DropdownMenuItem onClick={() => setTheme('light')}>
								<Sun className='mr-2 h-4 w-4' /> Light
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setTheme('dark')}>
								<Moon className='mr-2 h-4 w-4' /> Dark
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setTheme('system')}>
								<Monitor className='mr-2 h-4 w-4' /> System
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				{/* Mobile Menu Toggle */}
				<div className='md:hidden flex items-center gap-4'>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant='ghost' size='icon' className='rounded-full'>
								<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
								<Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
								<span className='sr-only'>Toggle theme</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='end'>
							<DropdownMenuItem onClick={() => setTheme('light')}>
								Light
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setTheme('dark')}>
								Dark
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setTheme('system')}>
								System
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					<Button
						variant='ghost'
						size='icon'
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						{mobileMenuOpen ? <X /> : <Menu />}
					</Button>
				</div>
			</div>

			{/* Mobile Nav */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className='md:hidden bg-background/95 backdrop-blur-lg border-b border-border overflow-hidden'
					>
						<div className='flex flex-col p-4 gap-4'>
							{navLinks.map((link) => (
								<Link
									key={link.label}
									href={link.href}
									className='text-lg font-medium hover:text-primary transition-colors'
									onClick={() => setMobileMenuOpen(false)}
								>
									{link.label}
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
