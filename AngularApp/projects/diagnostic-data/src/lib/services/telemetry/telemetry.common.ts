export const TelemetryEventNames = {
    DetectorViewLoaded: 'DetectorViewLoaded',
    HomePageLoaded: 'HomePageLoaded',
    CategoryPageLoaded: 'CategoryPageLoaded',
    CategoryOverviewPageLoaded: 'CategoryOverviewPageLoaded',
    OnboardingFlowLoaded: 'OnboardingFlowLoaded',
    SearchTermAdditionLoaded: 'SearchTermAdditionLoaded',
    SideNavigationLoaded: 'SideNavigationLoaded',
    SupportTopicsLoaded: 'SupportTopicsLoaded',
    CategoryCardClicked: 'CategoryClicked',
    DetectorCardClicked: 'DetectorClicked',
    SideNavigationFilter: 'SideNavigationFilter',
    SideNavigationItemClicked: 'SideNavigationItemClicked',
    InsightTitleClicked: 'InsightTitleClicked',
    InsightRated: 'InsightRated',
    ChildDetectorClicked: 'ChildDetectorClicked',
    InsightsSummary: 'InsightsSummary',
    ChildDetectorsSummary: 'ChildDetectorsSummary',
    MarkdownClicked: 'MarkdownClicked',
    LinkClicked: 'LinkClicked',
    StarRatingSubmitted: 'StarRatingSubmitted',
    GenieSearchRatingSubmitted: 'GenieSearchRatingSubmitted',
    CardClicked: 'CardClicked',
    FormButtonClicked: 'FormButtonClicked',
    ChangeAnalysisTimelineClicked: 'ChangeAnalysisTimelineClicked',
    OndemandScanClicked: 'OndemandScanClicked',
    ChangeAnalysisEnableClicked: 'ChangeAnalysisEnableClicked',
    ChangeAnalysisChangeClicked: 'ChangeAnalysisChangeClicked',
    ChangeAnalysisChangeFeedbackClicked: 'ChangeAnalysisChangeFeedbackClicked',
    SearchResultsLoaded: 'SearchResultsLoaded',
    SearchQueryResults: 'SearchQueryResults',
    SearchResultClicked: 'SearchResultClicked',
    SearchResultFeedback: 'SearchResultFeedback',
    SearchComponentVisible: "SearchComponentVisible",
    WebQueryResults: 'WebQueryResults',
    WebQueryResultClicked: 'WebQueryResultClicked',
    AuthorSelectSearchTerm: 'AuthorSelectSearchTerm',
    AuthorCreateSearchTerm: 'AuthorCreateSearchTerm',
    AuthorRemoveSearchTerm: 'AuthorRemoveSearchTerm',
    DependencyGraphClick: 'DependencyGraphClick',
    GetCXPChatAvailability: 'GetCXPChatAvailability',
    BuildCXPChatUrl: 'BuildCXPChatUrl',
    GetCXPChatURL: 'GetCXPChatURL',
    CXPChatUserAction: 'CXPChatUserAction',
    CXPChatEligibilityCheck: 'CXPChatEligibilityCheck',
    AppInsightsConnectionError: 'AppInsightsConnectionError',
    AppInsightsConnected: 'AppInsightsConnected',
    AppInsightsEnableClicked: 'AppInsightsEnableClicked',
    AppInsightsAlreadyConnected: 'AppInsightsAlreadyConnected',
    AppInsightsEnabled: 'AppInsightsEnabled',
    AppInsightsNotEnabled: 'AppInsightsNotEnabled',
    AppInsightsFromDifferentSubscription: 'AppInsightsFromDifferentSubscription',
    AppInsightsAccessCheckError: 'AppInsightsAccessCheckError',
    AppInsightsResourceMissingWriteAccess: 'AppInsightsResourceMissingWriteAccess',
    AppInsightsConfigurationInvalid: 'AppInsightsConfigurationInvalid',
    SummaryCardClicked: 'SummaryCardClicked',
    ToolCardClicked: 'ToolCardClicked',
    TimePickerApplied: 'TimePickerApplied',
    CategoryNavItemClicked: 'CategoryNavItemClicked',
    DowntimeInteraction: 'DowntimeInteraction',
    DowntimeListPassedByDetector: 'DowntimePassedByDetector'
};

export interface ITelemetryProvider {
    // Log a user action or other occurrence.
    logEvent(message?: string, properties?: any, measurements?: any);

    // Log an exception you have caught. (Exceptions caught by the browser are also logged.)
    logException(exception: Error, handledAt?: string, properties?: any, severityLevel?: any);

    // Logs that a page displayed to the user.
    logPageView(name: string, url: string, properties?: any, measurements?: any, duration?: number);

    // Log a diagnostic event such as entering or leaving a method.
    logTrace(message: string, properties?: any, severityLevel?: any);

    // Log a positive numeric value that is not associated with a specific event. Typically used to send regular reports of performance indicators.
    logMetric(name: string, average: number, sampleCount: number, min: number, max: number, properties?: any);

    // Immediately send all queued telemetry. Synchronous.
    flush();
}
