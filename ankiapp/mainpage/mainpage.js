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

//reward structures
const PreferencesPageRewards = {
    Tab: [false, false, false, false],
    Button1: [false,false],
    Button2: [false,false],
    Button3: [false,false],
    Button4: [false,false],
    Button5: [false,false],
    Button6: [false,false],
    Button7: [false,false],
    Button8: [false,false],
    Button9: [false,false],
    Button10: [false,false],
    Button11: [false,false],
    Button12: [false,false],
    Button13: [false,false],
    Button14: [false,false],
    Dropdown1ItemSelect: [false,false,false],
    Dropdown2ItemSelect: [false,false,false],
    Dropdown3ItemSelect: [false,false],
    Dropdown4ItemSelect: [false,false],
    TextButtonClick: false,
    IncrementDecrementElement1: [false,false],
    IncrementDecrementElement2: [false,false],
    IncrementDecrementElement3: [false,false],
    IncrementDecrementElement4: [false,false],
    IncrementDecrementElement5: [false,false],
};

const openClosePopupsRewards = {
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
};

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
let openClosePopupsRewardArray = Object.values(openClosePopupsRewards)

//function to set the import popup
function importDeckPopupLoad() {
    deck_import_index = 0
    document.getElementById('deck_to_import').innerHTML = "Deck to import: " + importable_decks[deck_import_index].name
    importDeckPopup.classList.add("show")
    loadImportableDecks()
}

//function to set the export popup
function exportDeckPopupLoad() {
    deck_export_index = 0
    exportDeckPopup.classList.add("show")
    document.getElementById('exported_decks_number').innerHTML = "Number of exported decks: " + exported_decks.length
    loadExportableDecks()
}

//function to set the profile popup
function switchProfilePopupLoad() {
    cleanProfileNames()
    loadProfileNames()
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
    document.getElementById('deck_to_export').innerHTML = "Deck to export: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
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
    const items_to_hide = ['checkbox_6', 'checkbox_7', 'checkbox_8', 'checkbox_9', 'checkbox_10', 'increment_decrement_2', 'increment_decrement_3', 'increment_decrement_4', 'learn_ahead_text', 'timebox_time_text', 'next_day_text', 'increment_decrement_5', 'number_of_backups_text']
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
    } else if(document.getElementById('answer').style.display == "block") {
        document.getElementById('answer').style.display = "none"
        document.getElementById('show_answer').style.display = "block"
        document.getElementById('next_question').style.display = "none"
        current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index += 1
        current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index %= current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.length
        document.getElementById('current_card_number_study').innerHTML = "Current card number: " + (current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index + 1);
        document.getElementById("question").innerHTML = "Question: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].front 
        document.getElementById("answer").innerHTML = "Answer: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].back
    }
}

//function to assign functions to the components of the first dropdown
function dropdown1Call() {
    var x = document.getElementById("dd1").value;
    switch(x) {
        case "exit":
        location.reload()
        break;
        case "import":
        importDeckPopupLoad()
        break;
        case "export_deck":
        exportDeckPopupLoad()
        break;
        case "switch_profile":
        switchProfilePopupLoad()
        break;
    }
}

//function to assign functions to the components of the second dropdown
function dropdown2Call() {  
    if(document.getElementById('book_logo').style.display == "none"){
        document.getElementById('book_logo').style.display = "block"
    } else {
        document.getElementById('book_logo').style.display = "none"
    }
}

//function to assign functions to the components of the third dropdown
function dropdown3Call() {
    var x = document.getElementById("dd3").value;
    switch(x) {
        case "check_media":
        checkMediaPopup.classList.add("show")
        break;
        case "study_deck":
        studyDeckPopup.classList.add("show")
        loadStudyPopupDecks()
        break;
        case "preferences":
        preferencesPage.classList.add("show")
        break;
    }
}

