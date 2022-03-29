import React from 'react'
import {Pie} from "react-chartjs-2"
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

function PieChart({formData}) {

    console.log(formData)

    const state = {
        labels: ['income','rent','expenses','savings'],
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: [
              '#B21F00',
              '#C9DE00',
              '#2FDE00',
              '#00A6B4',
              '#6800B4'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F'
            ],
            data: [formData.income, formData.rent, formData.expenses,formData.savings]
          }
        ]
      }

  return (
    <div>
    <Pie
      data={state}
      options={{
        title:{
          display:true,
          text:'Average Rainfall per month',
          fontSize:20
        },
        legend:{
          display:true,
          position:'right'
        }
      }}
    />
</div>
  )
}

export default PieChart