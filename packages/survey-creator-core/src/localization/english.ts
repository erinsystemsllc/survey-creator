//Uncomment this line on creating a translation file
//import { editorLocalization, defaultStrings } from "../editorLocalization";

export var enStrings = {
  //survey templates
  survey: {
    edit: "Edit",
    externalHelpLink: "Watch and learn how to create surveys",
    externalHelpLinkUrl:
      "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Please drop a question here from the Toolbox.",
    addLogicItem: "Create a rule to customize the flow of the survey.",
    copy: "Copy",
    duplicate: "Duplicate",
    settings: "Settings",
    addToToolbox: "Add to toolbox",
    deletePanel: "Delete Panel",
    deleteQuestion: "Delete Question",
    convertTo: "Convert to",
    drag: "Drag element",
    license:
      "You must purchase a developer license to use Survey Creator in your app"
  },
  //questionTypes
  qt: {
    default: "Default",
    checkbox: "Checkbox",
    comment: "Comment",
    imagepicker: "Image Picker",
    ranking: "Ranking",
    image: "Image",
    dropdown: "Dropdown",
    file: "File",
    html: "HTML",
    matrix: "Single-Choice Matrix",
    matrixdropdown: "Multiple-Choice Matrix",
    matrixdynamic: "Dynamic Matrix",
    multipletext: "Multiple Text",
    panel: "Panel",
    paneldynamic: "Dynamic Panel",
    radiogroup: "Radiogroup",
    rating: "Rating",
    text: "Single Input",
    boolean: "Boolean",
    expression: "Expression (read-only)",
    signaturepad: "Signature Pad",
    buttongroup: "Button Group",
    flowpanel: "Flow Panel"
  },
  //Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Default ({0})",
    survey: "Survey",
    settings: "Survey Settings",
    settingsTooltip: "Open survey settings",
    //opjectPropertiesHeader: "Advanced",
    //showObjectProperties: "Show Object Properties",
    //hideObjectProperties: "Hide Object Properties",
    showPanel: "Show Panel",
    hidePanel: "Hide Panel",
    prevSelected: "Select previous",
    nextSelected: "Select next",
    //editSurvey: "Edit Survey",
    surveyTypeName: "Survey",
    pageTypeName: "Page",
    panelTypeName: "Panel",
    questionTypeName: "Question",
    columnTypeName: "Column",
    addNewPage: "Add New Page",
    moveRight: "Scroll to the Right",
    moveLeft: "Scroll to the Left",
    deletePage: "Delete Page",
    editPage: "Edit Page",
    edit: "Edit",
    newPageName: "page",
    newQuestionName: "question",
    newPanelName: "panel",
    newTextItemName: "text",
    testSurvey: "Preview",
    defaultV2Theme: "Default",
    modernTheme: "Modern",
    defaultTheme: "Default (legacy)",
    testSurveyAgain: "Preview Survey Again",
    testSurveyWidth: "Survey width: ",
    navigateToMsg: "You had to navigate to",
    logic: "Logic",
    embedSurvey: "Embed Survey",
    translation: "Translation",
    saveSurvey: "Save Survey",
    saveSurveyTooltip: "Save Survey",
    designer: "Designer",
    jsonEditor: "JSON Editor",
    jsonHideErrors: "Hide errors",
    jsonShowErrors: "Show errors",
    undo: "Undo",
    redo: "Redo",
    undoTooltip: "Undo last change",
    redoTooltip: "Redo the change",
    showMoreChoices: "Show more",
    showLessChoices: "Show less",
    copy: "Copy",
    cut: "Cut",
    paste: "Paste",
    copyTooltip: "Copy selection to clipboard",
    cutTooltip: "Cut selection to clipboard",
    pasteTooltip: "Paste from clipboard",
    options: "Options",
    generateValidJSON: "Generate Valid JSON",
    generateReadableJSON: "Generate Readable JSON",
    toolbox: "Toolbox",
    "property-grid": "Properties",
    propertyGridFilteredTextPlaceholder: "Type to search...",
    toolboxGeneralCategory: "General",
    //delSelObject: "Delete selected object",
    //editSelObject: "Edit selected object",
    correctJSON: "Please correct JSON.",
    surveyResults: "Survey Results ",
    surveyResultsTable: "As Table",
    surveyResultsJson: "As JSON",
    resultsTitle: "Question Title",
    resultsName: "Question Name",
    resultsValue: "Answer Value",
    resultsDisplayValue: "Display Value",
    modified: "Modified",
    saving: "Saving",
    saved: "Saved",
    propertyEditorError: "Error",
    saveError: "Error! Editor content is not saved.",
    translationPropertyGridTitle: "Language Settings",
    translationLanguages: "Languages",
    translationAddLanguage: "Select language to translate",
    translationShowAllStrings: "All Strings",
    translationShowUsedStringsOnly: "Used Strings Only",
    translationShowAllPages: "All Pages",
    translationNoStrings: "No strings to translate. Please, change the filter.",
    translationExportToSCVButton: "Export to CSV",
    translationImportFromSCVButton: "Import from CSV",
    translationMergeLocaleWithDefault: "Merge {0} with default locale",
    translationPlaceHolder: "Translation...",
    bold: "Bold",
    italic: "Italic",
    underline: "Underline",
    addNewQuestion: "Add Question",
    selectPage: "Select page...",
    chooseElement: "Choose element...",
    htmlPlaceHolder: "HTML content will be here.",
    panelPlaceHolder: "Drop a question from the toolbox here.",
    surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below.",
    addNewTypeQuestion: "Add {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    //completedHtmlOnConditionItemText: "Show if",
    lg: {
      addNewItem: "Add New Rule",
      //Logic tab strings
      empty_tab: "Create a rule to customize the flow of the survey.",
      page_visibilityName: "Show (hide) page",
      page_enableName: "Enable (disable) page",
      panel_visibilityName: "Show (hide) panel",
      panel_enableName: "Enable (disable) panel",
      question_visibilityName: "Show (hide) question",
      question_enableName: "Enable (disable) question",
      question_requireName: "Make question required",
      column_visibilityName: "Show (hide) column",
      column_enableName: "Enable (disable) column",
      column_requireName: "Make column required",
      trigger_completeName: "Complete survey",
      trigger_setvalueName: "Set answer",
      trigger_copyvalueName: "Copy answer",
      trigger_skipName: "Skip to question",
      trigger_runExpressionName: "Run expression",
      completedHtmlOnConditionName: "Set \"Survey Complete\" page markup",

      page_visibilityDescription:
        "Make the page visible when the logic expression returns true. Otherwise keep it invisible.",
      panel_visibilityDescription:
        "Make the panel visible when the logic expression returns true. Otherwise keep it invisible.",
      panel_enableDescription:
        "Make the panel, and all elements inside it, enable when the logic expression returns true. Otherwise keep them disabled.",
      question_visibilityDescription:
        "Make the question visible when the logic expression returns true. Otherwise keep it invisible.",
      question_enableDescription:
        "Make the question enable when the logic expression returns true. Otherwise keep it disabled.",
      question_requireDescription:
        "Question becomes required when the logic expression returns true.",
      trigger_completeDescription:
        "When the logic expression returns true then the survey becomes completed and an end-user see the 'Thank you page'.",
      trigger_setvalueDescription:
        "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value is set to the selected question.",
      trigger_copyvalueDescription:
        "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value of one selected question is copied to another selected question.",
      trigger_skipDescription:
        "When the logic expression returns true then the survey skip to / focus the selected question.",
      trigger_runExpressionDescription:
        "When the logic expression returns true, then the custom expression is performed. You may optionally set this expression result into the selected question",
      completedHtmlOnConditionDescription:
        "If the logic expression returns true, then the default text for the 'Thank you page' is changed to the given one.",

      itemExpressionText: "When expression: '{0}' returns true", //{0} - the expression
      itemEmptyExpressionText: "New rule",
      page_visibilityText: "make page {0} visible", //{0} page name
      panel_visibilityText: "make panel {0} visible", //{0} panel name
      panel_enableText: "make panel {0} enable", //{0} panel name
      question_visibilityText: "make question {0} visible", //{0} question name
      question_enableText: "make question {0} enable", //{0} question name
      question_requireText: "make question {0} required", //{0} question name
      column_visibilityText: "make column {0} of question {1} visible", //{0} column name, {1} question name
      column_enableText: "make column {0} of question {1} enable", //{0} column name, {1} question name
      column_requireText: "make column {0} of question {1} required", //{0} column name, {1} question name
      trigger_completeText: "survey becomes completed",
      trigger_setvalueText: "set into question: {0} value {1}", //{0} question name, {1} setValue
      trigger_copyvalueText: "copy into question: {0} value from question {1}", //{0} and {1} question names
      trigger_skipText: "survey skip to the question {0}", //{0} question name
      trigger_runExpressionText1: "run expression: '{0}'", //{0} the expression
      trigger_runExpressionText2: " and set its result into question: {0}", //{0} question name
      completedHtmlOnConditionText: "show custom text for the 'Thank you page'.",

      showAllQuestions: "All Questions",
      showAllActionTypes: "All Action Types",

      conditions: "Condition(s)",
      actions: "Action(s)",
      expressionEditorTitle: "Define condition(s)",
      actionsEditorTitle: "Define action(s)",

      deleteAction: "Delete Action",
      addNewAction: "Add Action",
      selectedActionCaption: "Select action...",

      expressionInvalid:
        "The logic expression is empty or invalid. Please correct it.",
      noActionError: "Please, add at least one action.",
      actionInvalid: "Please, fix problems in your action(s).",
      expressionSetup: "",
      actionsSetup: ""
    }
  },
  //Property names in table headers
  // pel: {
  //   isRequired: "Required?"
  // },
  //Property Editors
  pe: {
    apply: "Apply",
    ok: "OK",
    save: "Save",
    clear: "Clear",
    saveTooltip: "Save",
    cancel: "Cancel",
    set: "Set",
    reset: "Reset",
    change: "Change",
    refresh: "Refresh",
    close: "Close",
    delete: "Delete",
    add: "Add",
    addNew: "Add New",
    addItem: "Click to add an item...",
    removeItem: "Click to remove the item...",
    dragItem: "Drag the item",
    addOther: "Other",
    addSelectAll: "Select All",
    addNone: "None",
    removeAll: "Remove All",
    edit: "Edit",
    back: "Return without saving",
    backTooltip: "Return without saving",
    saveAndBack: "Save and return",
    saveAndBackTooltip: "Save and return",
    doneEditing: "Done",
    // itemValueEdit: "Visible If",
    editChoices: "Edit Choices",
    showChoices: "Show Choices",
    move: "Move",
    empty: "<empty>",
    emptyValue: "Value is empty",
    fastEntry: "Manual Entry",
    fastEntryNonUniqueError: "Value '{0}' is not unique",
    fastEntryChoicesCountError:
      "Please limit the number of items from {0} to {1}",
    formEntry: "Form Entry",
    testService: "Test the service",
    itemSelectorEmpty: "Please select the element",
    conditionActionEmpty: "Please select the action",
    conditionSelectQuestion: "Select question...",
    conditionSelectPage: "Select page...",
    conditionSelectPanel: "Select panel...",
    conditionValueQuestionTitle: "Please enter/select the value",
    // conditionHelp:
    //   "Please enter a boolean expression. It should return true to keep the question/page visible. For example: {question1} = 'value1' or ({question2} * {question4}  > 20 and {question3} < 5)",
    expressionHelp:
      "Use curly brackets to access answers: `{question1} + {question2}`. Expressions also support functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `count()`, `avg()`, and others",
    aceEditorHelp: "Press ctrl+space to get expression completion hint",
    aceEditorRowTitle: "Current row",
    aceEditorPanelTitle: "Current panel",
    showMore: "For more details please check the documentation",
    // conditionShowMoreUrl:
    //   "https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf",
    assistantTitle: "Available questions",
    cellsEmptyRowsColumns: "There is should be at least one column or row",
    showPreviewBeforeComplete: "Preview answers before submitting the survey",

    propertyIsEmpty: "Please enter a value",
    propertyIsNoUnique: "Please enter a unique value",
    propertyNameIsNotUnique: "Please enter a unique name",
    listIsEmpty: "No items have been added yet",
    "listIsEmpty@choices": "No choices have been added yet",
    "addNew@choices": "Add a choice",
    expressionIsEmpty: "Expression is empty",
    value: "Value",
    text: "Text",
    rowid: "Row ID",
    imageLink: "Image or video URL",
    columnEdit: "Edit column: {0}",
    itemEdit: "Edit item: {0}",

    url: "Service URL",
    path: "Path to data within the service",
    valueName: "Store answers in the following JSON field",
    titleName: "Get display texts from the following JSON field",
    imageLinkName: "Get image URLs from the following JSON field",
    allowEmptyResponse: "Allow empty response",
    titlePlaceholder: "Title",
    surveyTitlePlaceholder: "Survey Title",
    pageTitlePlaceholder: "Page {num}",
    descriptionPlaceholder: "Description",
    surveyDescriptionPlaceholder: "Description",
    pageDescriptionPlaceholder: "Description",

    hasOther: "Allow the Other option",
    otherText: "Other option text",
    otherPlaceHolder: "Comment area placeholder",
    hasNone: "Allow the None option",
    noneText: "None option text",
    hasSelectAll: "Allow the Select All option",
    selectAllText: "Select All option text",
    choicesMin: "Minimum value for auto-generated items",
    choicesMax: "Maximum value for auto-generated items",
    choicesStep: "Step for auto-generated items",
    name: "Name",
    title: "Title",
    cellType: "Cell type",
    colCount: "Column count",
    choicesOrder: "Choices sort order",
    visible: "Visible",
    isRequired: "Required",
    isAllRowRequired: "Require answer for all rows",
    requiredErrorText: "\"Required\" error message",
    startWithNewLine: "Display the question on a new line",
    rows: "Rows",
    cols: "Columns",
    placeHolder: "Input area placeholder",
    showPreview: "Show preview area",
    storeDataAsText: "Store file content in JSON result as text",
    maxSize: "Maximum file size (in bytes)",
    imageHeight: "Image height",
    imageWidth: "Image width",
    rowCount: "Row count",
    columnLayout: "Columns layout",
    addRowLocation: "Add Row button location",
    addRowText: "Add Row button text",
    removeRowText: "Remove Row button text",
    rateMin: "Minimum rate value",
    rateMax: "Maximum rate value",
    rateStep: "Rate step",
    minRateDescription: "Minimum rate value description",
    maxRateDescription: "Maximum rate value description",
    inputType: "Input type",
    optionsCaption: "Option placeholder",
    showOptionsCaption: "Show option placeholder",
    defaultValue: "Default Answer",
    cellsDefaultRow: "Default texts",

    surveyEditorTitle: "Edit survey settings",
    qEditorTitle: "Edit: {0}",

    maxLength: "Maximum length (in characters)",

    buildExpression: "Build",
    editExpression: "Edit",
    and: "and",
    or: "or",
    remove: "Remove",
    addCondition: "Add Condition",
    if: "If",
    then: "then",
    setToName: "Target question",
    fromName: "Question to copy answer from",
    gotoName: "Question to skip to",
    ruleIsNotSet: "Rule is incorrect",
    includeIntoResult: "Include into survey results",

    //survey
    showTitle: "Show the title",
    expandCollapseTitle: "Expand/collapse title",
    locale: "Survey language",
    simulator: "Choose device",
    landscapeOrientation: "Landscape",
    portraitOrientation: "Portrait",
    mode: "Editable or read-only",
    clearInvisibleValues: "Clear invisible values",
    cookieName: "Cookie name",
    sendResultOnPageNext: "Save partial survey results in progress",
    storeOthersAsComment: "Store the Others value in a separate field",
    showPageTitles: "Show page titles",
    showPageNumbers: "Show page numbers",
    pagePrevText: "Previous Page button text",
    pageNextText: "Next Page button text",
    completeText: "Complete Survey button text",
    previewText: "Preview Answers button text",
    editText: "Edit Answer button text",
    startSurveyText: "Start Survey button text",
    showNavigationButtons: "Navigation buttons location",
    showPrevButton: "Show the Previous Page button",
    firstPageIsStarted: "First page is a start page",
    showCompletedPage: "Show the Survey Complete page",
    goNextPageAutomatic: "Proceed to the next page automatically",
    showProgressBar: "Progress bar location",
    questionTitleLocation: "Question title location",
    requiredText: "Required symbol(s)",
    questionStartIndex: "Start index (number or letter)",
    showQuestionNumbers: "Question numbering",
    questionTitleTemplate:
      "Question title template, default is: '{no}. {require} {title}'",
    questionErrorLocation: "Error message location",
    focusFirstQuestionAutomatic: "Focus first question on a new page",
    questionsOrder: "Element order on the page",
    maxTimeToFinish: "Time limit to finish the survey (in seconds)",
    maxTimeToFinishPage: "Time limit to finish one page (in seconds)",
    page: {
      maxTimeToFinish: "Time limit to finish the page (in seconds)",
    },
    question: {
      page: "Parent page"
    },
    showTimerPanel: "Timer location",
    showTimerPanelMode: "Timer mode",
    renderMode: "Panel display mode",
    allowAddPanel: "Allow adding panels",
    allowRemovePanel: "Allow removing panels",
    noEntriesText: "Empty entries text",
    panelAddText: "Add Panel button text",
    panelRemoveText: "Remove Panel button text",
    isSinglePage: "Show all elements on one page",
    html: "HTML markup",
    expression: "Expression",
    setValue: "Answer",
    dataFormat: "Image format",
    allowAddRows: "Allow adding rows",
    allowRemoveRows: "Allow removing rows",
    allowRowsDragAndDrop: "Allow row drag and drop",

    responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height.",
    minImageWidth: "Minimum image width",
    maxImageWidth: "Maximum image width",
    minImageHeight: "Minimum image height",
    maxImageHeight: "Maximum image height",

    minValue: "Minimum value",
    maxValue: "Maximum value",
    minLength: "Minimum length (in characters)",
    allowDigits: "Allow digits",
    minCount: "Minimum count",
    maxCount: "Maximum count",
    regex: "Regular expression",
    surveyvalidator: {
      text: "Error message",
      expression: "Validation expression"
    },
    totalText: "Total row text",
    totalType: "Total type",
    totalExpression: "Total expression",
    totalDisplayStyle: "Total value display style",
    totalCurrency: "Currency",
    totalFormat: "Formatted string",
    logo: "Logo (URL or base64-encoded string)",
    questionsOnPageMode: "Survey structure",
    maxTextLength: "Maximum answer length (in characters)",
    maxOthersLength: "Maximum comment length (in characters)",
    autoGrowComment: "Auto-expand comment area if necessary",
    textUpdateMode: "Update text question value",
    focusOnFirstError: "Set focus on the first invalid answer",
    checkErrorsMode: "Run validation",
    navigateToUrl: "Navigate to URL",
    navigateToUrlOnCondition: "Dynamic URL",
    completedBeforeHtml: "Markup to show if the user already filled out this survey",
    completedHtml: "Survey Complete page markup",
    completedHtmlOnCondition: "Dynamic Survey Complete page markup",
    loadingHtml: "Markup to show while survey model is loading",
    commentText: "Comment area text",
    autoComplete: "Autocomplete type",
    labelTrue: "\"True\" label",
    labelFalse: "\"False\" label",
    allowClear: "Show the Clear button",
    displayStyle: "Value display style",
    format: "Formatted string",
    maximumFractionDigits: "Maximum fractional digits",
    minimumFractionDigits: "Minimum fractional digits",
    useGrouping: "Display grouping separators",
    allowMultiple: "Allow multiple files",
    allowImagesPreview: "Preview images",
    acceptedTypes: "Accepted file types",
    waitForUpload: "Wait for the upload to complete",
    needConfirmRemoveFile: "Confirm file deletion",
    detailPanelMode: "Detail panel location",
    minRowCount: "Minimum row count",
    maxRowCount: "Maximum row count",
    confirmDelete: "Confirm row deletion",
    confirmDeleteText: "Confirmation message",
    paneldynamic: {
      confirmDelete: "Confirm panel deletion",
    },
    panelCount: "Initial panel count",
    minPanelCount: "Minimum panel count",
    maxPanelCount: "Maximum panel count",
    panelsState: "Inner panel expand state",
    templateDescription: "Description template",
    templateTitle: "Title template",
    panelPrevText: "Previous Panel button tooltip",
    panelNextText: "Next Panel button tooltip",
    showRangeInProgress: "Show progress bar",
    templateTitleLocation: "Question title location",
    panelRemoveButtonLocation: "Remove Panel button location",
    hideIfRowsEmpty: "Hide the question if there are no rows",
    hideColumnsIfEmpty: "Hide columns if there are no rows",
    rateValues: "Custom rate values",
    hideIfChoicesEmpty: "Hide the question if it contains no choices",
    hideNumber: "Hide question number",
    minWidth: "Minimum width (in CSS-accepted values)",
    maxWidth: "Maximum width (in CSS-accepted values)",
    width: "Width (in CSS-accepted values)",
    showHeader: "Show column headers",
    horizontalScroll: "Show horizontal scrollbar",
    columnMinWidth: "Minimum column width (in CSS-accepted values)",
    rowTitleWidth: "Row header width (in CSS-accepted values)",
    valueTrue: "\"True\" value",
    valueFalse: "\"False\" value",
    minErrorText: "\"Value is below minimum\" error message",
    maxErrorText: "\"Value exceeds maximum\" error message",
    otherErrorText: "\"Empty comment\" error message",
    keyDuplicationError: "\"Non-unique key value\" error message",
    maxSelectedChoices: "Maximum selected choices",
    showClearButton: "Show the Clear button",
    showNumber: "Show panel number",
    logoWidth: "Logo width (in CSS-accepted values)",
    logoHeight: "Logo height (in CSS-accepted values)",
    readOnly: "Read-only",
    enableIf: "Editable if",
    emptyRowsText: "\"No rows\" message",
    size: "Input size (in characters)",
    separateSpecialChoices: "Separate special choices (None, Other, Select All)",
    choicesFromQuestion: "Copy choices from the following question",
    choicesFromQuestionMode: "Which choices to copy?",
    hasComment: "Show the comment area",
    commentPlaceHolder: "Comment area placeholder",
    displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values",
    rowsOrder: "Row order",
    columnsLayout: "Column layout",
    columnColCount: "Nested column count",
    state: "Panel expand state",
    correctAnswer: "Correct Answer",
    defaultPanelValue: "Default Values",
    cells: "Cell Texts",
    keyName: "Key column",
    itemvalue: {
      text: "Alt text"
    },

    // Header  adorner
    logoPosition: "Logo position",
    addLogo: "Add logo...",
    changeLogo: "Change logo...",
    logoPositions: {
      none: "Remove logo",
      left: "Left",
      right: "Right",
      top: "On the top",
      bottom: "In the bottom"
    },

    tabs: {
      general: "General",
      fileOptions: "Options",
      html: "HTML Editor",
      columns: "Columns",
      rows: "Rows",
      choices: "Choices",
      items: "Items",
      visibleIf: "Visible If",
      enableIf: "Editable If",
      requiredIf: "Required If",
      rateValues: "Rate Values",
      choicesByUrl: "Choices from a RESTful Service",
      matrixChoices: "Default Choices",
      multipleTextItems: "Text Inputs",
      numbering: "Numbering",
      validators: "Validators",
      navigation: "Navigation",
      question: "Question",
      pages: "Pages",
      timer: "Timer/Quiz",
      calculatedValues: "Calculated Values",
      triggers: "Triggers",
      templateTitle: "Title template",
      totals: "Totals",
      logic: "Logic",
      layout: "Layout",
      data: "Data",
      validation: "Validation",
      cells: "Cell Texts",
      showOnCompleted: "Survey Complete",
      logo: "Logo in Survey Title",
      slider: "Slider",
      others: "Others"
    },
    editProperty: "Edit property '{0}'",
    items: "Items",
    choicesVisibleIf: "Choices are visible if",
    choicesEnableIf: "Choices are selectable if",
    columnsEnableIf: "Columns are visible if",
    rowsEnableIf: "Rows are visible if",
    indent: "Add indents",
    panel: {
      indent: "Add outer indents"
    },
    innerIndent: "Add inner indents",
    defaultValueFromLastRow: "Take default values from the last row",
    defaultValueFromLastPanel: "Take default values from the last panel",

    enterNewValue: "Please, enter the value.",
    noquestions: "There are no questions in the survey.",
    createtrigger: "Please create a trigger",
    titleKeyboardAdornerTip: "Press enter button to edit",
    keyboardAdornerTip:
      "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item",
    triggerOn: "On ",
    triggerMakePagesVisible: "Make pages visible",
    triggerMakeQuestionsVisible: "Make elements visible",
    triggerCompleteText: "Complete the survey if succeed.",
    triggerNotSet: "The trigger is not set",
    triggerRunIf: "Run if",
    triggerSetToName: "Change value of: ",
    triggerFromName: "Copy value from: ",
    triggerRunExpression: "Run this Expression",
    triggerSetValue: "to: ",
    triggerGotoName: "Go to the question",
    triggerIsVariable: "Do not put the variable into the survey result.",
    triggerRunExpressionEmpty: "Please enter a valid expression",
    emptyExpressionPlaceHolder: "Type expression here...",
    noFile: "No file choosen",
  },
  //Property values
  pv: {
    true: "true",
    false: "false",
    inherit: "Inherit",
    show: "Visible",
    hide: "Hidden",
    default: "Inherit",
    initial: "Initial",
    random: "Random",
    collapsed: "Collapsed",
    expanded: "Expanded",
    none: "None",
    asc: "Ascending",
    desc: "Descending",
    indeterminate: "Indeterminate",
    decimal: "decimal",
    currency: "currency",
    percent: "percent",
    firstExpanded: "First panel is expanded",
    off: "Hide question numbers",
    onpanel: "Start on each panel",
    onPanel: "Start on each panel",
    onSurvey: "Continue throughout the survey",
    list: "List",
    progressTop: "Panel navigator + Progress bar at the top",
    progressBottom: "Panel navigator + Progress bar at the bottom",
    progressTopBottom: "Panel navigator + Progress bar at the top and bottom",
    horizontal: "Horizontal",
    vertical: "Vertical",
    top: "Top",
    bottom: "Bottom",
    topBottom: "Top and bottom",
    both: "Both",
    left: "Left",
    right: "Right",
    color: "color",
    date: "date",
    datetime: "datetime",
    "datetime-local": "datetime-local",
    email: "email",
    month: "month",
    number: "number",
    password: "password",
    range: "range",
    tel: "tel",
    text: "text",
    time: "time",
    url: "url",
    week: "week",
    hidden: "Hidden",
    on: "Continue from the previous page",
    onPage: "Start on each page",
    edit: "Editable",
    display: "Read-only",
    onComplete: "When the survey is completed",
    onHidden: "When the question becomes hidden",
    onHiddenContainer: "When the question or its panel/page becomes hidden",
    clearInvisibleValues: {
      none: "Never"
    },
    all: "All",
    page: "Page",
    survey: "Survey",
    onNextPage: "When switching to the next page",
    onValueChanged: "After an answer is changed",
    onValueChanging: "Before an answer is changed",
    standard: "Original structure",
    singlePage: "All questions on a single page",
    questionPerPage: "Each question on an individual page",
    noPreview: "No preview",
    showAllQuestions: "Show all questions",
    showAnsweredQuestions: "Show answered questions only",
    pages: "Completed pages",
    questions: "Answered questions",
    requiredQuestions: "Answered required questions",
    correctQuestions: "Valid answers",
    buttons: "Completed pages (button UI)",
    underInput: "Under the input",
    underTitle: "Under the title",
    onBlur: "On blur",
    onTyping: "While typing",
    underRow: "Under the row",
    underRowSingle: "Under the row, only one panel is visible",
    showNavigationButtons: {
      none: "Hidden"
    },
    showProgressBar: {
      off: "Hidden"
    },
    showTimerPanel: {
      none: "Hidden"
    },
    showTimerPanelMode: {
      all: "Both"
    },
    detailPanelMode: {
      none: "Hidden"
    },
    addRowLocation: {
      default: "Depends on matrix layout"
    },
    panelsState: {
      default: "Users cannot expand or collapse panels",
      collapsed: "All panels are collapsed",
      expanded: "All panels are expanded"
    }
  },
  //Operators
  op: {
    empty: "Empty",
    notempty: "Not empty",
    equal: "Equals",
    notequal: "Does not equal",
    contains: "Contains",
    notcontains: "Does not contain",
    anyof: "Any of",
    allof: "All of",
    greater: "Greater than",
    less: "Less than",
    greaterorequal: "Greater than or equal to",
    lessorequal: "Less than or equal to",
    and: "and",
    or: "or"
  },
  //Embed window
  ew: {
    angular: "Use Angular version",
    jquery: "Use jQuery version",
    knockout: "Use Knockout version",
    react: "Use React version",
    vue: "Use Vue version",
    bootstrap: "For bootstrap framework",
    modern: "Modern theme",
    default: "Default theme",
    orange: "Orange theme",
    darkblue: "Darkblue theme",
    darkrose: "Darkrose theme",
    stone: "Stone theme",
    winter: "Winter theme",
    winterstone: "Winter-Stone theme",
    showOnPage: "Show survey on a page",
    showInWindow: "Show survey in a window",
    loadFromServer: "Load Survey JSON from server",
    titleScript: "Scripts and styles",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  //Preview (Survey)
  ts: {
    selectPage: "Select the page to test it",
    showInvisibleElements: "Show invisible elements"
  },
  validators: {
    answercountvalidator: "Answer count",
    emailvalidator: "Email",
    expressionvalidator: "Expression",
    numericvalidator: "Number",
    regexvalidator: "Regex",
    textvalidator: "Text",
  },
  triggers: {
    completetrigger: "Complete survey",
    setvaluetrigger: "Set answer",
    copyvaluetrigger: "Copy answer",
    skiptrigger: "Skip to question",
    runexpressiontrigger: "Run expression",
    visibletrigger: "change visibility (deprecated)"
  },
  pehelp: {
    cookieName: "Cookies prevent users from filling out the same survey twice.",
    format: "Use {0} as a placeholder for the actual value.",
    totalText: "Visible only when at least one column has Total type or Total expression.",
    acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information.",
    columnColCount: "Applicable only to Radiogroup and Checkbox cell types.",
    autoComplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information.",
    valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property.",
    keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error.",
  },
  //Properties
  p: {
    title: {
      name: "title",
      title: "Leave it empty, if it is the same as 'Name'"
    },
    navigationButtonsVisibility: "navigationButtonsVisibility",
    visibleIf: "visibleIf",
    description: "description",
    requiredIf: "requiredIf",
    validators: "validators",
    titleLocation: "titleLocation",
    choices: "choices",
    label: "label",
    currency: "currency",
    columns: "columns",
    itemSize: "itemSize",
    templateTitle: "templateTitle",
    triggers: "triggers",
    defaultRowValue: "defaultRowValue",
    multiSelect: "Allow multiple selection",
    showLabel: "Show image captions",
    logoFit: "logoFit",
    pages: "pages",
    calculatedValues: "calculatedValues",
    questionDescriptionLocation: "questionDescriptionLocation",
    progressBarType: "progressBarType",
    questionTitlePattern: "questionTitlePattern",
    widthMode: "widthMode",
    navigationTitle: "navigationTitle",
    navigationDescription: "navigationDescription",
    useDisplayValuesInTitle: "useDisplayValuesInTitle",
    descriptionLocation: "descriptionLocation",
    defaultValueExpression: "defaultValueExpression",
    bindings: "bindings",
    allowAddRows: "allowAddRows",
    allowRemoveRows: "allowRemoveRows",
    detailPanelShowOnAdding: "detailPanelShowOnAdding",
    allowRowsDragAndDrop: "allowRowsDragAndDrop",
    otherPlaceHolder: "otherPlaceHolder",
    contentMode: "contentMode",
    imageFit: "imageFit",
    min: "min",
    max: "max",
    minValueExpression: "minValueExpression",
    maxValueExpression: "maxValueExpression",
    step: "step",
    dataList: "dataList",
    autoGrow: "autoGrow",
    multiLine: "multiLine",
    height: "height",
    penColor: "penColor",
    backgroundColor: "backgroundColor",
    showCaption: "showCaption",
    iconName: "iconName",
    iconSize: "iconSize"
  }
};
//Uncomment this line on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
//editorLocalization.locales["en"] = enStrings;
