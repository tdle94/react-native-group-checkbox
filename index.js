import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  Image,
  Text,
  Platform,
  View,
} from 'react-native'
  
const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkbox: {
    width: 30,
    height: 30
  },
  labelContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  label: {
    fontSize: 16,
    color: '#222'
  }
});
  

class Checkboxes extends PureComponent {
  state = {
    checked: []
  }

  static Container = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback

  static defaultProps = {
    labels: [],
    checkedImage: require('./img/checked.png'),
    uncheckedImage: require('./img/unchecked.png')
  }

  static propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string)
  }

  componentDidMount() {
    const checked = []
    this.props.labels.forEach(() => checked.push(false))
    this.setState({ checked })
  }

  onCheck = (index) => () => {
    this.setState(previousState => {
        previousState.checked[index] = !previousState.checked[index]
        return { previousState }
      }, 
      () => {
        const checkboxes = this.state.checked.map((checked, index) => checked && this.props.labels[index]).filter(labels => labels)
        this.props.onChange && this.props.onChange({ checkboxes }) 
      }
    )
  }

  checkbox = (label, index) => {
    const { checked } = this.state
    const CheckboxContainer = Checkboxes.Container
    const {
      checkedImage,
      uncheckedImage
    } = this.props
    return (
      <CheckboxContainer
        key={ index }
        style={ styles.checkboxContainer }
        onPress={ this.onCheck(index) }
      >
        <View>
          <Image 
            style={ styles.checkbox }
            source={ checked[index] ? checkedImage : uncheckedImage }
          />
        </View>
        <View style={ styles.labelContainer }>
          <Text style={ styles.label }>
            { label }
          </Text>
        </View>
      </CheckboxContainer>
    );
  };

  renderCheckboxes = () => {
    const { labels } = this.props;
    const checkboxes = []
    labels.forEach((label, index) => checkboxes.push(this.checkbox(label, index)))
    return checkboxes
  }

  render() {
    return (
      <View>
        { this.renderCheckboxes() }
      </View>
    );
  }
}

export default Checkboxes;