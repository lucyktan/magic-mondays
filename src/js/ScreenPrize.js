import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';
import Modal from 'react-native-modal';
import congratulationImage from '../img/congratulations.jpg';
import beautyBoxImage from '../img/prize_BB.png';
import shoesImage from '../img/prize_shoes.png';
import perfumeImage from '../img/prize_clinique.png';
import towelImage from '../img/prize_towelstack.png';
import giftcardImage from '../img/prize_giftcard.png';
import streakImage from '../img/streak.png';
import floatingStars from '../assets/floatingstars.mov';
import ribbon from '../img/ribbon.png';
import backgroundImage from '../img/background-without-logo.png';
import macysLogo from '../img/macys-logo-white.png';
import { Video } from 'expo';


class ScreenPrize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisable: false,
      click: false,
      val: false,
      navigate: this.props.navigation.navigate,
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Welcome ${navigation.state.params.screen}`,
    }
  };
  _showModal = () => this.setState({ isModalVisible: true });

  _hideModal = () => this.setState({ isModalVisible: false });

  render() {
    const navigation = this.props.navigation;
    var imageMap = {beautybox: beautyBoxImage,shoes: shoesImage,perfume: perfumeImage,giftcard: giftcardImage,towels: towelImage}
    var prizeImage = imageMap[this.props.navigation.state.params.prize]; 
    var textMap = {
      beautybox: 'You won a free one month subscription to Macy\'s Beauty Box service! Check back next week for more awesome prizes!',
      shoes: 'You won an extra 10% off your next Shoes Deparment purchase! Check back next week for more awesome prizes!',
      perfume: 'You won 10% off your next Clinique product purchase! Check back next week for more awesome prizes!',
      giftcard: 'You won a $10 gift card to apply to your next purchase of $50 or more! Check back next week for more awesome prizes!',
      towels: 'Buy any Michael Kors product and receive 15% off you purchase! Check back next week for more awesome prizes!'};
    var prizeText = textMap[this.props.navigation.state.params.prize]

    return (
      <View style={styles.container}>
          <Video
            source={require('../assets/floatingstars.mov')}
            rate={1.0}
            volume={0.0}
            muted={true}
            resizeMode={"cover"}
            shouldPlay
            isLooping
            style={styles.video}
          />

          <Image
            source={congratulationImage}
            style={styles.congratsImage}
          />
          <View style={styles.headerContainer}>
          
            <TouchableHighlight style={styles.touchHi} onPress={() => {this._showModal()}}>
              <View >
                <Image
                  source={ribbon}
                  style={styles.ribbonImage}/>
              </View>  
            </TouchableHighlight>

          </View>

          <Modal style={styles.modalContainer2} onBackdropPress = {this._hideModal} isVisible={this.state.isModalVisible}>
            <Image style={styles.modalImage} source={backgroundImage} >
            <Image style={styles.logoModalImage} source={macysLogo}></Image>
              <Text style={styles.titleText}>
                          Lorem ipsum dolor sit amet, consectetur wer
                          adipiscing elit. Morbi eu dignissim tellus. 
                          Phasellus dui tortor, pulvinar eget felis id, 
                          dictum dapibus ligula.Lorem ipsum dolor sit 
                          amet, consectetur. Morbi eu dignissim tellus.
                          Phasellus dui tortor, pulvinar eget felis id, 
                          dictum dapibus ligula.Lorem ipsum dolor sit 
                          amet, consectetur.
              </Text>
            </Image>
          </Modal>

          <Image resizeMode = 'cover'
            source={prizeImage}
            style={styles.prizeImage}
          />


          <Text style={styles.prizeDesc}>
            {prizeText}
          </Text>

        <View style={styles.buttonContainer}>
          <TouchableHighlight
            onPress={() => navigation.navigate("ScreenWallet", { screen: "Screen Wallet", prize: this.props.navigation.state.params.prize})}
            style={[styles.button, {backgroundColor: '#CC0000'}]}>
            <Text style={styles.buttonText}>Save Prize to Wallet</Text>
          </TouchableHighlight>
        </View>


      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 300
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  congratsImage: {
    flex: 1, 
    width: 600, 
    height: 200, 
    position: 'absolute', 
    top: 10,
  },
  touchHi: {
    flex: 1, 
    width: 125, 
    height: 30, 
    position: 'absolute',
    top: 35,
    right: -206,
    backgroundColor: 'transparent'
  },
  ribbonImage: {
    flex: 1, 
    width: 150, 
    height: 40, 
    position: 'absolute',
    right: 0,
    top: -5,
    overflow: 'visible'

  },
  prizeImage: {
    flex: 1, 
    width: 350,
    height: 300,
    position: 'absolute',
    margin: 'auto',
    overflow: 'visible'
  },
  prizeDesc: {
    fontSize: 14, 
    color: 'black', 
    textAlign: 'center',
    position: 'absolute', 
    marginLeft: 15, 
    marginRight: 15, 
    bottom: 105,
    backgroundColor: 'transparent'
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    color: 'black',
    marginLeft: 10,
    marginTop: 15,
    marginRight: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    position: 'absolute',
    bottom: 20
  },
  button: {
    height: 50,
    flex: 2,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18
  },
  streakImage: {
    flex: 2,
    width: 350,
    height: 100,
    position: 'absolute', 
    bottom: -20
  },
  modalImage: {
    resizeMode: 'stretch',
    width: '85%',
    height: '65%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  modalContainer2: {
    flex: 0.95,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  logoModalImage: {
    flex: .25,
    marginTop: 0,
    resizeMode: 'contain',
    marginBottom: 20
  },
});
export default ScreenPrize;