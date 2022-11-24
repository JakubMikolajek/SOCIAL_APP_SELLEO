import {Dimensions, StyleSheet} from "react-native";
import {GlobalStyles} from "../../constants/GlobalStyles";

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

export const dashboardStyles = StyleSheet.create({
    singlePost: {
        container: {
            alignItems: 'center',
            width: windowWidth,
            borderBottomWidth: 1,
            borderColor: GlobalStyles.colors.primary100
        },
        innerContainer: {
            marginVertical: 10,
            width: windowWidth,
        },
        textContainer:{
            marginLeft: 20,
        },
        textContainerAlt: {
            height: 100,
            justifyContent: "center"
        },
        image: {
            alignSelf: "center",
            width: windowWidth * 0.95,
            height: 300,
        },
        nameText: {
            fontSize: 16,
            fontWeight:"600",
            color: GlobalStyles.colors.black,
            marginBottom: 10,
        },
        pressed: {
            opacity: 0.5
        },
        row:{
            flexDirection: "row",
            justifyContent:"space-between"
        },
        likeContainer:{
            alignItems:"center",
            justifyContent:"center",
            marginRight: 20
        }
    },
    singleUser: {
        form:{
            alignSelf: "flex-start",
            flex:1
        },
        container: {
            width: 70,
            height: 80,
            justifyContent: "center",
            alignItems: "center",
        },
        image: {
            width: 50,
            height: 50,
            borderRadius: 25,
            borderColor: GlobalStyles.colors.primary100,
            borderWidth: 2

        },
        text: {
            fontSize: 10
        },
        buttonPressed: {
            opacity: 0.5
        }
    },
    comments:{
        container:{
            height: windowHeight * 0.3
        },
        singleCommentContainer:{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row"
        },
        margin:{
            marginLeft: 10
        },
        image:{
            width:30,
            height:30,
            borderRadius: 75,
            borderColor: GlobalStyles.colors.primary200
        },
        pressed:{
            opacity: 0.5,
            borderRadius:25
        }
    },
    gridPost:{
        container: {
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            margin: 5,
        },
        pressed: {
            opacity: 0.5
        },
        image: {
            width: 100,
            height: 100
        }
    }
})