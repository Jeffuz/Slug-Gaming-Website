import React from 'react'

const About = () => {

  return (
    <div className='font-Montserrat'>
      <img src={require('../images/About Page/Banner.png')} alt='home-page-banner' loading="lazy" />
      <section id="History of the Program">
        <div className='min-[1100px]:px-[150px] px-[100px] flex-col justify-between align-middle py-[100px]'>
          <p className='text-[#00588F] text-[60px] pb-[50px] '>History of the Program</p>
          <div className='text-black text-[20px] leading-[30px] '>
            <p>
              Slug Gaming is UC Santa Cruz’s student run gaming organization. We believe that gaming has created an outlet to bring people together, and provides a space where background, skill, interest, and other aspects of life are not the driving force for the community. We strive to make gaming and esports bigger, from not only the collegiate level, but as a whole.
            </p>
            <p className='mt-[30px]'>
              Founder Andrew Cousins first developed the organization in hopes to unite the gaming community throughout UCSC. In order to unite gamers, Slug Gaming provides a welcoming and inclusive atmosphere for everyone no matter their background or skill level. Slug Gaming  host a variety of events and social gathers for games such as League of Legends, Overwatch, Hearthstone, etc. For those with a competitive drive Slug Gaming offers students a chance to compete with not  only each other, but against other universities. Slug Gaming continues to grow each year, and will eventually be the gamers home to not only UCSC but Santa Cruz.
            </p>
          </div>
        </div>
      </section>
      <div className='flex justify-center mt-[-20px] px-[100px] min-[1100px]:px-[150px]'>
        <iframe src="https://calendar.google.com/calendar/embed?src=ucscesportsclub%40gmail.com&ctz=America%2FLos_Angeles" width="100%" height="800"></iframe>
      </div>
      <section id="Additional Info">
        <div className='min-[1100px]:px-[150px] px-[100px] flex-col justify-between align-middle py-[75px]'>
          <p className='text-[#00588F] text-[60px] pb-[40px] '>Additional Info</p>
          <div className='text-black text-[20px] leading-[25px] '>
            <h1 className='text-[25px] pb-[20px]'>
              How often does your student organization meet?
            </h1>
            <p className='text-[20px] pb-[40px]'>
              We host one in-person general meeting per quarter as the majority of our information is delivered online through Discord.
            </p>
            <h1 className='text-[25px] pb-[20px]'>
              What day and time does your student organization generally meet?
            </h1>
            <p className='text-[20px]'>
              Check our socials for in-houses, watch parties, game nights, and more!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About