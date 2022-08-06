import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

export default function Quotes(){

    return(
        <>
        <div className="section quote">
            <Carousel 
            className="container"
                autoPlay={true} 
                infiniteLoop
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                stopOnHover
                transitionTime={500}
                interval={7000}>
                <h2>
                “Good food doesnt mean fancy food, good friend doesnt mean fancy friend, good life doesnt mean fancy life.  ― Abhijit Naskar”
                </h2>
                <h2>
                “No one has ever enjoyed their life to fullest without eating good food. Good food is bliss of human life.  ― Purvi Raniga”
                </h2>
                <h2>
                “Good food warms the heart and feeds the soul.  ― Adrienne Posey”
                </h2>
                <h2>
                “Home is not necessarily, where the heart is. It is also, where good food,people, and sanity resides.even if that accounts for a house, with no people in it.   ― anjali mukherjee”
                </h2>
                <h2>
                “Good food and good eating are about risk. Every once in a while an oyster, for instance, will make you sick to your stomach. Does this mean you should stop eating oysters? No way. ― Anthony Bourdain ”
                </h2>
            </Carousel>
        </div>

        </>
    )
}