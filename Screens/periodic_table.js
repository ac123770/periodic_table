import { Modal, View, Text, StyleSheet, Style, Pressable, Button, TouchableOpacity } from 'react-native'
import React, { cloneElement } from 'react'
import { Table, TableWrapper, Row, Rows, Cell } from 'react-native-reanimated-table';
import { elements } from "../assets/elements";
//import { Modal, Portal, PaperProvider } from 'react-native-paper';

function _alertIndex (index) {
Alert.alert(`This is row ${index + 1}`);
}

var selected_element="H"

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
          return [styles.btn, {backgroundColor:"green"}]
        case "Alkaline Earth Metal":
          return [styles.btn, {backgroundColor:"red"}]
        case "Lanthanoid":
          return [styles.btn, {backgroundColor:"grey"}]
        case "Actinoid":
          return [styles.btn, {backgroundColor:"orange"}]
        case "Transition Metals":
          return [styles.btn, {backgroundColor:"lightgreen"}]
        case "Alkali Metal":
          return [styles.btn, {backgroundColor:"tan"}]
        default:
          return styles.btn
      }
    }

    const Active_Element = (element, index) => (
      <TouchableOpacity onPress={()=> {selected_element=element; showModal()}}>
        <View style={typeStyle(elements[element].type)}>
          <Text style={styles.cell}>{elements[element].num}</Text>
          <Text style={styles.elementSymbol}>{element}</Text>
          <Text style={styles.elementName} >{elements[element].name}</Text>
          <Text style={styles.elementMass} >{elements[element].mass}</Text>
          {/* <Text style={styles.elementType} >{elements[element].type}</Text> */}
          {/* <Text style={styles.elementInspiration} >{elements[element].inspiration}</Text> */}
        </View>
      </TouchableOpacity>
    );
    
    const Modal_Content = () => (

      <View style={styles.modalView}>
        <Text style={styles.modalElementName}> {elements[selected_element].name} </Text>
        <Text> </Text>
        <Text style={styles.modalText}>{elements[selected_element].inspiration}</Text>
        <View style= {styles.modalTable}>
          <Table borderstyle={{borderColor: 'transparent'}}>
            <Rows data={
              [
                ["Atomic Number", elements[selected_element].num],
                ["Atomic Mass", elements[selected_element].mass],
                ["Classification", elements[selected_element].type]
              ]
              } textStyle={styles.modalTableText}/>
          </Table>
        </View>
        <Text> </Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setVisible(!visible)}>
          <Text style={styles.textStyle}>Close Window</Text>
        </Pressable>
      </View>

    ); 


    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20, alignSelf:"center", left: 300, top: 500 };

    return (
   
      <View style={styles.container}>
     
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setVisible(!visible);
          }}>
          <View style={styles.centeredView}>
            {Modal_Content ()}
          </View>
        </Modal>

        
        <Table borderstyle={{borderColor: 'transparent'}}>
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
  container: {width: 500},
  head: { height: 40, backgroundColor: 'green' },
  text: { margin: 6 },
  row: { flexDirection: 'row' },
  btn: { width: 70, height: 77, backgroundColor: 'hotpink',  borderRadius: 2 },
  elementSymbol: { textAlign: 'center', color: '#fff', fontSize: 20 },
  elementName: { textAlign: 'center', fontSize: 10 },
  elementMass: { textAlign: 'center', fontSize: 12 },
  cell: { width: 75, height: 80 },
  modalElementName: {fontWeight: 'bold', backgroundColor: 'darkgreen', color: 'gold', fontSize: 20},
  modalText: {backgroundColor:"lightgray",  color:"blue", marginBottom: 15, textAlign: 'center', },
  modalTable:{width:"100%", flex:1},
  modalTableText: {color: "green", fontSize: 20 },
  modal: {margin: 0},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    
  },
  
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    height: "80%",
    width: "90%",
    maxWidth: 500,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
