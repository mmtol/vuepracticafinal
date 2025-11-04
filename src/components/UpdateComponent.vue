<template>
    <div>
        <h1>Personajes y series</h1>
        <form v-on:submit.prevent="updatePersonaje">
            <label>Seleccione una serie:</label>
            <br/>
            <select v-model="idSerie">
                <option v-for="serie in series" :key="serie" :value="serie.idSerie">
                    {{serie.nombre}}
                </option>
            </select>
            <br/>
            <label>Seleccione un personaje;</label>
            <br/>
            <select v-model="personaje">
                <option v-for="personaje in personajes" :key="personaje" :value="personaje">
                    {{personaje.nombre}}
                </option>
            </select>
            <br/>
            <button>Guardar cambios</button>
        </form>
    </div>
</template>

<script>
    import ServicioSeries from './../servicios/ServicioSeries';

    const servicio = new ServicioSeries();

    export default 
    {
        name:"UpdateComponent",
        data()
        {
            return{
                series:[],
                personajes:[],
                idSerie:0,
                personaje:{}
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
            getPersonajes()
            {
                servicio.getPersonajes().then(result =>
                {   
                    this.personajes = result;
                })
            },
            updatePersonaje()
            {
                var personaje = 
                {
                    idPersonaje:this.idPersonaje,
                    nombre:this.personaje.nombre,
                    imagen:this.personaje.imagen,
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
            this.getPersonajes();
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css'
</style>