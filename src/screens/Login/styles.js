import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container:
    {
        flex:1,
        padding:15,
        justifyContent: 'center',
        alignItems: 'center'
        
    },

    input:
    {
        height:60,
        borderWidth:1,
        borderColor: '#555555',
        width:300,
        marginVertical: 20,
        fontSize: 20,
        padding:10,
        borderRadius:5
    },

    text:
    {
        fontSize:18
    },

    button:
    {
        backgroundColor: '#4267b2',
        width:200,
        height:60,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textButton:
    {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },

    icone:
    {
        width:120,
        height:120,
        marginBottom:25
    }
})