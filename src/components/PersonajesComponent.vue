<template>
    <div>
        <button class="btn btn-warning"><router-link :to="'/serie/'+idSerie">Volver</router-link></button>
        <table class="table table-danger">
            <thead>
                <tr>
                    <th>Personaje</th>
                    <!-- <th>Imagen</th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="personaje in personajes" :key="personaje">
                    <td>{{personaje.nombre}}</td>
                    <!-- <td><img :src="personaje.imagen"/></td> -->
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import ServicioSeries from './../servicios/ServicioSeries';

    const servicio = new ServicioSeries();

    export default 
    {
        name:"PersonajesComponent",
        data()
        {
            return{
                idSerie:0,
                personajes:[]
            }
        },
        methods:
        {
            getPersonajes()
            {
                servicio.getPersonajes().then(result =>
                {   
                    for (var personaje of result)
                    {
                        if (personaje.idSerie == this.idSerie)
                        {
                            this.personajes.push(personaje);
                        }
                    }
                })
            }
        },
        mounted()
        {
            this.idSerie = this.$route.params.idserie;
            this.getPersonajes();
        },
        watch:
        {
            '$route.params.idserie'(nextVal, oldVal)
            {
                if (nextVal!=oldVal)
                {
                    this.idSerie = this.$route.params.idserie;
                    this.getPersonajes();
                }
            }
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css'
</style>