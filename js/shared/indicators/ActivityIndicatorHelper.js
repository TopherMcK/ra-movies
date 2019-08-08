import React from 'react';
import { ActivityIndicator } from 'react-native';

export const activityIndicatorHelper = {
    checkToShowActivityIndicator(isLoading) {
        if (isLoading) {
            return <ActivityIndicator></ActivityIndicator>;
        } else {
            return null;
        }
    }
}