import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Tyrone Tong, nice to meet you.</p>
            </div>
            <div>
              <p>I am a Computer Science Graduate that attended the University of California – Irvine. I specialize in software development having knowledge in many data structures and applcation development. 
                I currently have 1.3 years of experience as a NOC Technician and 6 months as an Information Technology Help Desk Technician.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
