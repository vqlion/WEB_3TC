import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Modal,
		View, TextInput } from "react-native";

//const { width } = Dimensions.get("window");

export function Commentaire() {
	
	// This is to manage Modal State
	const [isModalVisible, setModalVisible] = useState(false);

	// This is to manage TextInput State
	const [inputValue, setInputValue] = useState("");

	// Create toggleModalVisibility function that will
	// Open and close modal upon button clicks.
	const toggleModalVisibility = () => {
		setModalVisible(!isModalVisible);
		console.log("test");
		console.log(isModalVisible);
	};

	const eventHandlers = 
      {
        click() {
          setModalVisible(!isModalVisible)
          //sendToDB();
        },

      }


	return (
		<SafeAreaView style={styles.screen}>
        <div style={{float: 'right'}}>
            {/** We are going to create a Modal with Text Input. */}
			<Button title="Ecris un commentaire" onPress={toggleModalVisibility} />
        </div>
       <div style={{clear: 'both'}}></div>
        <div></div>
			

			{/** This is our modal component containing textinput and a button */}
			<Modal animationType="slide"
				transparent visible={isModalVisible}
				presentationStyle="overFullScreen"
				//onDismiss={toggleModalVisibility}
				>
				<View style={styles.viewWrapper}>
					<View style={styles.modalView}>
						<TextInput placeholder=""
								value={inputValue} style={styles.textInput}
								onChangeText={(value) => setInputValue(value)} />

						{/** This button is responsible to close the modal */}
						<Button title="Close" onPress={toggleModalVisibility}/>
					</View>
				</View>
			</Modal>
		</SafeAreaView>
	);
}

// These are user defined styles
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
	},
	viewWrapper: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(0, 0, 0, 0.2)",
	},
	modalView: {
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		top: "50%",
		left: "50%",
		elevation: 5,
		//transform: [{ translateX: -(width * 0.4) },
					//{ translateY: -90 }],
		height: 180,
		//width: width * 0.8,
		backgroundColor: "#fff",
		borderRadius: 7,
	},
	textInput: {
		//width: "80%",
		borderRadius: 5,
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderColor: "rgba(0, 0, 0, 0.2)",
		borderWidth: 1,
		marginBottom: 8,
	},
});