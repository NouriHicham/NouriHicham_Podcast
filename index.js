
//Usamos la funcion fetch para acceder a los archivos de xml
fetch("podcasts.xml")
.then(response => response.text())
.then(data => {
    //Aqui ponemos el codigo que debe ejecutarse cuando tenemos el xml

    const parser = new DOMParser()
    const xml = parser.parseFromString(data, "application/xml")

    //selecciono cada post del xml
    const post = xml.querySelectorAll('post')

    let tarjetas =''

    for(i=0;i<post.length;i++){
        let nombre = post[i].querySelector("nombre").textContent;
        let avatar = post[i].querySelector("avatar").textContent;
        let intr = post[i].querySelector("introduccion").textContent;
        let desc = post[i].querySelector("descripcion").textContent;
        let tiempo_lect = post[i].querySelector("tiempo_lectura").textContent;
        let num_vis = post[i].querySelector("num_visualizaciones").textContent;
        let num_com = post[i].querySelector("num_comentarios").textContent;
        let num_mg = post[i].querySelector("num_megusta").textContent;
        let imagen = post[i].querySelector("imagen").textContent;

        const tarjeta = `
            <div class="tarjeta">
            <div class="imgTarj">
                <img src="imagenes/${imagen}" alt="hombre cocinando">
            </div>
            <div class="tarj">
                <div class="menuTarj">
                    <div class="profile"><img src="imagenes/${avatar}" alt="profile"></div>
                    <div>
                        <div class="admin">
                            <h3>${nombre}</h3>
                            <i class="fa-solid fa-crown"></i>
                        </div>
                        <div class="admin">
                            <h4>1 dic 2022 · ${tiempo_lect} min.</h4>
                        </div>
                    </div>
                    <div class="puntos"><i class="fa-solid fa-ellipsis-vertical"></i></div>
                </div>

                <div class="texto">
                    <div><h2>${intr}</h2></div>
                    <div>
                        <p>
                            ${desc}
                        </p>
                    </div>
                </div>
                <div class="ultTarj">
                    <span>${num_vis} visualizaciones</span>
                    <span>${num_com} comentarios</span>
                    <span>${num_mg} <i class="fa-regular fa-heart"></i></span>
                </div>
            </div>
            </div>`

        tarjetas= tarjetas + tarjeta
    }

    document.querySelector('.tarjetass').innerHTML=tarjetas
})