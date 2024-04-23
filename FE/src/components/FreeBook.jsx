import React, { useEffect, useState } from 'react'
// import list from '../data/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
const FreeBook = () => {
  const[book,setBook]=useState([]);

  useEffect(()=>{
    const getBook = async()=>{
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data =res.data.filter((data)=>data.tag==="Free")
        setBook(data);
        
      } catch (error) {
        console.log("Error on fetching data at Freebook.js" + error);
      }
    }
    getBook();
  },[])
    
    // console.log(filterData);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (

    <>
      <div> 

       <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className='font-ibold text-xl pb-2'>Free Offered Courses</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit esse fugiat explicabo similique ducimus ratione reprehenderit est, aspernatur nostrum itaque! Necessitatibus consequatur impedit quia blanditiis iusto, inventore cupiditate quaerat maxime numquam officiis!</p>
        </div>

        <div>
        <Slider {...settings}>
          {book.map((items)=>(
            <Cards items={items} key={items.id}/>
          ))}
      </Slider>
        </div>
         
        </div>
      </div> 
    </>
  )
}

export default FreeBook;
