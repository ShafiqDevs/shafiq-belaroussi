'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {};

export default function WorkExperience(props: Props) {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='relative flex flex-col items-center h-screen overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto '>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Experience
			</h3>
			{/* experience cards */}
			<div className='flex w-full space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
				{/* ExperienceCard */}
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
			</div>
		</motion.div>
	);
}
