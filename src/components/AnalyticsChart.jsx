import React, { useEffect, useRef, useState } from 'react'
import {Tabs} from 'flowbite-react'
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const AnalyticsChart = () => {
    const [chart, setChart] = useState(null);
    const chartRef = useRef(null);
    const tabsRef = useRef(null);
    const [activeTab, setActiveTab] = useState(0);

    const filterChart = (type) => {
      setActiveTab(type);
    };
  
    let records =  [
        {
          "date": "2023-10-12T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 268514.08,
          "period": "Day"
        },
        {
          "date": "2023-10-13T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 1547097.44,
          "period": "Day"
        },
        {
          "date": "2023-10-14T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 8111.7,
          "period": "Day"
        },
        {
          "date": "2023-10-15T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 152,
          "period": "Day"
        },
        {
          "date": "2023-10-16T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 1671033.53,
          "period": "Day"
        },
        {
          "date": "2023-10-17T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 102430,
          "period": "Day"
        },
        {
          "date": "2023-10-18T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 102433.71,
          "period": "Day"
        },
        {
          "date": "2023-10-19T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 2920,
          "period": "Day"
        },
        {
          "date": "2023-10-20T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 20037303.15,
          "period": "Day"
        },
        {
          "date": "2023-10-21T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 35433,
          "period": "Day"
        },
        {
          "date": "2023-10-22T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 5987935.47,
          "period": "Day"
        },
        {
          "date": "2023-10-23T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 1148817.61,
          "period": "Day"
        },
        {
          "date": "2023-10-24T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 1055677.02,
          "period": "Day"
        },
        {
          "date": "2023-10-25T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 2810,
          "period": "Day"
        },
        {
          "date": "2023-11-01T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 400,
          "period": "Day"
        },
        {
          "date": "2023-11-07T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 35474.99,
          "period": "Day"
        },
        {
          "date": "2023-11-08T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 20000,
          "period": "Day"
        },
        {
          "date": "2023-11-09T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 10000,
          "period": "Day"
        },
        {
          "date": "2023-11-10T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 1100,
          "period": "Day"
        },
        {
          "date": "2024-01-05T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 13001.71,
          "period": "Day"
        },
        {
          "date": "2024-01-10T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 201200,
          "period": "Day"
        },
        {
          "date": "2024-01-12T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 158208.33,
          "period": "Day"
        },
        {
          "date": "2024-01-13T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 201457.5,
          "period": "Day"
        },
        {
          "date": "2024-01-15T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 1558.44,
          "period": "Day"
        },
        {
          "date": "2024-01-17T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 617.5,
          "period": "Day"
        },
        {
          "date": "2024-01-18T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 1111.5,
          "period": "Day"
        },
        {
          "date": "2024-02-12T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 60000,
          "period": "Day"
        },
        {
          "date": "2024-02-13T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 50000,
          "period": "Day"
        },
        {
          "date": "2024-02-14T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 9457.13,
          "period": "Day"
        },
        {
          "date": "2024-02-15T00:00:00",
          "weekNumber": null,
          "month": null,
          "amount": 322000,
          "period": "Day"
        },
        {
          "date": null,
          "weekNumber": 41,
          "month": null,
          "amount": 1823875.22,
          "period": "Week"
        },
        {
          "date": null,
          "weekNumber": 42,
          "month": null,
          "amount": 27939488.86,
          "period": "Week"
        },
        {
          "date": null,
          "weekNumber": 43,
          "month": null,
          "amount": 2207304.63,
          "period": "Week"
        },
        {
          "date": null,
          "weekNumber": 44,
          "month": null,
          "amount": 400,
          "period": "Week"
        },
        {
          "date": null,
          "weekNumber": 45,
          "month": null,
          "amount": 66574.99,
          "period": "Week"
        },
        {
          "date": null,
          "weekNumber": 1,
          "month": null,
          "amount": 13001.71,
          "period": "Week"
        },
        {
          "date": null,
          "weekNumber": 2,
          "month": null,
          "amount": 560865.83,
          "period": "Week"
        },
        {
          "date": null,
          "weekNumber": 3,
          "month": null,
          "amount": 3287.44,
          "period": "Week"
        },
        {
          "date": null,
          "weekNumber": 7,
          "month": null,
          "amount": 441457.13,
          "period": "Week"
        },
        {
          "date": null,
          "weekNumber": null,
          "month": "10-2023",
          "amount": 31970668.71,
          "period": "Month"
        },
        {
          "date": null,
          "weekNumber": null,
          "month": "11-2023",
          "amount": 66974.99,
          "period": "Month"
        },
        {
          "date": null,
          "weekNumber": null,
          "month": "1-2024",
          "amount": 577154.98,
          "period": "Month"
        },
        {
          "date": null,
          "weekNumber": null,
          "month": "2-2024",
          "amount": 441457.13,
          "period": "Month"
        }
      ]
      const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
      };
      const formatMonthYear = (monthYearString) => {
        const [month, year] = monthYearString.split('-');
        const monthName = new Date(`${year}-${month}-01`).toLocaleString('en-US', { month: 'long' });
        return `${monthName} ${year}`;
      };
      let filteredChartData = activeTab === 0 ? records.filter(dt => dt.period =="Day") : activeTab ===1 ? records.filter(dt =>dt.period == "Week") : records.filter(dt => dt.period == "Month")

          // Initialize Chart.js chart
            let data = {
              labels: filteredChartData.map((item) =>
              item.period === 'Day'
                ? formatDate(item.date)
                : item.period === 'Week'
                ? `Week ${item.weekNumber}`
                : formatMonthYear(item.month)
              ),
              datasets: [
                {
                  label: 'Amount',
                  data: filteredChartData.map(item => item.amount),
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 1
                }
              ]
            }
            
        
    console.log(filteredChartData);
  return (
    <div>
        <div className='flex'>
          <p className='font-bold text-lg'>Analytics</p>
          <div className='ml-auto'>
            <Tabs ref={tabsRef} onActiveTabChange={(tab) => setActiveTab(tab)}>
              <Tabs.Item title="Day" onClick={() =>{ tabsRef.current?.setActiveTab(0); filterChart('Day')} }/>
              <Tabs.Item title="Week" onClick={() =>{ tabsRef.current?.setActiveTab(0); filterChart('Week')} }/>
              <Tabs.Item title="Month" onClick={() =>{ tabsRef.current?.setActiveTab(0); filterChart('Month')} }/>
              {/* <Tabs.Item title="Year">Year</Tabs.Item> */}
            </Tabs>
          </div>
        </div>
        <Line data={data}/>
    </div>
  )
}

export default AnalyticsChart