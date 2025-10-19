import ReactLogo from "../assets/logo192.png"

// export default function(props){
export default function({img: image, name, phone, email, isActive, comment}) {

    return (
        !isActive && (
            <article className="contact-card">
                <img 
                    src={image}
                    alt={`Photo of ${name}`}
                />
                {/* Conditional rendering bellow that says if name exists, render the h3 */}
                {name && <h3>{name}</h3>}
                <div className="info-group">
                    <img 
                        src={ReactLogo}
                        alt="phone icon" 
                    />
                    <p>{phone}</p>
                </div>
                <div className="info-group">
                    <img 
                        src={ReactLogo}
                        alt="mail icon"
                    />
                    <p>{email}</p>
                </div>
            </article>
        )
    )
}