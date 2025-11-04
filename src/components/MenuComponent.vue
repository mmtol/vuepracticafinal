<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">MENÚ</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="dropdown-item" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="dropdown-item" to="/create">Nuevo personaje</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="dropdown-item" to="/update">Modificar personaje</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Series
                    </a>
                    <ul class="dropdown-menu">
                        <li class="nav-item" v-for="serie in series" :key="serie">
                            <router-link class="dropdown-item" :to="'/serie/'+serie.idSerie">{{serie.nombre}}</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import ServicioSeries from './../servicios/ServicioSeries';

    const servicio = new ServicioSeries();

    export default 
    {
        name:"MenuComponent",
        data()
        {
            return{
                series:[]
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
            }
        },
        mounted()
        {
            this.getSeries();
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css';
</style>