//function to assign functions to the components of the fourth dropdown
function dropdown4Call() {
    var x = document.getElementById("dd4").value;
    switch(x) {
        case "guide":
        leadsToExternalWebsitePopup.classList.add("show");
        break;
        case "support":
        leadsToExternalWebsitePopup.classList.add("show");
        break;
        case "about_page":
        aboutPagePopup.classList.add("show");
        break;
    }
}

//function to show the components which are present on the main page and hide the other components
function openMainPage() {
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

//button to close the switch profile page and open the main page
switch_profile_popup_open_button.addEventListener("click", function () {
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
    addCardPopup.classList.remove("show")
})

//add the chosen deck to the decks of the current profile
export_deck_popup_add_button.addEventListener("click", function () {
    if (exported_decks.includes(current_profiles[current_profile_index].decks[deck_export_index])){
        exportDeckPopup.classList.remove("show")
        deckExistsPopup.classList.add("show")
        return;
    }
    if (exported_decks.length >= 5) {
        exportDeckPopup.classList.remove("show")
        alreadyFiveDecksPopup.classList.add("show")
        return;
    }
    exported_decks.push(current_profiles[current_profile_index].decks[deck_export_index])
    exportDeckPopup.classList.remove("show")
})

//help button which opens the leads to external website popup
study_deck_popup_help_button.addEventListener("click", function () {
    study_deck_temporary_index = 0
    studyDeckPopup.classList.remove("show")
    leadsToExternalWebsitePopup.classList.add("show");
})

//button to switch to the study page
study_deck_popup_study_button.addEventListener("click", function () {
    current_profiles[current_profile_index].deck_index = study_deck_temporary_index
    study_deck_temporary_index = 0
    studyDeckPopup.classList.remove("show")
    openStudyPage()
})

//button to create a new deck
study_deck_popup_add_button.addEventListener("click", function () {
    studyDeckPopup.classList.remove("show")
    createNewDeckPopup.classList.add("show");
})

//button to close the at least one card popup
close_at_least_one_card_popup_button.addEventListener("click", function () {
    atLeastOneCardPopup.classList.remove("show")
})

//button to show the leads to external website button
get_shared.addEventListener("click", function () {
    leadsToExternalWebsitePopup.classList.add("show");
});

//button to close the already five decks popup
close_already_five_decks_popup_button.addEventListener("click", function() {
    alreadyFiveDecksPopup.classList.remove("show")
})

//button to close the deck exists popup
close_deck_exists_popup_button.addEventListener("click", function() {
    deckExistsPopup.classList.remove("show")
})

//button to close the check media popup
check_media_close_button.addEventListener("click", function() {
    checkMediaPopup.classList.remove("show")
})

//button to close the leads to external website popup
closeLeadsToExternalWebsitePopup.addEventListener("click", function () {
    leadsToExternalWebsitePopup.classList.remove("show");
});

//button to open the add card popup
add_card.addEventListener("click", function () {
    addCardPopup.classList.add("show");
});

//button to refresh the page
switch_profile_popup_open_backup_button.addEventListener("click", function () {
    location.reload();
});

//button to close the downgrade popup
close_downgrade_popup_button.addEventListener("click", function () {
    downgradePopup.classList.remove("show");
    switchProfilePopup.classList.add("show")
});

//button to open the rename popup
switch_profile_popup_rename_button.addEventListener("click", function () {
    renameProfilePopup.classList.add("show");
})

//button to open the downgrade popup
switch_profile_popup_downgrade_button.addEventListener("click", function () {
    switchProfilePopup.classList.remove("show")
    downgradePopup.classList.add("show");
});

//button to close the add card popup
close_add_card_popup.addEventListener("click", function () {
    addCardPopup.classList.remove("show");
});

//button to open the create new deck popup
create_deck.addEventListener("click", function () {
    createNewDeckPopup.classList.add("show");
});

//button to close the create new deck popup
create_new_deck_close_button.addEventListener("click", function () {
    createNewDeckPopup.classList.remove("show");
});

//button to open the delete deck popup
delete_deck.addEventListener("click", function () {
    deleteDeckPopup.classList.add("show");
});

//button to open the anki login popup
anki_login.addEventListener("click", function () {
    ankiLoginPopup.classList.add("show");
});

//button to delete a deck iff there is more than one deck present
delete_deck_yes_button.addEventListener("click", function () {
    if(current_profiles[current_profile_index].decks.length == 1){
        document.getElementById('deleteDeckPopup').classList.remove("show")
        document.getElementById('atLeastOneDeckPopup').classList.add("show")
        return;
    }
    current_profiles[current_profile_index].decks.splice(current_profiles[current_profile_index].deck_index, 1);
    current_profiles[current_profile_index].deck_index = 0
    document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
    cleanDeckNames();
    loadMainPageDecks();
    deleteDeckPopup.classList.remove("show");
})

//button to close the delete deck popup
delete_deck_no_button.addEventListener("click", function () {
    deleteDeckPopup.classList.remove("show");
});

//button to reset the exported decks
export_deck_popup_reset_button.addEventListener("click", function(){
    exported_decks = []
    document.getElementById('exported_decks_number').innerHTML = "Number of exported decks: " + exported_decks.length
})

//button to edit the front side of a card iff the length of the front side does not exceed 50
edit_front_side_button.addEventListener("click", function (){
    current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].front += " edited"
    if(document.getElementById('question').innerHTML.length <= 50) {
        document.getElementById('question').innerHTML = "Question: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].front
        document.getElementById('edit_card_row_1').innerHTML = current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].front    
    }
})

