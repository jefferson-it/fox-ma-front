import { useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import styles from "../../Styles/mainStyles";
import Input from "../Layout/Forms/Input";
import Select from "../Layout/Forms/Select";


export default function HomePage(){
    const [moneyInfo, SetMoneyInfo] = useState([]);
    const [options, SetOptions] = useState([]);
    const [moneyRelation, SetMoneyRelation] = useState(GetActualData(selectedMoney) || {});
    const [selectedMoney, SetSelectedMoney] = useState("USD");
    const [convertFrom, SetConvertFrom] = useState("another");
    const [values, SetValues] = useState({money: "", brl: ""});

    useEffect(()=>{
        SetMoneyRelation(GetActualData(selectedMoney));        
    }, [selectedMoney])

    useEffect(()=>{
        SetValues({brl: parseFloat(moneyRelation?.low).toFixed(2)?.replace(".", ","), money: "1,00"})
    }, [moneyRelation])

    function GetActualData(KEY){
        return moneyInfo[KEY];
    }

    useEffect(()=>{
        fetch("https://economia.awesomeapi.com.br/all").then(d=>d.json())
        .then(d=>{
            SetMoneyInfo(d);
            SetOptions(op=>{
                let k = Object.keys(d);
                k.sort()
                for(let money of k){
                    d[money].name = d[money]?.name?.split("/")[0];
                    
                    op.push({label: d[money].name, value: money, key: `${d[money].name.replace(/ /g, "_")}-${money}`});

                    if(money === selectedMoney){
                        SetMoneyRelation(d[money]);
                        SetValues({brl: parseFloat(d[money].low).toFixed(2)?.replace(".", ","), money: "1,00"})
                    }
                }

                return op
            })
        })

    }, [])
    return (
        <View style={[styles.viewContainer, styles.mainPage]}>
            <Text style={styles.textTitle}>FOX MONEY ANALYTICS</Text>
            <Text style={styles.textDefault}>Valor a ser comparado: </Text>
            <View style={[styles.flexRow, {justifyContent: "center"}]}>
                <Input 
                    change={(v)=>{
                        let valueBRL;
                        let valueWRD;
                        if(convertFrom === "BRL"){
                            valueBRL = v?.replace(/,/g, ".");
                            valueWRD = parseFloat(parseFloat(valueBRL) / moneyRelation?.low || 0).toFixed(2)
                            valueBRL = parseFloat(valueBRL).toFixed(2)?.replace(".", ",")
                            valueWRD = valueWRD?.replace(".", ",")
                        }else{
                            valueWRD = v?.replace(/,/g, ".");
                            valueBRL = parseFloat(parseFloat(valueWRD) * moneyRelation?.low || 0).toFixed(2)
                            valueBRL = valueBRL.replace(".", ",")
                            valueWRD = parseFloat(valueWRD).toFixed(2)?.replace(".", ",")  
                        }
                        SetValues({money: valueWRD, brl: valueBRL})
                    }}
                    keyType={"numeric"}
                    holder={`Converter de ${convertFrom === "BRL"? "Real Brasileiro": moneyRelation?.name }`}/>
            </View>
            <Text style={styles.textDefault}>Converter de: </Text>
            <Select holder={"Selecione a moeda de conversão"} options={[{label: "BRL", value: "BRL"}, {label: "Moeda selecionada", value: "another"}]} value={convertFrom} changeValue={(e)=> SetConvertFrom(e)}/>
            <Text style={styles.textDefault}>Moeda a ser comparada:</Text>
            { options.length? <Select holder={"Selecione a moeda que deseja converter para Real"} options={options} value={selectedMoney} changeValue={(e)=> SetSelectedMoney(e)}/>: <></>}
            { moneyRelation?.name? <Text style={styles.textDefault}>{values.money || 0} {moneyRelation?.name} é igual à aproximadamente R$:{values.brl || 0}</Text>: <></>}
        </View>
    )
}