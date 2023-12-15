// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import Card from './Card'; 

// import { CardsData } from './CardsData'; 

// const CardComp = () => {
//   return (
//     <View style={styles.cards}>
//       {CardsData.map((card, id) => (
//         <View style={styles.parentContainer} key={id}>
//           <Card
//             title={card.title}
//             color={card.color}
//             barValue={card.barValue}
//             value={card.value}
//             png={card.png}
//             series={card.series}
//           />
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     cards: {
//       flexDirection: 'row',
//       flexWrap: 'wrap',
//       justifyContent: 'space-between',
//       marginHorizontal: 10,
//       marginVertical: 10,
//     },
//     parentContainer: {
//       width: '100%',
//     },
//     cardsColumn: {
//       flexDirection: 'column',
//     },
//     parentContainerMobile: {
//       height: 9 * 8, // Assuming 1 rem is approximately 8 pixels
//     },
//     cardsMobile: {
//       width: '90%',
//     },
//   });
//   export default CardComp;  