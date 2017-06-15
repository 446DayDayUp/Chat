import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const MyColor = '#66CCFF';

export const styles = StyleSheet.create({
  tab: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  tabs: {
    height: 45,
    flexDirection: 'row',
    paddingTop: 0,
    borderWidth: 0,
    borderTopWidth: 5,
    borderColor: '#4f8ef7',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.01)',
  },
  tabView: {
    flex: 1,
    // padding: 10,
    backgroundColor: '#4f8ef7',
  },
  card: {
    flex: 1,
    // borderWidth: 1,
    backgroundColor: '#4f8ef7',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 0,
    height: Dimensions.get('window').height - 75,
    padding: 5,
    shadowColor: '#ccc',
  },
  flexOne: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4f8ef7',
  },
  addButton: {
    backgroundColor: '#dc143c',
    borderColor: '#dc143c',
    borderWidth: 1,
    height: 70,
    width: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
  searchComp: {
    flex: 2,
  },
});
