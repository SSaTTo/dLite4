import React, {Component,Fragment} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Dimensions} from 'react-native';
import RRContent from '../components/RRContent';
import RRContent2 from '../components/RRContent2';
import { Header, Icon } from 'react-native-elements';



export default class RecordRegister extends React.Component {
  state={
    count:0
  }
  constructor(props){
    super(props);
    this.state = {
      disabled: false,
      count:0
    }
  }
  _updateCount = () => {
    this.setState({
      count:this.state.count+1
    });
  };
  render() {
    return (
     <>
      <Header
      leftComponent={{ icon: 'keyboard-arrow-left', color: 'blue' }}
      centerComponent={{text:{fontSize:'200'}, text: '활동기록', style: { color: 'blue' } }}
      
      backgroundColor={"#fff"}
    />
             <View style={styles.header}>
                <TouchableOpacity 
                style={styles.button}
                onPress={()=>this._updateCount()}
                >
                    <Text style={styles.text}>+</Text>
                </TouchableOpacity>
            </View>
            
        <View style={styles.container}>

            {/* 밑에 완료버튼 빼고 나머지 화면 스크롤 */}
            <ScrollView style={styles.scroll}>

                {/* 맨 위 활동 내용 적는 곳 */}
                <View style={styles.header}>
                    <TextInput 
                        style={styles.titleInput}
                        placeholder={"활동 내용을 입력하세요."}
                        placeholderTextColor={"#fff"}
                    />           
                </View>

                {/* 사진 넣는 곳 */}
                <RRContent />
                {this.state.count>=1?<RRContent2 />:null}
                {this.state.count>=2?<RRContent2 />:null}
                {this.state.count>=3?<RRContent2 />:null}
                {this.state.count>=4?<RRContent2 />:null}
                {this.state.count>=5?<RRContent2 />:null}
                {this.state.count>=6?<RRContent2 />:null}
                

            </ScrollView>

            {/* 완료버튼 */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>완료</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        </>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff'
  },
  scroll:{
    flex:1,
    padding:10
  },
  header:{
      width:'100%',
      height:50,
      backgroundColor:'#32AAFF',
      flexDirection:"row",
      justifyContent: "center",
      borderRadius: 10,
      marginBottom: 20
  },
  footer:{
    width: '100%',
    height: 70,
    backgroundColor: '#5CEEE6'
  },
  button:{
      flex:1,
      backgroundColor: '#50C8FF',
      alignItems: 'center',
      justifyContent: 'center'
  },
  text:{
      fontSize: 20,
      color: '#fff'
  },
  titleInput:{
      color: '#fff',
    //   backgroundColor: '#32AAFF',
      fontSize: 20
  }
});
