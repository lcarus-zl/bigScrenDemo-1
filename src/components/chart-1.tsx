import React, { useEffect, useRef } from "react";
import * as echarts  from 'echarts';


export const Chart1 = ()=>{

  const px = (n) => n / 2420 * (window as any).pageWidth
  
  const divRef = useRef(null)
  useEffect(()=>{
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(divRef.current);
    // 绘制图表
    myChart.setOption({
      textStyle:{
        fontSize:px(12),
        color: '#79839e'
      },
      xAxis: {
        data: ['城关区', '七里河区', '西固区', '安宁区', '红谷区', '永登区','皋兰区','榆中区','兰州新区'],
        axisTick:{
          show:false
        },
        axisLabel:{
          fontSize:px(12),
          formatter(val){
            if(val.length > 2){
              const array = val.split('')
              array.splice(2,0,'\n')
              return array.join('')
            }else{
              return val
            }
          }
        },
      },
      grid:{
        x:px(40),
        y:px(40),
        x2:px(40),
        y2:px(40),
        containLabel:true,
      },
      yAxis: {
        splitLine:{show:false},
        axisLine:{
          show:true,
          lineStyle:{
            color: '#083B70'
          }
        },
        axisLabel:{
          fontSize:px(12)
        }
      },
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [10, 20, 36, 41, 15, 26,37,18,29]
        }
      ]
    });
    
  },[])
  return(
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className='chart'>

      </div>
    </div>
  )
}