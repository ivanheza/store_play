import React from "react";



const IntroPlay = () => {

  

    const saludo = "Play MX"

    const imagenIntro = "https://i.ibb.co/1TsKSHy/Foto-Intro.jpg"
	return (
		<div className="container row flex-lg-row-reverse align-items-center g-5 py-5 " style={{ minHeight: 200 }}>
	
            <div className="col-sm-10 col-lg-6">
                <img src={imagenIntro} className="d-block img-fluid rounded  shadow-sm" alt="play-intro" width="800" loading="lazy"/>
            </div>
   
            <div className="col-lg-6">
                <h1 className="fw-bold">{saludo} </h1>
                <p className="fs-4 lead">
                    Somos una empresa con más de 20 años en el mercado.
                    Nuestro objetivo es hacer de ese día especial para ti, algo inolvidable.
                </p>
            </div>

        </div>
       
	);
};

export default IntroPlay;
