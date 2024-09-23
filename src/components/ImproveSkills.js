export default function ImproveSkills(){
const list = [
    "Learn new recipes",
    "Experiment with food",
    "Write your own recipes",
    "Know nutrition facts",
    "Get cooking tips",
    "Get ranked"
]

    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src="https://i.imgur.com/TexWg3g.jpeg" alt="" />
                </div>
            <div className="col typography">
                <h1 className="title">Improve Your Culinary Skills</h1>
                    { list.map((item, index) => (
                        <p className="skill-item" key={index}>{item}</p>
                    )) }
                    <button className="btn">Sign Up Now</button>
               
            </div>
            
        </div>
    )
}