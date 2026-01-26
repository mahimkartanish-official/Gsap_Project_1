import React from 'react'
import { cocktailLists, mockTailLists } from '../constants'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger,SplitText } from 'gsap/all'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'

import c_left_leaf from '../assets/cocktail-left-leaf.png'
import c_right_leaf from '../assets/cocktail-right-leaf.png'

gsap.registerPlugin(ScrollTrigger)

const Cocktails = () => {

    const isMobile = useMediaQuery({maxWidth:768});

    const fromVars1 = isMobile
      ? { x: -100, y:100 , rotate:45}
      : { x: -100, y: -500,ease:'power1.InOut' };
    
    const toVars1 = isMobile
      ? { x: -100, y:300, rotate: 10 }
      : { x: -50, y: 100, };
      
    const fromVars2 = isMobile
      ? {x:100,y:100,rotate:-45}
      : { x:100, y: 100, rotate: 10 };
    
    const toVars2 = isMobile
      ? {x:50,y:700,rotate:-10 , ease:'power1.inOut'}
      : { x:80, y:-10, rotate: 25 };
      
        
    useGSAP(() =>{
        const parallaxTimeLine = gsap.timeline({
            scrollTrigger:{
                trigger:'#cocktails',
                start:'top 30%',
                end:'bottom 80%',
                scrub:true,
            }
        })
        .fromTo('#c-left-leaf',fromVars1,toVars1)
        .fromTo('#c-right-leaf',fromVars2,toVars2)
    })

  return (
    <section id='cocktails' className='noisy'>
        <img src={c_left_leaf} alt="l-leaf" id='c-left-leaf' />
        <img src={c_right_leaf} alt="r-leaf" id='c-right-leaf'/>

        <div className="list">
            <div className="popular">
                {/* <h2>Most popular cocktails</h2> */}
                <ul>
                    {cocktailLists.map(({name ,country,detail,price}) => (
                        <li key={name}>
                            <div className='md:me-28'>
                                <h3>{name}</h3>
                                <p>{country} | {detail}</p>
                            </div>
                            <span>{price}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="Loved">
                <h2>Skills</h2>
                <ul>
                    {mockTailLists.map(({name ,country,detail,price}) => (
                        <li key={name}>
                            <div className='me-28'>
                                <h3>{name}</h3>
                                <p>{country} | {detail}</p>
                            </div>
                            <span>{price}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    </section>
  )
}

export default Cocktails