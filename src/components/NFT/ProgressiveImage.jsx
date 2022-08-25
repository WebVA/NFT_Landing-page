import React from "react";

export default function ProgressiveImage ({src, placeholder, callback}) {
    const alt = "MetagateNFT";
    const [loading, setLoading] = React.useState(true);
    const [imgUrl, setImgUrl] = React.useState("assets/images/nft/" + placeholder);
    React.useEffect(() => {

        const imageToLoad = new Image();
        imageToLoad.src = "assets/images/nft/" + src;
        imageToLoad.onload = () => {
           
            setImgUrl("assets/images/nft/" + src);
            setLoading(false);
        }
    }, [])
    return (
        <img src={imgUrl} style={{opacity: loading ? 0.5 : 1, transition: 'opacity 0.2s ease'}} onClick={() => callback()} alt={alt}></img>
    )
}
