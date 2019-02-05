import React from 'react';
import { Platform,StyleSheet,View, Text } from 'react-native';
import { AppLoading, Asset, Icon } from 'expo';
//import PieChart from 'react-native-pie-chart';
import { PieChart } from 'react-native-svg-charts'
import { Circle, G, Image, Line } from 'react-native-svg'

// export default class PieChartCustom extends React.Component{
//     render() {
//         return (
//             <View style={styles.pieChartContainer}>
//                 {/* <Pie
//                     radius={100}
//                     innerRadius={60}
//                     series={}
//                     colors={} 
//                 /> */}
//                 <PieChart
//                     chart_wh={100}
//                     series={[22,13,10,17,16,22]}
//                     sliceColor={['#ffff00', '#ff0000', '#00a9ff', '#049606', 'ffb800', '#00ff00']}
//                     doughnut={true}
//                     coverRadius={0.45}
//                     coverFill={'#FFF'}
//                 />
//                 <Icon.Ionicons
//                     name = {'md-create'}
//                     size = {25}
//                     color = 'red'
//                     style = {styles.createIcon}
//                 />
//                 <Icon.Ionicons
//                     name = {'md-create'}
//                     size = {25}
//                     color = 'red'
//                     style = {styles.createIcon}
//                 />
//                 <Icon.Ionicons
//                     name = {'md-create'}
//                     size = {25}
//                     color = 'red'
//                     style = {styles.createIcon}
//                 />
//                 <Icon.Ionicons
//                     name = {'md-create'}
//                     size = {25}
//                     color = 'red'
//                     style = {styles.createIcon}
//                 />
//                 <Icon.Ionicons
//                     name = {'md-create'}
//                     size = {25}
//                     color = 'red'
//                     style = {styles.createIcon}
//                 />
//                 <Icon.Ionicons
//                     name = {'md-create'}
//                     size = {25}
//                     color = 'red'
//                     style = {styles.createIcon}
//                 />
//             </View>
//         );
//     }
// };
// series={[22,13,10,17,16,22]}
// sliceColor={['#ffff00', '#ff0000', '#00a9ff', '#049606', 'ffb800', '#00ff00']}

export default class PieChartCustom extends React.Component{
    render() {
        const data = [
            {
                key: 1,
                amount: 22,
                svg: { fill: '#ffff00' },
            },
            {
                key: 2,
                amount: 13,
                svg: { fill: '#ff0000' }
            },
            {
                key: 3,
                amount: 10,
                svg: { fill: '#00a9ff' }
            },
            {
                key: 4,
                amount: 17,
                svg: { fill: '#049606' }
            },
            {
                key: 5,
                amount: 16,
                svg: { fill: '#ffb800' }
            },
            {
                key: 6,
                amount: 22,
                svg: { fill: '#00ff00' }
            }
        ]

        const Labels = ({ slices, height, width }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                        // <Line
                        //     x1={ labelCentroid[ 0 ] }
                        //     y1={ labelCentroid[ 1 ] }
                        //     x2={ pieCentroid[ 0 ] }
                        //     y2={ pieCentroid[ 1 ] }
                        //     stroke={ data.svg.fill }
                        // />
                        // <Circle
                        //     cx={ labelCentroid[ 0 ] }
                        //     cy={ labelCentroid[ 1 ] }
                        //     r={ 15 }
                        //     fill={ data.svg.fill }
                        // />
                    <G
                        key={index}
                        x={labelCentroid[ 0 ]}
                        y={labelCentroid[ 1 ]}
                    >
                        {/* <Icon.Ionicons
                            name = {'md-create'}
                            size = {25}
                            color = 'red'
                            style = {styles.createIcon}
                        /> */}
                        <Circle
                            r={18}
                            fill={'white'}
                        />
                        {/* <Image
                            x={-10}
                            y={10}
                            width={20}
                            height={20}
                            preserveAspectRatio="xMidYMid slice"
                            opacity="1"
                            href={Images.memes[ index + 1 ]}
                        /> */}

                    </G>
                )
            })
        }

        return (
            <View style={styles.pieChartContainer}>
            <PieChart
                style={{ height: 250 }}
                valueAccessor={({ item }) => item.amount}
                data={data}
                spacing={0}
                outerRadius={'95%'}
            >
                <Labels/>
            </PieChart>
            </View>
        )
        // return (
        //     <View style={styles.pieChartContainer}>
                
        //         <Icon.Ionicons
        //             name = {'md-create'}
        //             size = {25}
        //             color = 'red'
        //             style = {styles.createIcon}
        //         />
                
        //     </View>
        // );
    }
};

const styles = StyleSheet.create({
    pieChartContainer: {
        backgroundColor: "white",
        height: 250, 
        width: 250
    }
});