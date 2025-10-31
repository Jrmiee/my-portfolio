import React from 'react'
import Link from 'next/link'

const horizontal = () => {



return (
    <div className='overflow-hidden w-screen pt-40 -mt-40'>
       <section className='flex flex-nowrap gap-5 px-3'>

<Link href='/' className='w-[480px]'>
  
  <img className='rounded-[10px] object-cover ' 
  src="project1.jpg" 
  alt="" />
</Link>
<Link href='/' className='w-[480px]'>
<img className='rounded-[10px] object-cover ' src="project2.jpg" alt="" />
</Link>
<Link href='/' className='w-[480px]'>
<img className='rounded-[10px] object-cover ' src="projects3.jpg" alt="" />
</Link>

<Link href='/' className='w-[480px]'>
<img className='rounded-[10px] object-cover' src="projects4.jpg" alt="" />
</Link>

<Link href='/' className='w-[480px] hidden 2xl:block'>
  
  <img className='rounded-[10px] object-cover ' 
  src="project1.jpg" 
  alt="" />
</Link>

<Link href='/' className='w-[480px] hidden 2xl:block'>
<img className='rounded-[10px] object-cover ' src="project2.jpg" alt="" />
</Link>

<Link href='/' className='w-[380px] hidden 2xl:block'>
<img className='rounded-[10px] object-cover ' src="projects4.jpg" alt="" />
</Link>
</section>




      </div>

  )
}


export default horizontal
