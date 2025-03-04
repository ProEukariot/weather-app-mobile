import AsyncStorage from "@react-native-async-storage/async-storage";

export const setData = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (err) {
		console.error(err);
	}
};

export const getData = async (key) => {
	try {
		const value = await AsyncStorage.getItem(key);
		return value;
	} catch (err) {
		console.error(err);
	}
};
