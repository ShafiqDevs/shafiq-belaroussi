'use client';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircules from './BackgroundCircules';
import Link from 'next/link';

type Props = {};

export default function Hero({}: Props) {
	const [text, count] = useTypewriter({
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
			<img
				className='relative rounded-full h-32 w-32 mx-auto object-cover'
				src='https://cdn.discordapp.com/attachments/975842657895071764/1314215164521873478/roundeD.jpg?ex=6752f5c0&is=6751a440&hm=02cfae15fb22b3c059078051d0b5e726fb49ac7b0516b461420b214ab829ed8f&'
				alt='Shafiq headshot'
			/>
			<div className='z-20'>
				<h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
					Software Engineer
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
					<Link
						className=''
						href={"#experience"}>
						<button className='heroButton'>Experience</button>
					</Link>
					<Link
						className=''
						href={'#skills'}>
						<button className='heroButton'>Skills</button>
					</Link>
					<Link
						className=''
						href={"#projects"}>
						<button className='heroButton'>Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
