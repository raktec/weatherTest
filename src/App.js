/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Header from './components/Header';
import Spinner from './components/Spinner';
import Card from './components/Card';
import CardSection from './components/CardSection';

export default class App extends React.Component {
  state = {
    isLoding: false,
    text: '',
    isSearch: false,
    data: [
      {
        coord: {
          lon: 77.22,
          lat: 28.65,
        },
        weather: [
          {
            id: 721,
            main: 'Haze',
            description: 'haze',
            icon: '50n',
          },
        ],
        base: 'stations',
        main: {
          temp: 303.46,
          pressure: 1004,
          humidity: 70,
          temp_min: 303.15,
          temp_max: 303.71,
        },
        visibility: 2500,
        wind: {
          speed: 2.6,
          deg: 270,
        },
        clouds: {
          all: 40,
        },
        dt: 1566324168,
        sys: {
          type: 1,
          id: 9165,
          message: 0.0087,
          country: 'IN',
          sunrise: 1566260570,
          sunset: 1566307609,
        },
        timezone: 19800,
        id: 1273294,
        name: 'Delhi',
        cod: 200,
      },
      {
        coord: {
          lon: 77.22,
          lat: 28.65,
        },
        weather: [
          {
            id: 721,
            main: 'Haze',
            description: 'haze',
            icon: '50n',
          },
        ],
        base: 'stations',
        main: {
          temp: 303.46,
          pressure: 1004,
          humidity: 70,
          temp_min: 303.15,
          temp_max: 303.71,
        },
        visibility: 2500,
        wind: {
          speed: 2.6,
          deg: 270,
        },
        clouds: {
          all: 40,
        },
        dt: 1566324168,
        sys: {
          type: 1,
          id: 9165,
          message: 0.0087,
          country: 'IN',
          sunrise: 1566260570,
          sunset: 1566307609,
        },
        timezone: 19800,
        id: 1273294,
        name: 'Delhi',
        cod: 200,
      },
      {
        coord: {
          lon: 77.22,
          lat: 28.65,
        },
        weather: [
          {
            id: 721,
            main: 'Haze',
            description: 'haze',
            icon: '50n',
          },
        ],
        base: 'stations',
        main: {
          temp: 303.46,
          pressure: 1004,
          humidity: 70,
          temp_min: 303.15,
          temp_max: 303.71,
        },
        visibility: 2500,
        wind: {
          speed: 2.6,
          deg: 270,
        },
        clouds: {
          all: 40,
        },
        dt: 1566324168,
        sys: {
          type: 1,
          id: 9165,
          message: 0.0087,
          country: 'IN',
          sunrise: 1566260570,
          sunset: 1566307609,
        },
        timezone: 19800,
        id: 1273294,
        name: 'Delhi',
        cod: 200,
      },
      {
        coord: {
          lon: 77.22,
          lat: 28.65,
        },
        weather: [
          {
            id: 721,
            main: 'Haze',
            description: 'haze',
            icon: '50n',
          },
        ],
        base: 'stations',
        main: {
          temp: 303.46,
          pressure: 1004,
          humidity: 70,
          temp_min: 303.15,
          temp_max: 303.71,
        },
        visibility: 2500,
        wind: {
          speed: 2.6,
          deg: 270,
        },
        clouds: {
          all: 40,
        },
        dt: 1566324168,
        sys: {
          type: 1,
          id: 9165,
          message: 0.0087,
          country: 'IN',
          sunrise: 1566260570,
          sunset: 1566307609,
        },
        timezone: 19800,
        id: 1273294,
        name: 'Delhi',
        cod: 200,
      },
      {
        coord: {
          lon: 77.22,
          lat: 28.65,
        },
        weather: [
          {
            id: 721,
            main: 'Haze',
            description: 'haze',
            icon: '50n',
          },
        ],
        base: 'stations',
        main: {
          temp: 303.46,
          pressure: 1004,
          humidity: 70,
          temp_min: 303.15,
          temp_max: 303.71,
        },
        visibility: 2500,
        wind: {
          speed: 2.6,
          deg: 270,
        },
        clouds: {
          all: 40,
        },
        dt: 1566324168,
        sys: {
          type: 1,
          id: 9165,
          message: 0.0087,
          country: 'IN',
          sunrise: 1566260570,
          sunset: 1566307609,
        },
        timezone: 19800,
        id: 1273294,
        name: 'Delhi',
        cod: 200,
      },
      {
        coord: {
          lon: 77.22,
          lat: 28.65,
        },
        weather: [
          {
            id: 721,
            main: 'Haze',
            description: 'haze',
            icon: '50n',
          },
        ],
        base: 'stations',
        main: {
          temp: 303.46,
          pressure: 1004,
          humidity: 70,
          temp_min: 303.15,
          temp_max: 303.71,
        },
        visibility: 2500,
        wind: {
          speed: 2.6,
          deg: 270,
        },
        clouds: {
          all: 40,
        },
        dt: 1566324168,
        sys: {
          type: 1,
          id: 9165,
          message: 0.0087,
          country: 'IN',
          sunrise: 1566260570,
          sunset: 1566307609,
        },
        timezone: 19800,
        id: 1273294,
        name: 'Delhi',
        cod: 200,
      },
      {
        coord: {
          lon: 77.22,
          lat: 28.65,
        },
        weather: [
          {
            id: 721,
            main: 'Haze',
            description: 'haze',
            icon: '50n',
          },
        ],
        base: 'stations',
        main: {
          temp: 303.46,
          pressure: 1004,
          humidity: 70,
          temp_min: 303.15,
          temp_max: 303.71,
        },
        visibility: 2500,
        wind: {
          speed: 2.6,
          deg: 270,
        },
        clouds: {
          all: 40,
        },
        dt: 1566324168,
        sys: {
          type: 1,
          id: 9165,
          message: 0.0087,
          country: 'IN',
          sunrise: 1566260570,
          sunset: 1566307609,
        },
        timezone: 19800,
        id: 1273294,
        name: 'Delhi',
        cod: 200,
      },
      {
        coord: {
          lon: 77.22,
          lat: 28.65,
        },
        weather: [
          {
            id: 721,
            main: 'Haze',
            description: 'haze',
            icon: '50n',
          },
        ],
        base: 'stations',
        main: {
          temp: 303.46,
          pressure: 1004,
          humidity: 70,
          temp_min: 303.15,
          temp_max: 303.71,
        },
        visibility: 2500,
        wind: {
          speed: 2.6,
          deg: 270,
        },
        clouds: {
          all: 40,
        },
        dt: 1566324168,
        sys: {
          type: 1,
          id: 9165,
          message: 0.0087,
          country: 'IN',
          sunrise: 1566260570,
          sunset: 1566307609,
        },
        timezone: 19800,
        id: 1273294,
        name: 'Delhi',
        cod: 200,
      },
    ],
  };

