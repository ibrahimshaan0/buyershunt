import React from 'react'
import TopCategory from './TopCategory'

function PopularCategories() {

    const topCategories = [
        {
            id: 1,
            name: 'Computers & Accessories',
            image: '/assets/images/ComputerAccesories.jpg',
            stockCount: 100
        },
        {
            id: 2,
            name: 'Notebook & Laptops',
            image: '/assets/images/Laptop.jpg',
            stockCount: 50
        },
        {
            id: 3,
            name: 'Small Accessories',
            image: '/assets/images/accesories.jpg',
            stockCount: 150
        },
        {
            id: 4,
            name: 'Phones & Tablets',
            image: '/assets/images/phones-n-tablets.jpg',
            stockCount: 200
        },
        {
            id: 5,
            name: 'Gadgets & Gaming',
            image: '/assets/images/consoleJoystick.jpg',
            stockCount: 300
        }
    ]

    return (
        <div className='w-[100%] mx-auto py-[100px] bg-[#F7F8FA] my-[30px]'>
            <h2 className="text-4xl font-bold my-12 md:mt-[100px] lg:mt-[150px] xl:mt-[150px] text-center">
                Popular Categories
            </h2>
            <div className="flex flex-row justify-center flex-wrap gap-4 px-4">
                {topCategories.map((category) => (
                    <TopCategory key={category.id} category={category} />
                ))}
            </div>
        </div>
    )
}

export default PopularCategories