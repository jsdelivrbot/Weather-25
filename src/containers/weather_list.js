import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
    renderWeather (cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weatherData => weatherData.main.temp);
        const pressures = cityData.list.map(weatherData => weatherData.main.pressure);
        const humidities = cityData.list.map(weatherData => weatherData.main.humidity);

        // const lon = cityData.city.coord.lon;
        // const lat = cityData.city.coord.lat;
        const {lon, lat} = cityData.city.coord;

        return (
            <tr key={name}>
                <td>
                    <GoogleMap lon={lon} lat={lat} />
                </td>
                <td>
                    <Chart color="green" data={temps} />
                </td>
                <td>
                    <Chart color="red" data={pressures} />
                </td>
                <td>
                    <Chart color="blue" data={humidities} />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temp</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

// function mapStateToProps(state) {
//     return { weather: state.weather };
// }
// Is the same as:
function mapStateToProps({weather}) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
