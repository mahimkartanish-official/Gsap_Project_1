import React from 'react'
import { openingHours, socials } from '../constants'

import footer_right_leaf from '../assets/footer-right-leaf.png'
import footer_left_leaf from '../assets/footer-left-leaf.png'

const Contact = () => {
  return (
    <footer id='contact'>
        <img src={footer_left_leaf} alt="leaf-right" id='f-right-leaf' />
        <img src={footer_right_leaf} alt="leaf-left" id='f-left-leaf' />

        <div className="content">
            <h2>Thank You</h2>

            <div>
                <h3>Hope you liked it</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur aspernatur dolorum doloribus recusandae distinctio tempore iure incidunt. Dolores explicabo aut quis, exercitationem ducimus adipisci consectetur quibusdam debitis optio iusto tempore.</p>
            </div>

            <div>
                <h3>Contact Us</h3>
                <p>+91 1234567890</p>
                <p>mahimkartanish@gmail.com</p>
            </div>

            {/* <div>
                <h3>Opening Hours</h3>
                {openingHours.map((time) => (
                    <p key={time.day}>
                        {time.day} : {time.time}
                    </p>
                ))}
            </div>

            <div>
                <h3>Social</h3>
                <div>
                    {socials.map}
                </div>
            </div> */}
        </div>


    </footer>
  )
}

export default Contact