import React from 'react'

function Categories()  {
    const categoriesItems = [
        { id: 1, title: 'Main Dish', desc:"(86 Dishes)", img:"/images/home/categories/img1.png"},
        { id: 1, title: 'Break Fast', desc:"(12 break fasts)", img:"/images/home/categories/img2.png"},
        { id: 1, title: 'Dessert', desc:"(48 desserts)", img:"/images/home/categories/img3.png"},
        { id: 1, title: 'Browse All', desc:"(255 Items)", img:"/images/home/categories/img4.png"}
    ]

  return (
    <div className='section-container py-16'>
        <div className='text-center'>
            <p className='subtitle'>Customers Favourites</p>
            <h2 className='title'>Popular Categories</h2>
        </div>

        {/* categorie card */}
        <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12'>
            {
                categoriesItems.map((item, index) => [
                    <div key={index} className='shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center
                    cursor-pointer hover:-translate-y-4 duration-300 transition-all'>
                        <div className='flex w-full mx-auto items-center justify-center'>
                        <img src={item.img} alt={`${item.title} image`}  className='bg-[#c1f1c6] p-5 rounded-full w-28 h-28'/>
                        </div>
                        <div className='mt-5 space-y-1'>
                            <h5>{item.title}</h5>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ])
            }
        </div>
    </div>
  )
}

export default Categories