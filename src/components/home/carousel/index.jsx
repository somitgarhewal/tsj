import React from 'react'
import OwlCarousel from 'react-owl-carousel';

import './carousel.scss'
import { testimonialData } from '../../../utilsData/testimonialData';

const Carousel = () => {

    return (
        <OwlCarousel
            autoplay={true}
            autoplayTimeout={3000}
            autoplayHoverPause={true}
            items={5}
            stagePadding={20}
            center={true}
            nav={false}
            margin={50}
            dots={true}
            loop={true}
            className='pt-5'
        >
            {/* <div class="card">
                <div class="img-card"> <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /> </div>
                <div class="testimonial mt-4 mb-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita dicta doloremque odit saepe quo natus aut accusantium alias blanditiis. </div>
                <div class="name"> Denis Richie </div>
            </div>
            <div class="card">
                <div class="img-card"> <img src="https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" /> </div>
                <div class="testimonial mt-4 mb-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita dicta doloremque odit saepe quo natus aut accusantium alias blanditiis. </div>
                <div class="name"> Lisa Sthalekar </div>
            </div>
            <div class="card">
                <div class="img-card"> <img src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /> </div>
                <div class="testimonial mt-4 mb-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita dicta doloremque odit saepe quo natus aut accusantium alias blanditiis. </div>
                <div class="name"> Elizabith Richie </div>
            </div>
            <div class="card">
                <div class="img-card"> <img src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /> </div>
                <div class="testimonial mt-4 mb-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita dicta doloremque odit saepe quo natus aut accusantium alias blanditiis. </div>
                <div class="name"> Daniel Xavier </div>
            </div>
            <div class="card">
                <div class="img-card"> <img src="https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /> </div>
                <div class="testimonial mt-4 mb-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita dicta doloremque odit saepe quo natus aut accusantium alias blanditiis. </div>
                <div class="name"> Emma Watson </div>
            </div>
            <div class="card">
                <div class="img-card"> <img src="https://images.pexels.com/photos/718261/pexels-photo-718261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" /> </div>
                <div class="testimonial mt-4 mb-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita dicta doloremque odit saepe quo natus aut accusantium alias blanditiis. </div>
                <div class="name"> Mohammad Imran </div>
            </div> */}
            {testimonialData.map(item => {
                return <div class="card">
                    <div class="img-card"> <img src={item.image} alt="" /> </div>
                    <div class=" mt-4 ">
                        {item.text.map(ele => {
                            return <div class="testimonial mb-2"> {ele} </div>
                        })}
                    </div >
                    <div class="name"> {item.name} </div>
                </div>
            })}
        </OwlCarousel>


    )
}
export default Carousel