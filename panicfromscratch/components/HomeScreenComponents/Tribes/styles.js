import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tribeItemContainer: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 170,
    width: 215,
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 20,

  },
  tribePhoto: {
    flex: 4,
    width: '100%',
    height: 155,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3
  },
  tribeName: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 8
  },
  tribeInfo: {
    flex: 1,
    marginTop: 3,
    marginBottom: 5
  },
  buttonContainer: {
    margin: 20
  }
});

export default styles;
