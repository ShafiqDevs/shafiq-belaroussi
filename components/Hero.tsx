'use client';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircules from './BackgroundCircules';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
	profileImageLink: string;
	jobTitles: string;
};

export default function Hero({ profileImageLink, jobTitles }: Props) {
	const [text] = useTypewriter({
		words: [
			"H, The Name's Shafiq Belaroussi",
			'Guy-who-loves-Coffee.tsx',
			'<ButLovesToCodeMore/>',
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
			<BackgroundCircules />
			<Image
				className='relative rounded-full h-32 w-32 mx-auto object-cover object-top'
				src={profileImageLink}
				alt='Shafiq headshot'
				width={512}
				height={512}
			/>
			<div className='z-20'>
				<h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
					{jobTitles}
				</h2>
				<h1 className='text-5xl lg:text-6xl font-semibold px-10'>
					<span className='mr-3'>{text}</span>
					<Cursor cursorColor='#F7AB0A' />
				</h1>
				<div className='pt-5'>
					<Link
						className=''
						href={'#about'}>
						<button className='heroButton'>About</button>
					</Link>
					{/* <Link
						className=''
						href={'#experience'}>
						<button className='heroButton'>Experience</button>
					</Link>
					<Link
						className=''
						href={'#skills'}>
						<button className='heroButton'>Skills</button>
					</Link> */}
					<Link
						className=''
						href={'#projects'}>
						<button className='heroButton'>Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
