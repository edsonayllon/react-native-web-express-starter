import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  G,
  Image,
  Line,
  LinearGradient,
  Mask,
  Path,
  Pattern,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Symbol,
  TSpan,
  Text as SvgText,
  TextPath,
  Use
} from 'react-native-svg';

export default class App extends React.Component {
  state = {users: []}

  componentDidMount() {
    fetch('http://localhost:4000/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Users</Text>
        {this.state.users.map(user =>
          <Text key={user.id}>{user.username}</Text>
        )}
        <View>
          <Svg height = {276} width = {335} viewBox="328 355 335 276">
            <Path fill='#3BA9EE'
            d="
              M 630, 425
              A 195, 195 0 0 1 331, 600
              A 142, 142 0 0 0 428, 570
              A  70,  70 0 0 1 370, 523
              A  70,  70 0 0 0 401, 521
              A  70,  70 0 0 1 344, 455
              A  70,  70 0 0 0 372, 460
              A  70,  70 0 0 1 354, 370
              A 195, 195 0 0 0 495, 442
              A  67,  67 0 0 1 611, 380
              A 117, 117 0 0 0 654, 363
              A  65,  65 0 0 1 623, 401
              A 117, 117 0 0 0 662, 390
              A  65,  65 0 0 1 630, 425
              Z"
            />
          </Svg>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 120,
  }
});
