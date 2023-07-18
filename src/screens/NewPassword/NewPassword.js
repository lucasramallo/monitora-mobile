import React { useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Text } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";
import { paddingContainer } from "../../../assets/constants";
import { Ionicons } from "@expo/vector-icons";
import { primaryColor, secondaryColor, tertiaryColor } from "../../../assets/colors";