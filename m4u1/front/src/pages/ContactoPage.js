import { useState } from 'react';
import axios from 'axios';
import "../styles/home.css";



const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg('');
        setSending(true);

      
            const response = await axios.post('http://localhost:3000/api/contacto', formData);
            setSending(false);
            setMsg(response.data.message);
            if (response.data.error === false) {
                setFormData(initialForm);
            }
        
    };


    return (
        <main className="holder">
            <div className="wrapper">
                <form action="/contacto" className="form-area" method='post' onSubmit={handleSubmit}>
                    <div className="input-group msg-area">
                        <label htmlFor="msg">Mensaje</label>
                        <textarea id="msg" name='mensaje' value={formData.mensaje} onChange={handleChange} placeholder="Tu Mensaje" required></textarea>
                    </div>
                    <div className="input-group area-detalles">
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' value={formData.email} onChange={handleChange} id="email" placeholder="E-m@il" required/>
                        
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" name='nombre' value={formData.nombre} onChange={handleChange} placeholder="Tu Nombre" required/>

                        <label htmlFor="asunto">Asunto</label>
                        <input type="text" id="asunto" name='asunto' value={formData.asunto} onChange={handleChange} placeholder="Asunto del Mensaje" required/>

                        <button type="submit" value="Enviar">Enviar</button>
                    </div>
                </form>
                <div className="datos">
                    <h2> Otras vias de comunicación</h2>
                    <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
                    <ul>
                        <li>Teléfono: 323-555-6439</li>
                        <li>Email: contacto@straysharpies.com</li>
                        <li>Facebook</li>
                        <li>Twitter:</li>
                        <li>Instagram:</li>
                    </ul>


                 {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}   
                </div>
                

            </div>
        </main>
    );
}

export default ContactoPage;