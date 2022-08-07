import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Settings(){

    const [theme, setTheme] = useState("light");
    const [primaryColor, setPrimaryColor] = useState(0);
    const [fontSize, setFontSize] = useState(1)

    const primaryColors = [
        "rgb(255, 0, 86)",
        "rgb(33, 150, 243)",
        "rgb(255, 193, 7)",
        "rgb(0, 200, 83)",
        "rgb(156, 39, 176)"
    ]

    const fontSizes = [
        {
            title: "Small",
            value: "12px"
        },
        {
            title: "Medium",
            value: "16px"
        },
        {
            title: "Large",
            value: "20px"
        }
    ]

    return(
        <>
        <div className="section d-block">
            <h2>Preferred theme</h2>
            <div className="options-container">
                <div className="option light">
                    { theme === "light" && (   
                    <div className="check">
                        <FontAwesomeIcon icon={faCheck} />
                    </div>)
                    }
                </div>
                <div className="option dark">
                    { theme === "dark" && (
                    <div className="check">
                        <FontAwesomeIcon icon={faCheck} />
                    </div>)
                    }
                </div>
            </div>
        </div>

        <div className="section d-block">
            <h2>Primary color</h2>
            <div className="options-container">
                {
                    primaryColors.map((color, i) => (
                        <div className="option light" style={{ backgroundColor: color}}>
                            {
                                primaryColor === i && (
                                    <div className="check">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </div>

        <div className="section d-block">
            <h2>Font sizes</h2>
            <div className="options-container">
                {
                    fontSizes.map((size, i) => (
                        <button className="btn"> 
                            {size.title} 
                            { fontSize === i && (
                                <span><FontAwesomeIcon icon={faCheck} /></span>
                            )}
                         </button>
                    ))
                }
            </div>
        </div>
        </>
    )
}