import React from 'react'
const Nav = () => {
  return (
    <>
    
    <nav className='fixed z-50  flex items-center justify-center px-10 py-5 bottom-0 mb-10 left-1/2 -translate-x-1/2 w-2/4 h-20 bg-black rounded-2xl'>

      <div className='text-white uppercase text-[20px] flex items-center font-bold space-x-2.5 gap-5'>
          
          <a href="/">Accueil</a>
          <span></span>
          <a href="/">cv</a>
          <span></span>
          <a href="/projet">Projets</a>
          <span></span>
          <a href="/">ME CONTACTER</a>

      </div>

      <div>

        <a href="">menu</a>

      </div>

    </nav>

    </>
  )
}

export default Nav
