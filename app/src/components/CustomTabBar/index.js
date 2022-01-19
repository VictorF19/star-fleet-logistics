import React from 'react';

import { TabArea, TabItem } from './styles';

import PilotIcon from '../../assets/pilot.svg';
import ShipIcon from '../../assets/spaceship.svg';
import HomeIcon from '../../assets/home.svg';
import ContractIcon from '../../assets/contract.svg';
import ReportIcon from '../../assets/report.svg'; 

export default ({ navigation }) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName)
    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Pilots')}>
                <PilotIcon width="40" height="40" fill="#E4FF00" />
            </TabItem>
            <TabItem onPress={() => goTo('Ships')}>
                <ShipIcon width="40" height="40" fill="#E4FF00" />
            </TabItem>
            <TabItem onPress={() => goTo('Home')}>
                <HomeIcon width="50" height="50" fill="#E4FF00" />
            </TabItem>
            <TabItem onPress={() => goTo('Contracts')}>
                <ContractIcon width="40" height="40" fill="#E4FF00" />
            </TabItem>
            <TabItem onPress={() => goTo('Reports')}>
                <ReportIcon width="40" height="40" fill="#E4FF00" />
            </TabItem>
        </TabArea>
    )
}