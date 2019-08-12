import React from "react";
import PropTypes from "prop-types";
import { Animated, TouchableOpacity, } from "react-native";

export class ButtonScaler extends React.Component {
    constructor(...args) {
        super(...args);
        const props = this.props;
        this.onPressIn = this.onPressIn.bind(this);
        this.onPressOut = this.onPressOut.bind(this);
        this.scaleAnimation = new Animated.Value(props.defaultScale);
    }

    render() {
        const props = this.props;

        return (
            <Animated.View
                    style={[{
                        transform: [
                            {scale: this.scaleAnimation},
                        ]},
                    ]}
                >
            <TouchableOpacity
                {...props}
                onPressIn={this.onPressIn}
                onPressOut={this.onPressOut}
            >
            </TouchableOpacity>
            </Animated.View>
        );
    }

    onPressIn(...args) {
        const props = this.props;

        Animated.spring(this.scaleAnimation, {
            bounciness: 0,
            toValue: props.activeScale,
            useNativeDriver: props.useNativeDriver,
        }).start();

        if (props.onPressIn) {
            props.onPressIn(...args);
        }
    }

    onPressOut(...args) {
        const props = this.props;

        Animated.spring(this.scaleAnimation, {
            bounciness: 0,
            toValue: props.defaultScale,
            useNativeDriver: props.useNativeDriver,
        }).start();

        if (props.onPressOut) {
            props.onPressOut(...args);
        }
    }
}

// ButtonScaler.propTypes = {
//     ...TouchableOpacity.propTypes,
//     style: Animated.View.propTypes.style,
//     defaultScale: PropTypes.number.isRequired,
//     activeScale: PropTypes.number.isRequired,
//     tension: PropTypes.number.isRequired,
//     friction: PropTypes.number.isRequired,
//     pressInTension: PropTypes.number,
//     pressInFriction: PropTypes.number,
//     pressOutTension: PropTypes.number,
//     pressOutFriction: PropTypes.number,
//     useNativeDriver: PropTypes.bool,
// };

ButtonScaler.defaultProps = {
    defaultScale: 1,
    activeScale: 1.2,
    tension: 150,
    friction: 2,
    useNativeDriver: true,
};