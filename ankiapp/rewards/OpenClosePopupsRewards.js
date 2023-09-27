class OpenClosePopupsRewards {
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
    const rewardNames = Object.values(OpenClosePopupsRewardNames);
    const rewardValues = Object.values(OpenClosePopupsRewardValues);
    for (let i = 0; i < rewardNames.length; i++) {
        map.set(rewardNames[i],rewardValues[i]);
    }
    return map;
}

const OpenClosePopupsRewardNames = {
    ADD_CARD: "Add Card",
    LEADS_TO_EXTERNAL_WEBSITE: "Leads to external website",
    ANKI_LOGIN: "Anki Login",
    UNSUCCESSFUL_LOGIN: "Unsuccessful Login",
    IMPORT_DECK: "Import Deck",
    EXPORT_DECK: "Export Deck",
    DECK_ALREADY_EXISTS: "Deck Already Exists",
    DELETE_DECK: "Delete Deck",
    CREATE_DECK: "Create Deck",
    AT_LEAST_ONE_DECK: "At least one deck",
    ALREADY_FIVE_DECKS: "Already five decks",
    ABOUT_PAGE: "About page",
    PREFERENCES_PAGE: "Preferences page",
    CHECK_MEDIA: "Check media",
    STUDY_DECK: "Study deck",
    BOOK_LOGO: "Book logo",
    SWITCH_PROFILE: "Switch profile",
    ADD_PROFILE: "Add profile",
    RENAME_PROFILE: "Rename profile",
    DOWNGRADE: "Downgrade",
    AT_LEAST_ONE_CARD: "At least one card",
    PROFILE_EXISTS: "Profile exists",
    AT_LEAST_ONE_PROFILE: "At least one profile",
    EDIT_CARD: "Edit card",
};

const OpenClosePopupsRewardValues = {
    ADD_CARD: [false, false],
    LEADS_TO_EXTERNAL_WEBSITE: [false,false],
    ANKI_LOGIN: [false,false],
    UNSUCCESSFUL_LOGIN: [false,false],
    IMPORT_DECK: [false,false],
    EXPORT_DECK: [false,false],
    DECK_ALREADY_EXISTS: [false,false],
    DELETE_DECK: [false,false],
    CREATE_DECK: [false,false],
    AT_LEAST_ONE_DECK: [false,false],
    ALREADY_FIVE_DECKS: [false,false],
    ABOUT_PAGE: [false,false],
    PREFERENCES_PAGE: [false,false],
    CHECK_MEDIA: [false,false],
    STUDY_DECK: [false,false],
    BOOK_LOGO: [false,false],
    SWITCH_PROFILE: [false,false],
    ADD_PROFILE: [false,false],
    RENAME_PROFILE: [false,false],
    DOWNGRADE: [false,false],
    AT_LEAST_ONE_CARD: [false,false],
    PROFILE_EXISTS: [false,false],
    AT_LEAST_ONE_PROFILE: [false,false],
    EDIT_CARD: [false,false],
}

/*
const OpenClosePopupsRewards = {
    AddCard: [false, false],
    LeadsToExternalWebsite: [false, false],
    AnkiLogin: [false, false],
    UnsucessfulLogin: [false, false],
    ImportDeck: [false, false],
    ExportDeck: [false, false],
    DeckAlreadyExists: [false, false],
    DeleteDeck: [false, false],
    CreateDeck: [false, false],
    AtLeastOneDeck: [false, false],
    AlreadyFiveDecks: [false, false],
    AboutPage: [false, false],
    PreferencesPage: [false, false],
    CheckMedia: [false, false],
    StudyDeck: [false, false],
    BookLogo: [false, false],
    SwitchProfile: [false, false],
    AddProfile: [false, false],
    RenameProfile: [false, false],
    Downgrade: [false, false],
    AtLeastOneCard: [false, false],
    ProfileExists: [false, false],
    AtLeastOneProfile: [false, false],
    EditCard: [false, false]
};
*/