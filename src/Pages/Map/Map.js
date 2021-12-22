import './Map.css'

function Map() {
    return(
        <>
            <div className="pofot">
               <ul>
                    <div className="cont">
                            <h1>НАШИ <span style={{color:'darkorchid'}}>КОНТАКТЫ</span></h1>
                            <div className="podline"></div>
                            <p><i class="fas fa-map-marker-alt"></i> <br /> 214 ул.Ленина Ош</p>
                            <p><i class="far fa-envelope"></i> <br /> izumosh@gmail.com</p>
                            <p><i class="fas fa-phone-square"></i> <br /> +996 777 590 361 <br /> +996 553 609 243</p>
                    </div>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.157575764646!2d72.80655235009377!3d40.51600805752047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdae9c4d81dd67%3A0x49cb6ca6944d8bf7!2z0KDQtdGB0YLQvtGA0LDQvSDQmHrRjtC8!5e0!3m2!1sru!2skg!4v1636386089698!5m2!1sru!2skg" width="800" height="585" allowfullscreen="" loading="lazy"></iframe>
                    </div>
               </ul>
            </div>
        </>
    )
}


export default Map;