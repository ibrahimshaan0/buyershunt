import React from 'react'
import Article from './Article'

const date = new Date();

const articles = [
    {
        id: 1,
        img: '/assets/images/ComputerAccesories.jpg',
        title: 'New 5000 Series launched by Nvidia',
        category: 'Latest News',
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        shortDescription: 'Nvidia has launched its new 5000 series graphics card. The new series is said to be the most powerful series of graphics card ever launched by Nvidia.'
    },
    {
        id: 2,
        img: '/assets/images/ComputerAccesories.jpg',
        title: 'Article 2',
        category: 'Category 2',
        date: '2022-02-23',
        shortDescription: 'Nvidia has launched its new 5000 series graphics card. The new series is said to be the most powerful series of graphics card ever launched by Nvidia.'
    },
    {
        id: 3,
        img: '/assets/images/ComputerAccesories.jpg',
        title: 'Article 3',
        category: 'Category 3',
        date: '2022-02-24',
        shortDescription: 'Nvidia has launched its new 5000 series graphics card. The new series is said to be the most powerful series of graphics card ever launched by Nvidia.'
    },
    {
        id: 4,
        img: '/assets/images/phones-n-tablets.jpg',
        title: 'Article 4',
        category: 'Category 4',
        date: '2022-02-24',
        shortDescription: 'Nvidia has launched its new 5000 series graphics card. The new series is said to be the most powerful series of graphics card ever launched by Nvidia.'
    }
]

function OurArticles() {
    return (
        <div>
            <h2 className="text-center text-4xl font-bold my-12">Our Recent Blogs and Articles</h2>
            <div className="flex flex-row justify-center flex-wrap gap-8">
                {
                    articles.map((article, index) => (
                        <Article article={article} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default OurArticles