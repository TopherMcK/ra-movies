import React from 'react';
import { ActivityIndicator, Text } from 'react-native';

export const activityIndicatorHelper = {
    checkToShowActivityIndicator(isLoading) {
        if (!isLoading) {
            // console.log(" @@@@@@@@@@@@  SHOW ACTIVITY");
            return <ActivityIndicator></ActivityIndicator>;
        }
    }
}