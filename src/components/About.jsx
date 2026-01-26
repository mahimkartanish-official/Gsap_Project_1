import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

import abt1 from '../assets/abt1.png'
import abt2 from '../assets/abt2.png'
import abt3 from '../assets/abt3.png'
import abt4 from '../assets/abt4.png'
import abt5 from '../assets/abt5.png'

const About = () => {

    useGSAP(() => {
        const titleSplit = SplitText.create('#about h2',{
            type:'words'
        })

        gsap.timeline({
            scrollTrigger:{
                trigger:'#about',
                start:'top center'
            }
        })
        .from(titleSplit.words,{
            opacity:0,duration:1,yPercent:100,ease:'expo.out',stagger:0.02
        })
        .from('.top-grid div, .bottom-grid div',{
            opacity:0,duration:1,ease:'power1.inOut',stagger:0.04
        },'-=0.5')
    })


  return (
    <div id='about' className='z-30'>
        <div className='mb-16 md:px-0 px-5'>
            <div className="content">
                <div className='md:col-span-8'>
                    <p className="badge" >This is me</p>
                    <h2>
                        WHere every detail matters- from muddle to granish
                    </h2>
                </div>

                <div className='sub-content'>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia facere ut ex suscipit, reiciendis odit illum, numquam nulla alias, dolore molestias. In sint delectus sequi maxime fuga non reprehenderit error.
                    </p>
                    <div>
                        <p className='md:text-3xl text-xl font-bold'>
                            <span>5</span>/5
                        </p>
                        <p className='text-sm text-white-100'>
                            More than +12000 customers
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="top-grid">
            <div className="col-span-3">
                <div className="noisy"/>
                <img src={abt1} alt="grid-img-1" />
            </div>

            <div className="col-span-6">
                <div className="noisy"/>
                <img src={abt2} alt="grid-img-2" />
            </div>

            <div className="col-span-3">
                <div className="noisy"/>
                <img src={abt5} alt="grid-img-5" />
            </div>
        </div>

        <div className="bottom-grid">
            <div className="col-span-8">
                <div className="noisy"/>
                <img src={abt3} alt="grid-img-3" />
            </div>
            <div className="col-span-4">
                <div className="noisy"/>
                <img src={abt4} alt="grid-img-4" />
            </div>
        </div>

    </div>
  )
}

export default About