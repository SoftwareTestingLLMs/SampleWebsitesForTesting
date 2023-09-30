class CreateDeckRewards {
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
    const rewardNames = Object.values(CreateDeckRewardNames);
    const rewardValues = Object.values(CreateDeckRewardValues);
    for (let i = 0; i < rewardNames.length; i++) {
        map.set(rewardNames[i], rewardValues[i]);
    }
    return map;
}

const CreateDeckRewardNames = {
    CHANGE_DECK: "Export Deck",
    CREATE_DECK: "Reset",
};

const CreateDeckRewardValues = {
    CHANGE_DECK: [false],
    CREATE_DECK: [false],
};

/*
//reward structure of create deck popup
const CreateDeckRewards = {
    ChangeDeck: false,
    CreateDeck: false,
};
*/