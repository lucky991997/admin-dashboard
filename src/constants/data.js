import images from './images'


const data = { 
    user: {
        name: 'Trần Quốc Tuấn', 
        img : 'images.avt'
    },
    summary: [
        {
            title: 'Sales',
            subTitle: 'Total sales today',
            value: "$1.000",
            percent: 65,
        },
        {
            title: 'Orders',
            subTitle: 'Total orders today',
            value: "$2.000",
            percent: 99,
        },
        {
            title: 'Revenue',
            subTitle: 'Total revenue today',
            value: "$5.000",
            percent: 80,
        },
        {
            title: 'Visits',
            subTitle: 'Total visits today',
            value: "$10.000",
            percent: 50,
        },

    ],
    revenueSummary : {
        title: 'Revenue',
        value: '$909',
        chartData: {
            label: ['May', 'Jun', 'July', 'Aug', 'Sep','May', 'Jun', 'July', 'Aug', 'Sep'],
            data: [350, 500, 450, 300, 550, 350, 500, 450, 300, 550],
        },
    },
    overall: [
        {
            value: '300K',
            title: 'Orders'
        },
        {
            value: '9.876K',
            title: 'Customers'
        },
        {
            value: '1.234K',
            title: 'Products'
        },
        {
            value: '$5678',
            title: 'Revenue'
        }
    ],
    revenueByChannel: [
        {
            title: 'Direct',
            value: 70
        },
        {
            title: 'External search',
            value: 40
        },
        {
            title: 'Referal',
            value: 60
        },
        {
            title: 'Social',
            value: 30
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
    
}
export default data