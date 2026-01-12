import React from 'react'
import { openingHours, socials } from '../../constants'

const Contact = () => {
  return (
    <footer id='contact'>
        <img src="/images/footer-right-leaf.png" alt="leaf-right" id='f-right-leaf' />
        <img src="/images/footer-left-leaf.png" alt="leaf-left" id='f-left-leaf' />

        <div className="content">
            <h2>Where to find us</h2>

            <div>
                <h3>Visit Our Bar</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur aspernatur dolorum doloribus recusandae distinctio tempore iure incidunt. Dolores explicabo aut quis, exercitationem ducimus adipisci consectetur quibusdam debitis optio iusto tempore.</p>
            </div>

            <div>
                <h3>Contact Us</h3>
                <p>+91 1234567890</p>
                <p>mahimkartanish@gmail.com</p>
            </div>

            <div>
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
            </div>
        </div>


    </footer>
  )
}

export default Contact