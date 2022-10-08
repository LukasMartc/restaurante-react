import Msj from "./Msj"
import { useState } from 'react';
import CerrarBtn from '../images/cerrar.svg'
import app from '../config/firebase'
import { collection } from './firebase/firestore' 
import React from 'react'

const Modal = ({setModal, animationModal, setAnimationModal, msj, setMsj, amount, setAmount, date, setDate, hour, setHour}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comments, setComments] = useState('');

    const [client, setClient] = useState({});

    function closeModal() {
        setAnimationModal(false);

        setTimeout(() => {
            setModal(false);
        }, 3000)
    }

    function generatorId() {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    function handleSubmit(e) {
        e.preventDefault();
        if([name, email, phone].includes('')) {
            setMsj('Faltan campos por llenar');

            setTimeout(() => {
                setMsj('')
            }, 3000);

            return;
        }

        const objClient = {
            name,
            email,
            phone,
            comments,
            amount,
            date,
            hour
        }

        objClient.id = generatorId();
        setClient({...client, objClient})

        app.collection('clientes').add(objClient)

        /* setName('');
        setEmail('');
        setPhone('');
        setComments('');
        setAmount('');
        setDate('');
        setHour(''); */
    }

    return (
        <div className="modal">
            <div className="close-modal">
                <img
                    src={CerrarBtn}
                    alt="cerrar modal"
                    onClick={closeModal}
                />
            </div>
            <form 
                className={`form-modal ${animationModal ? 'animate' : 'close'}`}
                onSubmit={handleSubmit}    
            >
                <legend>Datos del Cliente</legend>
                {msj && <Msj type='error'>{msj}</Msj>}
                <div className='field'>
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        id='nombre'
                        type="text"
                        placeholder='Escribe tú nombre y apellido'
                        value={name}
                        onChange={e => setName(e.target.value)}     
                    />
                </div>
                <div className='field'>
                    <label htmlFor="email">Correo</label>
                    <input 
                        id='email'
                        type="email"
                        placeholder='Escribe tu correo'     
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <label htmlFor="phone">Telefono</label>
                    <input
                        id="phone"
                        type="number"
                        placeholder="Escribe tu número celular"
                        value={phone}
                        onChange={e => setPhone(Number(e.target.value))}
                    />
                </div>
                <div className='field'>
                    <label htmlFor="comments">Comentario</label>
                    <textarea 
                        id="comments"
                        type="text"
                        placeholder="Agrega un comentario"
                        value={comments}
                        onChange={e => setComments(e.target.value)}
                    />
                </div>
                <input type="submit" value="reserva" />
            </form>

            {/* <form 
                className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
                onSubmit={handleSubmit}    
            >
                <legend>Datos del Cliente</legend>
                {msj && <Msj type='error'>{msj}</Msj>}
                <div className='campo'>
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        id='nombre'
                        type="text"
                        placeholder='Escribe tú nombre y apellido'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}     
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="email">Correo</label>
                    <input 
                        id='email'
                        type="email"
                        placeholder='Escribe tu correo'     
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="phone">Telefono</label>
                    <input
                        id="phone"
                        type="number"
                        placeholder="Escribe tu número celular"
                        value={phone}
                        onChange={e => setPhone(Number(e.target.value))}
                    />
                </div>
                <div>
                    <label htmlFor="comments">Comentario</label>
                    <textarea 
                        id="comments"
                        type="text"
                        placeholder="Agrega un comentario"
                        value={comments}
                        onChange={e => setComments(e.target.value)}
                    />
                </div>
                <input type="submit" value="reserve" />
            </form> */}
        </div>
    )
}

export default Modal