'use client';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function About({}: Props) {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='relative flex flex-col  h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				About
			</h3>
			<motion.img
				className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
				initial={{
					x: -200,
					opacity: 0,
				}}
				transition={{ duration: 1.2 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				src='https://cdn.discordapp.com/attachments/975842657895071764/1314215164521873478/roundeD.jpg?ex=6752f5c0&is=6751a440&hm=02cfae15fb22b3c059078051d0b5e726fb49ac7b0516b461420b214ab829ed8f&'
			/>
			<div className='space-y-10 px-0 md:px-10'>
				<h4 className='text-4xl font-semibold'>
					Here is a{' '}
					<span className='underline decoration-[#F7AB0A]/50'>
						little
					</span>{' '}
					background
				</h4>
				<p className='text-base'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Eos distinctio aspernatur aut sapiente dolore labore illo
					minus illum error, quae laudantium totam voluptas numquam
					facere rem nemo perspiciatis quas quasi. Lorem ipsum dolor
					sit amet consectetur adipisicing elit. Eius recusandae vitae
					amet accusamus nihil, quas totam tempore mollitia, sed
					voluptate ipsam consectetur quibusdam! Possimus animi
					laborum totam laboriosam, officiis natus.
				</p>
			</div>
		</motion.div>
	);
}
