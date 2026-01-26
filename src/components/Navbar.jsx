import React from 'react'
import { navLinks } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {

    useGSAP(() =>{
        const tween_Nav = gsap.timeline({
            scrollTrigger:{
                trigger:'nav',
                start:'bottom top'//elementpos viewportpos
            }
        });
        
        tween_Nav.fromTo('nav',
            {backgroundColor:'transparent'},
            {
                backgroundColor:'#00000020',
                duration:1,
                ease:'power1.inOut'
            }
        )
    })


  return (
    <nav className='gradient-nav'>
        <div>
            <a href="#home" className='flex items-center gap-2'>
                <img src="/images/logo.png" alt="" />
                <p>Portfolio</p>
            </a>


            <ul>
                {navLinks.map((Links)=>(
                    <li key={Links.id}><a href={Links.links}>{Links.title}</a></li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar