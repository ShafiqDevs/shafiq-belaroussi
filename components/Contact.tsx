'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon, MapPin, Phone, User } from 'lucide-react';
import Form from 'next/form';
import { onContactFormSubmit } from '@/lib/actions';
import { redirect } from 'next/navigation';

type Props = {};

export default function Contact({}: Props) {
	return (
		<div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Contact
			</h3>
			<div className='flex flex-col space-y-10'>
				<h4 className='text-4xl font-semibold text-center'>
					I have got just what you need.{' '}
					<span className='decoration-[#F7AB0A]/50 underline'>
						Lets Talk.
					</span>
				</h4>
				<div className='space-y-10'>
					<div className='flex items-center space-x-5 justify-center'>
						<Phone className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>+123456789</p>
					</div>
					<div className='flex items-center space-x-5 justify-center'>
						<MailIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>email@mail.com</p>
					</div>
					<div className='flex items-center space-x-5 justify-center'>
						<MapPin className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>+123 developer lane</p>
					</div>
				</div>
				<Form
					action={async (formData) => {
						let response = await onContactFormSubmit(formData);
						if (response) {
							const { mailToString } = response;
							window.location.href = mailToString;
						}
					}}
					className='flex flex-col space-y-2 w-fit mx-auto'>
					<div className='flex space-x-2'>
						<input
							className='contactInput'
							type='text'
							placeholder='name'
							name='name'
						/>
						<input
							className='contactInput'
							type='email'
							placeholder='email'
							name='email'
						/>
					</div>
					<input
						className='contactInput'
						type='text'
						placeholder='subject'
						name='subject'
					/>
					<textarea
						className='contactInput'
						placeholder='message'
						name='message'
						id=''
					/>
					<button className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>
						Submit
					</button>
				</Form>
			</div>
		</div>
	);
}
