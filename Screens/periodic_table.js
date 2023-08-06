import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Table, TableWrapper, Row, Cell } from 'react-native-reanimated-table';

function _alertIndex (index) {
Alert.alert(`This is row ${index + 1}`);
}

export default function PeriodicTable() {

    const state = {
      // tableHead: ['Head',TouchableOpacity 'Head2', 'Head3', 'Head4'],
      tableData: [
        ['H', '', '', '', '', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', 'He'],
        ['Li', 'Be', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', 'B', 'C', 'N', 'O', 'F', 'Ne']
    
      ]
    }
  
    const Active_Element = (data, index) => (
      <TouchableOpacity onPress={() => _alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
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
                    <Cell key={cellIndex} data={cellIndex === 3 ? Active_Element(cellData, index) : cellData} textStyle={styles.text} style={styles.cell} />
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
    )
 
}

const styles = StyleSheet.create({
  // container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  container: {width: 600 },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' },
  cell: { width: 60, height: 60 }
});
