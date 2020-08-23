import React, { Component } from 'react';
import CountUp from 'react-countup';
import { Card, Box } from '@material-ui/core';
import { Pane, Text } from 'evergreen-ui';
const axios = require('axios');

class OrdersCard extends Component {
    orders = 0;
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.getChartData();
        axios
            .get('https://supereatsserver.azurewebsites.net/orders/')
            .then((res) => {
                console.log(res.data.length);
                this.orders = res.data.length;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getChartData() {
        this.setState({
            chartData: {
                labels: ['Alex', 'Faraz', 'Rhythm', 'Alif'],
                datasets: [
                    {
                        label: 'Power Level',
                        data: [9000, 3000, 4000, 11000],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                        ],
                        borderWidth: 1,
                        borderColor: '#777',
                        hoverBorderWidth: 3,
                        hoverBorderColor: '#000',
                    },
                ],
            },
            options: {
                title: {
                    display: true,
                    text: 'Largest Cities In Massachusetts',
                    fontSize: 25,
                },
                legend: {
                    display: true,
                    position: 'right',
                    labels: {
                        fontColor: '#000',
                    },
                },
                layout: {
                    padding: {
                        left: 50,
                        right: 0,
                        bottom: 0,
                        top: 0,
                    },
                },
                tooltips: {
                    enabled: true,
                },
            },
        });
    }

    render() {
        return (
            <div>
                <br />
                <Pane
                    elevation={1}
                    float="left"
                    width={600}
                    height={350}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <Text size={700} fontWeight={'1000'} fontSize={'1000'}>
                        Orders
                    </Text>
                    <br></br>
                    <CountUp
                        start={-875}
                        end={this.orders}
                        duration={2.75}
                        separator=" "
                        decimals={0}
                        decimal=","
                        suffix=" orders!"
                        onEnd={() => console.log('Ended! 👏')}
                        onStart={() => console.log('Started! 💨')}
                        delay={0}
                    >
                        {({ countUpRef, start }) => (
                            <div>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                </Pane>
            </div>
        );
    }
}

export default OrdersCard;
