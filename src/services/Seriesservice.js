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
            var request = '/api/Personajes/' + id;
            var url = Global.urlSeries + request;
            axios.get(url).then(res => {
                var serie = res.data;
                resolve(serie);
            });
        });

    }
}