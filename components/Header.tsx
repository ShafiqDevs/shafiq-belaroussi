'use client';

import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';
import Link from 'next/link';

type Props = {
	headerLinks: string[];
};

export default function Header({ headerLinks }: Props) {
	return (
		<header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center '>
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
					// ease: 'easeInOut',
				}}
				className='flex flex-row items-center'>
				{/* Social icons */}
				{headerLinks &&
					headerLinks.length > 0 &&
					headerLinks.map((link) => (
						<SocialIcon
							key={uuid()}
							url={link}
							fgColor='gray'
							bgColor='transparent'
						/>
					))}
			</motion.div>
			<motion.div
				initial={{
					x: 500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
					// ease: 'easeInOut',
				}}
				className='flex flex-row items-center text-gray-300 cursor-pointer'>
				<SocialIcon
					className='cursor-pointer'
					network='email'
					fgColor='gray'
					bgColor='transparent'
				/>
				<Link href={"#contact"} className='uppercase hidden md:inline-flex text-sm text-gray-400'>
					Get In Touch
				</Link>
			</motion.div>
		</header>
	);
}
