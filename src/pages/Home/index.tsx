import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.scss';

const Home = () => (

    <div className="row home-content">
       <div className="col-7">
       <h1 className="text-title">
            Desafio do Capítulo 3,<br /> Bootcamp DevSuperior
        </h1>
        <p className="text-subtitle">
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br />
            Favor observar as instruções passadas no capítulo sobre a elaboração <br /> deste projeto. <br />
            Este design foi adaptado a partir de Ant Design System for Figma, de <br /> Mateusz Wierzbicki: 
            <Link to="link">antforfigma@gmail.com</Link>
        </p>
        <Link to="/Before">
        <Button text="Comerçar"/> 
        </Link>
        </div>
       </div>
);

export default Home;
