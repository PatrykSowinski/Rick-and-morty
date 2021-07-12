const Character = ({id, name, image, children}) => {
    return (
    <li key={id}>
        {children}
        {name}
        <br />
        <img src={image} alt="zdjecie"></img>
    </li>
    )
}

export default Character;