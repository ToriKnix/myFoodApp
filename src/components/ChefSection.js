import ChefCard from "./ChefCard";

export default function(){
    const chefs = [
        {
            name: "Juan Carlos",
            img: "/foods/top-chefs/Chef1.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "John Doe",
            img: "/foods/top-chefs/Chef2.jpg",
            recipesCount: "05",
            cuisine: "Japanese",
        },
        {
            name: "Erich Maria",
            img: "/foods/top-chefs/Chef3.jpg",
            recipesCount: "13",
            cuisine: "Italian",
        },
        {
            name: "Chris Brown",
            img: "/foods/top-chefs/Chef4.jpg",
            recipesCount: "12",
            cuisine: "Soul-Food",
        },
        {
            name: "Maria Rodriguez",
            img: "/foods/top-chefs/Chef5.jpg",
            recipesCount: "15",
            cuisine: "Spanish",
        },
        {
            name: "Juan Carlin",
            img: "/foods/top-chefs/Chef6.jpg",
            recipesCount: "10",
            cuisine: "Mongolian",
        }
    ];

    return (
        <div className="section chefs">
            <h1 className="title">Our Top Chefs</h1>
            <div className="top-chefs-container">
                {chefs.map(chef => (
                    <ChefCard 
                        key={chef.name} 
                        chef={chef} 
                    />
                ))}
            </div>
        </div>
    );
}
