import React, { useContext } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { DateTime } from 'luxon';
import { Button, Icon, Switch } from 'react-native-elements';
import { AppContext } from '../providers';
import { View, Text } from './Themed';

const { width, height } = Dimensions.get('window');

export default function RoverControls() {
  const { roverViewConfig, changeRoverViewConfig } = useContext(AppContext);
  const isFutureDate = (date: DateTime) =>
    !!(DateTime.now().startOf('day').toISO() <= date);
  const prevDate = () =>
    changeRoverViewConfig({
      date: DateTime.fromISO(roverViewConfig?.date)
        .minus({ days: 1 })
        .startOf('day')
        .toISO(),
    });
  const nextDate = () =>
    changeRoverViewConfig({
      date: DateTime.fromISO(roverViewConfig?.date)
        .plus({ days: 1 })
        .startOf('day')
        .toISO(),
    });
  const prevSol = () =>
    roverViewConfig?.sol >= 0 &&
    changeRoverViewConfig({ sol: roverViewConfig.sol - 1 });
  const nextSol = () =>
    changeRoverViewConfig({ sol: roverViewConfig?.sol + 1 });

  return (
    <View style={styles.controlsContainer}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.label}>
          {roverViewConfig?.dateType === 'sol'
            ? `Sol: ${roverViewConfig?.sol}`
            : `Date: ${DateTime.fromISO(roverViewConfig?.date).toLocaleString({
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}`}
        </Text>
        <Text style={styles.label}>Use Martian sol</Text>
        <Switch
          size="sm"
          onValueChange={() =>
            changeRoverViewConfig({
              dateType: roverViewConfig?.dateType === 'sol' ? 'date' : 'sol',
            })
          }
          value={roverViewConfig?.dateType === 'sol'}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Button
          type="outline"
          style={styles.dateButton}
          onPress={() =>
            roverViewConfig?.dateType === 'sol' ? prevSol() : prevDate()
          }
          disabled={
            roverViewConfig?.dateType === 'sol' && !!(roverViewConfig?.sol <= 0)
          }
          icon={<Icon name="arrow-left" size={15} color="white" />}
          title={`Previous ${roverViewConfig?.dateType}`}
        />
        <Button
          type="outline"
          style={styles.dateButton}
          onPress={() =>
            roverViewConfig?.dateType === 'sol' ? nextSol() : nextDate()
          }
          disabled={
            roverViewConfig?.dateType === 'date' &&
            isFutureDate(roverViewConfig?.date)
          }
          icon={<Icon name="arrow-right" size={15} color="white" />}
          iconRight
          title={`Next ${roverViewConfig?.dateType}`}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  controlsContainer: {
    padding: 20,
    flexDirection: width > 500 ? 'row' : 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  label: {
    paddingStart: 10,
    paddingEnd: 10,
  },
  dateButton: {
    margin: 10,
  },
});
