'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { urlFor } from '@/sanity/lib/image';
import type { Projects } from '@/sanity.types';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
	projects: Projects[];
};

export default function Projects({ projects }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Projects
			</h3>
			<div className='mt-24 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
				{projects.map((project) => (
					<div
						key={project._id}
						className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
						<motion.div
							initial={{ y: -300, opacity: 0 }}
							transition={{ duration: 1.2 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}>
							<Image
								className='w-full md:w-[600px] aspect-video object-cover shadow-lg rounded-md'
								src={urlFor(project.projectThumbnail ?? '').url()}
								alt={`image for ${project.projectName}`}
								width={1080}
								height={1080}
							/>
						</motion.div>
						<div className='space-y-10 px-0 md:px-10 max-w-6xl'>
							<h4 className='flex flex-col gap-2 text-4xl font-semibold text-center hover:text-[#F7AB0A]'>
								{/* <span className='underline decoration-[#F7AB0A]/50 text-base'>
									Project {i + 1} of {projects.length}:
								</span> */}
								<Link href={project.projectLink || ''}>
									{project.projectName}
								</Link>
							</h4>
							<p className='text-base text-left md:text-left max-lg:max-h-[30vh] overflow-y-auto max-w-[75ch] mx-auto '>
								{project.projectDescription}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
		</motion.div>
	);
}
