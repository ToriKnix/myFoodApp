import Customimage from "./Customimage";

export default function HeroSection(){

    const images = [
        "https://i.imgur.com/qqwAlYt.jpeg",
        "https://i.imgur.com/yQifnVs.jpeg",
        "https://i.imgur.com/XC34KfK.jpeg",
        "https://i.imgur.com/smMy0jU.jpeg",
        "https://i.imgur.com/SpwbIfs.jpeg",
        "https://i.imgur.com/PtWj6a3.jpeg",
        "https://i.imgur.com/3pkB4Z6.jpeg",
        "https://i.imgur.com/WVENzEG.jpeg",
        "https://i.imgur.com/8tDqfHM.jpeg"
    ];

    return(
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">
                    What Are We About?
                </h1>
                <p className="info">
                    FoodiesHub is a place where you can please your soul
                    and tummy with delicious food recipes of all cuisine.
                    And our service is absolutely free. So start exploring now.
                    <button className="btn">explore now</button>
                </p>
            </div>
            <div className="col gallery">
                { images.map((src, index) => (

                    <Customimage key={index} imgSrc={src} pt={"90%"}  />
                )) }
            </div>
        </div>
    )
}