//button to edit the back side of a card iff the length of the back side does not exceed 50
edit_back_side_button.addEventListener("click", function (){
    current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].back += " edited"
    if(document.getElementById('answer').innerHTML.length <= 50) {
        document.getElementById('answer').innerHTML = "Answer: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].back
        document.getElementById('edit_card_row_2').innerHTML = current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].back    
    }
})

//button to edit the tag of a card iff the length of the tag does not exceed 50
edit_tag_button.addEventListener("click", function (){
    current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].tag += " edited"
    if(document.getElementById('edit_card_row_3').innerHTML.length <= 50) {
        document.getElementById('edit_card_row_3').innerHTML = current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].tag
    }
})

//button to close the edit card popup
close_edit_card_popup_button.addEventListener("click", function (){
    editCardPopup.classList.remove("show")
})

//button to open the edit card popup
edit.addEventListener("click", function (){
    editCardPopup.classList.add("show")
    document.getElementById('edit_card_row_1').innerHTML = current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].front
    document.getElementById('edit_card_row_2').innerHTML = current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].back
    document.getElementById('edit_card_row_3').innerHTML = current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards[current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].current_study_index].tag
})

//button to close the at least one deck popup
close_at_least_one_deck_popup_button.addEventListener("click", function (){
    atLeastOneDeckPopup.classList.remove("show")
})

//button to increment the counter of the front side of a card by 1
add_card_button_1.addEventListener("click", function () {
    add_card_front_counter += 1;
    document.getElementById('add_card_row_1').innerHTML = "Front Side " + add_card_front_counter;
});

//button to increment the counter of the back side of a card by 1
add_card_button_2.addEventListener("click", function () {
    add_card_back_counter += 1;
    document.getElementById('add_card_row_2').innerHTML = "Back Side " + add_card_back_counter;
});

//button to increment the counter of the tag of a card by 1
add_card_button_3.addEventListener("click", function () {
    add_card_tag_counter += 1;
    document.getElementById('add_card_row_3').innerHTML = "Tag Text " + add_card_tag_counter;
});

//button to increment the counter for creating a deck by 1
create_new_deck_name_button.addEventListener("click", function () {
    create_deck_index += 1;
    create_deck_index %= 5;
    document.getElementById('create_new_deck').innerHTML = possible_deck_names[create_deck_index];
})

