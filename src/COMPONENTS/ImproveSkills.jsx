export default function ImproveSkills(){

    const list = [
        "learn new recepies",
        "experiment with food",
        "create your new recepies",
        "know the nutritional facts",
        "get cooking tips",
        "get ranked"
    ]
    return(
        <>
        <div className="section improve-skills">
            <div className="col img">
                <img src="/images/gallery/img_10.jpg" alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">Improve your culinary skills</h1>
                {
                    list.map((item) => (
                        <p key={item.length} className="skill-item">{item}</p>
                    ))
                }
                <button className="btn">signup now</button>
            </div>
        </div>
        </>
    )
}