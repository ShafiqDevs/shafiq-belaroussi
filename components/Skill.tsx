import React from 'react';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';

type Props = {
	directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
	return (
		<div className='group relative flex cursor-pointer'>
			<motion.img
				className='rounded-full border border-gray-500 object-cover h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
				initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
				src='https://cdn.discordapp.com/attachments/975842657895071764/1314215164521873478/roundeD.jpg?ex=6752f5c0&is=6751a440&hm=02cfae15fb22b3c059078051d0b5e726fb49ac7b0516b461420b214ab829ed8f&'
			/>
			<div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
				<div className='flex items-center justify-center h-full'>
					<p className='text-3xl font-bold text-black opacity-100'>
						100%
					</p>
				</div>
			</div>
		</div>
	);
}
