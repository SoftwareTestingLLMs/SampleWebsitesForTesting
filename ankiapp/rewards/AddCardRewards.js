
class AddCardRewards {
    constructor() {
        this.rewardMap = initializeRewardMap();
    }

    assignReward(rewardName, index) {
        this.rewardMap.set(rewardName[index], true);
    }

    getReward(rewardName, index){
        return this.rewardMap.get(rewardName)[index]
    }
    
    get rewardMap() {
        return this.rewardMap;
    }
}

function initializeRewardMap() {
    const map = new Map();
    const rewardNames = Object.values(AddCardRewardNames);
    const rewardValues = Object.values(AddCardRewardValues);
    for (let i = 0; i < rewardNames.length; i++) {
        map.set(rewardNames[i],rewardValues[i]);
    }
    return map;
}

const AddCardRewardNames = {
    INCREMENT: "Increment",
    ADD_CARD: "Add Card",
};


const AddCardRewardValues = {
    INCREMENT: [false, false, false],
    ADD_CARD: [false],
};

/*
const AddCardRewards = {
    Increment: [false, false, false],
    AddCard: false,
};
*/