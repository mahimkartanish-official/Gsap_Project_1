import { useGSAP } from '@gsap/react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

import heroLeaf_l from '../assets/hero-left-leaf.png'
import heroLeaf_r from '../assets/hero-right-leaf.png'
import main_video from '../assets/final_output.mp4'

gsap.registerPlugin(ScrollTrigger,SplitText);

const HeroSection = () => {

    const videoRef = useRef();
    const isMobile = useMediaQuery({maxWidth:767})

    useGSAP(() =>{
        const heroSplit = new SplitText('.title',{type:'chars , words'});
        const paraSplit = new SplitText('.subtitle',{type:'lines'});

        heroSplit.chars.forEach((chars) => chars.classList.add('text-gradient'));

        gsap.from(heroSplit.chars,{
            yPercent:100,
            opacity:0,
            duration:1,
            ease:'expo.out',
            stagger:0.05            
        })

        gsap.from(paraSplit.lines,{
            opacity:0,
            yPercent:100,
            duration:1,
            ease:'expo.out',
            stagger:0.06,
            delay:0.5
        })

        gsap.timeline({
            scrollTrigger:{
                trigger:'#hero',
                start:'top top',
                end:'bottom top',
                scrub:true
            }
        })
        .to('.right-leaf',{y:200},0)
        .to('.left-leaf',{y:-200},0)

        const starValue = isMobile? 'top 50%':'bottom 100%';
        const endValue = isMobile? '120 top':'bottom top';

        const tl = gsap.timeline({
            scrollTrigger:{
                // trigger:'video',
                // start:starValue,
                // end:endValue,
                trigger: 'video',
                start: 'top top',
                end: () => document.body.scrollHeight - window.innerHeight,
                scrub:true,
                pin:true,
            }
            
        })

        videoRef.current.onloadedmetadata = () =>{
            const video = videoRef.current;
            const d = video.duration

            tl.to(video,{
                currentTime:d*0.25,
                translateX:'400px'
            })
            tl.to(video,{
                currentTime:d*0.33,
                translateX:'-100px'
            })
            tl.to(video,{
                currentTime:d*0.66,
                translateX:'100px'
            })
            tl.to(video,{
                currentTime:d*100,
                translateX:'700px'
            })
        }



    },[])



  return (
    <>
        <section id='hero' className='noisy'>
            <h1 className='title '>Tanish</h1>
            <h1 className='title hidden md:block text-8xl -translate-y-50 translate-x-100' >Mahimkar</h1>

            <img src={heroLeaf_l} alt="left-left" className='left-leaf' />

            <img src={heroLeaf_r} alt="right-leaf" className='right-leaf' />


            <div className='body'>
                <div className='content '>

                    <div className='space-y-5 hidden md:block'>
                        <p>Cool. Crisp. Classic</p>
                        <p className='subtitle'>
                            sip of Spirit <br /> and Tools
                        </p>
                    </div>

                    {/* <div className='view-cocktails'>
                        <p className='subtitle'>
                            Every cocktails on our menu is a blend of premium ingredents,creative,flair, and timeless recepices - designed to delight your senses.
                        </p>
                        <a href="#cocktails">View cocktails</a>
                    </div> */}

                </div>
            </div>


        </section>

        {/* <div className='noisy rounded-2xl'/>  */}
        <div className='video absolute inset-0 '>
            <video ref={videoRef} src={main_video} muted playsInline preload='auto' className='rounded-2xl'></video>

        </div>
    </>
  )
}

export default HeroSection