//button to close the export deck popup
export_deck_popup_cancel_button.addEventListener("click", function () {
    exportDeckPopup.classList.remove("show")
})

//button to close the add profile popup
close_add_profile_popup_button.addEventListener("click", function () {
    addProfilePopup.classList.remove("show")
    add_profile_index = 0
    document.getElementById('add_profile_popup_row').innerHTML = possible_profile_names[rename_profile_index];
})

//button the close the rename profile popup
close_rename_profile_popup_button.addEventListener("click", function () {
    renameProfilePopup.classList.remove("show")
    rename_profile_index = 0
    document.getElementById('rename_profile_popup_row').innerHTML = possible_profile_names[rename_profile_index];
})

//button to close the profile exists popup and open the switch profile popup
close_profile_exists_popup_button.addEventListener("click", function () {
    profileExistsPopup.classList.remove("show")
    switchProfilePopup.classList.add("show")
})

//button to rename a present profile iff the name to set is not present
rename_profile_popup_ok_button.addEventListener("click", function () {
    for(let i = 0; i < current_profiles.length; i++){
        if(current_profiles[i].name == possible_profile_names[rename_profile_index]){
            renameProfilePopup.classList.remove("show")
            switchProfilePopup.classList.remove("show")
            profileExistsPopup.classList.add("show")
            return
        }
    }  
    current_profiles[switch_profile_index].name = possible_profile_names[rename_profile_index]
    switchProfilePopupLoad()
    renameProfilePopup.classList.remove("show")
})

//button to add a profile of an index iff the name of the profile is not present and the length of the current profiles does not exceed 5
add_profile_popup_ok_button.addEventListener("click", function () {
    if(current_profiles.length == 5){
        return
    }
    for(let i = 0; i < current_profiles.length; i++){
        if(current_profiles[i].name == possible_profile_names[add_profile_index]){
            addProfilePopup.classList.remove("show")
            switchProfilePopup.classList.remove("show")
            profileExistsPopup.classList.add("show")
            return
        }
    }  
    current_profiles.push({name: possible_profile_names[add_profile_index], decks:[{name: DeckNames.DeckName1, cards:[{front: "Front text", back: "Back text", tag:"Some tag"}], current_study_index: 0}], deck_index: 0})
    switchProfilePopupLoad()
    addProfilePopup.classList.remove("show")
})

//button to close the at least one profile popup and open the switch profile popup
close_at_least_one_profile_popup_button.addEventListener("click", function () {
    atLeastOneProfilePopup.classList.remove("show")
    switchProfilePopup.classList.add("show")
})

//button to delete a profile in the switch profile popup
switch_profile_popup_delete_button.addEventListener("click", function () {
    if(current_profiles.length == 1){
        atLeastOneProfilePopup.classList.add("show")
        switchProfilePopup.classList.remove("show")
        return
    }    
    current_profiles.splice(switch_profile_index, 1)
    switch_profile_index = 0
    cleanProfileNames()
    loadProfileNames()
})

//button to remove a card in the study page iff there is more than one card
remove_card.addEventListener("click", function() {
    if(current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].cards.length == 1) {
        atLeastOneCardPopup.classList.add("show");
        return;
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
})

//button to close the add profile popup
close_add_profile_popup_button.addEventListener("click", function () {
    addProfilePopup.classList.remove("show")
})

