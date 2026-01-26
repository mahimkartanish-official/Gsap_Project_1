'use client'
import React, { useState } from 'react'
import { sliderLists } from '../constants'
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';
import { useRef } from 'react';

import slider_left_leaf from '../assets/slider-left-leaf.png'
import slider_right_leaf from '../assets/slider-right-leaf.png'
import right_arrow from '../assets/right-arrow.png'
import left_arrow from '../assets/left-arrow.png'
// import drink1 from '../assets/drink1.png'
// import drink2 from '../assets/drink2.png'
// import drink3 from '../assets/drink3.png'
// import drink4 from '../assets/drink4.png'


const Menu = () => {

    const contentRef = useRef();

    const [currentIndex,setCurrentIndex] = useState(0);

    useGSAP(() =>{      
        
        gsap.fromTo('#title',{opacity:0},{opacity:1,duration:1})
        gsap.fromTo('.cocktail img',{opacity:0,xPercent:-100},{opacity:1,xPercent:0,duration:1,ease:'power1.inOut'})
        gsap.fromTo('.details h2',{opacity:0,yPercent:-100},{opacity:1,yPercent:0,duration:1,ease:'power1.inOut'})
        gsap.fromTo('.details p',{opacity:0,yPercent:-100},{opacity:1,yPercent:0,duration:1,ease:'power1.inOut'})

        
    },[currentIndex]);

    

    useGSAP(() =>{

        const menuTimeline = gsap.timeline({
            
            scrollTrigger:{
                trigger:'#menu',
                start:'top 40%',
                end:'top 95%',
                scrub:1.5
                
            }
        })
        menuTimeline.from('.cocktail-tabs button',{
            opacity:0,stagger:{amount:1},duration:3
        })
        .to('#m-right-leaf',{y:100 , ease:'power1.inOut'})
        
    })




    

    const totalCocktails = sliderLists.length
    const goToSlide = (index)=>{
        const newIndex = (index+totalCocktails)%totalCocktails;
        setCurrentIndex(newIndex);
    }

    const getCocktailAt = (indexOffset) => {
        return sliderLists[(currentIndex+indexOffset+totalCocktails)%totalCocktails]
    }

    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);

    


  return (
    <section id='menu' aria-labelledby='menu-heading'>
        <img src={slider_left_leaf} alt="left-leaf" id='m-left-leaf' />
        <img src={slider_right_leaf} alt="right-leaf" id='m-right-leaf' />

        <h2 id="menu-heading" className="sr-only">
            Cocktail
        </h2>
        <nav className='cocktail-tabs' aria-label='Cocktail Navigation'>
            {sliderLists.map((cocktail,index) => {
                const isActive = index === currentIndex;

                return(
                    <button 
                    key={cocktail.id}
                    className={`${isActive?'text-white border-white': 'text-white/50 border-white/50'}`}
                    onClick={() => goToSlide(index)}
                    >
                        {cocktail.name}
                    </button>
                )
            })}
        </nav>

        <div className="content">
            <div className="arrows">
                <button className="text-left" onClick={() => goToSlide(currentIndex-1)}>
                    <span>{prevCocktail.name}</span>
                    <img src={right_arrow} alt="right-arrow" aria-hidden='true' />
                </button>
                <button className="text-right" onClick={() => goToSlide(currentIndex+1)}>
                    <span>{nextCocktail.name}</span>
                    <img src={left_arrow} alt="left-arrow" aria-hidden='true' />
                </button>
            </div>
            <div className="cocktail">
                <img src={currentCocktail.image} alt="" className='object-contain'/>
            </div>
            <div className="recipe" >
                <div ref={contentRef} className='info'>
                    <p>Recipe for:</p>
                    <p id='title'>{currentCocktail.name}</p>
                </div>
                <div className="details">
                    <h2>{currentCocktail.name}</h2>
                    <p>{currentCocktail.description}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menu