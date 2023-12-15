// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import CircularProgress from 'react-native-circular-progress-indicator'
// import { UilTimes } from "@iconscout/react-unicons";
// import Chart from "react-native-chart-kit";

// // parent Card

// const Card = (props) => {
//   const [expanded, setExpanded] = useState(false);
//   return (
//     <>
//       {expanded ? (
//         <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
//       ) : (
//         <CompactCard param={props} setExpanded={() => setExpanded(true)} />
//       )}
//     </>
//   );
// };

// // Compact Card
// function CompactCard({ param, setExpanded }) {
//   const Png = param.png;
//   return (
//     <TouchableOpacity
//       style={[styles.compactCard, { backgroundColor: param.color.backGround }]}
//       onPress={setExpanded}
//     >
//       <View style={styles.radialBar}>
//         <CircularProgress
//           size={80}
//           width={8}
//           fill={param.barValue}
//           tintColor="#00e0ff"
//           backgroundColor="#3d5875"
//         >
//           {(fill) => (
//             <>
//               <Text style={{ color: "white" }}>{`${param.barValue}%`}</Text>
//               <Text style={{ color: "white" }}>{param.title}</Text>
//             </>
//           )}
//         </CircularProgress>
//       </View>
//       <View style={styles.detail}>
//         <Png />
//         <Text style={{ color: "white" }}>${param.value}</Text>
//         <Text style={{ color: "white" }}>Last 24 hours</Text>
//       </View>
//     </TouchableOpacity>
//   );
// }

// // Expanded Card
// function ExpandedCard({ param, setExpanded }) {
//   const chartConfig = {
//     backgroundGradientFrom: "#1E2923",
//     backgroundGradientTo: "#08130D",
//     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//   };

//   return (
//     <View style={[styles.expandedCard, { backgroundColor: param.color.backGround }]}>
//       <TouchableOpacity
//         style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}
//         onPress={setExpanded}
//       >
//         <UilTimes />
//       </TouchableOpacity>
//       <Text style={{ color: "white" }}>{param.title}</Text>
//       <View style={styles.chartContainer}>
//         <Chart
//           data={{
//             labels: [
//               "2018-09-19T00:00:00.000Z",
//               "2018-09-19T01:30:00.000Z",
//               "2018-09-19T02:30:00.000Z",
//               "2018-09-19T03:30:00.000Z",
//               "2018-09-19T04:30:00.000Z",
//               "2018-09-19T05:30:00.000Z",
//               "2018-09-19T06:30:00.000Z",
//             ],
//             datasets: [{ data: param.series }],
//           }}
//           width={300}
//           height={200}
//           chartConfig={chartConfig}
//           bezier
//         />
//       </View>
//       <Text style={{ color: "white" }}>Last 24 hours</Text>
//     </View>
//   );
// }




// const styles = StyleSheet.create({
//   compactCard: {
//     flex: 1,
//     height: 7 * 8, // Assuming 1 rem is approximately 8 pixels
//     borderRadius: 0.7 * 8,
//     color: 'white',
//     padding: 8,
//     position: 'relative',
//     cursor: 'pointer',
//   },
//   radialBar: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'flex-end',
//     gap: 8,
//   },
//   circularProgressbar: {
//     width: 4 * 8, // Assuming 1 rem is approximately 8 pixels
//     overflow: 'visible',
//   },
//   circularProgressbarPath: {
//     stroke: 'white',
//     strokeWidth: 12,
//     filter: 'drop-shadow(2px 4px 6px white)',
//   },
//   circularProgressbarTrail: {
//     display: 'none',
//   },
//   circularProgressbarText: {
//     fill: 'white',
//   },
//   radialBarText: {
//     fontSize: 17,
//     fontWeight: 'bold',
//   },
//   detail: {
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'flex-end',
//     justifyContent: 'space-between',
//   },
//   detailText1: {
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
//   detailText2: {
//     fontSize: 12,
//   },
//   expandedCard: {
//     position: 'absolute',
//     width: '60%',
//     height: '70%',
//     zIndex: 9,
//     left: 13 * 8, // Assuming 1 rem is approximately 8 pixels
//     borderRadius: 1 * 8, // Assuming 1 rem is approximately 8 pixels
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     padding: 8,
//   },
//   expandedCardText1: {
//     color: 'white',
//     fontSize: 26,
//     fontWeight: 'bold',
//     textShadow: '0px 0px 15px white',
//   },
//   expandedCardText2: {
//     color: 'rgb(236, 236, 236)',
//     fontSize: 15,
//   },
//   chartContainer: {
//     width: '70%',
//   },
//   // Media queries
//   expandedCard1200: {
//     top: 2 * 8, // Assuming 1 rem is approximately 8 pixels
//     height: '45%',
//     left: 6 * 8, // Assuming 1 rem is approximately 8 pixels
//   },
//   expandedCard768: {
//     top: 8 * 8, // Assuming 1 rem is approximately 8 pixels
//     height: '50%',
//     left: 25,
//     width: '80%',
//   },
// });

// export default Card;