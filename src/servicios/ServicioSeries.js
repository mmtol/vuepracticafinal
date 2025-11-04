import axios from "axios";
import Global from "./../Global";

export default class ServicioSeries
{
    getSeries()
    {
        return new Promise(function(resolve)
        {
            var url = Global.api;
            var endPoint = "api/Series";

            axios.get(url+endPoint).then(response=>
            {
                resolve(response.data);
            })
        })
    }

    createPersonaje(personaje)
    {
        return new Promise(function(resolve)
        {
            var url = Global.api;
            var endPoint = "api/Personajes";

            axios.post(url+endPoint, personaje).then(response=>
            {
                resolve(response);
            })
        })
    }
}