'use client';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function ExperienceCard(props: Props) {
	return (
		<article className='flex flex-col items-center flex-shrink-0 rounded-lg space-y-7 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
			<motion.img
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className='w-32 h-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-center'
				src='https://cdn.discordapp.com/attachments/975842657895071764/1314215164521873478/roundeD.jpg?ex=6752f5c0&is=6751a440&hm=02cfae15fb22b3c059078051d0b5e726fb49ac7b0516b461420b214ab829ed8f&'
				alt=''
			/>
			<div className='px-0 md:px-10'>
				<h4 className='text-4xl font-light'>CEO of LeadLuxe</h4>
				<p className='font-bold text-2xl mt-1'>Marketing made easy</p>
				<div className='flex space-x-2 my-2'>
					<img
						className='h-10 w-10 rounded-full object-cover object-center'
						src='https://cdn.discordapp.com/attachments/975842657895071764/1314215164521873478/roundeD.jpg?ex=6752f5c0&is=6751a440&hm=02cfae15fb22b3c059078051d0b5e726fb49ac7b0516b461420b214ab829ed8f&'
						alt=''
					/>
					<img
						className='h-10 w-10 rounded-full object-cover object-center'
						src='https://cdn.discordapp.com/attachments/975842657895071764/1314215164521873478/roundeD.jpg?ex=6752f5c0&is=6751a440&hm=02cfae15fb22b3c059078051d0b5e726fb49ac7b0516b461420b214ab829ed8f&'
						alt=''
					/>
					<img
						className='h-10 w-10 rounded-full object-cover object-center'
						src='https://cdn.discordapp.com/attachments/975842657895071764/1314215164521873478/roundeD.jpg?ex=6752f5c0&is=6751a440&hm=02cfae15fb22b3c059078051d0b5e726fb49ac7b0516b461420b214ab829ed8f&'
						alt=''
					/>
				</div>
				<p className='uppercase py-5 text-gray-300'>
					Started work... -Ended...
				</p>
				<ul className='list-disc space-y-4 ml-5 text-lg'>
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
				</ul>
			</div>
		</article>
	);
}
