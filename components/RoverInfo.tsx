import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';

import { DateTime } from 'luxon';
import { AppContext } from '../providers';
import { Text, View } from './Themed';

export default function RoverInfo() {
  const { selectedRoverDetails } = useContext(AppContext);

  return (
    <View>
      {!selectedRoverDetails && <ActivityIndicator />}
      {selectedRoverDetails ? (
        <View style={styles.getStartedContainer}>
          <Text
            style={styles.roverInfo}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)"
          >
            Total photos: {selectedRoverDetails?.total_photos}
          </Text>
          <Text
            style={styles.roverInfo}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)"
          >
            Launch date:{' '}
            {DateTime.fromISO(selectedRoverDetails?.launch_date).toLocaleString(
              { month: 'long', day: 'numeric', year: 'numeric' },
            )}
          </Text>
          <Text
            style={styles.roverInfo}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)"
          >
            Landing date:{' '}
            {DateTime.fromISO(
              selectedRoverDetails?.landing_date,
            ).toLocaleString({
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  roverInfo: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
});
