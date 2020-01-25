import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
 
export default class ExampleFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Assignment', 'Due Date', 'Days Left', 'Weight', 'Edit', 'Delete'],
      tableData: [
        ['4X03', '01-28-2020', '2', '10%', '', ''],
        ['4X03', '01-28-2020', '2', '10%', '', ''],
        ['4X03', '01-28-2020', '2', '10%', '', '']
      ]
    }
  }
 
  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`); // action performed when clicking the button
  }
 
  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Edit</Text>
        </View>
      </TouchableOpacity>
    );
 
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={
                      cellIndex === (4 || 5) ? element(cellData, index) : cellData
                    } textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
        <View style={styles.btn2}>
          <Text style={styles.btnText}>Add</Text>
        </View>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 40, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btn2: { width: 70, height: 30, backgroundColor: '#78B7BB',  borderRadius: 8 },
  btnText: { textAlign: 'center', color: '#fff' }
});