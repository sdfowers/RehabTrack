import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        rowGap: 15,
        padding: 10,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    navButton: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 7,
        borderColor: 'black',
        textAlign: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    selectionContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        columnGap: 10,
        rowGap: 10,
    },
    selectionDropdown: {
        width: 220,
    },
    selectorButton: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexGrow: 1,
        backgroundColor: '#DDDDDD',
        padding: 10,
        
        borderRadius: 7,
        borderColor: 'black',
        textAlign: 'center',
    },
    repContainer: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 15,
        padding: 10,
    },
    repCounter: {
        flexGrow: 1,
        minWidth: 200,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#DDDDDD'
    },
    repCounterText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    repCounterNum: {
        fontSize: 50,
        fontWeight: '900',
    },
    repAdd: {
        minWidth: 300,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#66ff66'
    },
    repMinus: {
        minWidth: 300,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#ff6677'
    },
    infoContainer: {
        minWidth: 200,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#DDDDDD'
    },
    infoItem: {
        flexGrow: 1,
        minWidth: 200,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        padding: 10,
    },
    infoItemButton: {
        backgroundColor: '#969595',
        padding: 20,
        borderRadius: 10,
    }
});

export { styles }