  callWeatherApi = () => {
    if (this.state.text) {
      this.setState({isSearch: true});
      // this.setState({isLoding: true, isSearch: true});

      // let url = `http://api.openweathermap.org/data/2.5/weather?q=${
      //   this.state.text
      // }&appid=2e53133045bc2195f871e48024a02eef`;
      // fetch(url)
      //   .then(response => response.json())
      //   .then(responseData => {
      //     this.setState({
      //       isLoding: false,
      //       data: responseData,
      //     });
      //   })
      //   .catch(error => {
      //     //alert("Internet is not connected");
      //     this.setState({isLoding: false});
      //   })
      //   .done();
    } else {
      alert('Please enter city');
    }
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };
  _itemRender = item => {
    return (
      <Card>
        <CardSection style={{flexDirection: 'row'}}>
          <Text>{'City Name: '}</Text>
          <Text>{item.name}</Text>
        </CardSection>
        <CardSection style={{flexDirection: 'row'}}>
          <Text>{'Humidity: '}</Text>
          <Text>{item.main['humidity']}</Text>
        </CardSection>
        <CardSection style={{flexDirection: 'row'}}>
          <Text>{'temp: '}</Text>
          <Text>{item.main['temp']}</Text>
        </CardSection>
      </Card>
    );
  };

  fList() {
    if (this.state.isSearch) {
      return (
        <FlatList
          data={this.state.data}
          renderItem={({item}) => this._itemRender(item)}
          ItemSeparatorComponent={this.renderSeparator}
        />
      );
    } else {
      return <Text style={{alignSelf: 'center'}}>{'No Records'}</Text>;
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.contaner}>
        <Header headerText="Weather App" />
        <View
          style={{
            flexDirection: 'row',
            margin: 5,
            justifyContent: 'space-evenly',
            height: 40,
          }}>
          <View style={{flex: 2}}>
            <TextInput
              style={{
                eight: 40,
                fontSize: 20,
              }}
              placeholder="Type here to City Name!"
              onChangeText={text => this.setState({text})}
            />
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
              }}
              onPress={this.callWeatherApi}>
              <Text>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.fList()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
  },
});
