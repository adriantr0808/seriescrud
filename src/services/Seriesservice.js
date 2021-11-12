import Global from './../components/Global';
import axios from 'axios';

export default class Seriesservice {


    getSeries() {
        return new Promise(function (resolve) {
            var request = '/api/Series';
            var url = Global.urlSeries + request;
            var series = [];
            axios.get(url).then(res => {
                series = res.data;
                resolve(series);
            });
        });
    }

    getSeriesbyId(id) {

        return new Promise(function (resolve) {
            var request = '/api/Series/' + id;
            var url = Global.urlSeries + request;
            axios.get(url).then(res => {
                var serie = res.data;
                resolve(serie);
            });
        });

    }

    getPersonajesbyIdSerie(idSerie){
        
        return new Promise (function(resolve){
            var request = '/api/Series/PersonajesSerie/'+idSerie;
            var url = Global.urlSeries+request;
            axios.get(url).then(res => {
                var personajes = res.data;
                resolve(personajes);
               
            })
        });
    }

    postPersonaje(personaje){
        return new Promise (function(resolve){
            var request = '/api/Personajes';
            var url = Global.urlSeries+request;
            axios.post(url, personaje).then(res =>{
                resolve(res);
            });
        })
    }

    getPersonajes(){
        return new Promise(function (resolve) {
            var request = '/api/Personajes';
            var url = Global.urlSeries + request;
            var personajes = [];
            axios.get(url).then(res => {
                personajes = res.data;
                resolve(personajes);
            });
        });
    }
    getPersonajeById(id){
        return new Promise(function (resolve) {
            var request = '/api/Personajes/'+id;
            var url = Global.urlSeries + request;
            
            axios.get(url).then(res => {
                var personaje = res.data;
                resolve(personaje);
            });
        });
    }
}