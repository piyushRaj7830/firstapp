import { View, Text, SafeAreaView, ScrollView, ActionSheetIOS } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCard/>
        <FancyCard/>
        <ActionCard/>
       </ScrollView>    
    </SafeAreaView>
  )
}

export default App