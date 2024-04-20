import React from 'react'
import list from '../data/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
const FreeBook = (items) => {
    const filterData = list.filter((data)=>data.tag==="Free")
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
          {filterData.map((items)=>(
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
