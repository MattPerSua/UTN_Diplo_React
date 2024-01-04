import React from "react";


const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div className="wrapper">
                <form action="" className="form-area">
                    <div className="input-group msg-area">
                        <label htmlFor="msg">Mensaje</label>
                        <textarea id="msg" placeholder="Tu Mensaje"></textarea>
                    </div>
                    <div className="input-group area-detalles">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" placeholder="E-m@il"/>
                        
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" placeholder="Tu Nombre" />

                        <label htmlFor="asunto">Asunto</label>
                        <input type="text" id="asunto" placeholder="Asunto del Mensaje"/>

                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default ContactoPage;