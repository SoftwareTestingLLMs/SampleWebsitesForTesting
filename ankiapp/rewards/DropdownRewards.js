export default class DropdownRewards {
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
    const rewardNames = Object.values(DropdownRewardNames);
    const rewardValues = Object.values(DropdownRewardValues);
    for (let i = 0; i < rewardNames.length; i++) {
        map.set(rewardNames[i],rewardValues[i]);
    }
    return map;
}

export const DropdownRewardNames = {
    DROPDOWN_1: "Dropdown 1",
    DROPDOWN_2: "Dropdown 2",
    DROPDOWN_3: "Dropdown 3",
    DROPDOWN_4: "Dropdown 4",
};

export const DropdownRewardValues = {
    DROPDOWN_1: [false, false, false, false],
    DROPDOWN_2: [false],
    DROPDOWN_3: [false, false, false],
    DROPDOWN_4: [false, false, false],
};

/*
const DropdownRewards = {
    FirstDropdown: [false, false, false, false],
    SecondDropdown: false,
    ThirdDropdown: [false, false, false],
    FourthDropdown: [false, false, false],
};
*/