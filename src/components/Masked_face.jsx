import React, { useEffect } from 'react'

import masked_img from '../assets/male0050.png'
import black_h from '../assets/black_helmet.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


gsap.registerPlugin(ScrollTrigger);

function Masked_face() {

    useEffect(() =>{
        const handlemouse = (event) => {
            const {clX,clY} = event;
            gsap.to('#cursor',{
                x:clX - 20/2,
                y:clY - 20/2,
            })
        };

        window.addEventListener('mousemove',handlemouse);

        return () => {
            window.removeEventListener('mousemove',handlemouse);
        }
    },[])

    gsap.timeline({
        scrollTrigger:{
            trigger:'#masked-person',
            start:'center bottom',
            end:'bottom bottom',
            ease:'power1.in',
            scrub:true
        }}).fromTo('#Title',{opacity:0,x:'-100px'},{opacity:1 ,x:'50px'})

  return (
    <div id='masked_person'>
        <div id="cursor" className='absolute h-5 w-5 bg-white rounded-full z-10 pointter-event-none'/>
        
        <div id='Title'>
            <h4 className='text-4xl'>Hi</h4>
            <h3 className='text-5xl'>This is,</h3>
            <h2 className='text-7xl'>Tanish Mahimkar</h2>
        </div>
        <div id='div-left'>
            
            <h2 className='text-7xl'>#Tanish Mahimkar#</h2>
        </div>
        <div id='div-right'>
            
            <h2 className='text-7xl'>#Tanish Mahimkar#</h2>
        </div>

        <div className="">
            <img src={masked_img} alt="" className=' abs-center img_person'
            />
            <img src={black_h} alt="" id='b-helmet'className='abs-center helmet-img  '
            />
            <div className="">
                <img 
                src={black_h} 
                alt="" 
                id='mask-b-helmet'
                className='helmet-img-hover mix-blend-difference opacity-0'
                onMouseEnter={()=>{gsap.to('#b-helmet',{opacity:0 , ease:'power1.in'}),gsap.to('#mask-b-helmet',{opacity:1})}}
                onMouseLeave={()=>{gsap.to('#b-helmet',{opacity:1 , ease:'power1.in'},gsap.to('#mask-b-helmet',{opacity:0}))}}
                />

            </div>
        </div>
    </div>
  )
}

export default Masked_face