//button to create a new deck iff the number of the current decks does not exceed 5 and the name of the deck is not present in the current decks
create_new_deck_add_button.addEventListener("click", function () {
    if(current_profiles[current_profile_index].decks.length >= 5) {
        document.getElementById('createNewDeckPopup').classList.remove("show")
        document.getElementById('alreadyFiveDecksPopup').classList.add("show")
        return;
    }
    for(let i = 0 ; i < current_profiles[current_profile_index].decks.length; i++) {
        if(current_profiles[current_profile_index].decks[i].name == Object.values(DeckNames)[create_deck_index]){
            document.getElementById('createNewDeckPopup').classList.remove("show")
            document.getElementById('deckExistsPopup').classList.add("show")
            return;
        }   
    }
    current_profiles[current_profile_index].decks.push({name: Object.values(DeckNames)[create_deck_index], cards:[{front: "Front text", back: "Back text", tag:"Tag text"}], current_study_index: 0});
    createNewDeckPopup.classList.remove("show");
    loadMainPageDecks()
})

//button to close the study deck popup
study_deck_popup_cancel_button.addEventListener("click", function () {
    studyDeckPopup.classList.remove("show")
})

//button to increment the index of login username by 1 and update the temporary account name
anki_login_username_button.addEventListener("click", function () {
    anki_login_username_index += 1
    anki_login_username_index %= 5
    document.getElementById('anki_login_row_1').innerHTML = possible_account_names[anki_login_username_index]
})

//button to increment the index of login password by 1 and update the temporary account name
anki_login_password_button.addEventListener("click", function () {
    anki_login_password_index += 1
    anki_login_password_index %= 5
    document.getElementById('anki_login_row_2').innerHTML = possible_account_passwords[anki_login_password_index]
})

//button to close the anki login popup
anki_login_close_button.addEventListener("click", function () {
    ankiLoginPopup.classList.remove("show");
})

//button to change the current anki account iff the indices for username and password match
anki_login_ok_button.addEventListener("click", function () {
    if(anki_login_username_index != anki_login_password_index){
        failedLoginPopup.classList.add("show")
        ankiLoginPopup.classList.remove("show")
        return;
    }
    current_account_index = anki_login_username_index
    document.getElementById('current_account').innerHTML = "Current account: " + possible_account_names[current_account_index];
    ankiLoginPopup.classList.remove("show");
})

//button to close the about page
about_page_close_button.addEventListener("click", function (){
    aboutPagePopup.classList.remove("show");
})

//button to close the failed login popup
close_failed_login_popup.addEventListener("click", function (){
    failedLoginPopup.classList.remove("show");
})

//the area to switch the currently selected deck of the current profile to the first deck
deck_row_1.addEventListener("click", function () {
    if(0 < current_profiles[current_profile_index].decks.length) {
        current_profiles[current_profile_index].deck_index = 0
        document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
    }
})

//the area to switch the currently selected deck of the current profile to the second deck
deck_row_2.addEventListener("click", function () {
    if(1 < current_profiles[current_profile_index].decks.length) {
        current_profiles[current_profile_index].deck_index = 1
        document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
    }
})

//the area to switch the currently selected deck of the current profile to the third deck
deck_row_3.addEventListener("click", function () {
    if(2 < current_profiles[current_profile_index].decks.length) {
        current_profiles[current_profile_index].deck_index = 2
        document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
    }
})

//the area to switch the currently selected deck of the current profile to the fourth deck
deck_row_4.addEventListener("click", function () {
    if(3 < current_profiles[current_profile_index].decks.length) {
        current_profiles[current_profile_index].deck_index = 3
        document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
    }
})

//the area to switch the currently selected deck of the current profile to the fifth deck
deck_row_5.addEventListener("click", function () {
    if(4 < current_profiles[current_profile_index].decks.length) {
        current_profiles[current_profile_index].deck_index = 4
        document.getElementById('current_deck').innerHTML = "Current deck: " + current_profiles[current_profile_index].decks[current_profiles[current_profile_index].deck_index].name
    }
})

//the area to switch the currently selected deck to study to the first deck
study_deck_popup_row_1.addEventListener("click", function () {
    if(0 < current_profiles[current_profile_index].decks.length) {
        study_deck_temporary_index = 0
        document.getElementById('deck_to_study').innerHTML = "Deck to study: " + current_profiles[current_profile_index].decks[study_deck_temporary_index].name
    }
})

