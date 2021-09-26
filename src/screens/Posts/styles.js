import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window');

const styles = StyleSheet.create(
{

    header:
    {
        width:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        padding:15,
        
    },

    avatar:
    {
        width: 80,
        height:80,
        borderRadius:50,
        marginRight:5
    },

    
    name:
    {
        fontSize:18,
        fontWeight:'bold'
    },

    time:
    {
        fontSize:16,   
    },

    text:
    {
        padding:10,
        lineHeight:22,
        textAlign:"justify",
        padding:15,
        fontSize:20,
        
    },

    postImage:
    {
        width:width,
        height:300
    },

    footer:
    {
        paddingVertical: 30,
        paddingLeft: 15,
        paddingBottom: 15
        
    },

    textFooter:
    {
        fontSize:20,
    },

    line: 
    {
        width: '100%',
        height: 1,
        backgroundColor: '#D8D8D8',
    },

    buttonRow:
    {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        marginVertical:15,
    },

    buttonFooter:
    {
       width:100,
       height:45,
       justifyContent:'center',
       alignItems:'center',
    }


});

export default styles;