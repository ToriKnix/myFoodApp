import PreviousSearches from "../PreviousSearches"
import RecipeCard from "../RecipeCard"

export default function Recipes(){
    
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/foods/img_1.jpg.jpg",
            authorImg: "/foods/top-chefs/Chef1.jpg",
        },
        {
            title: "Spaghetti and Meatballs",
            image: "/foods/img_2.jpg.jpg",
            authorImg: "/foods/top-chefs/Chef2.jpg",
        },
        {
            title: "Cheesburger and Fries",
            image: "/foods/img_3.jpg.jpg",
            authorImg: "/foods/top-chefs/Chef3.jpg",            
        },
        {
            title: "Chicken Fajitas",
            image: "/foods/img_4.jpg.jpg",
            authorImg: "/foods/top-chefs/Chef4.jpg",
        },
        {
            title: "Chicken Tikka Masala",
            image: "/foods/img_5.jpg.jpg",
            authorImg: "/foods/top-chefs/Chef5.jpg",
        },
        {
            title: "Tortellini",
            image: "/foods/img_6.jpg.jpg",
            authorImg: "/foods/top-chefs/Chef6.jpg",
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container"> 
               {/* < RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe ={recipe} />
                ))}
            </div>
        </div>
    )
}