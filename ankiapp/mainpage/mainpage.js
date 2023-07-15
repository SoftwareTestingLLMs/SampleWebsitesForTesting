//enums
const ProfileNames = {
    Alice: "Alice",
    Bob: "Bob",
    Carol: "Carol",
    Dennis: "Dennis",
    Eva: "Eva",
};

const DeckNames = {
    DeckName1: "Deck Name 1",
    DeckName2: "Deck Name 2",
    DeckName3: "Deck Name 3",
    DeckName4: "Deck Name 4",
    DeckName5: "Deck Name 5",
    DutchDeck: "Dutch Numbers 0-10",
    EnglishDeck: "English Numbers 0-10",
    GermanDeck: "German Numbers 0-10",
};

const AccountNames = {
    AccountName1: "Account Name 1",
    AccountName2: "Account Name 2",
    AccountName3: "Account Name 3",
    AccountName4: "Account Name 4",
    AccountName5: "Account Name 5",
};

const AccountPasswords = {
    Password1: "Password 1",
    Password2: "Password 2",
    Password3: "Password 3",
    Password4: "Password 4",
    Password5: "Password 5",
};

//reward structure of the preferences page
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
    AlreadyFiveProfiles: [false, false],
    ProfileExists: [false, false],
    AtLeastOneProfile: [false, false],
    EditCard: [false, false]
};

const DropdownRewards = {
    FirstDropdown: [false, false, false, false],
    SecondDropdown: false,
    ThirdDropdown: [false, false, false],
    FourthDropdown: [false, false, false],
};

const MainPageRewards = {
    StudyNow: [false,false],
    ShowAnswerButton: [false, false],
    RemoveCard: false,
    ChangeDeck: [false, false, false, false, false],
};

const AddCardRewards = {
    Increment: [false, false, false],
    AddCard: false,
};

const AnkiLoginRewards = {
    Increment: [false, false],
    Login: false,
};

const ImportDeckRewards = {
    ChangeDeck: [false, false, false],
    Help: false,
    ImportDeck: false,
};

const ExportDeckRewards = {
    ExportDeck: [false, false, false, false, false],
    Reset: false,
    Help: false,
    Export: false,
};

const DeleteDeckRewards = {
    DeleteDeck: false
};

const CreateDeckRewards = {
    ChangeDeck: false,
    CreateDeck: false,
};

const StudyDeckRewards = {
    StudyDeck: [false, false, false, false, false],
    AddDeck: false,
    Help: false,
    Study: false,
};

const ProfileRewards = {
    ChangeProfile: [false, false, false, false, false],
    RenameProfile: [false,false],
    AddProfile: [false,false],
    DeleteProfile: false,
    OpenBackup: false,
    Downgrade: false,
    OpenProfile: false
};

const EditCardRewards = {
    EditFront: false,
    EditBack: false,
    EditTag: false,
}
//amount of reward collected by the agent
let total_sum_of_reward = 0

//incremental counters to provide seperate texts of card components
let add_card_front_counter = 0
let add_card_back_counter = 0
let add_card_tag_counter = 0

//indices in the range [0,4] to set seperate deck, anki account and profile names
let create_deck_index = 0
let current_profile_index = 0
let current_account_index = 0

//integer in the range [0,4] to provide seperate account names and passwords
let anki_login_username_index = 0
let anki_login_password_index = 0

//indices in the range [0,4] to determine which element has been chosen
let study_deck_temporary_index = 0
let deck_import_index = 0
let deck_export_index = 0
let switch_profile_index = 0

//integer in the range [0,4] to determine which profile name is to add/rename
let rename_profile_index = 0
let add_profile_index = 0

//preferences page counters
let preferences_page_counter_1 = 0
let preferences_page_counter_2 = 0
let preferences_page_counter_3 = 0
let preferences_page_counter_4 = 0
let preferences_page_counter_5 = 0

//array of the present profiles
let current_profiles = [{name: ProfileNames.Alice, decks:[{name: DeckNames.DeckName1, cards:[{front: "Front text", back: "Back text", tag:"Some tag"}], current_study_index: 0}], deck_index: 0}, 
                        {name: ProfileNames.Bob, decks:[{name: DeckNames.DeckName1, cards:[{front: "Front text", back: "Back text", tag:"Some tag"}], current_study_index: 0}], deck_index: 0}, 
                        {name: ProfileNames.Carol, decks:[{name: DeckNames.DeckName1, cards:[{front: "Front text", back: "Back text", tag:"Some tag"}], current_study_index: 0}], deck_index: 0}]

let possible_account_passwords = Object.values(AccountPasswords)
let possible_account_names = Object.values(AccountNames)
let possible_deck_names = Object.values(DeckNames)
let possible_profile_names = Object.values(ProfileNames)

//predefined importable decks
const dutch_deck = {name: DeckNames.DutchDeck, cards:[
{front: "0", back: "nul", tag:""},
{front: "1", back: "een", tag:""},
{front: "2", back: "twee", tag:""},
{front: "3", back: "drie", tag:""},
{front: "4", back: "vier", tag:""},
{front: "5", back: "vijf", tag:""},
{front: "6", back: "zes", tag:""},
{front: "7", back: "zeven", tag:""},
{front: "8", back: "acht", tag:""},
{front: "9", back: "negen", tag:""},
{front: "10", back: "tien", tag:""}], current_study_index: 0}

const german_deck = {name: DeckNames.GermanDeck, cards:[
{front: "0", back: "null", tag:""},
{front: "1", back: "eins", tag:""},
{front: "2", back: "zwei", tag:""},
{front: "3", back: "drei", tag:""},
{front: "4", back: "vier", tag:""},
{front: "5", back: "fünf", tag:""},
{front: "6", back: "sechs", tag:""},
{front: "7", back: "sieben", tag:""},
{front: "8", back: "acht", tag:""},
{front: "9", back: "neun", tag:""},
{front: "10", back: "zehn", tag:""}], current_study_index: 0}

const english_deck = {name: DeckNames.EnglishDeck, cards:[
{front: "0", back: "zero", tag:""},
{front: "1", back: "one", tag:""},
{front: "2", back: "two", tag:""},
{front: "3", back: "three", tag:""},
{front: "4", back: "four", tag:""},
{front: "5", back: "five", tag:""},
{front: "6", back: "six", tag:""},
{front: "7", back: "seven", tag:""},
{front: "8", back: "eight", tag:""},
{front: "9", back: "nine", tag:""},
{front: "10", back: "ten", tag:""}], current_study_index: 0}

//importable decks as an array
const importable_decks = [dutch_deck, german_deck, english_deck]
let exported_decks = []

//rewards as array
let preferencesPageRewardArray = Object.values(PreferencesPageRewards)
let openClosePopupsRewardArray = Object.values(OpenClosePopupsRewards)
let dropdownRewardArray = Object.values(DropdownRewards)
let mainPageRewardArray = Object.values(MainPageRewards)
let addCardRewardArray = Object.values(AddCardRewards)
let ankiLoginRewardArray = Object.values(AnkiLoginRewards)
let importDeckRewardArray = Object.values(ImportDeckRewards)
let exportDeckRewardArray = Object.values(ExportDeckRewards)
let deleteDeckRewardArray = Object.values(DeleteDeckRewards)
let createDeckRewardArray = Object.values(CreateDeckRewards)
let studyDeckRewardArray = Object.values(StudyDeckRewards)
let profileRewardArray = Object.values(ProfileRewards)
let editCardRewardsArray = Object.values(EditCardRewards)

