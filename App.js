import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LibraryList from './src/components/LibraryList';

const App = () => {
  return (
  <SafeAreaProvider>
    <Provider store={createStore(reducers)}>
      
        <View>
          <Header
            containerStyle={{
              backgroundColor: 'red',
              height: 80
            }}
            leftComponent={{ icon: 'menu', color: 'white' }}
            rightComponent={{ icon: 'home', color: 'white'}}
            centerComponent={{ text: 'Tech Stack', style: { color: 'white', fontSize: 18 }}}
          />
          <LibraryList/>
        </View>
      
    </Provider>
  </SafeAreaProvider>
  )
}

export default App;