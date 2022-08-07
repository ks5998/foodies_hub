import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomImages from "./CustomImages";

export default function RecipesCard({ recipe }){
    return(
        <>
        <div className="recipe-card">
            
            <CustomImages src={recipe.image} pt="65%" />

            <div className="recipe-card-info">
                <img src={recipe.authorImg} alt="" className="author-img" />

                <p className="recipe-title">Chicken pan pizza</p>

                <p className="recipe-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, veniam.</p>
                
                <a className="view-btn" href="#">
                    <FontAwesomeIcon icon={faArrowRight} />
                </a>
            </div>
        </div>
        </>
    )
}