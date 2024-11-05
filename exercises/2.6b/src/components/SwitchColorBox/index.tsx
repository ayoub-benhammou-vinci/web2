import { useState } from "react";
import "./SwitchBox.css";

const SwitchColorBox = () => {
  //         Optimized Version in English
  // setSwitchIndex = Change la valeur de SwitchIndex
  // Si pas de setSwitchIndex : Variable local

  const colorTab = ["red", "green", "blue", "yellow", "purple"];
  const [switchIndex, setSwitchIndex] = useState(0);

  return (
    <div>
        <button className={colorTab[switchIndex]} style={{backgroundColor : colorTab[switchIndex]}}>
            <p>Actual color : {colorTab[switchIndex]} </p>
            
            <button onClick={() => setSwitchIndex((switchIndex+1)%colorTab.length)} className="boxSwitch">
                <p>
                    Next color : {colorTab[(switchIndex+1)%colorTab.length]}
                </p>
            </button>

        </button>

    </div>
  )

  /*         My version if I write it in French 

    const colorTab = ["rouge","vert","bleu", "jaune", "violet"];

    // eslint-disable-next-line prefer-const
    let [colorNumber, setColor] = useState(0);

    const handleColor = () => {
        colorNumber++;
        colorNumber = colorNumber % colorTab.length;
        setColor(colorNumber);
    }

    return (
        <div>
            <button onClick={handleColor} className="boxSwitch">
                <p className={colorTab[colorNumber]}>Switch Box : Click on the box to change text-color</p>
            </button>
            <p>The next color is : {colorTab[(colorNumber + 1)%colorTab.length]}</p>
        </div>
    )
    */
};

export default SwitchColorBox;
