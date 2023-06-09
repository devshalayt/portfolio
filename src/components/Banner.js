import React from 'react'
import {AiFillGithub,AiFillInstagram,AiOutlineTwitter} from "react-icons/ai"
function Banner() {
  return (
    <header>
        <img src="https://images.pexels.com/photos/16105561/pexels-photo-16105561.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="banner" />
        <div className="overlay"></div>
        <div className="container">
            <div className="inner-content">
                <img src="https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" />
                <div className="personal-info">
                    <h1>John Doe</h1>
                    <p>Frontend Developer, UI/UX Designer</p>
                    <div className="bio">
                        <div className="row">
                            <div className="info">Age</div>
                            <div className="detail">23Yr</div>
                            <div className="info">Phone</div>
                            <div className="detail">+91982299392032</div>
                            <div className="info">Email</div>
                            <div className="detail">devshalayt@gmail.com</div>
                            <div className="info">Address</div>
                            <div className="detail">1st Floor, A-33 Rajouri Garden, Ring Road, Opp. Flyover</div>
                        </div>
                    </div>
                    <div className="social">
                        <div className="links">
                            <a href="#!">
                                <AiFillGithub />
                            </a>
                        </div>
                        <div className="links">
                        <a href="#!">
                            <AiFillInstagram />
                        </a>
                        </div>
                        <div className="links">
                        <a href="#!">
                            <AiOutlineTwitter />
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Banner
