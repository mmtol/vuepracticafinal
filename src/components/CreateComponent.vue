<template>
    <div>
        <h1>Nuevo personaje</h1>
        <form v-on:submit.prevent="createPersonaje">
            <label>Nombre:</label>
            <br/>
            <input type="text" v-model="nombre"/>
            <br/>
            <label>Imagen:</label>
            <br/>
            <input type="text" v-model="imagen"/>
            <br/>
            <label>Serie</label>
            <br/>
            <select v-model="idSerie">
                <option v-for="serie in series" :key="serie" :value="serie.idSerie">
                    {{serie.nombre}}
                </option>
            </select>
            <br/>
            <button class="btn btn-warning">Insertar personaje</button>
        </form>
    </div>
</template>

<script>
    import ServicioSeries from './../servicios/ServicioSeries';

    const servicio = new ServicioSeries();

    export default 
    {
        name:"CreateComponent",
        data()
        {
            return{
                series:[],
                nombre:"",
                imagen:"",
                idSerie:0
            }
        },
        methods:
        {
            getSeries()
            {
                servicio.getSeries().then(result =>
                {   
                    this.series = result;
                })
            },
            createPersonaje()
            {
                var personaje = 
                {
                    idPersonaje:0,
                    nombre:this.nombre,
                    imagen:this.imagen,
                    idSerie:this.idSerie
                }

                servicio.createPersonaje(personaje).then(result =>
                {   
                    console.log(result);
                    this.$router.push("/");
                })
            }
        },
        mounted()
        {
            this.getSeries();
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css'
</style>