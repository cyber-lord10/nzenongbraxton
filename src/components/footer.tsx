import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

export function Footer() {
	return (
		<footer className='w-full border-t border-border bg-black/50 backdrop-blur-sm pt-16 pb-8'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-12'>
					{/* Brand Column */}
					<div className='space-y-4'>
						<h3 className='text-2xl font-bold font-[family-name:var(--font-orbitron)] text-primary tracking-wider'>
							&lt;CYBER-LORD /&gt;
						</h3>
						<p className='text-muted-foreground text-sm leading-relaxed'>
							Building the digital future, one line of code at a time. Focused
							on immersive web experiences and scalable architecture.
						</p>
					</div>

					{/* Quick Links */}
					<div className='space-y-4'>
						<h4 className='text-lg font-bold text-white tracking-widest text-glow'>
							EXPLORE
						</h4>
						<ul className='space-y-2 text-sm text-muted-foreground'>
							<li>
								<Link href='/' className='hover:text-primary transition-colors'>
									Home
								</Link>
							</li>
							<li>
								<Link
									href='/projects'
									className='hover:text-primary transition-colors'
								>
									All Projects
								</Link>
							</li>
							<li>
								<Link
									href='/#skills'
									className='hover:text-primary transition-colors'
								>
									Skills Inventory
								</Link>
							</li>
							<li>
								<Link
									href='/#experience'
									className='hover:text-primary transition-colors'
								>
									Timeline
								</Link>
							</li>
						</ul>
					</div>

					{/* Legal / Info */}
					<div className='space-y-4'>
						<h4 className='text-lg font-bold text-white tracking-widest text-glow'>
							LEGAL
						</h4>
						<ul className='space-y-2 text-sm text-muted-foreground'>
							<li>
								<Link href='#' className='hover:text-primary transition-colors'>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-primary transition-colors'>
									Terms of Service
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-primary transition-colors'>
									Cookie Policy
								</Link>
							</li>
						</ul>
					</div>

					{/* Connect */}
					<div className='space-y-4'>
						<h4 className='text-lg font-bold text-white tracking-widest text-glow'>
							CONNECT
						</h4>
						<div className='flex gap-4'>
							<Link
								href='#'
								className='h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all border border-transparent hover:border-primary/50'
							>
								<Github className='h-5 w-5' />
							</Link>
							<Link
								href='#'
								className='h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all border border-transparent hover:border-primary/50'
							>
								<Linkedin className='h-5 w-5' />
							</Link>
							<Link
								href='#'
								className='h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all border border-transparent hover:border-primary/50'
							>
								<Twitter className='h-5 w-5' />
							</Link>
							<Link
								href='mailto:contact@cyber-lord.dev'
								className='h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all border border-transparent hover:border-primary/50'
							>
								<Mail className='h-5 w-5' />
							</Link>
						</div>
						<div className='flex items-center gap-2 text-sm text-muted-foreground mt-4'>
							<MapPin className='h-4 w-4 text-primary' />
							<span>Available Worldwide</span>
						</div>
					</div>
				</div>

				<div className='border-t border-white/5 pt-8 text-center text-xs text-muted-foreground'>
					<p>
						&copy; {new Date().getFullYear()} Nzenong Kombou Mc Braxton. All
						logic reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
