fetch('http://localhost:3000/movies')
.then(res=>res.text())
.then(response=>{
    datos = JSON.parse(response);    

    const container = $('#main-container');
    const listTemplate = $('#header-template').first();
    const template = Handlebars.compile(listTemplate.html());
    datos.forEach(datos => {
        let resultHTML = template({
            name:datos.name,
            director:datos.director,
            genre:datos.genre,
            duration:datos.duration,
            actors:datos.actors,
            synopsis:datos.synopsis,
            poster:datos.poster
        });
        container.append(resultHTML);
    });
})
.catch(error => {
console.error('Error al obtener datos:', error);
});


$('#send-btn').on('click', function(event) {
    event.preventDefault();
    fetch('http://localhost:3000/movies/add',{
        method: 'POST'
    }
    ).then(response => {
        if (response.ok) {
            alert('Película creada correctamente');
        } else {
            alert('Error al crear la película');
        }
        window.location.href = 'index.html';
    }) 
    .catch(error => {
        console.error('Error:', error);
    });
});


