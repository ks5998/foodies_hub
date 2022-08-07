import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function RecipesSearch(){

    const searches = [
        'pizza', 'burger', 'cookies', 'juice', 'biryani', 'salad', 'ice-cream', 'lasagra', 'puddings', 'soup'
    ]

    return(
        <>
            <div className="previous-search section">
                <h2>Previous searches</h2>
                <div className="previous-search-container">
                    {
                        searches.map((search, i) => (
                            <div className="search-item" key={i} style={{ animationDelay: i*.1+"s" }}>
                                {search}
                            </div>
                        ))
                    }
                </div>
                <div className="search-box">
                    <input type="text" placeholder="search..." />
                    <button className="btn">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
        </>
    )
}