//the area to switch the currently selected deck to study to the second deck
study_deck_popup_row_2.addEventListener("click", function () {
    if(1 < current_profiles[current_profile_index].decks.length) {
        study_deck_temporary_index = 1
        document.getElementById('deck_to_study').innerHTML = "Deck to study: " + current_profiles[current_profile_index].decks[study_deck_temporary_index].name
    }
})

//the area to switch the currently selected deck to study to the third deck
study_deck_popup_row_3.addEventListener("click", function () {
    if(2 < current_profiles[current_profile_index].decks.length) {
        study_deck_temporary_index = 2
        document.getElementById('deck_to_study').innerHTML = "Deck to study: " + current_profiles[current_profile_index].decks[study_deck_temporary_index].name
    }
})

//the area to switch the currently selected deck to study to the fourth deck
study_deck_popup_row_4.addEventListener("click", function () {
    if(3 < current_profiles[current_profile_index].decks.length) {
        study_deck_temporary_index = 3
        document.getElementById('deck_to_study').innerHTML = "Deck to study: " + current_profiles[current_profile_index].decks[study_deck_temporary_index].name
    }
})

//the area to switch the currently selected deck to study to the fifth deck
study_deck_popup_row_5.addEventListener("click", function () {
    if(4 < current_profiles[current_profile_index].decks.length) {
        study_deck_temporary_index = 4
        document.getElementById('deck_to_study').innerHTML = "Deck to study: " + current_profiles[current_profile_index].decks[study_deck_temporary_index].name
    }
})

//the area to switch the currently selected deck to import to the first deck
import_deck_popup_row_1.addEventListener("click", function () {
    deck_import_index = 0
    document.getElementById('deck_to_import').innerHTML = "Deck to import: " + importable_decks[deck_import_index].name
})

//the area to switch the currently selected deck to import to the second deck
import_deck_popup_row_2.addEventListener("click", function () {
    deck_import_index = 1
    document.getElementById('deck_to_import').innerHTML = "Deck to import: " + importable_decks[deck_import_index].name

})

//the area to switch the currently selected deck to import to the third deck
import_deck_popup_row_3.addEventListener("click", function () {
    deck_import_index = 2
    document.getElementById('deck_to_import').innerHTML = "Deck to import: " + importable_decks[deck_import_index].name
})

//the area to switch the currently selected deck to export to the first deck
export_deck_popup_row_1.addEventListener("click", function () {
    if(current_profiles[current_profile_index].decks.length > 0){
        deck_export_index = 0
        document.getElementById('deck_to_export').innerHTML = "Deck to export: " + current_profiles[current_profile_index].decks[deck_export_index].name
    }
})

//the area to switch the currently selected deck to export to the second deck
export_deck_popup_row_2.addEventListener("click", function () {
    if(current_profiles[current_profile_index].decks.length > 1){
        deck_export_index = 1
        document.getElementById('deck_to_export').innerHTML = "Deck to export: " + current_profiles[current_profile_index].decks[deck_export_index].name    
    }
})

//the area to switch the currently selected deck to export to the third deck
export_deck_popup_row_3.addEventListener("click", function () {
    if(current_profiles[current_profile_index].decks.length > 2){
        deck_export_index = 2
        document.getElementById('deck_to_export').innerHTML = "Deck to export: " + current_profiles[current_profile_index].decks[deck_export_index].name
    }
})

//the area to switch the currently selected deck to export to the fourth deck
export_deck_popup_row_4.addEventListener("click", function () {
    if(current_profiles[current_profile_index].decks.length > 3){
        deck_export_index = 3
        document.getElementById('deck_to_export').innerHTML = "Deck to export: " + current_profiles[current_profile_index].decks[deck_export_index].name
    }
})

