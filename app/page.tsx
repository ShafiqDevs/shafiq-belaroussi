import About from '@/components/About';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
			{/* Header */}
			<Header />
			{/* Hero */}
			<section
				id='hero'
				className='snap-start'>
				<Hero />
			</section>
			{/* About */}
			<section
				id='about'
				className='snap-center'>
				<About />
			</section>
			{/* WorkExperience */}
			<section
				id='experience'
				className='snap-center'>
				<WorkExperience />
			</section>
			{/* Skills */}
			<section
				id='skills'
				className='snap-start'>
				<Skills />
			</section>
			{/* Projects */}
			<section
				id='projects'
				className='snap-center'>
				<Projects />
			</section>
			{/* Contact Me */}
			<section
				id='contact'
				className='snap-start'>
				<Contact />
			</section>
			<Link href={'#hero'}>
				<footer className='sticky bottom-5 w-full cursor-pointer'>
					<div className='flex items-center justify-center'>
						<img
							className='w-10 h-10 rounded-full filter grayscale hover:grayscale-0 object-cover object-center'
							src='https://cdn.discordapp.com/attachments/975842657895071764/1314215164521873478/roundeD.jpg?ex=6752f5c0&is=6751a440&hm=02cfae15fb22b3c059078051d0b5e726fb49ac7b0516b461420b214ab829ed8f&'
							alt=''
						/>
					</div>
				</footer>
			</Link>
		</div>
	);
}
