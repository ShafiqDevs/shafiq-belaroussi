'use client';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {
	profileImageLink: string;
	about:
		| {
				introductionTitle: string;
				introduction: string;
		  }
		| undefined;
};

export default function About({ profileImageLink, about }: Props) {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='relative flex flex-col gap-20 md:gap-4 h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				About
			</h3>
			<motion.img
				className='mt-24 md:mt-48 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
				initial={{
					x: -200,
					opacity: 0,
				}}
				transition={{ duration: 1.2 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				src={profileImageLink}
			/>
			<div className='flex flex-col gap-6 px-0 md:px-10'>
				<h4 className='text-4xl font-semibold'>
					Here is a{' '}
					<span className='underline decoration-[#F7AB0A]/50'>
						little
					</span>{' '}
					background
				</h4>
				<p className='text-base'>{about?.introduction}</p>
			</div>
		</motion.div>
	);
}
