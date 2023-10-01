export default class PreferencesPageRewards {
    constructor() {
        this.rewardMap = initializeRewardMap();
    }

    assignReward(rewardName, index) {
        const reward_array = this.rewardMap.get(rewardName)
        reward_array[index] = true
        this.rewardMap.set(rewardName, reward_array);
    }

    getReward(rewardName, index) {
        return this.rewardMap.get(rewardName)[index]
    }
}

export function initializeRewardMap() {
    const map = new Map();
    const rewardNames = Object.values(PreferencesPageRewardNames);
    const rewardValues = Object.values(PreferencesPageRewardValues);
    for (let i = 0; i < rewardNames.length; i++) {
        map.set(rewardNames[i],rewardValues[i]);
    }
    return map;
}

export const PreferencesPageRewardNames = {
    TAB: "Tab",
    CHECKBOX_1: "Checkbox 1",
    CHECKBOX_2: "Checkbox 2",
    CHECKBOX_3: "Checkbox 3",
    CHECKBOX_4: "Checkbox 4",
    CHECKBOX_5: "Checkbox 5",
    CHECKBOX_6: "Checkbox 6",
    CHECKBOX_7: "Checkbox 7",
    CHECKBOX_8: "Checkbox 8",
    CHECKBOX_9: "Checkbox 9",
    CHECKBOX_10: "Checkbox 10",
    CHECKBOX_11: "Checkbox 11",
    CHECKBOX_12: "Checkbox 12",
    CHECKBOX_13: "Checkbox 13",
    CHECKBOX_14: "Checkbox 14",
    DROPDOWN_1: "Dropdown 1",
    DROPDOWN_2: "Dropdown 2",
    DROPDOWN_3: "Dropdown 3",
    DROPDOWN_4: "Dropdown 4",
    TEXT_BUTTON: "Text Button",
    INCREMENT_DECREMENT_ELEMENT_1: "Increment Decrement Element 1",
    INCREMENT_DECREMENT_ELEMENT_2: "Increment Decrement Element 2",
    INCREMENT_DECREMENT_ELEMENT_3: "Increment Decrement Element 3",
    INCREMENT_DECREMENT_ELEMENT_4: "Increment Decrement Element 4",
    INCREMENT_DECREMENT_ELEMENT_5: "Increment Decrement Element 5",
};

export const PreferencesPageRewardValues = {
    TAB: [false, false, false, false],
    CHECKBOX_1: [false,false],
    CHECKBOX_2: [false,false],
    CHECKBOX_3: [false,false],
    CHECKBOX_4: [false,false],
    CHECKBOX_5: [false,false],
    CHECKBOX_6: [false,false],
    CHECKBOX_7: [false,false],
    CHECKBOX_8: [false,false],
    CHECKBOX_9: [false,false],
    CHECKBOX_10: [false,false],
    CHECKBOX_11: [false,false],
    CHECKBOX_12: [false,false],
    CHECKBOX_13: [false,false],
    CHECKBOX_14: [false,false],
    DROPDOWN_1: [false,false,false],
    DROPDOWN_2: [false,false,false],
    DROPDOWN_3: [false,false],
    DROPDOWN_4: [false,false],
    TEXT_BUTTON: [false],
    INCREMENT_DECREMENT_ELEMENT_1: [false,false], 
    INCREMENT_DECREMENT_ELEMENT_2: [false,false],
    INCREMENT_DECREMENT_ELEMENT_3: [false,false],
    INCREMENT_DECREMENT_ELEMENT_4: [false,false],
    INCREMENT_DECREMENT_ELEMENT_5: [false,false],
}

/*
const PreferencesPageRewards = {
    Tab: [false, false, false, false],
    Checkbox1: [false,false],
    Checkbox2: [false,false],
    Checkbox3: [false,false],
    Checkbox4: [false,false],
    Checkbox5: [false,false],
    Checkbox6: [false,false],
    Checkbox7: [false,false],
    Checkbox8: [false,false],
    Checkbox9: [false,false],
    Checkbox10: [false,false],
    Checkbox11: [false,false],
    Checkbox12: [false,false],
    Checkbox13: [false,false],
    Checkbox14: [false,false],
    Dropdown1Item: [false,false,false],
    Dropdown2Item: [false,false,false],
    Dropdown3Item: [false,false],
    Dropdown4Item: [false,false],
    TextButtonClick: false,
    IncrementDecrementElement1: [false,false],
    IncrementDecrementElement2: [false,false],
    IncrementDecrementElement3: [false,false],
    IncrementDecrementElement4: [false,false],
    IncrementDecrementElement5: [false,false],
};
*/