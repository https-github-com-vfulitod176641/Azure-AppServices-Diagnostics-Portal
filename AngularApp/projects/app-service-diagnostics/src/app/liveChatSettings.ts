// This file contains Live Chat Settings
export class LiveChatSettings {

    // Global Switch that controls whether chat is shown or not.
    // If False, it will override, every other setting
    public static GLOBAL_ON_SWITCH: boolean = true;

    // If set to true, Live chat in home page will only show for demo subs
    // If set to false, it will show for all prod subs
    public static DemoModeForHomePage: boolean = true;

    // If set to true, Live chat will show in case submission for enabled Topics for demo subs
    // If set to false, it will show for all prod subs.
    public static DemoModeForCaseSubmission: boolean = false;

    // If set to true, chat will be hidden for internal subscriptions
    public static HideForInternalSubscriptions: boolean = false;

    // List of Support Topics for which Live chat is Enabled
    public static enabledSupportTopics: string[] = [
        '32542218',     //Availability and Performance/Web App Down
        '32457411',     //Availability and Performance/Web App Slow
        '32570954',     //Availability and Performance/Web App Restarted
        '32583701',     //Availability and Performance/Web App experiencing High CPU
        '32581616',     //Availability and Performance/Web App experiencing High Memory Usage
        '32440123',     //Configuration and Management/Configuring SSL
        '32440122',     //Configuration and Management/Configuring custom domain names
        '32542210',     //Configuration and Management/IP Configuration
        '32581615',     //Configuration and Management/Deployment Slots
        '32542208',     //Configuration and Management/Backup and Restore
        '32588774',     // Deployment/Visual Studio
        '32589276',     //How Do I/Backup and Restore
        '32589277',     //How Do I/Configure domains and certificates,
        '32589281'      //How Do I/IP Configuration
    ];

    // This indicates the time after which Live Chat will pop up.
    public static InactivityTimeoutInMs: number = 5000;

    // Live Chat Business Hours
    public static BuisnessStartDay: number = 1; // Monday
    public static BuisnessEndDay: number = 5;   // Friday
    public static BusinessStartHourPST: number = 8;   // 8 AM PST
    public static BusinessEndHourPST: number = 18;     // 6 PM PST

    public static PublicHolidays: any = [
        {
            // Martin Luther King Day
            "Day": 21,
            "Month": 1,
            "Year": 2019
          },
          {
            // Presidents Day
            "Day": 18,
            "Month": 2,
            "Year": 2019
          },
          {
            // 	Memorial Day
            "Day": 27,
            "Month": 5,
            "Year": 2019
          },
          {
            // 	Independence Day
            "Day": 4,
            "Month": 7,
            "Year": 2019
          },
          {
            //  Labor Day
            "Day": 2,
            "Month": 9,
            "Year": 2019
          },
          {
            // Thanksgiving Day - 1
            "Day": 28,
            "Month": 11,
            "Year": 2019
          },
          {
            // Thanksgiving Day - 2
            "Day": 29,
            "Month": 11,
            "Year": 2019
          },
          {
            // Xmas eve
            "Day": 24,
            "Month": 12,
            "Year": 2019
          },
          {
            // Xmas
            "Day": 25,
            "Month": 12,
            "year": 2019
          },
          {
            // New Yr Eve
            "Day": 31,
            "Month": 12,
            "Year": 2019
          },
          {
            // New Yr
            "Day": 1,
            "Month": 1,
            "Year": 2020
          }
    ];

    public static WeeklyChatOffHours = {
        Day: 4,  //Thursday, 11 AM - 12:30 PM
        StartHourPST: 11,
        StartMinutesPST: 0,
        EndHourPST: 12,
        EndMinutePST: 30
    };
}

export class ChatStatus {
    public isEnabled: boolean;
    public isValidTime: boolean;
}