import React, {useLayoutEffect, useState, useRef} from "react";
import Style from "./index.module.css";

const Size = () => {

    const [data, setData] = useState({width: 0});
    const divRef = useRef(null)

    let divHeight = `fit-content`;
    window.setDivHeight = (height) => divHeight = height

    useLayoutEffect(() => {
        const updateWidth = () => {
            setData((e) => ({...e, width: window.innerWidth}));
        }
        window.addEventListener('resize', updateWidth);
        updateWidth();
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const inputOnKeyPressHandler = (e) => {
        if (!isNaN(e.target.value))
            divRef.current.style.height = `${e.target.value}px`

        // if (!isNaN(e.target.value))
        // window.setDivHeight(`${e.target.value}px`)

    }


    return (
        <div className={Style.box} ref={divRef} style={{height:divHeight}}>
            <span>
                Width : {data.width}
            </span>
            <input type={`text`} onKeyPress={inputOnKeyPressHandler} placeholder={`Set Height`}/>
        </div>
    );
};

export default Size