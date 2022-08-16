import React from 'react'
import Link from 'next/link';

export default function NavItem({_text,_link}) {
  return (
    <div className='hover:text-blue-500'><Link href={_link}><a>{_text}</a></Link></div>
  )
}
