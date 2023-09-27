class DropdownRewards {
    constructor() {
        this.rewardMap = initializeRewardMap();
    }

    assignReward(rewardName) {
        this.rewardMap.set(rewardName, true);
    }

    get rewardMap() {
        return this.rewardMap;
    }
}

function initializeRewardMap() {
    const map = new Map();
    const rewardNames = Object.values(DropdownRewardNames);
    const rewardValues = Object.values(DropdownRewardValues);
    for (let i = 0; i < rewardNames.length; i++) {
        map.set(rewardNames[i],rewardValues[i]);
    }
    return map;
}

const DropdownRewardNames = {
    DROPDOWN_1: "Dropdown 1",
    DROPDOWN_2: "Dropdown 2",
    DROPDOWN_3: "Dropdown 3",
    DROPDOWN_4: "Dropdown 4",
};

const DropdownRewardValues = {
    DROPDOWN_1: [false, false, false, false],
    DROPDOWN_2: false,
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