//the area to switch the currently selected deck to export to the fifth deck
export_deck_popup_row_5.addEventListener("click", function () {
    if(current_profiles[current_profile_index].decks.length > 4){
        deck_export_index = 4
        document.getElementById('deck_to_export').innerHTML = "Deck to export: " + current_profiles[current_profile_index].decks[deck_export_index].name
    }
})

//the area to switch the currently selected profile to the first one
switch_profile_popup_row_1.addEventListener("click", function () {
    if(current_profiles.length > 0){
        switch_profile_index = 0
        document.getElementById('profile_to_open').innerHTML = "Profile to open: " + current_profiles[switch_profile_index].name
    }
})

//the area to switch the currently selected profile to the second one
switch_profile_popup_row_2.addEventListener("click", function () {
    if(current_profiles.length > 1){
        switch_profile_index = 1
        document.getElementById('profile_to_open').innerHTML = "Profile to open: " + current_profiles[switch_profile_index].name
    }
})

//the area to switch the currently selected profile to the third one
switch_profile_popup_row_3.addEventListener("click", function () {
    if(current_profiles.length > 2){
        switch_profile_index = 2
        document.getElementById('profile_to_open').innerHTML = "Profile to open: " + current_profiles[switch_profile_index].name
    }
})

//the area to switch the currently selected profile to the fourth one
switch_profile_popup_row_4.addEventListener("click", function () {
    if(current_profiles.length > 3){
        switch_profile_index = 3
        document.getElementById('profile_to_open').innerHTML = "Profile to open: " + current_profiles[switch_profile_index].name
    }
})

//the area to switch the currently selected profile to the fifth one
switch_profile_popup_row_5.addEventListener("click", function () {
    if(current_profiles.length > 4){
        switch_profile_index = 4
        document.getElementById('profile_to_open').innerHTML = "Profile to open: " + current_profiles[switch_profile_index].name
    }
})

//button to close the import deck popup
import_deck_popup_cancel_button.addEventListener("click", function () {
    importDeckPopup.classList.remove("show")
})

//button to open the leads to external website popup
import_deck_popup_help_button.addEventListener("click", function () {
    importDeckPopup.classList.remove("show")
    leadsToExternalWebsitePopup.classList.add("show")
})

//button to open the leads to external website popup
export_deck_popup_help_button.addEventListener("click", function() {
    exportDeckPopup.classList.remove("show")
    leadsToExternalWebsitePopup.classList.add("show");
})

//button to import a deck iff the deck is not present and the number of decks does not exceed 5
import_deck_popup_add_button.addEventListener("click", function () {
    if(current_profiles[current_profile_index].decks.length == 5) {
        alreadyFiveDecksPopup.classList.add("show")
        importDeckPopup.classList.remove("show")
        return
    }
    if(current_profiles[current_profile_index].decks.includes(importable_decks[deck_import_index])) {
        deckExistsPopup.classList.add("show")
        importDeckPopup.classList.remove("show")
        return
    }
    current_profiles[current_profile_index].decks.push(importable_decks[deck_import_index])
    importDeckPopup.classList.remove("show")
    loadMainPageDecks();
})

//button to increment the index of renaming a profile by 1 and updating the name of the temporary profile name
rename_profile_button.addEventListener("click", function () {
    rename_profile_index += 1
    rename_profile_index %= 5
    document.getElementById('rename_profile_popup_row').innerHTML = possible_profile_names[rename_profile_index]
})

//button to increment the index of adding a profile by 1 and updating the name of the temporary profile name
add_profile_button.addEventListener("click", function () {
    add_profile_index += 1
    add_profile_index %= 5
    document.getElementById('add_profile_popup_row').innerHTML = possible_profile_names[add_profile_index]
})

//button to open the preferences page
preferences_page_help_button.addEventListener("click", function () {
    preferencesPage.classList.remove("show")
    leadsToExternalWebsitePopup.classList.add("show")
})

//button to close the preferences page
preferences_page_close_button.addEventListener("click", function () {
    preferencesPage.classList.remove("show")
})
