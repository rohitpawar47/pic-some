import React from "react";
import Image from "../components/Image";
import { Context } from "../AppContext"
import { getClass } from "../utils";

function Photos() {

    const { allPhotos } = React.useContext(Context);

    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))
    return (
        <main className="photos">
            {/* <h1>Images go here</h1> */}
            {imageElements}
        </main>
    )
}

export default Photos;