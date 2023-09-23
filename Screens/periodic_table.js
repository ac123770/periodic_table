import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Table, TableWrapper, Row, Cell } from 'react-native-reanimated-table';
import { elements } from "../assets/elements";

function _alertIndex (index) {
Alert.alert(`This is row ${index + 1}`);
}

export default function PeriodicTable() {

    const state = {
      // tableHead: ['Head',TouchableOpacity 'Head2', 'Head3', 'Head4'],
      tableData: [
        ['H', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'He'],
        ['Li', 'Be', '', '', '', '', '', '', '', '', '', '', 'B', 'C', 'N', 'O', 'F', 'Ne'],
        ['Na', 'Mg', '', '', '', '', '', '', '', '', '', '', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar'],
        ['K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr'],
        ['Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe'],
        ['Cs', 'Ba', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Ti', 'Pb', 'Bi', 'Po', 'At', 'Rn'],
        ['Fr', 'Ra', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og'],
        ['La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb'],
        ['Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No']
      ]
    }
  
    const typeStyle = function(element_type){      
      switch(element_type){
        case "Noble Gas":
          return styles.btn_noble_gas
          case "Alkaline Earth Metal":
            return styles.btn_alkaline_earth_metal
        default:
          return styles.btn
      }
    }

    const Active_Element = (data, index) => (
      <TouchableOpacity onPress={() => _alertIndex(index)}>
        <View style={typeStyle(elements[data].type)}>
          <Text style={styles.Cell}>{data}</Text>
          <Text style={styles.elementSymbol}>{data}</Text>
          <Text style={styles.elementName} >{elements[data].name}</Text>
          <Text style={styles.elementMass} >{elements[data].mass}</Text>
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
                    <Cell key={cellIndex} data={cellData != ""? Active_Element (cellData, 0): '' } textStyle={styles.text} style={styles.cell} />
                  ))
                  //cellData === 'H' ? Active_Element(cellData, index) : cellData
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
  btn: { width: 70, height: 77, backgroundColor: 'hotpink',  borderRadius: 2 },
  btn_noble_gas: { width: 70, height: 77, backgroundColor: 'green',  borderRadius: 2 },
  btn_alkaline_earth_metal: { width: 70, height: 77, backgroundColor: 'red',  borderRadius: 2 },
  elementSymbol: { textAlign: 'center', color: '#fff', fontSize: 20 },
  elementName: { textAlign: 'center', fontSize: 10 },
  elementMass: { textAlign: 'center', fontSize: 12 },
  cell: { width: 75, height: 80 }
});
