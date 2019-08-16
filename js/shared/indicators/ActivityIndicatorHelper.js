import React from 'react';
import { ActivityIndicator, Text } from 'react-native';

export const activityIndicatorHelper = {
    checkToShowActivityIndicator(isLoading) {
        if (isLoading) {
            return <ActivityIndicator></ActivityIndicator>;
        }
    }
}