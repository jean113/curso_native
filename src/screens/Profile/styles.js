import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 150,
    margin: 20,
  },
  overlayContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 41,
  },
  iconContainer: {
    height: 40,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    alignSelf: 'center',
  },

  nome:
  {
    fontSize:25,
    fontWeight: 'bold'
  },

  descricao:
  {
    fontSize:18
  },

  espaco_descricao_perfil:
  {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop:20, 
    paddingRight:20, 
    paddingLeft:20, 
    paddingBottom:5,
    marginTop:10,
    borderRadius: 8

  },

  centralizar_foto:
  {
    justifyContent: 'center',  
    alignItems: 'center',
  },

  icon_trash:
  {
      marginTop:20,
      left:120
  }

});
