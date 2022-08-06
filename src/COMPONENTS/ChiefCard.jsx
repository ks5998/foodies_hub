import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ChiefCard({ chief }){
    return(
        <div className="chief-card">
            <img src={chief.img} alt="" />
            <div className="chief-card-info">
                <h3 className="chief-name">{chief.name}</h3>
                <p className="recipes">Recipes: <b>{chief.recipesCount}</b> </p>
                <p className="cuisine">Cuisine: <b>{chief.cuisine}</b> </p>
                <p className="icons">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                </p>
            </div>
        </div>
    )
}