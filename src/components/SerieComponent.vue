<template>
    <div>
        <img :src="serie.imagen"/>
        <h2>{{serie.nombre}}</h2>
        <h3>IMDB: {{serie.puntuacion}}</h3>
        <button class="btn btn-warning"><router-link :to="'/personajes/'+idSerie">Personajes</router-link></button>
    </div>
</template>

<script>
    import ServicioSeries from './../servicios/ServicioSeries';

    const servicio = new ServicioSeries();

    export default 
    {
        name:"SerieComponent",
        data()
        {
            return{
                idSerie:0,
                serie:{}
            }
        },
        methods:
        {
            findSerie()
            {
                servicio.findSerie(this.idSerie).then(result =>
                {   
                    this.serie = result;
                })
            }
        },
        mounted()
        {
            this.idSerie = this.$route.params.idserie;
            this.findSerie();
        },
        watch:
        {
            '$route.params.idserie'(nextVal, oldVal)
            {
                if (nextVal!=oldVal)
                {
                    this.idSerie = this.$route.params.idserie;
                    this.findSerie();
                }
            }
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css'
</style>