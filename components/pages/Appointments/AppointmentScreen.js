import React, {useState, useEffect} from 'react';
import {StyleSheet, Alert, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';

const todayDate = new Date();

const AppointmentScreen = ({ navigation }) => {
    const [items, setItems] = useState({})

    const renderItem = (item) => {
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => Alert.alert(item.name, item.location)}
            >
                <Text>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <Agenda
                items={{
                    '2021-05-01': [{name: 'item 1 - any js object', location: 'Baabda'}],
                    '2021-05-02': [{name: 'item 2 - any js object'}],
                    '2021-05-07': [{name: 'item 3 - any js object'}],
                    '2021-05-09': [{name: 'item 4 - any js object'}],
                }}
                selected={todayDate}
                renderItem={renderItem}
                theme={{
                    agendaDayTextColor: 'black',
                    agendaDayNumColor: 'black',
                    agendaKnobColor: '#1498D5',
                    agendaTodayColor: '#1498D5',
                    todayTextColor: '#1498D5',
                    dayTextColor: 'black',
                    dotColor: '#1498D5',
                    selectedDayBackgroundColor: '#1498D5',
                    selectedDayTextColor: 'white',
                    backgroundColor: 'white',
                    calendarBackground: 'white',
                }}
            />
        </SafeAreaView>
    );
};

export default AppointmentScreen;

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 15,
        padding: 10,
        marginRight: 10,
        marginTop: 10
    }
})

