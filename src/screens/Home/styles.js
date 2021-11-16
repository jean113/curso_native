import { StyleSheet} from "react-native";


const styles = StyleSheet.create(
{
    centralizar:
    {
        width:'100%',
        height: '100%',
        display:'flex',
        flexDirection: 'column-reverse',
        justifyContent: 'space-between',
        alignItems:'center'
     
    },

    deslogar:
    {
        fontWeight:'bold',
        fontSize: 20
    },

    icon_logout:
    {
        width:38
    },

    espaco_deslogar:
    {
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center'
    }


});


export default styles;