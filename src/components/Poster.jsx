import React from 'react'

const Poster = () => {
    const poster = [
      {
        img : "https://i.pinimg.com/736x/62/4d/44/624d44815802ec1e3dfa53ec720ddeeb.jpg",
        title: "The Joker",
        date: "02-14-2022",
      },
      {
        img : "https://i.pinimg.com/564x/0d/dd/80/0ddd800105a5c6e1bdeb70b9dbdfa103.jpg",
        title: "BIG SKY Season2",
        date: "07-23-2020",
      },
      {
        img : "https://i.pinimg.com/564x/f5/5f/c6/f55fc693eb82334dc1a6d60a3e53f480.jpg",
        title: "THose Who Wish Me Dead",
        date: "08-19-2019",
      },
      {
        img : "https://i.pinimg.com/564x/0c/5f/cf/0c5fcf90ef221dda290f0f4fc6654119.jpg",
        title: "Night Teeth ",
        date: "02-14-2022",
      },
      {
        img : "https://i.pinimg.com/564x/b0/63/f1/b063f1959325e16f6fab11dd3c0bdd3a.jpg",
        title: "Vacation",
        date: "05-22-2015",
      },
      {
        img : "https://i.pinimg.com/564x/25/70/ae/2570ae23ce668f7618909f10f9f25134.jpg",
        title: "Kill Night and Day",
        date: "01-10-2018",
      },
      {
        img : "https://i.pinimg.com/736x/67/90/f6/6790f6607283c3d875a13ea4b8df4d26.jpg",
        title: "Midnight Sun",
        date: "06-22-2017",
      },
      {
        img : "https://i.pinimg.com/564x/e3/ca/2b/e3ca2bb3167104e4871557a1631b458f.jpg",
        title: "Bitch X Rich",
        date: "12-11-2019",
      },
      {
        img : "https://i.pinimg.com/564x/dd/7f/35/dd7f3597e5029cb6640366ac837e3dce.jpg",
        title: "One Week Friends",
        date: "04-20-2020",
      },
      {
        img : "https://i.pinimg.com/564x/2c/10/be/2c10be71926a054549428afb3988698f.jpg",
        title: "Our Secret",
        date: "10-12-2021",
      },
      {
        img : "https://i.pinimg.com/564x/72/b7/c1/72b7c1944e8824af36018168d4d147db.jpg",
        title: "F4 Thailand",
        date: "02-11-2020",
      },
      {
        img : "https://i.pinimg.com/564x/af/ed/c1/afedc1444ded488febc3faa1430b8b40.jpg",
        title: "Dark Blue Kiss",
        date: "08-08-2018",
      },
    ];
  return (
    <div className='bg-slate-900'>
      <h1 className='lg:ml-[50px] ml-[90px] font-bold text-white text-xl'>Our Movie Posters</h1> <br />
      <div className='grid lg:grid-cols-6 grid-cols-2 h-auto gap-x-2 bg-slate-900'>
      {poster.map((item,index) => {
        return(
          <div className='w-full  lg:grid-cols-6'>
            <img className='w-[200px] h-[35vh] m-auto rounded-[5px] border-orange-500 border-2' src={item.img} alt="" />
             <h1 className='ml-[25px] text-xl text-white font-bold'>{item.title}</h1>
             <span className='ml-[30px] text-xl text-white'>{item.date}</span>
          </div>
        );
      })}
      </div>
    </div>
  )
}

export default Poster