import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export const activityIndicatorHelper = {
    checkToShowActivityIndicator(isLoading) {
        if (isLoading) {
            return <View style={{flex: 1}}><ActivityIndicator style={{paddingHorizontal: '25%', paddingVertical: '40%'}} size='large'></ActivityIndicator></View>;
        }
    }
}