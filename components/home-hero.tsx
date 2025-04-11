import Link from 'next/link';

import { CopyInstall } from '@/components/copy-install';
import { GridPattern } from '@/components/grid-pattern';
import { Button } from '@/components/ui/button';

import { cn } from '@/utils/cn';

export function HomeHero() {
	return (
		<section className="relative flex flex-col items-center justify-center border px-10 py-16 text-center md:py-50 lg:px-0">
			<GridPattern
				width={35}
				height={35}
				x={-1}
				y={-1}
				strokeDasharray={'4 2'}
				className={cn(
					'-z-20 [mask-image:radial-gradient(650px_circle_at_center,white,transparent)]',
				)}
			/>
			<h1
				className={cn(
					'mb-2 flex flex-col text-balance text-4xl font-extrabold tracking-tight sm:text-5xl md:mb-4 md:text-6xl lg:text-7xl xl:text-8xl',
					'[&>span]:dark:from-muted-foreground [&>span]:dark:to-foreground [&>span]:dark:bg-gradient-to-t',
					'[&>span]:dark:to-40% [&>span]:dark:bg-clip-text [&>span]:dark:text-transparent',
				)}
			>
				<span>Terminal Docs</span>
			</h1>
			<p className="text-muted-foreground max-w-6xl text-balance text-base font-medium sm:text-lg md:text-xl lg:text-2xl">
			A growing personal and beautifully organized archive with commands and scripts for
				{' '}
				<span className="text-secondary-foreground">
				Pentesing & System Administration
				</span>
				.
			</p>
			<div className="mt-4 flex translate-x-[1.5px] flex-col gap-x-4 gap-y-2 sm:flex-row md:mt-[35px]">
				<Link href="/docs/index">
					<Button>Read the docs</Button>
				</Link>
			</div>
		</section>
	);
}