//function to set the import popup
function importDeckPopupLoad() {
    if(!openClosePopupsRewardArray[4][0]){
        openClosePopupsRewardArray[4][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    deck_import_index = 0
    document.getElementById('deck_to_import').innerHTML = "Deck to import: " + importable_decks[deck_import_index].name
    importDeckPopup.classList.add("show")
    loadImportableDecks()
}

//function to set the export popup
function exportDeckPopupLoad() {
    deck_export_index = 0
    if(!openClosePopupsRewardArray[5][0]) {
        openClosePopupsRewardArray[5][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    exportDeckPopup.classList.add("show")
    document.getElementById('exported_decks_number').innerHTML = "Number of exported decks: " + exported_decks.length
    loadExportableDecks()
}

//function to set the profile popup
function switchProfilePopupLoad() {
    cleanProfileNames()
    loadProfileNames()
    if(!openClosePopupsRewardArray[16][0]) {
        openClosePopupsRewardArray[16][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    switchProfilePopup.classList.add("show")
}

//function to load the names of current decks to the main page
function loadMainPageDecks() {
    for(let i = 0; i < current_profiles[current_profile_index].decks.length; i++) {
        document.getElementById('deck_row_' + (i+1).toString()).innerHTML = current_profiles[current_profile_index].decks[i].name
    }
}

//function to load the names of current decks to the study popup
function loadStudyPopupDecks() {
    for(let i = 0; i < current_profiles[current_profile_index].decks.length; i++) {
        document.getElementById('study_deck_popup_row_' + (i+1).toString()).innerHTML = current_profiles[current_profile_index].decks[i].name
    }
}

//function to load the names of importable decks
function loadImportableDecks() {
    for(let i = 0; i < importable_decks.length; i++) {
        document.getElementById('import_deck_popup_row_' + (i+1).toString()).innerHTML = importable_decks[i].name
    }
}

//function to load the names of exportable decks
function loadExportableDecks() {
    document.getElementById('deck_to_export').innerHTML = "Deck to export: " + current_profiles[current_profile_index].decks[deck_export_index].name
    for(let i = 0; i < current_profiles[current_profile_index].decks.length; i++) {
        document.getElementById('export_deck_popup_row_' + (i+1).toString()).innerHTML = current_profiles[current_profile_index].decks[i].name
    }
}

//function to set the displayed deck names to the empty string to overwrite them
function cleanDeckNames() {
    for(let i = 0; i < 5; i++) {
        document.getElementById('deck_row_' + (i+1).toString()).innerHTML = ""
    }
}

//function to set the displayed profile names to the empty string to overwrite them
function cleanProfileNames() {
    for(let i = 0; i < 5; i++) {
        document.getElementById('switch_profile_popup_row_' + (i+1).toString()).innerHTML = ""
    }
}

//function to hide the elements which are not in the preferences-scheduling tab and display the elements in preferences-scheduling tab
function switchToSchedulingTab() {
    if(!preferencesPageRewardArray[0][1]){
        preferencesPageRewardArray[0][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    const items_to_hide = ['preferences_dd_1', 'preferences_dd_2', 'preferences_dd_3', 'preferences_dd_4', 'checkbox_1', 'checkbox_2', 'checkbox_3', 'checkbox_4', 'checkbox_5', 'increment_decrement_1', 'user_interface_size_text', 'preferences_page_box_5', 'preferences_page_text_button', 'checkbox_11', 'checkbox_12', 'checkbox_13', 'checkbox_14', 'increment_decrement_5', 'number_of_backups_text']
    for(let i = 0;i < items_to_hide.length; i++){
        document.getElementById(items_to_hide[i]).style.display = "none"
    }
    const items_to_show = ['checkbox_6', 'checkbox_7', 'checkbox_8', 'checkbox_9', 'checkbox_10', 'increment_decrement_2', 'increment_decrement_3', 'increment_decrement_4', 'learn_ahead_text', 'timebox_time_text', 'next_day_text']
    for(let i = 0;i < items_to_show.length; i++){
        document.getElementById(items_to_show[i]).style.display = "block"
    }
}

//function to hide the elements which are not in the preferences-basic tab and display the elements in preferences-basic tab
function switchToBasicTab() {
    if(!preferencesPageRewardArray[0][0] && document.getElementById('preferences_dd_1').style.display == "none"){
        preferencesPageRewardArray[0][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    const items_to_hide = ['checkbox_6', 'checkbox_7', 'checkbox_8', 'checkbox_9', 'checkbox_10', 'checkbox_11', 'checkbox_12', 'checkbox_13', 'checkbox_14', 'increment_decrement_2', 'increment_decrement_3', 'increment_decrement_4', 'learn_ahead_text', 'timebox_time_text', 'next_day_text', 'increment_decrement_5', 'number_of_backups_text']
    for(let i = 0;i < items_to_hide.length; i++){
        document.getElementById(items_to_hide[i]).style.display = "none"
    }
    const items_to_show = ['preferences_dd_1', 'preferences_dd_2', 'preferences_dd_3', 'preferences_dd_4', 'checkbox_1', 'checkbox_2', 'checkbox_3', 'checkbox_4', 'checkbox_5', 'increment_decrement_1', 'user_interface_size_text', 'preferences_page_box_5', 'preferences_page_text_button']
    for(let i = 0;i < items_to_show.length; i++){
        document.getElementById(items_to_show[i]).style.display = "block"
    }
}

//function to hide the elements which are not in the preferences-network tab and display the elements in preferences-network tab
function switchToNetworkTab() {
    if(!preferencesPageRewardArray[0][2]){
        preferencesPageRewardArray[0][2] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    const items_to_hide = ['preferences_dd_1', 'preferences_dd_2', 'preferences_dd_3', 'preferences_dd_4', 'checkbox_1', 'checkbox_2', 'checkbox_3', 'checkbox_4', 'checkbox_5', 'increment_decrement_1', 'user_interface_size_text', 'preferences_page_box_5', 'preferences_page_text_button', 'checkbox_6', 'checkbox_7', 'checkbox_8', 'checkbox_9', 'checkbox_10', 'increment_decrement_2', 'increment_decrement_3', 'increment_decrement_4', 'learn_ahead_text', 'timebox_time_text', 'next_day_text', 'increment_decrement_5', 'number_of_backups_text']
    for(let i = 0;i < items_to_hide.length; i++){
        document.getElementById(items_to_hide[i]).style.display = "none"
    }
    const items_to_show = ['checkbox_11', 'checkbox_12', 'checkbox_13', 'checkbox_14']
    for(let i = 0;i < items_to_show.length; i++){
        document.getElementById(items_to_show[i]).style.display = "block"
    }
}

//function to hide the elements which are not in the preferences-backups tab and display the elements in preferences-backups tab
function switchToBackupsTab() {
    if(!preferencesPageRewardArray[0][3]){
        preferencesPageRewardArray[0][3] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    const items_to_hide = ['preferences_dd_1', 'preferences_dd_2', 'preferences_dd_3', 'preferences_dd_4', 'checkbox_1', 'checkbox_2', 'checkbox_3', 'checkbox_4', 'checkbox_5', 'increment_decrement_1', 'user_interface_size_text', 'preferences_page_box_5', 'preferences_page_text_button', 'checkbox_6', 'checkbox_7', 'checkbox_8', 'checkbox_9', 'checkbox_10', 'increment_decrement_2', 'increment_decrement_3', 'increment_decrement_4', 'learn_ahead_text', 'timebox_time_text', 'next_day_text', 'checkbox_11', 'checkbox_12', 'checkbox_13', 'checkbox_14']
    for(let i = 0;i < items_to_hide.length; i++){
        document.getElementById(items_to_hide[i]).style.display = "none"
    }
    const items_to_show = ['increment_decrement_5', 'number_of_backups_text']
    for(let i = 0;i < items_to_show.length; i++){
        document.getElementById(items_to_show[i]).style.display = "block"
    }
}

//function to load the present profile names to the rows of switch profile popup
function loadProfileNames() {
    for(let i = 0; i < current_profiles.length; i++) {
        document.getElementById('switch_profile_popup_row_' + (i+1).toString()).innerHTML = current_profiles[i].name
    }
    document.getElementById('profile_to_open').innerHTML = "Profile to open: " + current_profiles[switch_profile_index].name
}

//function to switch between showing/not showing the answer of a question 
function showAnswer() {
    if(document.getElementById('answer').style.display == "none"){
        document.getElementById('answer').style.display = "block"
        document.getElementById('show_answer').style.display = "none"
        document.getElementById('next_question').style.display = "block"
        if(!mainPageRewardArray[1][0]) {
            mainPageRewardArray[1][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
    } else if(document.getElementById('answer').style.display == "block") {
        document.getElementById('answer').style.display = "none"
        document.getElementById('show_answer').style.display = "block"
        document.getElementById('next_question').style.display = "none"
        current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index += 1
        current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index %= current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.length
        document.getElementById('current_card_number_study').innerHTML = "Current card number: " + (current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index + 1);
        document.getElementById("question").innerHTML = "Question: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].front 
        document.getElementById("answer").innerHTML = "Answer: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].back
        if(!mainPageRewardArray[1][1]) {
            mainPageRewardArray[1][1] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
    }
}

//function to assign functions to the components of the first dropdown
function dropdown1Call() {
    var x = document.getElementById("dd1").value;
    switch(x) {
        case "switch_profile":
        if(!openClosePopupsRewardArray[16][0]) {
            openClosePopupsRewardArray[16][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }        
        if(!dropdownRewardArray[0][0]) {
            dropdownRewardArray[0][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        switchProfilePopupLoad()
        break;
        case "import":
        if(!openClosePopupsRewardArray[4][0]) {
            openClosePopupsRewardArray[4][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        if(!dropdownRewardArray[0][1]) {
            dropdownRewardArray[0][1] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        importDeckPopupLoad()
        break;
        case "export_deck":
        if(!dropdownRewardArray[0][2]) {
            dropdownRewardArray[0][2] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        if(!openClosePopupsRewardArray[5][0]) {
            openClosePopupsRewardArray[5][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        exportDeckPopupLoad()
        break;
        case "exit":
        if(!dropdownRewardArray[0][3]) {
            dropdownRewardArray[0][3] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        //location.reload()
        break;
    }
}

//function to assign functions to the components of the second dropdown
function dropdown2Call() {
    if(!dropdownRewardArray[1]) {
        dropdownRewardArray[1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    if(document.getElementById('book_logo').style.display == "none"){
        document.getElementById('book_logo').style.display = "block"
        if(!openClosePopupsRewardArray[15][0]){
            openClosePopupsRewardArray[15][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        } 
    } else {
        document.getElementById('book_logo').style.display = "none"
        if(!openClosePopupsRewardArray[15][1]){
            openClosePopupsRewardArray[15][1] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        } 
    }
}

//function to assign functions to the components of the third dropdown
function dropdown3Call() {
    var x = document.getElementById("dd3").value;
    switch(x) {
        case "check_media":
        if(!openClosePopupsRewardArray[13][0]){
            openClosePopupsRewardArray[13][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        if(!dropdownRewardArray[2][0]) {
            dropdownRewardArray[2][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        } 
        checkMediaPopup.classList.add("show")
        break;
        case "study_deck":
        if(!openClosePopupsRewardArray[14][0]){
            openClosePopupsRewardArray[14][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        if(!dropdownRewardArray[2][1]) {
            dropdownRewardArray[2][1] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        if(!openClosePopupsRewardArray[14][0]){
            openClosePopupsRewardArray[14][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        studyDeckPopup.classList.add("show")
        loadStudyPopupDecks()
        break;
        case "preferences":
        if(!openClosePopupsRewardArray[12][0]){
            openClosePopupsRewardArray[12][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        if(!dropdownRewardArray[2][2]) {
            dropdownRewardArray[2][2] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        preferencesPage.classList.add("show")
        break;
    }
}

//function to assign functions to the components of the fourth dropdown
function dropdown4Call() {
    var x = document.getElementById("dd4").value;
    switch(x) {
        case "guide":
        if(!dropdownRewardArray[3][0]) {
            dropdownRewardArray[3][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        if(!openClosePopupsRewardArray[1][0]) {
            openClosePopupsRewardArray[1][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        leadsToExternalWebsitePopup.classList.add("show");
        break;
        case "support":
        if(!dropdownRewardArray[3][1]) {
            dropdownRewardArray[3][1] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        if(!openClosePopupsRewardArray[1][0]) {
            openClosePopupsRewardArray[1][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        leadsToExternalWebsitePopup.classList.add("show");
        break;
        case "about_page":
        if(!openClosePopupsRewardArray[11][0]) {
            openClosePopupsRewardArray[11][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        if(!dropdownRewardArray[3][2]) {
            dropdownRewardArray[3][2] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        aboutPagePopup.classList.add("show");
        break;
    }
}

//function to show the components which are present on the main page and hide the other components
function openMainPage() {
    if(!mainPageRewardArray[0][1]){
        mainPageRewardArray[0][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    document.getElementById("create_deck").style.display = "block"
    document.getElementById("delete_deck").style.display = "block"
    document.getElementById("import_file").style.display = "block"
    document.getElementById("get_shared").style.display = "block"
    document.getElementById("current_profile").style.display = "block"
    document.getElementById("current_deck").style.display = "block"
    document.getElementById("current_account").style.display = "block"
    document.getElementById("study_now").style.display = "block"
    document.getElementById("question").style.display = "none"
    document.getElementById("answer").style.display = "none"
    document.getElementById("edit").style.display = "none"
    document.getElementById("show_answer").style.display = "none"
    document.getElementById("next_question").style.display = "none"
    document.getElementById("remove_card").style.display = "none"
    document.getElementById("decks").style.display = "none"
    document.getElementById("current_deck_study").style.display = "none"
    document.getElementById("current_card_number_study").style.display = "none"
    document.getElementById("number_of_cards_study").style.display = "none"
    for(let i = 1;i <= 5;i++) {
        document.getElementById("deck_row_" + i).style.display = "block"
    }
}

//function to show the components which are present on the study page and hide the other components
function openStudyPage() {
    if(!mainPageRewardArray[0][0]){
        mainPageRewardArray[0][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    for(let i = 1;i <= 5;i++) {
        document.getElementById("deck_row_" + i).style.display = "none"
    }
    document.getElementById("current_deck_study").innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
    document.getElementById("number_of_cards_study").innerHTML = "Current number of cards: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.length
    document.getElementById("current_card_number_study").innerHTML = "Current card number: " + (current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index + 1);
    document.getElementById("create_deck").style.display = "none"
    document.getElementById("delete_deck").style.display = "none"
    document.getElementById("import_file").style.display = "none"
    document.getElementById("get_shared").style.display = "none"
    document.getElementById("current_profile").style.display = "none"
    document.getElementById("current_deck").style.display = "none"
    document.getElementById("current_account").style.display = "none"
    document.getElementById("study_now").style.display = "none"
    document.getElementById("question").style.display = "block"
    document.getElementById("answer").style.display = "none"
    document.getElementById("edit").style.display = "block"
    document.getElementById("show_answer").style.display = "block"
    document.getElementById("next_question").style.display = "none"
    document.getElementById("remove_card").style.display = "block"
    document.getElementById("decks").style.display = "block"
    document.getElementById("current_deck_study").style.display = "block"
    document.getElementById("current_card_number_study").style.display = "block"
    document.getElementById("number_of_cards_study").style.display = "block"
    document.getElementById("question").innerHTML = "Question: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].front 
    document.getElementById("answer").innerHTML = "Answer: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].back
}

function preferencesdd1() {
    var x = document.getElementById("preferences_dd_1").value;
    switch(x) {
        case "english_dd_item":
        if(!preferencesPageRewardArray[15][0]) {
            preferencesPageRewardArray[15][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        break;
        case "german_dd_item":
            if(!preferencesPageRewardArray[15][1]) {
                preferencesPageRewardArray[15][1] = true
                total_sum_of_reward += 1
                document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
            }
        break;    
        case "spanish_dd_item":
        if(!preferencesPageRewardArray[15][2]) {
            preferencesPageRewardArray[15][2] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        break;
    }
}

function preferencesdd2() {
    var x = document.getElementById("preferences_dd_2").value;
    switch(x) {
        case "open_gl_dd_item":
        if(!preferencesPageRewardArray[16][0]) {
            preferencesPageRewardArray[16][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        break;
        case "angle_dd_item":
            if(!preferencesPageRewardArray[16][1]) {
                preferencesPageRewardArray[16][1] = true
                total_sum_of_reward += 1
                document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
            }
        break;    
        case "software_dd_item":
        if(!preferencesPageRewardArray[16][2]) {
            preferencesPageRewardArray[16][2] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        break;
    }
}

function preferencesdd3() {
    var x = document.getElementById("preferences_dd_3").value;
    switch(x) {
        case "default_to_current_deck_dd_item":
        if(!preferencesPageRewardArray[17][0]) {
            preferencesPageRewardArray[17][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        break;
        case "change_according_to_deck_type_dd_item":
            if(!preferencesPageRewardArray[17][1]) {
                preferencesPageRewardArray[17][1] = true
                total_sum_of_reward += 1
                document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
            }
        break;    
    }
}

function preferencesdd4() {
    var x = document.getElementById("preferences_dd_4").value;
    switch(x) {
        case "py_audio_dd_item":
        if(!preferencesPageRewardArray[18][0]) {
            preferencesPageRewardArray[18][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        break;
        case "qt_dd_item":
            if(!preferencesPageRewardArray[18][1]) {
                preferencesPageRewardArray[18][1] = true
                total_sum_of_reward += 1
                document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
            }
        break;    
    }
}
//adding functions, which have been used more than once, as attribute to buttons
import_file.addEventListener("click", importDeckPopupLoad)
study_now.addEventListener("click", openStudyPage);
decks.addEventListener("click", openMainPage);

//assigning the core textual components as initialization
document.getElementById('rename_profile_popup_row').innerHTML = possible_profile_names[rename_profile_index]
document.getElementById('add_profile_popup_row').innerHTML = possible_profile_names[rename_profile_index]
document.getElementById('profile_to_open').innerHTML = "Profile to open: " + current_profiles[switch_profile_index].name
document.getElementById('add_card_row_1').innerHTML = "Front Side " + add_card_front_counter;
document.getElementById('add_card_row_2').innerHTML = "Back Side " + add_card_back_counter;
document.getElementById('add_card_row_3').innerHTML = "Tag Text " + add_card_tag_counter;        
document.getElementById('create_new_deck').innerHTML = possible_deck_names[create_deck_index];
document.getElementById('current_profile').innerHTML = "Current profile: " + current_profiles[current_profile_index].name;
document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name;
document.getElementById('current_account').innerHTML = "Current account: " + possible_account_names[current_account_index];
document.getElementById('anki_login_row_1').innerHTML = possible_account_names[anki_login_username_index]
document.getElementById('anki_login_row_2').innerHTML = possible_account_passwords[anki_login_password_index]
document.getElementById('current_deck_study').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name;
document.getElementById('deck_to_study').innerHTML = "Deck to study: " + current_profiles[current_profile_index].decks[0].name;
document.getElementById('current_card_number_study').innerHTML = "Current card number: " + (current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index + 1);
document.getElementById('number_of_cards_study').innerHTML = "Current number of cards: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.length
document.getElementById('question').innerHTML = "Question: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].front 
document.getElementById('answer').innerHTML = "Answer: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].back
document.getElementById('deck_to_import').innerHTML = "Deck to import: " + importable_decks[deck_import_index].name
document.getElementById('counter_1').innerHTML = preferences_page_counter_1
document.getElementById('counter_2').innerHTML = preferences_page_counter_2
document.getElementById('counter_3').innerHTML = preferences_page_counter_3
document.getElementById('counter_4').innerHTML = preferences_page_counter_4
document.getElementById('counter_5').innerHTML = preferences_page_counter_5
document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward

//button to close the switch profile page and open the main page
switch_profile_popup_open_button.addEventListener("click", function () {
    if(!openClosePopupsRewardArray[16][1]) {
        openClosePopupsRewardArray[16][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    if(!profileRewardArray[6]) {
        profileRewardArray[6] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    switchProfilePopup.classList.remove("show")
    openMainPage()
    current_profile_index = switch_profile_index
    cleanDeckNames()
    loadMainPageDecks()
    document.getElementById('current_profile').innerHTML = "Current profile: " + current_profiles[current_profile_index].name;
    document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name;
    document.getElementById('current_account').innerHTML = "Current account: " + possible_account_names[current_account_index];
})

//button to add a card to the currently specified deck
add_card_button.addEventListener("click", function () {
    current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.push({front: "Front Side " + add_card_front_counter, back: "Back Side " + add_card_back_counter, tag: "Tag Text " + add_card_tag_counter});
    document.getElementById('number_of_cards_study').innerHTML = "Current number of cards: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.length
    if(!openClosePopupsRewardArray[0][1]){
        openClosePopupsRewardArray[0][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    if(!addCardRewardArray[1]){
        addCardRewardArray[1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    addCardPopup.classList.remove("show")
})

//add the chosen deck to the decks of the current profile
export_deck_popup_add_button.addEventListener("click", function () {
    if (exported_decks.includes(current_profiles[current_profile_index].decks[deck_export_index])){
        exportDeckPopup.classList.remove("show")
        if(!openClosePopupsRewardArray[6][0]) {
            openClosePopupsRewardArray[6][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        deckExistsPopup.classList.add("show")
        return;
    }
    if (exported_decks.length >= 5) {
        exportDeckPopup.classList.remove("show")
        if(!openClosePopupsRewardArray[10][0]) {
            openClosePopupsRewardArray[10][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        alreadyFiveDecksPopup.classList.add("show")
        return;
    }
    if (!exportDeckRewardArray[3]) {
        exportDeckRewardArray[3] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    exported_decks.push(current_profiles[current_profile_index].decks[deck_export_index])
    exportDeckPopup.classList.remove("show")
})

//help button which opens the leads to external website popup
study_deck_popup_help_button.addEventListener("click", function () {
    study_deck_temporary_index = 0
    studyDeckPopup.classList.remove("show")
    leadsToExternalWebsitePopup.classList.add("show");
    if(!openClosePopupsRewardArray[1][0]) {
        openClosePopupsRewardArray[1][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
})

//button to switch to the study page
study_deck_popup_study_button.addEventListener("click", function () {
    current_profiles[current_profile_index].deck_index = study_deck_temporary_index
    study_deck_temporary_index = 0
    if(!openClosePopupsRewardArray[14][1]) {
        openClosePopupsRewardArray[14][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    if(!studyDeckRewardArray[3]) {
        studyDeckRewardArray[3] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    studyDeckPopup.classList.remove("show")
    openStudyPage()
})

//button to create a new deck
study_deck_popup_add_button.addEventListener("click", function () {
    if(!openClosePopupsRewardArray[14][1]){
        openClosePopupsRewardArray[14][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    if(!openClosePopupsRewardArray[8][0]) {
        openClosePopupsRewardArray[8][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    studyDeckPopup.classList.remove("show")
    createNewDeckPopup.classList.add("show");
})

//button to close the at least one card popup
close_at_least_one_card_popup_button.addEventListener("click", function () {
    if(!openClosePopupsRewardArray[20][1]) {
        openClosePopupsRewardArray[20][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    atLeastOneCardPopup.classList.remove("show")
})

//button to show the leads to external website button
get_shared.addEventListener("click", function () {
    leadsToExternalWebsitePopup.classList.add("show");
    if(!openClosePopupsRewardArray[1][0]) {
        openClosePopupsRewardArray[1][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
});

//button to close the already five decks popup
close_already_five_decks_popup_button.addEventListener("click", function() {
    if(!openClosePopupsRewardArray[10][1]) {
        openClosePopupsRewardArray[10][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    alreadyFiveDecksPopup.classList.remove("show")
})

//button to close the deck exists popup
close_deck_exists_popup_button.addEventListener("click", function() {
    if(!openClosePopupsRewardArray[6][1]) {
        openClosePopupsRewardArray[6][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    deckExistsPopup.classList.remove("show")
})

//button to close the check media popup
check_media_close_button.addEventListener("click", function() {
    if(!openClosePopupsRewardArray[13][1]){
        openClosePopupsRewardArray[13][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    checkMediaPopup.classList.remove("show")
})

//button to close the leads to external website popup
closeLeadsToExternalWebsitePopup.addEventListener("click", function () {
    if(!openClosePopupsRewardArray[1][1]) {
        openClosePopupsRewardArray[1][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    leadsToExternalWebsitePopup.classList.remove("show");
});

//button to open the add card popup
add_card.addEventListener("click", function () {
    if(!openClosePopupsRewardArray[0][0]){
        openClosePopupsRewardArray[0][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    addCardPopup.classList.add("show");
});

//button to refresh the page
switch_profile_popup_open_backup_button.addEventListener("click", function () {
    if(!openClosePopupsRewardArray[16][1]){
        openClosePopupsRewardArray[16][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    switchProfilePopup.classList.remove("show");
    //location.reload();
});

//button to close the downgrade popup
close_downgrade_popup_button.addEventListener("click", function () {
    if(!openClosePopupsRewardArray[19][1]) {
        openClosePopupsRewardArray[19][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    downgradePopup.classList.remove("show");
    switchProfilePopup.classList.add("show")
});


//button to open the rename popup
switch_profile_popup_rename_button.addEventListener("click", function () {
    if(!openClosePopupsRewardArray[18][0]) {
        openClosePopupsRewardArray[18][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    renameProfilePopup.classList.add("show");
})

//button to open the downgrade popup
switch_profile_popup_downgrade_button.addEventListener("click", function () {
    switchProfilePopup.classList.remove("show")
    if(!openClosePopupsRewardArray[19][0]) {
        openClosePopupsRewardArray[19][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    downgradePopup.classList.add("show");
});

//button to close the add card popup
close_add_card_popup.addEventListener("click", function () {
    if(!openClosePopupsRewardArray[0][1]){
        openClosePopupsRewardArray[0][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    addCardPopup.classList.remove("show");
});

//button to open the create new deck popup
create_deck.addEventListener("click", function () {
    if(!openClosePopupsRewardArray[8][0]) {
        openClosePopupsRewardArray[8][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    createNewDeckPopup.classList.add("show");
});

//button to close the create new deck popup
create_new_deck_close_button.addEventListener("click", function () {
    if(!openClosePopupsRewardArray[8][1]) {
        openClosePopupsRewardArray[8][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    createNewDeckPopup.classList.remove("show");
});

//button to open the delete deck popup
delete_deck.addEventListener("click", function () {
    if(!openClosePopupsRewardArray[7][0]) {
        openClosePopupsRewardArray[7][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    deleteDeckPopup.classList.add("show");
});

//button to open the anki login popup
anki_login.addEventListener("click", function () {
    if(!openClosePopupsRewardArray[2][0]){
        openClosePopupsRewardArray[2][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    ankiLoginPopup.classList.add("show");
});

//button to delete a deck iff there is more than one deck present
delete_deck_yes_button.addEventListener("click", function () {
    if(current_profiles[current_profile_index].decks.length == 1){
        document.getElementById('deleteDeckPopup').classList.remove("show")
        if(!openClosePopupsRewardArray[9][0]) {
            openClosePopupsRewardArray[9][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        document.getElementById('atLeastOneDeckPopup').classList.add("show")
        return;
    }
    current_profiles[current_profile_index].decks.splice(current_profiles[current_profile_index].deck_index, 1);
    current_profiles[current_profile_index].deck_index = 0
    document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
    cleanDeckNames();
    loadMainPageDecks();
    if(!openClosePopupsRewardArray[7][1]) {
        openClosePopupsRewardArray[7][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    if(!deleteDeckRewardArray[0]){
        deleteDeckRewardArray[0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    deleteDeckPopup.classList.remove("show");
})

//button to close the delete deck popup
delete_deck_no_button.addEventListener("click", function () {
    if(!openClosePopupsRewardArray[7][1]) {
        openClosePopupsRewardArray[7][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    deleteDeckPopup.classList.remove("show");
});

//button to reset the exported decks
export_deck_popup_reset_button.addEventListener("click", function(){
    if(!exportDeckRewardArray[1]) {
        exportDeckRewardArray[1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    exported_decks = []
    document.getElementById('exported_decks_number').innerHTML = "Number of exported decks: " + exported_decks.length
})

//button to edit the front side of a card iff the length of the front side does not exceed 50
edit_front_side_button.addEventListener("click", function (){
    current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].front += " edited"
    if(document.getElementById('question').innerHTML.length <= 50) {
        if(!editCardRewardsArray[0]) {
            editCardRewardsArray[0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        document.getElementById('question').innerHTML = "Question: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].front
        document.getElementById('edit_card_row_1').innerHTML = current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].front    
    }
})

//button to edit the back side of a card iff the length of the back side does not exceed 50
edit_back_side_button.addEventListener("click", function (){
    current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].back += " edited"
    if(document.getElementById('answer').innerHTML.length <= 50) {
        if(!editCardRewardsArray[1]) {
            editCardRewardsArray[1] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        document.getElementById('answer').innerHTML = "Answer: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].back
        document.getElementById('edit_card_row_2').innerHTML = current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].back    
    }
})

//button to edit the tag of a card iff the length of the tag does not exceed 50
edit_tag_button.addEventListener("click", function (){
    current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].tag += " edited"
    if(document.getElementById('edit_card_row_3').innerHTML.length <= 50) {
        if(!editCardRewardsArray[2]) {
            editCardRewardsArray[2] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        document.getElementById('edit_card_row_3').innerHTML = current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].tag
    }
})

//button to close the edit card popup
close_edit_card_popup_button.addEventListener("click", function (){
    if(!openClosePopupsRewardArray[24][1]) {
        openClosePopupsRewardArray[24][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    editCardPopup.classList.remove("show")
})

//button to open the edit card popup
edit.addEventListener("click", function (){
    if(!openClosePopupsRewardArray[24][0]) {
        openClosePopupsRewardArray[24][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    editCardPopup.classList.add("show")
    document.getElementById('edit_card_row_1').innerHTML = current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].front
    document.getElementById('edit_card_row_2').innerHTML = current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].back
    document.getElementById('edit_card_row_3').innerHTML = current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].tag
})

//button to close the at least one deck popup
close_at_least_one_deck_popup_button.addEventListener("click", function (){
    if(!openClosePopupsRewardArray[9][1]) {
        openClosePopupsRewardArray[9][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    atLeastOneDeckPopup.classList.remove("show")
})

//button to increment the counter of the front side of a card by 1
add_card_button_1.addEventListener("click", function () {
    if(!addCardRewardArray[0][0]) {
        addCardRewardArray[0][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    add_card_front_counter += 1;
    document.getElementById('add_card_row_1').innerHTML = "Front Side " + add_card_front_counter;
});

//button to increment the counter of the back side of a card by 1
add_card_button_2.addEventListener("click", function () {
    if(!addCardRewardArray[0][1]) {
        addCardRewardArray[0][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    add_card_back_counter += 1;
    document.getElementById('add_card_row_2').innerHTML = "Back Side " + add_card_back_counter;
});

//button to increment the counter of the tag of a card by 1
add_card_button_3.addEventListener("click", function () {
    if(!addCardRewardArray[0][2]) {
        addCardRewardArray[0][2] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    add_card_tag_counter += 1;
    document.getElementById('add_card_row_3').innerHTML = "Tag Text " + add_card_tag_counter;
});

//button to increment the counter for creating a deck by 1
create_new_deck_name_button.addEventListener("click", function () {
    if(!createDeckRewardArray[0]) {
        createDeckRewardArray[0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    create_deck_index += 1;
    create_deck_index %= 5;
    document.getElementById('create_new_deck').innerHTML = possible_deck_names[create_deck_index];
})

//button to close the export deck popup
export_deck_popup_cancel_button.addEventListener("click", function () {
    if(!openClosePopupsRewardArray[5][1]) {
        openClosePopupsRewardArray[5][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    exportDeckPopup.classList.remove("show")
})

//button to close the add profile popup
close_add_profile_popup_button.addEventListener("click", function () {
    if(!openClosePopupsRewardArray[17][1]) {
        openClosePopupsRewardArray[17][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    addProfilePopup.classList.remove("show")
    add_profile_index = 0
    document.getElementById('add_profile_popup_row').innerHTML = possible_profile_names[rename_profile_index];
})

//button the close the rename profile popup
close_rename_profile_popup_button.addEventListener("click", function () {
    if(!openClosePopupsRewardArray[18][1]) {
        openClosePopupsRewardArray[18][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    renameProfilePopup.classList.remove("show")
    rename_profile_index = 0
    document.getElementById('rename_profile_popup_row').innerHTML = possible_profile_names[rename_profile_index];
})

//button to close the profile exists popup and open the switch profile popup
close_profile_exists_popup_button.addEventListener("click", function () {
    if(!openClosePopupsRewardArray[21][1]) {
        openClosePopupsRewardArray[21][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    profileExistsPopup.classList.remove("show")
    switchProfilePopup.classList.add("show")
})

//button to rename a present profile iff the name to set is not present
rename_profile_popup_ok_button.addEventListener("click", function () {
    for(let i = 0; i < current_profiles.length; i++){
        if(current_profiles[i].name == possible_profile_names[rename_profile_index]){
            if(!openClosePopupsRewardArray[21][0]) {
                openClosePopupsRewardArray[21][0] = true
                total_sum_of_reward += 1
                document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
            }
            renameProfilePopup.classList.remove("show")
            switchProfilePopup.classList.remove("show")
            profileExistsPopup.classList.add("show")
            return
        }
    }  
    if(!profileRewardArray[1][0]) {
        profileRewardArray[1][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    current_profiles[switch_profile_index].name = possible_profile_names[rename_profile_index]
    switchProfilePopupLoad()
    if(!openClosePopupsRewardArray[18][1]) {
        openClosePopupsRewardArray[18][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    renameProfilePopup.classList.remove("show")
})

//button to add a profile of an index iff the name of the profile is not present and the length of the current profiles does not exceed 5
add_profile_popup_ok_button.addEventListener("click", function () {
    if(current_profiles.length == 5){
        if(!openClosePopupsRewardArray[21][0]) {
            openClosePopupsRewardArray[21][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        addProfilePopup.classList.remove("show")
        switchProfilePopup.classList.remove("show")
        profileExistsPopup.classList.add("show")
        return
    }
    for(let i = 0; i < current_profiles.length; i++){
        if(current_profiles[i].name == possible_profile_names[add_profile_index]){
            if(!openClosePopupsRewardArray[21][0]) {
                openClosePopupsRewardArray[21][0] = true
                total_sum_of_reward += 1
                document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
            }
            addProfilePopup.classList.remove("show")
            switchProfilePopup.classList.remove("show")
            profileExistsPopup.classList.add("show")
            return
        }
    }
    if(!profileRewardArray[2][0]) {
        profileRewardArray[2][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }  
    current_profiles.push({name: possible_profile_names[add_profile_index], decks:[{name: DeckNames.DeckName1, cards:[{front: "Front text", back: "Back text", tag:"Some tag"}], current_study_index: 0}], deck_index: 0})
    switchProfilePopupLoad()
    addProfilePopup.classList.remove("show")
    if(!openClosePopupsRewardArray[17][1]) {
        openClosePopupsRewardArray[17][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
})

//button to close the at least one profile popup and open the switch profile popup
close_at_least_one_profile_popup_button.addEventListener("click", function () {
    if(!openClosePopupsRewardArray[23][1]) {
        openClosePopupsRewardArray[23][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    atLeastOneProfilePopup.classList.remove("show")
    switchProfilePopup.classList.add("show")
})

//button to delete a profile in the switch profile popup
switch_profile_popup_delete_button.addEventListener("click", function () {
    if(current_profiles.length == 1){
        if(!openClosePopupsRewardArray[23][0]) {
            openClosePopupsRewardArray[23][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        atLeastOneProfilePopup.classList.add("show")
        switchProfilePopup.classList.remove("show")
        return
    }    
    if(!deleteDeckRewardArray[0]) {
        deleteDeckRewardArray[0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    current_profiles.splice(switch_profile_index, 1)
    switch_profile_index = 0
    cleanProfileNames()
    loadProfileNames()
})

//button to remove a card in the study page iff there is more than one card
remove_card.addEventListener("click", function() {
    if(current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.length == 1) {
        if(!openClosePopupsRewardArray[20][0]) {
            openClosePopupsRewardArray[20][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        atLeastOneCardPopup.classList.add("show");
        return;
    }
    if(!deleteDeckRewardArray[0]){
        deleteDeckRewardArray[0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.splice(current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index, 1)
    current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index > 0 ? current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index -= 1 : 0 
    document.getElementById('current_card_number_study').innerHTML = "Current card number: " + (current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index + 1);
    document.getElementById('number_of_cards_study').innerHTML = "Current number of cards: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.length
    document.getElementById('question').innerHTML = "Question: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].front 
    document.getElementById('answer').innerHTML = "Answer: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].back
})

//button to open the add profile popup
switch_profile_popup_add_button.addEventListener("click", function () {
    addProfilePopup.classList.add("show")
    if(!openClosePopupsRewardArray[17][0]) {
        openClosePopupsRewardArray[17][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
})

//button to close the add profile popup
close_add_profile_popup_button.addEventListener("click", function () {
    addProfilePopup.classList.remove("show")
    if(!openClosePopupsRewardArray[17][1]) {
        openClosePopupsRewardArray[17][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
})

//button to create a new deck iff the number of the current decks does not exceed 5 and the name of the deck is not present in the current decks
create_new_deck_add_button.addEventListener("click", function () {
    if(current_profiles[current_profile_index].decks.length >= 5) {
        document.getElementById('createNewDeckPopup').classList.remove("show")
        if(!openClosePopupsRewardArray[10][0]) {
            openClosePopupsRewardArray[10][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        document.getElementById('alreadyFiveDecksPopup').classList.add("show")
        return;
    }
    for(let i = 0 ; i < current_profiles[current_profile_index].decks.length; i++) {
        if(current_profiles[current_profile_index].decks[i].name == Object.values(DeckNames)[create_deck_index]){
            if(!openClosePopupsRewardArray[6][0]) {
                openClosePopupsRewardArray[6][0] = true
                total_sum_of_reward += 1
                document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
            }
            document.getElementById('createNewDeckPopup').classList.remove("show")
            document.getElementById('deckExistsPopup').classList.add("show")
            return;
        }   
    }
    current_profiles[current_profile_index].decks.push({name: Object.values(DeckNames)[create_deck_index], cards:[{front: "Front text", back: "Back text", tag:"Tag text"}], current_study_index: 0});
    if(!createDeckRewardArray[1]) {
        createDeckRewardArray[1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    if(!openClosePopupsRewardArray[8][1]) {
        openClosePopupsRewardArray[8][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    createNewDeckPopup.classList.remove("show");
    loadMainPageDecks()
})

//button to close the study deck popup
study_deck_popup_cancel_button.addEventListener("click", function () {
    if(!openClosePopupsRewardArray[14][1]){
        openClosePopupsRewardArray[14][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    studyDeckPopup.classList.remove("show")
})

//button to increment the index of login username by 1 and update the temporary account name
anki_login_username_button.addEventListener("click", function () {
    if(!ankiLoginRewardArray[0][0]) {
        ankiLoginRewardArray[0][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    anki_login_username_index += 1
    anki_login_username_index %= 5
    document.getElementById('anki_login_row_1').innerHTML = possible_account_names[anki_login_username_index]
})

//button to increment the index of login password by 1 and update the temporary account name
anki_login_password_button.addEventListener("click", function () {
    if(!ankiLoginRewardArray[0][1]) {
        ankiLoginRewardArray[0][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    anki_login_password_index += 1
    anki_login_password_index %= 5
    document.getElementById('anki_login_row_2').innerHTML = possible_account_passwords[anki_login_password_index]
})

//button to close the anki login popup
anki_login_close_button.addEventListener("click", function () {
    if(!openClosePopupsRewardArray[2][1]){
        openClosePopupsRewardArray[2][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    ankiLoginPopup.classList.remove("show");
})

//button to change the current anki account iff the indices for username and password match
anki_login_ok_button.addEventListener("click", function () {
    if(anki_login_username_index != anki_login_password_index){
        failedLoginPopup.classList.add("show")
        if(!openClosePopupsRewardArray[3][0]) {
            openClosePopupsRewardArray[3][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        ankiLoginPopup.classList.remove("show")
        return;
    }
    if(!ankiLoginRewardArray[1]) {
        ankiLoginRewardArray[1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    current_account_index = anki_login_username_index
    document.getElementById('current_account').innerHTML = "Current account: " + possible_account_names[current_account_index];
    ankiLoginPopup.classList.remove("show");
    if(!openClosePopupsRewardArray[2][1]) {
        openClosePopupsRewardArray[2][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
})

//button to close the about page
about_page_close_button.addEventListener("click", function (){
    if(!openClosePopupsRewardArray[11][1]) {
        openClosePopupsRewardArray[11][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    aboutPagePopup.classList.remove("show");
})

//button to close the failed login popup
close_failed_login_popup.addEventListener("click", function (){
    if(!openClosePopupsRewardArray[3][1]) {
        openClosePopupsRewardArray[3][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    if(!openClosePopupsRewardArray[3][1]) {
        openClosePopupsRewardArray[3][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    failedLoginPopup.classList.remove("show");
})

//the area to switch the currently selected deck of the current profile to the first deck
deck_row_1.addEventListener("click", function () {
    if(0 < current_profiles[current_profile_index].decks.length) {
        if(!mainPageRewardArray[10][0] && current_profiles[current_profile_index].deck_index != 0) { 
            mainPageRewardArray[10][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        current_profiles[current_profile_index].deck_index = 0
        document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
    }
})

//the area to switch the currently selected deck of the current profile to the second deck
deck_row_2.addEventListener("click", function () {
    if(1 < current_profiles[current_profile_index].decks.length) {
        if(!mainPageRewardArray[10][1] && current_profiles[current_profile_index].deck_index != 1) { 
            mainPageRewardArray[10][1] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        current_profiles[current_profile_index].deck_index = 1
        document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
    }
})

//the area to switch the currently selected deck of the current profile to the third deck
deck_row_3.addEventListener("click", function () {
    if(2 < current_profiles[current_profile_index].decks.length) {
        if(!mainPageRewardArray[10][2] && current_profiles[current_profile_index].deck_index != 2) { 
            mainPageRewardArray[10][2] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        current_profiles[current_profile_index].deck_index = 2
        document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
    }
})

//the area to switch the currently selected deck of the current profile to the fourth deck
deck_row_4.addEventListener("click", function () {
    if(3 < current_profiles[current_profile_index].decks.length) {
        if(!mainPageRewardArray[10][3] && current_profiles[current_profile_index].deck_index != 3) { 
            mainPageRewardArray[10][3] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        current_profiles[current_profile_index].deck_index = 3
        document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
    }
})

//the area to switch the currently selected deck of the current profile to the fifth deck
deck_row_5.addEventListener("click", function () {
    if(4 < current_profiles[current_profile_index].decks.length) {
        if(!mainPageRewardArray[10][4] && current_profiles[current_profile_index].deck_index != 4) { 
            mainPageRewardArray[10][4] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        current_profiles[current_profile_index].deck_index = 4
        document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
    }
})

//the area to switch the currently selected deck to study to the first deck
study_deck_popup_row_1.addEventListener("click", function () {
    if(0 < current_profiles[current_profile_index].decks.length) {
        if(!studyDeckRewardArray[0][0] && study_deck_temporary_index != 0) {
            studyDeckRewardArray[0][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        study_deck_temporary_index = 0
        document.getElementById('deck_to_study').innerHTML = "Deck to study: " + current_profiles[current_profile_index].decks[study_deck_temporary_index].name
    }
})

//the area to switch the currently selected deck to study to the second deck
study_deck_popup_row_2.addEventListener("click", function () {
    if(1 < current_profiles[current_profile_index].decks.length) {
        if(!studyDeckRewardArray[0][1] && study_deck_temporary_index != 1) {
            studyDeckRewardArray[0][1] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        study_deck_temporary_index = 1
        document.getElementById('deck_to_study').innerHTML = "Deck to study: " + current_profiles[current_profile_index].decks[study_deck_temporary_index].name
    }
})

//the area to switch the currently selected deck to study to the third deck
study_deck_popup_row_3.addEventListener("click", function () {
    if(2 < current_profiles[current_profile_index].decks.length) {
        if(!studyDeckRewardArray[0][2] && study_deck_temporary_index != 2) {
            studyDeckRewardArray[0][2] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        study_deck_temporary_index = 2
        document.getElementById('deck_to_study').innerHTML = "Deck to study: " + current_profiles[current_profile_index].decks[study_deck_temporary_index].name
    }
})

//the area to switch the currently selected deck to study to the fourth deck
study_deck_popup_row_4.addEventListener("click", function () {
    if(3 < current_profiles[current_profile_index].decks.length) {
        if(!studyDeckRewardArray[0][3] && study_deck_temporary_index != 3) {
            studyDeckRewardArray[0][3] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        study_deck_temporary_index = 3
        document.getElementById('deck_to_study').innerHTML = "Deck to study: " + current_profiles[current_profile_index].decks[study_deck_temporary_index].name
    }
})

//the area to switch the currently selected deck to study to the fifth deck
study_deck_popup_row_5.addEventListener("click", function () {
    if(4 < current_profiles[current_profile_index].decks.length) {
        if(!studyDeckRewardArray[0][4] && study_deck_temporary_index != 4) {
            studyDeckRewardArray[0][4] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        study_deck_temporary_index = 4
        document.getElementById('deck_to_study').innerHTML = "Deck to study: " + current_profiles[current_profile_index].decks[study_deck_temporary_index].name
    }
})

//the area to switch the currently selected deck to import to the first deck
import_deck_popup_row_1.addEventListener("click", function () {
    if(!importDeckRewardArray[0][0] && deck_import_index != 0) {
        importDeckRewardArray[0][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    deck_import_index = 0
    document.getElementById('deck_to_import').innerHTML = "Deck to import: " + importable_decks[deck_import_index].name
})

//the area to switch the currently selected deck to import to the second deck
import_deck_popup_row_2.addEventListener("click", function () {
    if(!importDeckRewardArray[0][1] && deck_import_index != 1) {
        importDeckRewardArray[0][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    deck_import_index = 1
    document.getElementById('deck_to_import').innerHTML = "Deck to import: " + importable_decks[deck_import_index].name

})

//the area to switch the currently selected deck to import to the third deck
import_deck_popup_row_3.addEventListener("click", function () {
    if(!importDeckRewardArray[0][2] && deck_import_index != 2) {
        importDeckRewardArray[0][2] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    deck_import_index = 2
    document.getElementById('deck_to_import').innerHTML = "Deck to import: " + importable_decks[deck_import_index].name
})

//the area to switch the currently selected deck to export to the first deck
export_deck_popup_row_1.addEventListener("click", function () {
    if(!exportDeckRewardArray[0][0] && deck_export_index != 0) {
        exportDeckRewardArray[0][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    if(current_profiles[current_profile_index].decks.length > 0){
        deck_export_index = 0
        document.getElementById('deck_to_export').innerHTML = "Deck to export: " + current_profiles[current_profile_index].decks[deck_export_index].name
    }
})

//the area to switch the currently selected deck to export to the second deck
export_deck_popup_row_2.addEventListener("click", function () {
    if(!exportDeckRewardArray[0][1] && deck_export_index != 1) {
        exportDeckRewardArray[0][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    if(current_profiles[current_profile_index].decks.length > 1){
        deck_export_index = 1
        document.getElementById('deck_to_export').innerHTML = "Deck to export: " + current_profiles[current_profile_index].decks[deck_export_index].name    
    }
})

//the area to switch the currently selected deck to export to the third deck
export_deck_popup_row_3.addEventListener("click", function () {
    if(!exportDeckRewardArray[0][2] && deck_export_index != 2) {
        exportDeckRewardArray[0][2] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    if(current_profiles[current_profile_index].decks.length > 2){
        deck_export_index = 2
        document.getElementById('deck_to_export').innerHTML = "Deck to export: " + current_profiles[current_profile_index].decks[deck_export_index].name
    }
})

//the area to switch the currently selected deck to export to the fourth deck
export_deck_popup_row_4.addEventListener("click", function () {
    if(!exportDeckRewardArray[0][3] && deck_export_index != 3) {
        exportDeckRewardArray[0][3] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    if(current_profiles[current_profile_index].decks.length > 3){
        deck_export_index = 3
        document.getElementById('deck_to_export').innerHTML = "Deck to export: " + current_profiles[current_profile_index].decks[deck_export_index].name
    }
})

//the area to switch the currently selected deck to export to the fifth deck
export_deck_popup_row_5.addEventListener("click", function () {
    if(!exportDeckRewardArray[0][4] && deck_export_index != 4) {
        exportDeckRewardArray[0][4] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    if(current_profiles[current_profile_index].decks.length > 4){
        deck_export_index = 4
        document.getElementById('deck_to_export').innerHTML = "Deck to export: " + current_profiles[current_profile_index].decks[deck_export_index].name
    }
})

//the area to switch the currently selected profile to the first one
switch_profile_popup_row_1.addEventListener("click", function () {
    if(current_profiles.length > 0){
        if(!profileRewardArray[0][0] && switch_profile_index != 0) {
            profileRewardArray[0][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        switch_profile_index = 0
        document.getElementById('profile_to_open').innerHTML = "Profile to open: " + current_profiles[switch_profile_index].name
    }
})

//the area to switch the currently selected profile to the second one
switch_profile_popup_row_2.addEventListener("click", function () {
    if(current_profiles.length > 1){
        if(!profileRewardArray[0][1] && switch_profile_index != 1) {
            profileRewardArray[0][1] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        switch_profile_index = 1
        document.getElementById('profile_to_open').innerHTML = "Profile to open: " + current_profiles[switch_profile_index].name
    }
})

//the area to switch the currently selected profile to the third one
switch_profile_popup_row_3.addEventListener("click", function () {
    if(current_profiles.length > 2){
        if(!profileRewardArray[0][2] && switch_profile_index != 2) {
            profileRewardArray[0][2] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        switch_profile_index = 2
        document.getElementById('profile_to_open').innerHTML = "Profile to open: " + current_profiles[switch_profile_index].name
    }
})

//the area to switch the currently selected profile to the fourth one
switch_profile_popup_row_4.addEventListener("click", function () {
    if(current_profiles.length > 3){
        if(!profileRewardArray[0][3] && switch_profile_index != 3) {
            profileRewardArray[0][3] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        switch_profile_index = 3
        document.getElementById('profile_to_open').innerHTML = "Profile to open: " + current_profiles[switch_profile_index].name
    }
})

//the area to switch the currently selected profile to the fifth one
switch_profile_popup_row_5.addEventListener("click", function () {
    if(current_profiles.length > 4){
        if(!profileRewardArray[0][4] && switch_profile_index != 4) {
            profileRewardArray[0][4] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        switch_profile_index = 4
        document.getElementById('profile_to_open').innerHTML = "Profile to open: " + current_profiles[switch_profile_index].name
    }
})

//button to close the import deck popup
import_deck_popup_cancel_button.addEventListener("click", function () {
    if(!openClosePopupsRewardArray[4][1]) {
        openClosePopupsRewardArray[4][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    importDeckPopup.classList.remove("show")
})

//button to open the leads to external website popup
import_deck_popup_help_button.addEventListener("click", function () {
    importDeckPopup.classList.remove("show")
    leadsToExternalWebsitePopup.classList.add("show")
    if(!openClosePopupsRewardArray[1][0]) {
        openClosePopupsRewardArray[1][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
})

//button to open the leads to external website popup
export_deck_popup_help_button.addEventListener("click", function() {
    exportDeckPopup.classList.remove("show")
    leadsToExternalWebsitePopup.classList.add("show");
    if(!openClosePopupsRewardArray[1][0]) {
        openClosePopupsRewardArray[1][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
})

//button to import a deck iff the deck is not present and the number of decks does not exceed 5
import_deck_popup_add_button.addEventListener("click", function () {
    if(current_profiles[current_profile_index].decks.length == 5) {
        if(!openClosePopupsRewardArray[10][0]) {
            openClosePopupsRewardArray[10][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        alreadyFiveDecksPopup.classList.add("show")
        importDeckPopup.classList.remove("show")
        return
    }
    if(current_profiles[current_profile_index].decks.includes(importable_decks[deck_import_index])) {
        if(!openClosePopupsRewardArray[6][0]) {
            openClosePopupsRewardArray[6][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
        }
        deckExistsPopup.classList.add("show")
        importDeckPopup.classList.remove("show")
        return
    }
    current_profiles[current_profile_index].decks.push(importable_decks[deck_import_index])
    if(!importDeckRewardArray[2]) {
        importDeckRewardArray[2] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    importDeckPopup.classList.remove("show")
    loadMainPageDecks();
})

//button to increment the index of renaming a profile by 1 and updating the name of the temporary profile name
rename_profile_button.addEventListener("click", function () {
    if(!profileRewardArray[1][1]) {
        profileRewardArray[1][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    rename_profile_index += 1
    rename_profile_index %= 5
    document.getElementById('rename_profile_popup_row').innerHTML = possible_profile_names[rename_profile_index]
})

//button to increment the index of adding a profile by 1 and updating the name of the temporary profile name
add_profile_button.addEventListener("click", function () {
    if(!profileRewardArray[2][1]) {
        profileRewardArray[2][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    add_profile_index += 1
    add_profile_index %= 5
    document.getElementById('add_profile_popup_row').innerHTML = possible_profile_names[add_profile_index]
})

//button to open the preferences page
preferences_page_help_button.addEventListener("click", function () {
    if(!openClosePopupsRewardArray[1][0]) {
        openClosePopupsRewardArray[1][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    preferencesPage.classList.remove("show")
    leadsToExternalWebsitePopup.classList.add("show")
    if(!openClosePopupsRewardArray[1][0]) {
        openClosePopupsRewardArray[1][0] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
})

//button to close the preferences page
preferences_page_close_button.addEventListener("click", function () {
    if(!openClosePopupsRewardArray[12][1]) {
        openClosePopupsRewardArray[12][1] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
    preferencesPage.classList.remove("show")

})

preferences_page_text_button.addEventListener("click", function () {
    document.getElementById('preferences_page_box_5').innerHTML = "Text"
})

increment_1.addEventListener("click", function () {
    preferences_page_counter_1 += 1
    document.getElementById('counter_1').innerHTML = preferences_page_counter_1
})

decrement_1.addEventListener("click", function () {
    preferences_page_counter_1 -= 1
    document.getElementById('counter_1').innerHTML = preferences_page_counter_1
})

increment_2.addEventListener("click", function () {
    preferences_page_counter_2 += 1
    document.getElementById('counter_2').innerHTML = preferences_page_counter_2
})

decrement_2.addEventListener("click", function () {
    preferences_page_counter_2 -= 1
    document.getElementById('counter_2').innerHTML = preferences_page_counter_2
})

increment_3.addEventListener("click", function () {
    preferences_page_counter_3 += 1
    document.getElementById('counter_3').innerHTML = preferences_page_counter_3
})

decrement_3.addEventListener("click", function () {
    preferences_page_counter_3 -= 1
    document.getElementById('counter_3').innerHTML = preferences_page_counter_3
})

increment_4.addEventListener("click", function () {
    preferences_page_counter_4 += 1
    document.getElementById('counter_4').innerHTML = preferences_page_counter_4
})

decrement_4.addEventListener("click", function () {
    preferences_page_counter_4 -= 1
    document.getElementById('counter_4').innerHTML = preferences_page_counter_4
})

increment_5.addEventListener("click", function () {
    preferences_page_counter_5 += 1
    document.getElementById('counter_5').innerHTML = preferences_page_counter_5
})

decrement_5.addEventListener("click", function () {
    preferences_page_counter_5 -= 1
    document.getElementById('counter_5').innerHTML = preferences_page_counter_5
})

for (let i = 1; i <= 14; i++) {
        const checkboxes = [checkbox_1, checkbox_2, checkbox_3, checkbox_4, checkbox_5, checkbox_6, checkbox_7,
            checkbox_8, checkbox_9, checkbox_10, checkbox_11, checkbox_12, checkbox_13, checkbox_14]
        checkboxes[i-1].addEventListener("change", 
        (event) => {
            if(!preferencesPageRewardArray[i][0] && event.target.checked){
                preferencesPageRewardArray[i][0] = true
                total_sum_of_reward += 1
                document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
                return
            }
            else if(!preferencesPageRewardArray[i][1]){
                preferencesPageRewardArray[i][1] = true
                total_sum_of_reward += 1
                document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
                return
            }
        }
    )
}

preferences_page_text_button.addEventListener("click", function () {
    if(!preferencesPageRewardArray[19]) {
        preferencesPageRewardArray[19] = true
        total_sum_of_reward += 1
        document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
    }
})

for (let i = 0; i < 5; i++) {
    const buttons = [[increment_1,decrement_1], [increment_2,decrement_2], [increment_3,decrement_3], [increment_4,decrement_4], [increment_5,decrement_5]]
    buttons[i][0].addEventListener("click", function () {
        if(!preferencesPageRewardArray[20 + i][0]){
            preferencesPageRewardArray[20 + i][0] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
            return
        }
    })
    buttons[i][1].addEventListener("click", function () {
        if(!preferencesPageRewardArray[20 + i][1]){
            preferencesPageRewardArray[20 + i][1] = true
            total_sum_of_reward += 1
            document.getElementById('total_reward').innerHTML = "Total sum of rewards:" + total_sum_of_reward
            return
        }
    })
}
