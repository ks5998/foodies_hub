import RecipesCard from "../COMPONENTS/RecipesCard";
import RecipesSearch from "../COMPONENTS/RecipesSearch";


export default function Recipes(){

    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/images/gallery/img_1.jpg",
            authorImg: "/images/chiefs/img_1.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/images/gallery/img_4.jpg",
            authorImg: "/images/chiefs/img_2.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/images/gallery/img_5.jpg",
            authorImg: "/images/chiefs/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/images/gallery/img_6.jpg",
            authorImg: "/images/chiefs/img_5.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/images/gallery/img_10.jpg",
            authorImg: "/images/chiefs/img_6.jpg",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/images/gallery/img_1.jpg",
            authorImg: "/images/chiefs/img_1.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/images/gallery/img_4.jpg",
            authorImg: "/images/chiefs/img_2.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/images/gallery/img_5.jpg",
            authorImg: "/images/chiefs/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/images/gallery/img_6.jpg",
            authorImg: "/images/chiefs/img_5.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/images/gallery/img_10.jpg",
            authorImg: "/images/chiefs/img_6.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/images/gallery/img_5.jpg",
            authorImg: "/images/chiefs/img_3.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/images/gallery/img_6.jpg",
            authorImg: "/images/chiefs/img_5.jpg",
        }
    ]

    return(
        <>
        <RecipesSearch />
        <div className="recipes-container">
            {
                recipes.map((recipe, i) => (
                    <RecipesCard key={i} recipe={recipe} />
                ))
            }
        </div>
        </>
    )
}