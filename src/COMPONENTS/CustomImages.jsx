export default function CustomImages({ src, pt }){
    return(
        <div className="custom-image" style={{ paddingTop: pt }}>
            <img src={src} alt="" />
        </div>
    )
}