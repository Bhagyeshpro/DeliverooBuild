import { ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingLeft: 15,
                // paddingTop: 5,
            }}
        >
            <CategoryCard
                imgURL="https://media.istockphoto.com/id/117461345/photo/red-velvet-cake.jpg?s=612x612&w=0&k=20&c=GHtlTor5UmUMGIYU0iz4zXAyD4OS4J2BYo8EkVfrkds="
                title="Cakes"
            />
            <CategoryCard
                imgURL="https://media.istockphoto.com/id/117461345/photo/red-velvet-cake.jpg?s=612x612&w=0&k=20&c=GHtlTor5UmUMGIYU0iz4zXAyD4OS4J2BYo8EkVfrkds="
                title="Cakes"
            />
            <CategoryCard
                imgURL="https://media.istockphoto.com/id/117461345/photo/red-velvet-cake.jpg?s=612x612&w=0&k=20&c=GHtlTor5UmUMGIYU0iz4zXAyD4OS4J2BYo8EkVfrkds="
                title="Cakes"
            />
            <CategoryCard
                imgURL="https://media.istockphoto.com/id/117461345/photo/red-velvet-cake.jpg?s=612x612&w=0&k=20&c=GHtlTor5UmUMGIYU0iz4zXAyD4OS4J2BYo8EkVfrkds="
                title="Cakes"
            />
            <CategoryCard
                imgURL="https://media.istockphoto.com/id/117461345/photo/red-velvet-cake.jpg?s=612x612&w=0&k=20&c=GHtlTor5UmUMGIYU0iz4zXAyD4OS4J2BYo8EkVfrkds="
                title="Cakes"
            />
            <CategoryCard
                imgURL="https://media.istockphoto.com/id/117461345/photo/red-velvet-cake.jpg?s=612x612&w=0&k=20&c=GHtlTor5UmUMGIYU0iz4zXAyD4OS4J2BYo8EkVfrkds="
                title="Cakes"
            />
            <CategoryCard
                imgURL="https://media.istockphoto.com/id/117461345/photo/red-velvet-cake.jpg?s=612x612&w=0&k=20&c=GHtlTor5UmUMGIYU0iz4zXAyD4OS4J2BYo8EkVfrkds="
                title="Cakes"
            />
        </ScrollView>
    )
}

export default Categories