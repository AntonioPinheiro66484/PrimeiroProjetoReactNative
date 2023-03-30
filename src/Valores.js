import React from 'react'
import {Text, View, Button}  from 'react-native'

const gerarNumeroAleatorio=()=>{
    var numero_aleatorio= Math.random();
    var numero_aleatorio1= Math.random();
    var numero_aleatorio2= Math.random();
    var numero_aleatorio3= Math.random();
    var numero_aleatorio4= Math.random();

    numero_aleatorio  = Math.floor(numero_aleatorio*50)
    numero_aleatorio1 = Math.floor(numero_aleatorio1*50)
    numero_aleatorio2 = Math.floor(numero_aleatorio2*50)
    numero_aleatorio3 = Math.floor(numero_aleatorio3*50)
    numero_aleatorio4 = Math.floor(numero_aleatorio4*50)
    var operacao = numero_aleatorio+numero_aleatorio1+numero_aleatorio3+numero_aleatorio2+numero_aleatorio4;

     alert(numero_aleatorio+"+"+numero_aleatorio1+"+"+numero_aleatorio2+"+"+numero_aleatorio3+"+"+numero_aleatorio4+"="+operacao);

}
export default (param)=>{
    console.warn(param)
    return(
        <View>
            <Text>Gerando numeros Aleatórios</Text>
            <Button
                title="Gerar numeros Aleatorios"
                onPress={gerarNumeroAleatorio}
            > 
            </Button>
        </View>
    )
}