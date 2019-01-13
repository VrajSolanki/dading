// <ScrollView>
//       <View style={styles.container}>
//         <View style = {styles.box}>
//           <Text style = {styles.header}>
//               Dings
//           </Text>
//           <ScrollView contentContainerStyle={[styles.scrollContent, styles.staticContent]}
//   		  // Hide all scroll indicators
//             showsHorizontalScrollIndicator={true}
//             showsVerticalScrollIndicator={false}>
//           {movies.map((movie, index) => <Poster
//           movie={movie}
//           key={index}
//           />)}
//           </ScrollView>
//           </View>
//
//           <View  style = {styles.box}>
//             <Text style = {styles.header}>
//                 My Topics
//             </Text>
//             <ScrollView contentContainerStyle={styles.scrollContent}
//           // Hide all scroll indicators
//               showsHorizontalScrollIndicator={true}
//               showsVerticalScrollIndicator={false}
//               horizontal={true}>
//             {movies.map((movie, index) => <Poster
//             movie={movie}
//             key={index}
//             />)}
//             </ScrollView>
//             </View>
//
//             <View  style = {styles.box}>
//               <Text style = {styles.header}>
//                   Recommendaations
//               </Text>
//               <ScrollView contentContainerStyle={styles.scrollContent}
//             // Hide all scroll indicators
//                 showsHorizontalScrollIndicator={true}
//                 showsVerticalScrollIndicator={false}
//                 horizontal={true}>
//               {movies.map((movie, index) => <Poster
//               movie={movie}
//               key={index}
//               />)}
//               </ScrollView>
//               </View>
//
//               <View  style = {styles.box}>
//                 <Text style = {styles.header}>
//                     My Topics
//                 </Text>
//                 <ScrollView contentContainerStyle={styles.scrollContent}
//               // Hide all scroll indicators
//                   showsHorizontalScrollIndicator={false}
//                   showsVerticalScrollIndicator={false}
//                   horizontal={true}>
//                 {movies.map((movie, index) => <Poster
//                 movie={movie}
//                 key={index}
//                 />)}
//                 </ScrollView>
//                 </View>
//
//               <View  style = {[styles.box, styles.box1]}>
//                 <Text style = {styles.header}>
//                   Tren- Ding- ers!
//                 </Text>
//                 <ScrollView contentContainerStyle={styles.scrollContent}
//               // Hide all scroll indicators
//                   showsHorizontalScrollIndicator={false}
//                   showsVerticalScrollIndicator={false}
//                   horizontal={true}>
//                 {movies.map((movie, index) => <Poster
//                 movie={movie}
//                 key={index}
//                 />)}
//                 </ScrollView>
//                 </View>
//
//
//       </View>
// </ScrollView>
