import React from 'react'
import { featureLists, goodLists } from '../../constants'
import { Features } from 'tailwindcss'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Art = () => {

    const isMoblie =  useMediaQuery({maxWidth:767});
    useGSAP(() => {
        const start = isMoblie ? 'top 20%' :'top top';

        const maskedTimeline = gsap.timeline({
            scrollTrigger:{
                trigger:"#art",
                scrub:1.5,
                start,
                end:'bottom center',
                pin:true
            }
        })
        .to('.will-fade',{
            opacity:0,stagger:0.2,ease:'power1.inOut'
        })
        .to('.masked-img', {scale:1.3,maskPosition:'center',maskSize:'400%',duration:1.5,ease:'power1.inOut'
        })
        .to('.masked-content', {opacity:1,duration:1,ease:'power1.inOut'
        })
    })



  return (
    <div id='art'>
        <div className="container mx-auto h-full pt-20">
            <h2 className="will-fade">THE ART</h2>
            <div className="content">
                <ul className='space-y-4 will-fade'>
                    {goodLists.map((Features , index) => (
                        <li key={index} className='flex items-center gap-2'>
                            <img src="images/check.png" alt="check" />
                            <p>{Features}</p>
                        </li>
                    ))}
                </ul>
                

                <div className="cocktail-img">
                    <img 
                    src="/images/under-img.jpg" 
                    alt="" 
                    className='abs-center masked-img size-full object-contain' 
                    />
                </div>

                <ul className='space-y-4 will-fade'>
                    {featureLists.map((Features , index) => (
                        <li key={index} className='flex items-center justify-start gap-2'>
                            <img src="images/check.png" alt="check" />
                            <p className='md:w-fit w-60'>{Features}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="masked-container">
                <h2 className="will-fade">Sip-worthy perfection</h2>
                <div className="masked-content">
                    <h3>Crafted with Care Just for you</h3>
                    <p>this isn't just a drink it is speacialy made for you</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Art