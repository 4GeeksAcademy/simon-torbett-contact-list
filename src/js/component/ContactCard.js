import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faEnvelope, faPenToSquare, faTrash, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const ContactCard = (props) => {
    return (
        <div className="container">
            <div>
                <img src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117" alt="Contact" />
            </div>
            <div className="info">
                <h1>{props.name}</h1>
                <div className="iconinfo">
                <FontAwesomeIcon icon={faLocationDot} /> {/* Icono de ubicación */}
                    <span>{props.address}</span>
                </div>
                <div className="iconinfo">
                <FontAwesomeIcon icon={faPhone} /> {/* Icono de teléfono */}
                    <span>{props.phone}</span>
                </div>
                <div className="iconinfo">
                <FontAwesomeIcon icon={faEnvelope} /> {/* Icono de correo electrónico */}
                    <span>{props.email}</span>
                </div>
            </div>
            <div className="rightIcons">
                <Link to={"/edit/" + props.idx}>
                    <button className="btn btn-outline-black">
                    <FontAwesomeIcon icon={faPenToSquare} />{/* Icono de edición */}
                    </button>
                </Link>

                <button onClick={() => props.deleteContact(props.contactID)} className="btn btn-outline-black">
                <FontAwesomeIcon icon={faTrash} /> {/* Icono de eliminación */}
                </button>
            </div>
        </div>
    )
}

export default ContactCard;
