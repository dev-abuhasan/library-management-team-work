import React from 'react';
import './Css/NotFoundPages.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import img from '../../../image/Not Found1.png'
import MainNavBar from './MainNavBar';

const NotFoundPages = () => {
    const location = useLocation();
    return (
       <section>
           <MainNavBar/>
            <div className="container-fluid Notfound">              
                    <div className="col-10 mx-auto d-flex justify-content-center">
                        <img src={img} className="img-fluid" alt="bg"/>  
                    </div>
                    <div className=" col-10 mx-auto pt-3">
                               <h4>The page you are looking are not found</h4>
                                <p>This path "{location.pathname}" are unvalid</p>
                               <Link to="/home"><span className="home-btn">Go Home</span></Link>
                     </div>
             </div>
       </section>
    );
};
export default NotFoundPages;