// Copyright 2012 Google Inc. All rights reserved.

(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    };
})(window, 'google_tag_manager');

(function() {

    var data = {
        "resource": {
            "version": "96",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoTitle",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-15293292-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return!0})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "publitasPageParams.publication"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "publitasPageParams.collection"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "publitasPageParams.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "publitasPageParams.page"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "publitasPageParams.group"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "publitasPageParams.title"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "publitasEventLabel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "publitasEventAction"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "publitasEventName"
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoProvider",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoDuration",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoPercent",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoVisible",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoStatus",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoCurrentTime",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollThreshold",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollUnits",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollDirection",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.visibleRatio",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.visibleTime",
                "vtp_dataLayerVersion": 1
            }],
            "tags": [{
                "function": "__gclidw",
                "once_per_event": true,
                "vtp_enableCrossDomain": false,
                "vtp_enableCookieOverrides": false,
                "vtp_enableCrossDomainFeature": true,
                "tag_id": 1
            }, {
                "function": "__awct",
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "751180227",
                "vtp_conversionLabel": "iy8FCNafkp0BEMOzmOYC",
                "vtp_url": ["macro", 2],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 2
            }, {
                "function": "__sp",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableDynamicRemarketing": false,
                "vtp_conversionId": "751180227",
                "vtp_customParamsFormat": "NONE",
                "vtp_enableOgtRmktParams": true,
                "vtp_enableUserId": true,
                "vtp_url": ["macro", 2],
                "vtp_enableRdpCheckbox": true,
                "vtp_enableConversionLinkingSettings": true,
                "tag_id": 3
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Click to Call",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventAction": "Call Button Clicked",
                "vtp_trackingId": "UA-15293292-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 4
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 5
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Click to Call",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventAction": "SE Phone",
                "vtp_trackingId": "UA-15293292-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 6
            }, {
                "function": "__bzi",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_id": "2313188",
                "tag_id": 20
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventAction": "Bathroom",
                "vtp_trackingId": "UA-15293292-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 26
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Videoviews",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventAction": "Bathroom",
                "vtp_trackingId": "UA-15293292-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 28
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventAction": "Lights",
                "vtp_trackingId": "UA-15293292-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 30
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Videoviews",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventAction": "Lights",
                "vtp_trackingId": "UA-15293292-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 32
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventAction": "Calls",
                "vtp_trackingId": "UA-15293292-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 34
            }, {
                "function": "__hjtc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_hotjar_site_id": "2050654",
                "tag_id": 36
            }, {
                "function": "__gaawc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendPageView": true,
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": false,
                "tag_id": 37
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "Download_Catalogue_PageVisits",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 39
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "Leads_WaterHeaters",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 41
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "Leads_ShowerEnclosure",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 43
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "Clicks_Jaquar_CallCentre",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 45
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "Clicks_Jaquar_ServiceCalls",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 47
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "Download_AndroidApp_Jaquar",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 50
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "Download_iOSApp_Jaquar",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 51
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "PageVisits_OrientationCentre",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 53
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "Download_CustomerGuide_PDF",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 55
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "Download_CAD",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 58
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "Download_ProductTechnical_Image",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 59
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "Download_ProductTechnical_PDF",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 62
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "Download_Product_Image",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 63
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "Download_CustomerGuide_ViewEbook",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 65
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "Download_QueensPrime_PDF",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 67
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "Download_NewAgePressmaticFaucets_PDF",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 69
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "Download_TechnicalCatalogue_PDF",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 71
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "Enquiry_RequestCallBack",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 73
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "Book_VirtualMeeting",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 75
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "Download_WellnessBathroomConcept",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 77
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "Download_CSR_PDF",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 79
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "Download_RITZ_PDF",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 81
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "Download_RITZ_ViewEbook",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 83
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "CallButton_ToggleOn",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 87
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "Clicks_EnquiryButton",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 89
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "Enquiry_PurchaseAssistance",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 91
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "PageVisits_CustomerSupport",
                "vtp_eventParameters": ["list", ["map", "name", "page_location", "value", ["macro", 1]]],
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 93
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_trackingId": "UA-15293292-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 94
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 97
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 99
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 101
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Lead Form",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 12],
                "vtp_eventAction": "Submit Form",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 104
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "WZ Submit Clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 12],
                "vtp_eventAction": "Click: Submit",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 106
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "WZ OTP Clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 12],
                "vtp_eventAction": "Click: Send OTP",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 108
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Lead Form",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventAction": "Click: Submit",
                "vtp_eventLabel": ["macro", 1],
                "vtp_trackingId": "UA-15293292-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 110
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Enquiry Lead Form",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventAction": "Click: Submit",
                "vtp_eventLabel": ["macro", 1],
                "vtp_trackingId": "UA-15293292-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 112
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 12],
                "vtp_trackingId": "UA-15293292-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 114
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Button Click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 12],
                "vtp_eventAction": "Clicks: Purchase Assistance",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 116
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Button Click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 12],
                "vtp_eventAction": "Clicks: Service",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 118
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "OC Lead Form",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventAction": "Click: Submit",
                "vtp_eventLabel": ["macro", 1],
                "vtp_trackingId": "UA-15293292-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 120
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Catalogue Downloads",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 12],
                "vtp_eventAction": "Clicks: Download",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 122
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Button Click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 12],
                "vtp_eventAction": "Clicks: ContactUs",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 124
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Catalogue Downloads",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 12],
                "vtp_eventAction": "Clicks: Download",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 126
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Catalogue Downloads",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 12],
                "vtp_eventAction": "Clicks: Download",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 128
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Catalogue Downloads",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 12],
                "vtp_eventAction": "Clicks: Download",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 130
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Catalogue Downloads",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 12],
                "vtp_eventAction": "Clicks: Download",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 132
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Catalogue Downloads",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 12],
                "vtp_eventAction": "Clicks: Download",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 134
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Catalogue Downloads",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 12],
                "vtp_eventAction": "Clicks: Download",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 136
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Catalogue Downloads",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 12],
                "vtp_eventAction": "Clicks: Download",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 138
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_overrideGaSettings": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 12],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 139
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_overrideGaSettings": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 12],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 143
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Button Click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventAction": "Laguna Submit",
                "vtp_eventLabel": ["macro", 5],
                "vtp_trackingId": "UA-15293292-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 146
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_overrideGaSettings": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 12],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 151
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "call_center_button_click",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 152
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "cbs_main_page",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 153
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "event_sensor_buttonclicks_bathroom",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 154
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "event_contactus_phn.noclicks",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 155
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "event_sensor_buttonclicks_callbutton",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 156
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "event_corporatecatalogue_downloads",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 157
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "event-sensor_buttonclicks_lights",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 158
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "event_customer_catalogue_downloads",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 159
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "event_orientationcentre_leads",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 160
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "event_professionalcatalogue_downloads",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 161
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "event_purchaseassistance_phnnoclicks",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 162
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "event_oc_virtualtour_formleads",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 163
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "event_showerenclosure_downloads",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 164
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "event_stickyenquiry_leads",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 165
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "se_phone_tracking_google_analytics",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 166
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "event_waterheater_downloads",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 167
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "scroll_event_75_percent_and_more",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 168
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "event_wellnessbathroomconcept_downloads",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 169
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "jaquarbath_wellnesszone_thankyou_page",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 170
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "jaquarbath_virtualmeeting_thankyou_page",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 171
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "event_wellnesscatalogue_downloads",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 172
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "jaquar_laguna_submitbutton",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 173
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "event_ritzshowerenclosure_downloads",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 174
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "pageview_sticky_virtualtour_leads",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 175
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "wellnesszone_leadform_typage",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 176
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "wellnesszone_leadform_submitclicks",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 177
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "bath_all_user_time_1min",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 181
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "all_user_time_spent_1min",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 183
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "bath_alluser_4_5_min",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 186
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "lighting_all_users_60sec",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 187
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "lighting_all_users_180sec",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 191
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "bath_alluser_3_4_min",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 192
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "bath_alluser_1_2_min",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 195
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "lighting_all_users_120sec",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 196
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "1_min_spent_faucets",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 198
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "lighting_all_users_240sec",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 200
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "1_min_spent _faucets",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 201
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "lighting_all_users_120sec",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 204
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "1_min_spent_accessories",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 205
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "1_min_spent _all_pages",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 207
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "lighting_all_users_45sec",
                "vtp_measurementId": "G-4D969E3WV2",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": false,
                "vtp_demoV2": false,
                "tag_id": 209
            }, {
                "function": "__img",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_useCacheBuster": false,
                "vtp_url": "https:\/\/rtb.adgrx.com\/segments\/D5P6mHo_cLQOcujiab14kXJ0vBXY9kBkUVViv7vxofA=\/53099.gif",
                "tag_id": 246
            }, {
                "function": "__ytl",
                "vtp_progressThresholdsPercent": "10,25,50,75,90,100",
                "vtp_captureComplete": true,
                "vtp_captureStart": true,
                "vtp_fixMissingApi": false,
                "vtp_triggerStartOption": "DOM_READY",
                "vtp_radioButtonGroup1": "PERCENTAGE",
                "vtp_capturePause": true,
                "vtp_captureProgress": true,
                "vtp_uniqueTriggerId": "9001196_8",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 264
            }, {
                "function": "__cl",
                "tag_id": 265
            }, {
                "function": "__sdl",
                "vtp_verticalThresholdUnits": "PERCENT",
                "vtp_verticalThresholdsPercent": "75,90,100",
                "vtp_verticalThresholdOn": true,
                "vtp_triggerStartOption": "WINDOW_LOAD",
                "vtp_horizontalThresholdOn": false,
                "vtp_uniqueTriggerId": "9001196_12",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 266
            }, {
                "function": "__cl",
                "tag_id": 267
            }, {
                "function": "__cl",
                "tag_id": 268
            }, {
                "function": "__ytl",
                "vtp_progressThresholdsPercent": "25,50,75,100",
                "vtp_captureComplete": true,
                "vtp_captureStart": true,
                "vtp_fixMissingApi": true,
                "vtp_triggerStartOption": "DOM_READY",
                "vtp_radioButtonGroup1": "PERCENTAGE",
                "vtp_capturePause": true,
                "vtp_captureProgress": true,
                "vtp_uniqueTriggerId": "9001196_24",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 269
            }, {
                "function": "__cl",
                "tag_id": 270
            }, {
                "function": "__ytl",
                "vtp_progressThresholdsPercent": "25,50,75,100",
                "vtp_captureComplete": true,
                "vtp_captureStart": true,
                "vtp_fixMissingApi": true,
                "vtp_triggerStartOption": "DOM_READY",
                "vtp_radioButtonGroup1": "PERCENTAGE",
                "vtp_capturePause": true,
                "vtp_captureProgress": true,
                "vtp_uniqueTriggerId": "9001196_27",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 271
            }, {
                "function": "__cl",
                "tag_id": 272
            }, {
                "function": "__ytl",
                "vtp_progressThresholdsPercent": "25,50,75,100",
                "vtp_captureComplete": true,
                "vtp_captureStart": true,
                "vtp_fixMissingApi": true,
                "vtp_triggerStartOption": "DOM_READY",
                "vtp_radioButtonGroup1": "PERCENTAGE",
                "vtp_capturePause": true,
                "vtp_captureProgress": true,
                "vtp_uniqueTriggerId": "9001196_31",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 273
            }, {
                "function": "__cl",
                "tag_id": 274
            }, {
                "function": "__cl",
                "tag_id": 275
            }, {
                "function": "__cl",
                "tag_id": 276
            }, {
                "function": "__cl",
                "tag_id": 277
            }, {
                "function": "__cl",
                "tag_id": 278
            }, {
                "function": "__cl",
                "tag_id": 279
            }, {
                "function": "__cl",
                "tag_id": 280
            }, {
                "function": "__cl",
                "tag_id": 281
            }, {
                "function": "__cl",
                "tag_id": 282
            }, {
                "function": "__cl",
                "tag_id": 283
            }, {
                "function": "__cl",
                "tag_id": 284
            }, {
                "function": "__cl",
                "tag_id": 285
            }, {
                "function": "__cl",
                "tag_id": 286
            }, {
                "function": "__cl",
                "tag_id": 287
            }, {
                "function": "__cl",
                "tag_id": 288
            }, {
                "function": "__cl",
                "tag_id": 289
            }, {
                "function": "__cl",
                "tag_id": 290
            }, {
                "function": "__cl",
                "tag_id": 291
            }, {
                "function": "__cl",
                "tag_id": 292
            }, {
                "function": "__cl",
                "tag_id": 293
            }, {
                "function": "__cl",
                "tag_id": 294
            }, {
                "function": "__cl",
                "tag_id": 295
            }, {
                "function": "__cl",
                "tag_id": 296
            }, {
                "function": "__cl",
                "tag_id": 297
            }, {
                "function": "__cl",
                "tag_id": 298
            }, {
                "function": "__cl",
                "tag_id": 299
            }, {
                "function": "__cl",
                "tag_id": 300
            }, {
                "function": "__cl",
                "tag_id": 301
            }, {
                "function": "__cl",
                "tag_id": 302
            }, {
                "function": "__cl",
                "tag_id": 303
            }, {
                "function": "__cl",
                "tag_id": 304
            }, {
                "function": "__cl",
                "tag_id": 305
            }, {
                "function": "__cl",
                "tag_id": 306
            }, {
                "function": "__cl",
                "tag_id": 307
            }, {
                "function": "__cl",
                "tag_id": 308
            }, {
                "function": "__cl",
                "tag_id": 309
            }, {
                "function": "__cl",
                "tag_id": 310
            }, {
                "function": "__cl",
                "tag_id": 311
            }, {
                "function": "__cl",
                "tag_id": 312
            }, {
                "function": "__cl",
                "tag_id": 313
            }, {
                "function": "__cl",
                "tag_id": 314
            }, {
                "function": "__cl",
                "tag_id": 315
            }, {
                "function": "__cl",
                "tag_id": 316
            }, {
                "function": "__cl",
                "tag_id": 317
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "60000",
                "vtp_uniqueTriggerId": "9001196_180",
                "tag_id": 318
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "60000",
                "vtp_uniqueTriggerId": "9001196_182",
                "tag_id": 319
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "3000000",
                "vtp_uniqueTriggerId": "9001196_184",
                "tag_id": 320
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "60000",
                "vtp_uniqueTriggerId": "9001196_185",
                "tag_id": 321
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "180000",
                "vtp_uniqueTriggerId": "9001196_188",
                "tag_id": 322
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "180000",
                "vtp_uniqueTriggerId": "9001196_189",
                "tag_id": 323
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "240000",
                "vtp_uniqueTriggerId": "9001196_190",
                "tag_id": 324
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "120000",
                "vtp_uniqueTriggerId": "9001196_193",
                "tag_id": 325
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "120000",
                "vtp_uniqueTriggerId": "9001196_194",
                "tag_id": 326
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "60000",
                "vtp_uniqueTriggerId": "9001196_197",
                "tag_id": 327
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "240000",
                "vtp_uniqueTriggerId": "9001196_199",
                "tag_id": 328
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "300000",
                "vtp_uniqueTriggerId": "9001196_202",
                "tag_id": 329
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "60000",
                "vtp_uniqueTriggerId": "9001196_203",
                "tag_id": 330
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "60000",
                "vtp_uniqueTriggerId": "9001196_206",
                "tag_id": 331
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "45000",
                "vtp_uniqueTriggerId": "9001196_208",
                "tag_id": 332
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"584416418927963\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=584416418927963\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 21
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"584416418927963\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Lead\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=584416418927963\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 22
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"584416418927963\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=584416418927963\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 95
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1657931034541605\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1657931034541605\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 141
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"PageView\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 142
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cimg src=\"\/\/rtb.adgrx.com\/segments\/D5P6mHo_cLQOcujiab14kXJ0vBXY9kBkUVViv7vxofA=\/53099.gif\" width=\"1\" height=\"1\" border=\"0\"\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 263
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "thank"
            }, {
                "function": "_css",
                "arg0": ["macro", 3],
                "arg1": "li.customer-care \u003E a \u003E span"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.click"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.scrollDepth"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(^$|((^|,)9001196_12($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 3],
                "arg1": "div#navbarSupportedContent a:nth-child(2)"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "Bathrooms"
            }, {
                "function": "_cn",
                "arg0": ["macro", 6],
                "arg1": "btn btn-md btn-primary display-4"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "Let\\'s make Safety the New Normal!"
            }, {
                "function": "_cn",
                "arg0": ["macro", 8],
                "arg1": "https:\/\/www.youtube.com\/watch?v=Xu-ogh5gWAo"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.video"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(^$|((^|,)9001196_27($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "Lights"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "Pride Smart - Jaquar Motion Sensor Lights"
            }, {
                "function": "_cn",
                "arg0": ["macro", 8],
                "arg1": "https:\/\/www.youtube.com\/watch?v=BW48LMQcGx8"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(^$|((^|,)9001196_31($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 3],
                "arg1": "tel:+91-1800-120-332222"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "https:\/\/jaquar.com\/en"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "\/en\/download-catalogue"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "\/waterheaters\/thankyou.html"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "\/showerenclosure\/thankyou.html"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "1800-120-332222"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "tel:1800120332222"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "1800-121-6808"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "tel:18001216808"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "Android"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "https:\/\/play.google.com\/store\/apps\/details?id=com.agbe.jaquar\u0026hl=en_IN"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "IOS"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "https:\/\/itunes.apple.com\/in\/app\/jaquar\/id1326726197?mt=8"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "https:\/\/jaquar.com\/en\/india-oc-website"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "https:\/\/jaquar.com\/pdf\/customer-guide-vol17.pdf"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "Download CAD"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "Product Technical Image"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "Download PDF"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "Download Product Image"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "https:\/\/flip.jaquar.com\/\/india\/customer-guide17\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "https:\/\/jaquar.com\/pdf\/queenprimecatalogue.pdf"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "https:\/\/jaquar.com\/pdf\/new-age-pressmatic-faucets.pdf"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "https:\/\/jaquar.com\/pdf\/technical-catalogue.pdf"
            }, {
                "function": "_cn",
                "arg0": ["macro", 10],
                "arg1": "lead-button-new1"
            }, {
                "function": "_cn",
                "arg0": ["macro", 10],
                "arg1": "button-virtual-meeting"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "https:\/\/jaquar.com\/pdf\/wellness-bathroom-concept.pdf"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "https:\/\/jaquar.com\/pdf\/csr-broucher.pdf"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "https:\/\/jaquar.com\/pdf\/ritz-catalogue-2018.pdf"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "https:\/\/flip.jaquar.com\/india\/ritz-brochure\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 3],
                "arg1": "javascript:void 0: html.html-category-page \u003E body.modal-open \u003E div.mast er-wrapper-page \u003E a.enquiry-btn#enquiry_toggleBtn"
            }, {
                "function": "_cn",
                "arg0": ["macro", 10],
                "arg1": "enquiry_toggleBtn"
            }, {
                "function": "_eq",
                "arg0": ["macro", 5],
                "arg1": "ENQUIRY"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "https:\/\/jaquar.com\/en\/customer-care"
            }, {
                "function": "_cn",
                "arg0": ["macro", 10],
                "arg1": "send-otp"
            }, {
                "function": "_cn",
                "arg0": ["macro", 6],
                "arg1": "btn btn-default"
            }, {
                "function": "_cn",
                "arg0": ["macro", 10],
                "arg1": "accept-policy-virtualmeeting"
            }, {
                "function": "_cn",
                "arg0": ["macro", 11],
                "arg1": "\/virtualmeeting"
            }, {
                "function": "_cn",
                "arg0": ["macro", 10],
                "arg1": "button-virtual-meeting11"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "https:\/\/jaquar.com\/wellnesszoneathome\/thankyou"
            }, {
                "function": "_cn",
                "arg0": ["macro", 13],
                "arg1": "btn btn-sm btn-black-outline"
            }, {
                "function": "_cn",
                "arg0": ["macro", 11],
                "arg1": "\/en\/india-oc-website"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "Submit"
            }, {
                "function": "_cn",
                "arg0": ["macro", 10],
                "arg1": "lead-button-new"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "Customer\/OCLead_V1_Self_Guided"
            }, {
                "function": "_cn",
                "arg0": ["macro", 14],
                "arg1": "Submit"
            }, {
                "function": "_cn",
                "arg0": ["macro", 15],
                "arg1": "\/en\/india-oc-website"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "https:\/\/www.jaquar.com\/pdf\/water-heater-catalogue.pdf"
            }, {
                "function": "_cn",
                "arg0": ["macro", 13],
                "arg1": "downloads"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "tel:0124-4746800"
            }, {
                "function": "_cn",
                "arg0": ["macro", 11],
                "arg1": "\/en\/contactus"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "https:\/\/www.jaquar.com\/pdf\/technical-catalogue.pdf"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "https:\/\/www.jaquar.com\/pdf\/wellness.pdf"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "https:\/\/www.jaquar.com\/pdf\/wellness-bathroom-concept.pdf"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "https:\/\/www.jaquar.com\/pdf\/shower-enclosure-catalogue.pdf"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "https:\/\/www.jaquar.com\/pdf\/ritz-catalogue-2018.pdf"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "https:\/\/www.jaquar.com\/pdf\/customer-guide-vol18.2.pdf"
            }, {
                "function": "_cn",
                "arg0": ["macro", 9],
                "arg1": "https:\/\/www.jaquar.com\/pdf\/corporate-catalogue.pdf"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "https:\/\/jaquar.com\/wellnesszoneathome\/thankyou.html"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "https:\/\/www.jaquar.com\/en\/virtual-meeting-thankyou"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "SUBMIT"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "https:\/\/www.jaquar.com\/en\/complete-bathroom-solution"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.timer"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(^$|((^|,)9001196_180($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(^$|((^|,)9001196_206($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(^$|((^|,)9001196_184($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(^$|((^|,)9001196_185($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(^$|((^|,)9001196_189($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(^$|((^|,)9001196_190($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(^$|((^|,)9001196_193($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(^$|((^|,)9001196_194($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(^$|((^|,)9001196_197($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(^$|((^|,)9001196_199($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(^$|((^|,)9001196_202($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(^$|((^|,)9001196_203($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(^$|((^|,)9001196_208($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 16],
                "arg1": "true"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.dom"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.load"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "bath"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "light"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "faucets"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "accessories"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0, 2, 6, 13, 41, 178, 180, 181, 182, 183, 110, 112, 113, 115, 117, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162]
                ],
                [
                    ["if", 0, 1],
                    ["add", 1, 179],
                    ["block", 2, 178]
                ],
                [
                    ["if", 2, 3],
                    ["add", 3, 67]
                ],
                [
                    ["if", 4, 5],
                    ["add", 4, 83]
                ],
                [
                    ["if", 3, 6],
                    ["add", 5, 81]
                ],
                [
                    ["if", 3, 7, 8],
                    ["add", 7, 69]
                ],
                [
                    ["if", 9, 10, 11, 12],
                    ["add", 8]
                ],
                [
                    ["if", 3, 8, 13],
                    ["add", 9, 73]
                ],
                [
                    ["if", 11, 14, 15, 16],
                    ["add", 10]
                ],
                [
                    ["if", 3, 17],
                    ["add", 11, 71]
                ],
                [
                    ["if", 0, 18],
                    ["add", 12]
                ],
                [
                    ["if", 0, 19],
                    ["add", 14]
                ],
                [
                    ["if", 0, 20],
                    ["add", 15]
                ],
                [
                    ["if", 0, 21],
                    ["add", 16, 80]
                ],
                [
                    ["if", 3, 22, 23],
                    ["add", 17]
                ],
                [
                    ["if", 3, 24, 25],
                    ["add", 18]
                ],
                [
                    ["if", 3, 26, 27],
                    ["add", 19]
                ],
                [
                    ["if", 3, 28, 29],
                    ["add", 20]
                ],
                [
                    ["if", 0, 30],
                    ["add", 21]
                ],
                [
                    ["if", 3, 31],
                    ["add", 22]
                ],
                [
                    ["if", 3, 32],
                    ["add", 23]
                ],
                [
                    ["if", 3, 33],
                    ["add", 24]
                ],
                [
                    ["if", 3, 34],
                    ["add", 25]
                ],
                [
                    ["if", 3, 35],
                    ["add", 26]
                ],
                [
                    ["if", 3, 36],
                    ["add", 27]
                ],
                [
                    ["if", 3, 37],
                    ["add", 28]
                ],
                [
                    ["if", 3, 38],
                    ["add", 29]
                ],
                [
                    ["if", 3, 39],
                    ["add", 30]
                ],
                [
                    ["if", 3, 40],
                    ["add", 31, 39]
                ],
                [
                    ["if", 3, 41],
                    ["add", 32]
                ],
                [
                    ["if", 3, 42],
                    ["add", 33]
                ],
                [
                    ["if", 3, 43],
                    ["add", 34]
                ],
                [
                    ["if", 3, 44],
                    ["add", 35]
                ],
                [
                    ["if", 3, 45],
                    ["add", 36]
                ],
                [
                    ["if", 3, 46, 47],
                    ["add", 37]
                ],
                [
                    ["if", 3, 48],
                    ["add", 38]
                ],
                [
                    ["if", 3, 49],
                    ["add", 40]
                ],
                [
                    ["if", 3, 50, 51],
                    ["add", 42]
                ],
                [
                    ["if", 3, 52, 53],
                    ["add", 43]
                ],
                [
                    ["if", 3, 53, 54],
                    ["add", 44]
                ],
                [
                    ["if", 0, 55],
                    ["add", 45, 91]
                ],
                [
                    ["if", 3, 56],
                    ["add", 46, 92]
                ],
                [
                    ["if", 3, 50],
                    ["add", 47]
                ],
                [
                    ["if", 3, 57, 58],
                    ["add", 48, 75]
                ],
                [
                    ["if", 3, 59],
                    ["add", 49]
                ],
                [
                    ["if", 0, 60],
                    ["add", 50, 90]
                ],
                [
                    ["if", 3, 23],
                    ["add", 51]
                ],
                [
                    ["if", 3, 25],
                    ["add", 52]
                ],
                [
                    ["if", 3, 61, 62],
                    ["add", 53, 78]
                ],
                [
                    ["if", 3, 63, 64],
                    ["add", 54, 82]
                ],
                [
                    ["if", 3, 65, 66],
                    ["add", 55, 70, 77]
                ],
                [
                    ["if", 3, 64, 67],
                    ["add", 56, 76]
                ],
                [
                    ["if", 3, 64, 68],
                    ["add", 57, 87]
                ],
                [
                    ["if", 3, 64, 69],
                    ["add", 58, 84]
                ],
                [
                    ["if", 3, 64, 70],
                    ["add", 59, 79]
                ],
                [
                    ["if", 3, 64, 71],
                    ["add", 60, 89]
                ],
                [
                    ["if", 3, 64, 72],
                    ["add", 61, 74]
                ],
                [
                    ["if", 3, 64, 73],
                    ["add", 62, 72]
                ],
                [
                    ["if", 0, 74],
                    ["add", 63, 85]
                ],
                [
                    ["if", 0, 75],
                    ["add", 64, 86]
                ],
                [
                    ["if", 3, 76],
                    ["add", 65, 88]
                ],
                [
                    ["if", 0, 77],
                    ["add", 66, 68]
                ],
                [
                    ["if", 78, 79],
                    ["add", 93]
                ],
                [
                    ["if", 78, 80],
                    ["add", 94, 106]
                ],
                [
                    ["if", 78, 81],
                    ["add", 95]
                ],
                [
                    ["if", 78, 82],
                    ["add", 96]
                ],
                [
                    ["if", 78, 83],
                    ["add", 97]
                ],
                [
                    ["if", 78, 84],
                    ["add", 98]
                ],
                [
                    ["if", 78, 85],
                    ["add", 99]
                ],
                [
                    ["if", 78, 86],
                    ["add", 100]
                ],
                [
                    ["if", 78, 87],
                    ["add", 101, 103]
                ],
                [
                    ["if", 78, 88],
                    ["add", 102]
                ],
                [
                    ["if", 78, 89],
                    ["add", 104]
                ],
                [
                    ["if", 78, 90],
                    ["add", 105]
                ],
                [
                    ["if", 78, 91],
                    ["add", 107]
                ],
                [
                    ["if", 0],
                    ["unless", 92],
                    ["add", 108]
                ],
                [
                    ["if", 93],
                    ["add", 109, 114, 116, 118]
                ],
                [
                    ["if", 94],
                    ["add", 111]
                ],
                [
                    ["if", 0, 95],
                    ["add", 163, 165, 167, 169, 170]
                ],
                [
                    ["if", 0, 96],
                    ["add", 164, 176, 177]
                ],
                [
                    ["if", 0, 97],
                    ["add", 166, 168, 171, 173, 174]
                ],
                [
                    ["if", 0, 98],
                    ["add", 172]
                ],
                [
                    ["if", 0, 99],
                    ["add", 175]
                ]
            ]
        },
        "runtime": [
                [50, "__bzi", [46, "a"],
                    [52, "b", ["require", "injectScript"]],
                    [52, "c", ["require", "setInWindow"]],
                    ["c", "_linkedin_data_partner_id", [17, [15, "a"], "id"]],
                    ["b", "https://snap.licdn.com/li.lms-analytics/insight.min.js", [17, [15, "a"], "gtmOnSuccess"],
                        [17, [15, "a"], "gtmOnFailure"]
                    ]
                ],
                [50, "__hjtc", [46, "a"],
                    [52, "b", ["require", "createArgumentsQueue"]],
                    [52, "c", ["require", "encodeUriComponent"]],
                    [52, "d", ["require", "injectScript"]],
                    [52, "e", ["require", "makeString"]],
                    [52, "f", ["require", "setInWindow"]],
                    ["b", "hj", "hj.q"],
                    [52, "g", [17, [15, "a"], "hotjar_site_id"]],
                    ["f", "_hjSettings", [8, "hjid", [15, "g"], "hjsv", 7, "scriptSource", "gtm"]],
                    ["d", [0, [0, "https://static.hotjar.com/c/hotjar-", ["c", ["e", [15, "g"]]]], ".js?sv=7"],
                        [17, [15, "a"], "gtmOnSuccess"],
                        [17, [15, "a"], "gtmOnFailure"]
                    ]
                ]

            ]

            ,
        "permissions": {
            "__bzi": {
                "access_globals": {
                    "keys": [{
                        "key": "_linkedin_data_partner_id",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "inject_script": {
                    "urls": ["https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js"]
                }
            },
            "__hjtc": {
                "access_globals": {
                    "keys": [{
                        "key": "hj",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "hj.q",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "_hjSettings",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "inject_script": {
                    "urls": ["https:\/\/static.hotjar.com\/c\/hotjar-*"]
                }
            }


        }



        ,
        "security_groups": {
            "nonGoogleScripts": [
                "__bzi",
                "__hjtc"

            ]


        }



    };

    var productSettings = {
        "AW-751180227": {
            "preAutoPii": true
        }
    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var aa, ba = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        da = function(a) {
            return a.raw = a
        },
        ea = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: ba(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        fa = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ha;
    if ("function" == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf;
    else {
        var ia;
        a: {
            var la = {
                    a: !0
                },
                na = {};
            try {
                na.__proto__ = la;
                ia = na.a;
                break a
            } catch (a) {}
            ia = !1
        }
        ha = ia ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var oa = ha,
        pa = function(a, b) {
            a.prototype = fa(b.prototype);
            a.prototype.constructor = a;
            if (oa) oa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Zm = b.prototype
        },
        qa = this || self,
        ra = function(a) {
            return a
        };
    var sa = function(a, b) {
        this.h = a;
        this.B = b
    };
    var ta = function(a) {
            return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
        },
        va = function() {
            this.C = {};
            this.D = !1;
            this.M = {}
        },
        wa = function(a, b) {
            var c = [],
                d;
            for (d in a.C)
                if (a.C.hasOwnProperty(d)) switch (d = d.substr(5), b) {
                    case 1:
                        c.push(d);
                        break;
                    case 2:
                        c.push(a.get(d));
                        break;
                    case 3:
                        c.push([d, a.get(d)])
                }
            return c
        };
    aa = va.prototype;
    aa.get = function(a) {
        return this.C["dust." + a]
    };
    aa.set = function(a, b) {
        this.D || (a = "dust." + a, this.M.hasOwnProperty(a) || (this.C[a] = b))
    };
    aa.has = function(a) {
        return this.C.hasOwnProperty("dust." + a)
    };
    aa.remove = function(a) {
        a = "dust." + a;
        this.D || this.M.hasOwnProperty(a) || delete this.C[a]
    };
    aa.uc = function() {
        this.D = !0
    };
    aa.Jf = function() {
        return this.D
    };
    var xa = function(a) {
        this.B = new va;
        this.h = [];
        this.C = !1;
        a = a || [];
        for (var b in a) a.hasOwnProperty(b) && (ta(b) ? this.h[Number(b)] = a[Number(b)] : this.B.set(b, a[b]))
    };
    aa = xa.prototype;
    aa.toString = function(a) {
        if (a && 0 <= a.indexOf(this)) return "";
        for (var b = [], c = 0; c < this.h.length; c++) {
            var d = this.h[c];
            null === d || void 0 === d ? b.push("") : d instanceof xa ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString())
        }
        return b.join(",")
    };
    aa.set = function(a, b) {
        if (!this.C)
            if ("length" === a) {
                if (!ta(b)) throw Error("RangeError: Length property must be a valid integer.");
                this.h.length = Number(b)
            } else ta(a) ? this.h[Number(a)] = b : this.B.set(a, b)
    };
    aa.get = function(a) {
        return "length" === a ? this.length() : ta(a) ? this.h[Number(a)] : this.B.get(a)
    };
    aa.length = function() {
        return this.h.length
    };
    aa.Qb = function() {
        for (var a = wa(this.B, 1), b = 0; b < this.h.length; b++) a.push(b + "");
        return new xa(a)
    };
    aa.remove = function(a) {
        ta(a) ? delete this.h[Number(a)] : this.B.remove(a)
    };
    aa.pop = function() {
        return this.h.pop()
    };
    aa.push = function(a) {
        return this.h.push.apply(this.h, Array.prototype.slice.call(arguments))
    };
    aa.shift = function() {
        return this.h.shift()
    };
    aa.splice = function(a, b, c) {
        return new xa(this.h.splice.apply(this.h, arguments))
    };
    aa.unshift = function(a) {
        return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments))
    };
    aa.has = function(a) {
        return ta(a) && this.h.hasOwnProperty(a) || this.B.has(a)
    };
    aa.uc = function() {
        this.C = !0;
        Object.freeze(this.h);
        this.B.uc()
    };
    aa.Jf = function() {
        return this.C
    };
    var ya = function() {
        this.quota = {}
    };
    ya.prototype.reset = function() {
        this.quota = {}
    };
    var za = function(a, b) {
        this.R = a;
        this.M = function(c, d, e) {
            return c.apply(d, e)
        };
        this.C = b;
        this.B = new va;
        this.h = this.D = void 0
    };
    za.prototype.add = function(a, b) {
        Aa(this, a, b, !1)
    };
    var Aa = function(a, b, c, d) {
        if (!a.B.Jf())
            if (d) {
                var e = a.B;
                e.set(b, c);
                e.M["dust." + b] = !0
            } else a.B.set(b, c)
    };
    za.prototype.set = function(a, b) {
        this.B.Jf() || (!this.B.has(a) && this.C && this.C.has(a) ? this.C.set(a, b) : this.B.set(a, b))
    };
    za.prototype.get = function(a) {
        return this.B.has(a) ? this.B.get(a) : this.C ? this.C.get(a) : void 0
    };
    za.prototype.has = function(a) {
        return !!this.B.has(a) || !(!this.C || !this.C.has(a))
    };
    var Ba = function(a) {
        var b = new za(a.R, a);
        a.D && (b.D = a.D);
        b.M = a.M;
        b.h = a.h;
        return b
    };
    var Ca = function() {},
        Da = function(a) {
            return "function" === typeof a
        },
        h = function(a) {
            return "string" === typeof a
        },
        Ea = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        Fa = Array.isArray,
        Ga = function(a, b) {
            if (a && Fa(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        Ja = function(a, b) {
            if (!Ea(a) || !Ea(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        La = function(a, b) {
            for (var c = new Ka, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        l = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Ma = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Oa = function(a) {
            return Math.round(Number(a)) || 0
        },
        Pa = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Qa = function(a) {
            var b = [];
            if (Fa(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ra = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Sa = function() {
            return new Date(Date.now())
        },
        Ta = function() {
            return Sa().getTime()
        },
        Ka = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    Ka.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    Ka.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ua = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Va = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Wa = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Xa = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Za = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        $a = function(a, b) {
            var c = z;
            b = b || [];
            for (var d = c, e = 0; e < a.length - 1; e++) {
                if (!d.hasOwnProperty(a[e])) return;
                d = d[a[e]];
                if (0 <=
                    b.indexOf(d)) return
            }
            return d
        },
        ab = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        bb = /^\w{1,9}$/,
        cb = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            l(a, function(d, e) {
                bb.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        db = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };
    var eb = function(a, b) {
        va.call(this);
        this.R = a;
        this.sb = b
    };
    pa(eb, va);
    eb.prototype.toString = function() {
        return this.R
    };
    eb.prototype.Qb = function() {
        return new xa(wa(this, 1))
    };
    eb.prototype.h = function(a, b) {
        return this.sb.apply(new fb(this, a), Array.prototype.slice.call(arguments, 1))
    };
    eb.prototype.B = function(a, b) {
        try {
            return this.h.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (c) {}
    };
    var hb = function(a, b) {
            for (var c, d = 0; d < b.length && !(c = gb(a, b[d]), c instanceof sa); d++);
            return c
        },
        gb = function(a, b) {
            try {
                var c = a.get(String(b[0]));
                if (!(c && c instanceof eb)) throw Error("Attempting to execute non-function " + b[0] + ".");
                return c.h.apply(c, [a].concat(b.slice(1)))
            } catch (e) {
                var d = a.D;
                d && d(e, b.context ? {
                    id: b[0],
                    line: b.context.line
                } : null);
                throw e;
            }
        },
        fb = function(a, b) {
            this.B = a;
            this.h = b
        },
        D = function(a, b) {
            return Fa(b) ? gb(a.h, b) : b
        },
        E = function(a) {
            return a.B.R
        };
    var ib = function() {
        va.call(this)
    };
    pa(ib, va);
    ib.prototype.Qb = function() {
        return new xa(wa(this, 1))
    };
    var jb = {
        map: function(a) {
            for (var b = new ib, c = 0; c < arguments.length - 1; c += 2) {
                var d = D(this, arguments[c]) + "",
                    e = D(this, arguments[c + 1]);
                b.set(d, e)
            }
            return b
        },
        list: function(a) {
            for (var b = new xa, c = 0; c < arguments.length; c++) {
                var d = D(this, arguments[c]);
                b.push(d)
            }
            return b
        },
        fn: function(a, b, c) {
            var d = this.h,
                e = D(this, b);
            if (!(e instanceof xa)) throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            return new eb(a, function() {
                return function(g) {
                    var k = Ba(d);
                    void 0 ===
                        k.h && (k.h = this.h.h);
                    for (var m = Array.prototype.slice.call(arguments, 0), n = 0; n < m.length; n++)
                        if (m[n] = D(this, m[n]), m[n] instanceof sa) return m[n];
                    for (var p = e.get("length"), q = 0; q < p; q++) q < m.length ? k.add(e.get(q), m[q]) : k.add(e.get(q), void 0);
                    k.add("arguments", new xa(m));
                    var r = hb(k, f);
                    if (r instanceof sa) return "return" === r.h ? r.B : r
                }
            }())
        },
        control: function(a, b) {
            return new sa(a, D(this, b))
        },
        undefined: function() {}
    };
    var kb = function() {
            this.C = new ya;
            this.h = new za(this.C)
        },
        lb = function(a, b, c) {
            var d = new eb(b, c);
            d.uc();
            a.h.set(b, d)
        },
        mb = function(a, b, c) {
            jb.hasOwnProperty(b) && lb(a, c || b, jb[b])
        };
    kb.prototype.execute = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.B(c)
    };
    kb.prototype.B = function(a) {
        for (var b, c = 0; c < arguments.length; c++) b = gb(this.h, arguments[c]);
        return b
    };
    kb.prototype.D = function(a, b) {
        var c = Ba(this.h);
        c.h = a;
        for (var d, e = 1; e < arguments.length; e++) d = gb(c, arguments[e]);
        return d
    };

    function nb() {
        for (var a = ob, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function pb() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var ob, qb;

    function rb(a) {
        ob = ob || pb();
        qb = qb || nb();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                k = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | k >> 6,
                q = k & 63;
            e || (q = 64, d || (p = 64));
            b.push(ob[m], ob[n], ob[p], ob[q])
        }
        return b.join("")
    }

    function sb(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = qb[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        ob = ob || pb();
        qb = qb || nb();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                k = b(64);
            if (64 === k && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != k && (c += String.fromCharCode(g << 6 & 192 | k)))
        }
    };
    var tb = {},
        ub = function(a, b) {
            tb[a] = tb[a] || [];
            tb[a][b] = !0
        },
        vb = function() {
            delete tb.GA4_EVENT
        },
        wb = function(a) {
            var b = tb[a];
            if (!b || 0 === b.length) return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return rb(c.join("")).replace(/\.+$/, "")
        };
    var xb = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var yb, zb = function() {
        if (void 0 === yb) {
            var a = null,
                b = qa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ra,
                        createScript: ra,
                        createScriptURL: ra
                    })
                } catch (c) {
                    qa.console && qa.console.error(c.message)
                }
                yb = a
            } else yb = a
        }
        return yb
    };
    var Ab = function(a) {
        this.h = a
    };
    Ab.prototype.toString = function() {
        return this.h + ""
    };
    var Bb = function(a) {
            return a instanceof Ab && a.constructor === Ab ? a.h : "type_error:TrustedResourceUrl"
        },
        Cb = {},
        Db = function(a) {
            var b = a,
                c = zb(),
                d = c ? c.createScriptURL(b) : b;
            return new Ab(d, Cb)
        };
    var Eb = function(a) {
        this.h = a
    };
    Eb.prototype.toString = function() {
        return this.h.toString()
    };
    var Fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        Gb = {},
        Hb = new Eb("about:invalid#zClosurez", Gb);
    var Ib, Jb;
    a: {
        for (var Kb = ["CLOSURE_FLAGS"], Lb = qa, Mb = 0; Mb < Kb.length; Mb++)
            if (Lb = Lb[Kb[Mb]], null == Lb) {
                Jb = null;
                break a
            }
        Jb = Lb
    }
    var Nb = Jb && Jb[610401301];
    Ib = null != Nb ? Nb : !1;

    function Ob() {
        var a = qa.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var Pb, Qb = qa.navigator;
    Pb = Qb ? Qb.userAgentData || null : null;

    function Rb(a) {
        return Ib ? Pb ? Pb.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }

    function Sb(a) {
        return -1 != Ob().indexOf(a)
    };

    function Tb() {
        return Ib ? !!Pb && 0 < Pb.brands.length : !1
    }

    function Ub() {
        return Tb() ? !1 : Sb("Opera")
    }

    function Vb() {
        return Sb("Firefox") || Sb("FxiOS")
    }

    function Wb() {
        return Tb() ? Rb("Chromium") : (Sb("Chrome") || Sb("CriOS")) && !(Tb() ? 0 : Sb("Edge")) || Sb("Silk")
    };
    var Xb = {},
        Yb = function(a) {
            this.h = a
        };
    Yb.prototype.toString = function() {
        return this.h.toString()
    };
    var Zb = function(a) {
        return a instanceof Yb && a.constructor === Yb ? a.h : "type_error:SafeHtml"
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var $b;
    try {
        new URL("s://g"), $b = !0
    } catch (a) {
        $b = !1
    }
    var ac = $b;
    var bc = {};
    var cc = function() {},
        dc = function(a) {
            this.h = a
        };
    pa(dc, cc);
    dc.prototype.toString = function() {
        return this.h
    };

    function ec(a, b) {
        var c = [new dc(gc[0].toLowerCase(), bc)];
        if (0 === c.length) throw Error("");
        var d = c.map(function(f) {
                var g;
                if (f instanceof dc) g = f.h;
                else throw Error("");
                return g
            }),
            e = b.toLowerCase();
        if (d.every(function(f) {
                return 0 !== e.indexOf(f)
            })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    }

    function hc(a) {
        var b = a.tagName;
        if ("SCRIPT" === b || "STYLE" === b) throw Error("");
    };

    function ic(a, b) {
        var c;
        if (b instanceof Eb) c = b instanceof Eb && b.constructor === Eb ? b.h : "type_error:SafeUrl";
        else {
            var d;
            b: if (ac) {
                var e;
                try {
                    e = new URL(b)
                } catch (n) {
                    d = "https:";
                    break b
                }
                d = e.protocol
            } else {
                var f;
                c: {
                    var g = document.createElement("a");
                    try {
                        g.href = b
                    } catch (n) {
                        f = void 0;
                        break c
                    }
                    var k = g.protocol;f = ":" === k || "" === k ? "https:" : k
                }
                d = f
            }
            c = "javascript:" !== d ? b : void 0
        }
        var m = c;
        void 0 !== m && (a.action = m)
    };
    (function() {
        return ""
    }).toString().indexOf("`");
    var jc = function(a) {
        this.Fl = a
    };

    function kc(a) {
        return new jc(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var lc = [kc("data"), kc("http"), kc("https"), kc("mailto"), kc("ftp"), new jc(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function mc(a, b) {
        b = void 0 === b ? lc : b;
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof jc && d.Fl(a)) return new Eb(a, Gb)
        }
    }

    function nc(a) {
        var b;
        b = void 0 === b ? lc : b;
        return mc(a, b) || Hb
    };

    function oc(a) {
        var b = a = pc(a),
            c = zb(),
            d = c ? c.createHTML(b) : b;
        return new Yb(d, Xb)
    }

    function pc(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    var z = window,
        F = document,
        qc = navigator,
        rc = F.currentScript && F.currentScript.src,
        sc = function(a, b) {
            var c = z[a];
            z[a] = void 0 === c ? b : c;
            return z[a]
        },
        tc = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        uc = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        vc = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function xc(a, b, c) {
        b && l(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var yc = function(a, b, c, d, e) {
            var f = F.createElement("script");
            xc(f, d, uc);
            f.type = "text/javascript";
            f.async = !0;
            var g;
            g = Db(pc(a));
            f.src = Bb(g);
            var k, m, n, p = null == (n = (m = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : n.call(m, "script[nonce]");
            (k = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", k);
            tc(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var q = F.getElementsByTagName("script")[0] || F.body || F.head;
                q.parentNode.insertBefore(f, q)
            }
            return f
        },
        zc = function() {
            if (rc) {
                var a =
                    rc.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Ac = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var g = e,
                k = !1;
            g || (g = F.createElement("iframe"), k = !0);
            xc(g, c, vc);
            d && l(d, function(n, p) {
                g.dataset[n] = p
            });
            f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
            if (k) {
                var m = F.body && F.body.lastChild || F.body || F.head;
                m.parentNode.insertBefore(g, m)
            }
            tc(g, b);
            void 0 !== a && (g.src = a);
            return g
        },
        Bc = function(a, b, c, d) {
            var e = new Image(1, 1);
            xc(e,
                d, {});
            e.onload = function() {
                e.onload = null;
                b && b()
            };
            e.onerror = function() {
                e.onerror = null;
                c && c()
            };
            e.src = a
        },
        Cc = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Dc = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        I = function(a) {
            z.setTimeout(a, 0)
        },
        Ec = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Fc = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " !=
                b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Gc = function(a) {
            var b = F.createElement("div"),
                c = b,
                d = oc("A<div>" + a + "</div>");
            1 === c.nodeType && hc(c);
            c.innerHTML = Zb(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        Hc = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Ic = function(a) {
            var b;
            try {
                b = qc.sendBeacon && qc.sendBeacon(a)
            } catch (c) {
                ub("TAGGING", 15)
            }
            b || Bc(a)
        },
        Jc = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Kc = function(a) {
            var b = {
                headers: {
                    "Attribution-Reporting-Eligible": "trigger"
                },
                keepalive: !0,
                attributionReporting: {
                    eventSourceEligible: !0,
                    triggerEligible: !0
                }
            };
            try {
                z.fetch(a, b)
            } catch (c) {}
        },
        Lc = function() {
            var a = z.performance;
            if (a && Da(a.now)) return a.now()
        },
        Mc = function() {
            return z.performance || void 0
        };
    var Nc = function(a, b) {
            return D(this, a) && D(this, b)
        },
        Oc = function(a, b) {
            return D(this, a) === D(this, b)
        },
        Pc = function(a, b) {
            return D(this, a) || D(this, b)
        },
        Qc = function(a, b) {
            a = D(this, a);
            b = D(this, b);
            return -1 < String(a).indexOf(String(b))
        },
        Rc = function(a, b) {
            a = String(D(this, a));
            b = String(D(this, b));
            return a.substring(0, b.length) === b
        },
        Sc = function(a, b) {
            a = D(this, a);
            b = D(this, b);
            switch (a) {
                case "pageLocation":
                    var c = z.location.href;
                    b instanceof ib && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                    return c
            }
        };
    var Uc = function() {
        this.h = new kb;
        Tc(this)
    };
    Uc.prototype.execute = function(a) {
        return this.h.B(a)
    };
    var Tc = function(a) {
        mb(a.h, "map");
        var b = function(c, d) {
            lb(a.h, c, d)
        };
        b("and", Nc);
        b("contains", Qc);
        b("equals", Oc);
        b("or", Pc);
        b("startsWith", Rc);
        b("variable", Sc)
    };
    var Vc = function() {
        this.map = new Map
    };
    Vc.prototype.set = function(a, b) {
        this.map.set(a, b)
    };
    Vc.prototype.get = function(a) {
        return this.map.get(a)
    };
    var Wc = function() {
        this.keys = [];
        this.values = []
    };
    Wc.prototype.set = function(a, b) {
        this.keys.push(a);
        this.values.push(b)
    };
    Wc.prototype.get = function(a) {
        var b = this.keys.indexOf(a);
        if (-1 < b) return this.values[b]
    };

    function Xc() {
        try {
            return Map ? new Vc : new Wc
        } catch (a) {
            return new Wc
        }
    };
    var Yc = function(a) {
        if (a instanceof Yc) return a;
        this.fa = a
    };
    Yc.prototype.toString = function() {
        return String(this.fa)
    };
    var $c = function(a) {
        va.call(this);
        this.h = a;
        this.set("then", Zc(this));
        this.set("catch", Zc(this, !0));
        this.set("finally", Zc(this, !1, !0))
    };
    pa($c, ib);
    var Zc = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        return new eb("", function(d, e) {
            b && (e = d, d = void 0);
            c && (e = d);
            d instanceof eb || (d = void 0);
            e instanceof eb || (e = void 0);
            var f = Ba(this.h),
                g = function(m) {
                    return function(n) {
                        return c ? (m.h(f), a.h) : m.h(f, n)
                    }
                },
                k = a.h.then(d && g(d), e && g(e));
            return new $c(k)
        })
    };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var ad = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        bd = function(a) {
            if (null == a) return String(a);
            var b = ad.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        cd = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        dd = function(a) {
            if (!a || "object" != bd(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !cd(a, "constructor") && !cd(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || cd(a, b)
        },
        J = function(a, b) {
            var c = b || ("array" == bd(a) ? [] : {}),
                d;
            for (d in a)
                if (cd(a, d)) {
                    var e = a[d];
                    "array" == bd(e) ? ("array" != bd(c[d]) && (c[d] = []), c[d] = J(e, c[d])) : dd(e) ? (dd(c[d]) || (c[d] = {}), c[d] = J(e, c[d])) : c[d] = e
                }
            return c
        };
    var gd = function(a, b, c) {
            var d = Xc(),
                e = function(g, k) {
                    for (var m = wa(g, 1), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]))
                },
                f = function(g) {
                    var k = d.get(g);
                    if (k) return k;
                    if (g instanceof xa) {
                        var m = [];
                        d.set(g, m);
                        for (var n = g.Qb(), p = 0; p < n.length(); p++) m[n.get(p)] = f(g.get(n.get(p)));
                        return m
                    }
                    if (g instanceof $c) return g.h;
                    if (g instanceof ib) {
                        var q = {};
                        d.set(g, q);
                        e(g, q);
                        return q
                    }
                    if (g instanceof eb) {
                        var r = function() {
                            for (var u = Array.prototype.slice.call(arguments, 0), v = 0; v < u.length; v++) u[v] = ed(u[v], b, c);
                            var w = new za(b ? b.R :
                                new ya);
                            b && (w.h = b.h);
                            return f(g.h.apply(g, [w].concat(u)))
                        };
                        d.set(g, r);
                        e(g, r);
                        return r
                    }
                    var t = !1;
                    switch (c) {
                        case 1:
                            t = !0;
                            break;
                        case 2:
                            t = !1;
                            break;
                        case 3:
                            t = !1;
                            break;
                        default:
                    }
                    if (g instanceof Yc && t) return g.fa;
                    switch (typeof g) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                            return g;
                        case "object":
                            if (null === g) return null
                    }
                };
            return f(a)
        },
        ed = function(a, b, c) {
            var d = Xc(),
                e = function(g,
                    k) {
                    for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]))
                },
                f = function(g) {
                    var k = d.get(g);
                    if (k) return k;
                    if (Fa(g) || Ma(g)) {
                        var m = new xa([]);
                        d.set(g, m);
                        for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
                        return m
                    }
                    if (dd(g)) {
                        var p = new ib;
                        d.set(g, p);
                        e(g, p);
                        return p
                    }
                    if ("function" === typeof g) {
                        var q = new eb("", function(x) {
                            for (var y = Array.prototype.slice.call(arguments, 0), A = 0; A < y.length; A++) y[A] = gd(D(this, y[A]), b, c);
                            return f((0, this.h.M)(g, g, y))
                        });
                        d.set(g, q);
                        e(g, q);
                        return q
                    }
                    var v = typeof g;
                    if (null === g || "string" === v || "number" === v || "boolean" === v) return g;
                    var w = !1;
                    switch (c) {
                        case 1:
                            w = !0;
                            break;
                        case 2:
                            w = !1;
                            break;
                        default:
                    }
                    if (void 0 !== g && w) return new Yc(g)
                };
            return f(a)
        };
    var hd = function(a) {
            for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
            return b
        },
        id = function(a) {
            if (void 0 === a || Fa(a) || dd(a)) return !0;
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    return !0
            }
            return !1
        };
    var jd = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e] instanceof xa)
                    for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
                else c.push(arguments[e]);
            return new xa(c)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.h(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.h(a, this.get(e), e, this) && d.push(this.get(e));
            return new xa(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.h(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) &&
                    this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.h(a, this.get(e), e, this));
            return new xa(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a, b) {
            return this.push.apply(this,
                Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e, f = 0;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d) throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var k = f; k < d; k++) this.has(k) && (e = b.h(a, e, this.get(k), k, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var k = f; 0 <= k; k--) this.has(k) && (e = b.h(a, e, this.get(k), k, this));
            return e
        },
        reverse: function() {
            for (var a = hd(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d :
                0 > c ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new xa(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.h(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = hd(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) {
                return Number(b.h(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
            return this
        },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments,
                1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var kd = {
            charAt: 1,
            concat: 1,
            indexOf: 1,
            lastIndexOf: 1,
            match: 1,
            replace: 1,
            search: 1,
            slice: 1,
            split: 1,
            substring: 1,
            toLowerCase: 1,
            toLocaleLowerCase: 1,
            toString: 1,
            toUpperCase: 1,
            toLocaleUpperCase: 1,
            trim: 1
        },
        ld = new sa("break"),
        md = new sa("continue"),
        nd = function(a, b) {
            return D(this, a) + D(this, b)
        },
        od = function(a, b) {
            return D(this, a) && D(this, b)
        },
        pd = function(a, b, c) {
            a = D(this, a);
            b = D(this, b);
            c = D(this, c);
            if (!(c instanceof xa)) throw Error("Error: Non-List argument given to Apply instruction.");
            if (null === a || void 0 === a) throw Error("TypeError: Can't read property " +
                b + " of " + a + ".");
            var d = "number" === typeof a;
            if ("boolean" === typeof a || d) {
                if ("toString" === b) {
                    if (d && c.length()) {
                        var e = gd(c.get(0));
                        try {
                            return a.toString(e)
                        } catch (r) {}
                    }
                    return a.toString()
                }
                throw Error("TypeError: " + a + "." + b + " is not a function.");
            }
            if ("string" === typeof a) {
                if (kd.hasOwnProperty(b)) {
                    var f = 2;
                    f = 1;
                    var g = gd(c, void 0, f);
                    return ed(a[b].apply(a, g), this.h)
                }
                throw Error("TypeError: " +
                    b + " is not a function");
            }
            if (a instanceof xa) {
                if (a.has(b)) {
                    var k = a.get(b);
                    if (k instanceof eb) {
                        var m = hd(c);
                        m.unshift(this.h);
                        return k.h.apply(k, m)
                    }
                    throw Error("TypeError: " + b + " is not a function");
                }
                if (0 <= jd.supportedMethods.indexOf(b)) {
                    var n = hd(c);
                    n.unshift(this.h);
                    return jd[b].apply(a, n)
                }
            }
            if (a instanceof eb || a instanceof ib) {
                if (a.has(b)) {
                    var p = a.get(b);
                    if (p instanceof eb) {
                        var q = hd(c);
                        q.unshift(this.h);
                        return p.h.apply(p, q)
                    }
                    throw Error("TypeError: " + b + " is not a function");
                }
                if ("toString" === b) return a instanceof
                eb ? a.R : a.toString();
                if ("hasOwnProperty" === b) return a.has.apply(a, hd(c))
            }
            if (a instanceof Yc && "toString" === b) return a.toString();
            throw Error("TypeError: Object has no '" + b + "' property.");
        },
        qd = function(a, b) {
            a = D(this, a);
            if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
            var c = this.h;
            if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
            var d = D(this, b);
            c.set(a, d);
            return d
        },
        rd = function(a) {
            var b = Ba(this.h),
                c = hb(b, Array.prototype.slice.apply(arguments));
            if (c instanceof sa) return c
        },
        sd = function() {
            return ld
        },
        td = function(a) {
            for (var b = D(this, a), c = 0; c < b.length; c++) {
                var d = D(this, b[c]);
                if (d instanceof sa) return d
            }
        },
        ud = function(a) {
            for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
                var d = arguments[c];
                if ("string" === typeof d) {
                    var e = D(this, arguments[c + 1]);
                    Aa(b, d, e, !0)
                }
            }
        },
        vd = function() {
            return md
        },
        wd = function(a, b, c) {
            var d = new xa;
            b = D(this, b);
            for (var e = 0; e < b.length; e++) d.push(b[e]);
            var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
            this.h.add(a, D(this,
                f))
        },
        xd = function(a, b) {
            return D(this, a) / D(this, b)
        },
        yd = function(a, b) {
            a = D(this, a);
            b = D(this, b);
            var c = a instanceof Yc,
                d = b instanceof Yc;
            return c || d ? c && d ? a.fa == b.fa : !1 : a == b
        },
        zd = function(a) {
            for (var b, c = 0; c < arguments.length; c++) b = D(this, arguments[c]);
            return b
        };

    function Ad(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = hb(f, d);
            if (g instanceof sa) {
                if ("break" === g.h) break;
                if ("return" === g.h) return g
            }
        }
    }

    function Bd(a, b, c) {
        if ("string" === typeof b) return Ad(a, function() {
            return b.length
        }, function(f) {
            return f
        }, c);
        if (b instanceof ib || b instanceof xa || b instanceof eb) {
            var d = b.Qb(),
                e = d.length();
            return Ad(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }
    var Cd = function(a, b, c) {
            a = D(this, a);
            b = D(this, b);
            c = D(this, c);
            var d = this.h;
            return Bd(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        Dd = function(a, b, c) {
            a = D(this, a);
            b = D(this, b);
            c = D(this, c);
            var d = this.h;
            return Bd(function(e) {
                var f = Ba(d);
                Aa(f, a, e, !0);
                return f
            }, b, c)
        },
        Ed = function(a, b, c) {
            a = D(this, a);
            b = D(this, b);
            c = D(this, c);
            var d = this.h;
            return Bd(function(e) {
                var f = Ba(d);
                f.add(a, e);
                return f
            }, b, c)
        },
        Gd = function(a, b, c) {
            a = D(this, a);
            b = D(this, b);
            c = D(this, c);
            var d = this.h;
            return Fd(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        Hd =
        function(a, b, c) {
            a = D(this, a);
            b = D(this, b);
            c = D(this, c);
            var d = this.h;
            return Fd(function(e) {
                var f = Ba(d);
                Aa(f, a, e, !0);
                return f
            }, b, c)
        },
        Id = function(a, b, c) {
            a = D(this, a);
            b = D(this, b);
            c = D(this, c);
            var d = this.h;
            return Fd(function(e) {
                var f = Ba(d);
                f.add(a, e);
                return f
            }, b, c)
        };

    function Fd(a, b, c) {
        if ("string" === typeof b) return Ad(a, function() {
            return b.length
        }, function(d) {
            return b[d]
        }, c);
        if (b instanceof xa) return Ad(a, function() {
            return b.length()
        }, function(d) {
            return b.get(d)
        }, c);
        throw new TypeError("The value is not iterable.");
    }
    var Jd = function(a, b, c, d) {
            function e(p, q) {
                for (var r = 0; r < f.length(); r++) {
                    var t = f.get(r);
                    q.add(t, p.get(t))
                }
            }
            var f = D(this, a);
            if (!(f instanceof xa)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
            var g = this.h;
            d = D(this, d);
            var k = Ba(g);
            for (e(g, k); gb(k, b);) {
                var m = hb(k, d);
                if (m instanceof sa) {
                    if ("break" === m.h) break;
                    if ("return" === m.h) return m
                }
                var n = Ba(g);
                e(k, n);
                gb(n, c);
                k = n
            }
        },
        Kd = function(a) {
            a = D(this, a);
            var b = this.h,
                c = !1;
            if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
            return b.get(a)
        },
        Ld = function(a, b) {
            var c;
            a = D(this, a);
            b = D(this, b);
            if (void 0 === a || null === a) throw Error("TypeError: cannot access property of " + a + ".");
            if (a instanceof ib || a instanceof xa || a instanceof eb) c = a.get(b);
            else if ("string" === typeof a) "length" === b ? c = a.length : ta(b) && (c = a[b]);
            else if (a instanceof Yc) return;
            return c
        },
        Md = function(a, b) {
            return D(this, a) > D(this,
                b)
        },
        Nd = function(a, b) {
            return D(this, a) >= D(this, b)
        },
        Od = function(a, b) {
            a = D(this, a);
            b = D(this, b);
            a instanceof Yc && (a = a.fa);
            b instanceof Yc && (b = b.fa);
            return a === b
        },
        Pd = function(a, b) {
            return !Od.call(this, a, b)
        },
        Qd = function(a, b, c) {
            var d = [];
            D(this, a) ? d = D(this, b) : c && (d = D(this, c));
            var e = hb(this.h, d);
            if (e instanceof sa) return e
        },
        Rd = function(a, b) {
            return D(this, a) < D(this, b)
        },
        Sd = function(a, b) {
            return D(this, a) <= D(this, b)
        },
        Td = function(a, b) {
            return D(this, a) % D(this, b)
        },
        Ud = function(a, b) {
            return D(this, a) * D(this, b)
        },
        Vd = function(a) {
            return -D(this,
                a)
        },
        Wd = function(a) {
            return !D(this, a)
        },
        Xd = function(a, b) {
            return !yd.call(this, a, b)
        },
        Yd = function() {
            return null
        },
        Zd = function(a, b) {
            return D(this, a) || D(this, b)
        },
        $d = function(a, b) {
            var c = D(this, a);
            D(this, b);
            return c
        },
        ae = function(a) {
            return D(this, a)
        },
        be = function(a) {
            return Array.prototype.slice.apply(arguments)
        },
        ce = function(a) {
            return new sa("return", D(this, a))
        },
        de = function(a, b, c) {
            a = D(this, a);
            b = D(this, b);
            c = D(this, c);
            if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + " of " + a + ".");
            (a instanceof eb || a instanceof xa || a instanceof ib) && a.set(b, c);
            return c
        },
        ee = function(a, b) {
            return D(this, a) - D(this, b)
        },
        fe = function(a, b, c) {
            a = D(this, a);
            var d = D(this, b),
                e = D(this, c);
            if (!Fa(d) || !Fa(e)) throw Error("Error: Malformed switch instruction.");
            for (var f, g = !1, k = 0; k < d.length; k++)
                if (g || a === D(this, d[k]))
                    if (f = D(this, e[k]), f instanceof sa) {
                        var m = f.h;
                        if ("break" === m) return;
                        if ("return" === m || "continue" === m) return f
                    } else g = !0;
            if (e.length === d.length + 1 && (f = D(this, e[e.length - 1]), f instanceof sa && ("return" === f.h || "continue" ===
                    f.h))) return f
        },
        ge = function(a, b, c) {
            return D(this, a) ? D(this, b) : D(this, c)
        },
        he = function(a) {
            a = D(this, a);
            return a instanceof eb ? "function" : typeof a
        },
        ie = function(a) {
            for (var b = this.h, c = 0; c < arguments.length; c++) {
                var d = arguments[c];
                "string" !== typeof d || b.add(d, void 0)
            }
        },
        je = function(a, b, c, d) {
            var e = D(this, d);
            if (D(this, c)) {
                var f = hb(this.h, e);
                if (f instanceof sa) {
                    if ("break" === f.h) return;
                    if ("return" === f.h) return f
                }
            }
            for (; D(this, a);) {
                var g = hb(this.h, e);
                if (g instanceof sa) {
                    if ("break" === g.h) break;
                    if ("return" === g.h) return g
                }
                D(this,
                    b)
            }
        },
        ke = function(a) {
            return ~Number(D(this, a))
        },
        le = function(a, b) {
            return Number(D(this, a)) << Number(D(this, b))
        },
        me = function(a, b) {
            return Number(D(this, a)) >> Number(D(this, b))
        },
        ne = function(a, b) {
            return Number(D(this, a)) >>> Number(D(this, b))
        },
        oe = function(a, b) {
            return Number(D(this, a)) & Number(D(this, b))
        },
        pe = function(a, b) {
            return Number(D(this, a)) ^ Number(D(this, b))
        },
        qe = function(a, b) {
            return Number(D(this, a)) | Number(D(this, b))
        };
    var ue = function() {
        this.h = new kb;
        re(this)
    };
    ue.prototype.execute = function(a) {
        return ve(this.h.B(a))
    };
    var we = function(a, b, c) {
            return ve(a.h.D(b, c))
        },
        re = function(a) {
            var b = function(d, e) {
                mb(a.h, d, String(e))
            };
            b("control", 49);
            b("fn", 51);
            b("list", 7);
            b("map", 8);
            b("undefined", 44);
            var c = function(d, e) {
                lb(a.h, String(d), e)
            };
            c(0, nd);
            c(1, od);
            c(2, pd);
            c(3, qd);
            c(53, rd);
            c(4, sd);
            c(5, td);
            c(52, ud);
            c(6, vd);
            c(9, td);
            c(50, wd);
            c(10, xd);
            c(12, yd);
            c(13, zd);
            c(47, Cd);
            c(54, Dd);
            c(55, Ed);
            c(63, Jd);
            c(64, Gd);
            c(65, Hd);
            c(66, Id);
            c(15, Kd);
            c(16, Ld);
            c(17, Ld);
            c(18, Md);
            c(19, Nd);
            c(20, Od);
            c(21, Pd);
            c(22, Qd);
            c(23, Rd);
            c(24, Sd);
            c(25, Td);
            c(26, Ud);
            c(27,
                Vd);
            c(28, Wd);
            c(29, Xd);
            c(45, Yd);
            c(30, Zd);
            c(32, $d);
            c(33, $d);
            c(34, ae);
            c(35, ae);
            c(46, be);
            c(36, ce);
            c(43, de);
            c(37, ee);
            c(38, fe);
            c(39, ge);
            c(40, he);
            c(41, ie);
            c(42, je);
            c(58, ke);
            c(57, le);
            c(60, me);
            c(61, ne);
            c(56, oe);
            c(62, pe);
            c(59, qe)
        };

    function ve(a) {
        if (a instanceof sa || a instanceof eb || a instanceof xa || a instanceof ib || a instanceof Yc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a
    };

    function xe(a) {
        switch (a) {
            case 1:
                return "1";
            case 2:
            case 4:
                return "0";
            default:
                return "-"
        }
    }

    function ye(a) {
        switch (a) {
            case 1:
                return "G";
            case 3:
                return "g";
            case 2:
                return "D";
            case 4:
                return "d";
            case 0:
                return "g";
            default:
                return "g"
        }
    }

    function ze(a, b) {
        var c = a[1] || 0,
            d = a[2] || 0;
        switch (b) {
            case 0:
                return "G1" + xe(c) + xe(d);
            case 1:
                return "G2" + ye(c) + ye(d);
            default:
                return "g1--"
        }
    };
    var Ae = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Uj: a("consent"),
            di: a("convert_case_to"),
            ei: a("convert_false_to"),
            fi: a("convert_null_to"),
            gi: a("convert_true_to"),
            hi: a("convert_undefined_to"),
            Im: a("debug_mode_metadata"),
            xa: a("function"),
            Vg: a("instance_name"),
            Dk: a("live_only"),
            Ek: a("malware_disabled"),
            Fk: a("metadata"),
            Ik: a("original_activity_id"),
            Pm: a("original_vendor_template_id"),
            Om: a("once_on_load"),
            Hk: a("once_per_event"),
            aj: a("once_per_load"),
            Tm: a("priority_override"),
            Um: a("respected_consent_types"),
            ej: a("setup_tags"),
            ke: a("tag_id"),
            kj: a("teardown_tags")
        }
    }();
    var We = [],
        Xe = function(a) {
            return void 0 == We[a] ? !1 : We[a]
        };
    var Ye;
    var Ze = [],
        $e = [],
        af = [],
        bf = [],
        cf = [],
        df = {},
        ef, ff, hf = function() {
            var a = gf;
            ff = ff || a
        },
        jf = function(a) {},
        kf, lf = [],
        mf = function(a, b) {
            var c = {};
            c[Ae.xa] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        nf = function(a, b) {
            var c = a[Ae.xa],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = df[c],
                f = b && 2 === b.type && d.Ij && e && -1 !== lf.indexOf(c),
                g = {},
                k = {},
                m;
            for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && d && d.qj && d.qj(a[m]), e && (g[m] = a[m]), !e || f) && (k[m.substr(4)] = a[m]);
            e && d && d.pj && (g.vtp_gtmCachedValues = d.pj);
            if (b) {
                if (null == b.name) {
                    var n;
                    a: {
                        var p = b.index;
                        if (null == p) n = "";
                        else {
                            var q;
                            switch (b.type) {
                                case 2:
                                    q = Ze[p];
                                    break;
                                case 1:
                                    q = bf[p];
                                    break;
                                default:
                                    n = "";
                                    break a
                            }
                            var r =
                                q && q[Ae.Vg];
                            n = r ? String(r) : ""
                        }
                    }
                    b.name = n
                }
                e && (g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name)
            }
            var t, u;
            e && (t = e(g));
            if (!e || f) u = Ye(c, k, b);
            f && t !== u && d && d.Ij(d.id, c);
            return e ? t : u
        },
        pf = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = of (a[e], b, c));
            return d
        },
        of = function(a, b, c) {
            if (Fa(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push( of (a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = Ze[f];
                        if (!g || b.th(g)) return;
                        c[f] = !0;
                        var k = String(g[Ae.Vg]);
                        try {
                            var m = pf(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = nf(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: k
                            });
                            kf && (d = kf.Sk(d, m))
                        } catch (y) {
                            b.Bj && b.Bj(y, Number(f), k), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[ of (a[n], b, c)] = of (a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = of (a[q], b, c);
                            ff && (p = p || r === ff.nf);
                            d.push(r)
                        }
                        return ff && p ? ff.Tk(d) : d.join("");
                    case "escape":
                        d = of (a[1], b, c);
                        if (ff && Fa(a[1]) &&
                            "macro" === a[1][0] && ff.Dl(a)) return ff.am(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) Be[a[t]] && (d = Be[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!bf[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            vj: a[2],
                            index: u
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v[Ae.xa] = a[1];
                        var w = qf(v, b, c),
                            x = !!a[4];
                        return x || 2 !== w ? x !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        qf = function(a, b, c) {
            try {
                return ef(pf(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        },
        rf = function(a) {
            var b = a[Ae.xa];
            if (!b) throw Error("Error: No function name given for function call.");
            return !!df[b]
        };
    var sf = function(a, b, c) {
        var d;
        d = Error.call(this, c);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.h = a
    };
    pa(sf, Error);

    function tf(a, b) {
        if (Fa(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++) tf(a[c], b[c])
        }
    };
    var uf = function(a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.Ul = a;
        this.B = b;
        this.h = []
    };
    pa(uf, Error);
    var wf = function() {
        return function(a, b) {
            a instanceof uf || (a = new uf(a, vf));
            b && a.h.push(b);
            throw a;
        }
    };

    function vf(a) {
        if (!a.length) return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; 0 < b; b--) Ea(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };
    var zf = function(a) {
            function b(r) {
                for (var t = 0; t < r.length; t++) d[r[t]] = !0
            }
            for (var c = [], d = [], e = xf(a), f = 0; f < $e.length; f++) {
                var g = $e[f],
                    k = yf(g, e);
                if (k) {
                    for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(g.block || [])
                } else null === k && b(g.block || []);
            }
            for (var p = [], q = 0; q < bf.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        yf = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var k = b(f[g]);
                if (2 === k) return null;
                if (1 === k) return !1
            }
            return !0
        },
        xf = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = qf(af[c], a));
                return b[c]
            }
        };
    var Af = {
        Sk: function(a, b) {
            b[Ae.di] && "string" === typeof a && (a = 1 == b[Ae.di] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Ae.fi) && null === a && (a = b[Ae.fi]);
            b.hasOwnProperty(Ae.hi) && void 0 === a && (a = b[Ae.hi]);
            b.hasOwnProperty(Ae.gi) && !0 === a && (a = b[Ae.gi]);
            b.hasOwnProperty(Ae.ei) && !1 === a && (a = b[Ae.ei]);
            return a
        }
    };
    var Bf = function() {
        this.h = {}
    };

    function Cf(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    f = a[e].call(void 0, b, c, d), g += "."
                } catch (k) {
                    g = "string" === typeof k ? g + (": " + k) : k instanceof Error ? g + (": " + k.message) : g + "."
                }
                if (!f) throw new sf(c, d, g);
            }
    }

    function Df(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.h[d],
                    f = a.h.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    Cf(e, b, d, g);
                    Cf(f, b, d, g)
                }
            }
        }
    };
    var Hf = function() {
            var a = data.permissions || {},
                b = Ef.ctid,
                c = this;
            this.B = new Bf;
            this.h = {};
            var d = {},
                e = Df(this.B, b, function() {
                    var f = arguments[0];
                    return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
                });
            l(a, function(f, g) {
                var k = {};
                l(g, function(m, n) {
                    var p = Ff(m, n);
                    k[m] = p.assert;
                    d[m] || (d[m] = p.J)
                });
                c.h[f] = function(m, n) {
                    var p = k[m];
                    if (!p) throw Gf(m, {}, "The requested permission " + m + " is not configured.");
                    var q = Array.prototype.slice.call(arguments, 0);
                    p.apply(void 0, q);
                    e.apply(void 0, q)
                }
            })
        },
        Jf = function(a) {
            return If.h[a] || function() {}
        };

    function Ff(a, b) {
        var c = mf(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Gf;
        try {
            return nf(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new sf(e, {}, "Permission " + e + " is unknown.");
                },
                J: function() {
                    for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
                    return e
                }
            }
        }
    }

    function Gf(a, b, c) {
        return new sf(a, b, c)
    };
    var Kf = !1;
    var Lf = {};
    Lf.Gm = Pa('');
    Lf.Vk = Pa('');
    var Mf = Kf,
        Nf = Lf.Vk,
        Of = Lf.Gm;
    var bg = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function cg(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var dg = new Ka;

    function eg(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = dg.get(e);
            f || (f = new RegExp(b, d), dg.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function fg(a, b) {
        return 0 <= String(a).indexOf(String(b))
    }

    function gg(a, b) {
        return String(a) === String(b)
    }

    function hg(a, b) {
        return Number(a) >= Number(b)
    }

    function ig(a, b) {
        return Number(a) <= Number(b)
    }

    function jg(a, b) {
        return Number(a) > Number(b)
    }

    function kg(a, b) {
        return Number(a) < Number(b)
    }

    function lg(a, b) {
        return 0 === String(a).indexOf(String(b))
    };
    var mg = function(a, b) {
            return a.length && b.length && a.lastIndexOf(b) === a.length - b.length
        },
        ng = function(a, b) {
            var c = "*" === b.charAt(b.length - 1) || "/" === b || "/*" === b;
            mg(b, "/*") && (b = b.slice(0, -2));
            mg(b, "?") && (b = b.slice(0, -1));
            var d = b.split("*");
            if (!c && 1 === d.length) return a === d[0];
            for (var e = -1, f = 0; f < d.length; f++) {
                var g = d[f];
                if (g) {
                    e = a.indexOf(g, e);
                    if (-1 === e || 0 === f && 0 !== e) return !1;
                    e += g.length
                }
            }
            if (c || e === a.length) return !0;
            var k = d[d.length - 1];
            return a.lastIndexOf(k) === a.length - k.length
        },
        og = /^[a-z0-9-]+$/i,
        pg = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
        rg = function(a, b) {
            var c;
            if (!(c = !qg(a))) {
                var d;
                a: {
                    var e = a.hostname.split(".");
                    if (2 > e.length) d = !1;
                    else {
                        for (var f = 0; f < e.length; f++)
                            if (!og.exec(e[f])) {
                                d = !1;
                                break a
                            }
                        d = !0
                    }
                }
                c = !d
            }
            if (c) return !1;
            for (var g = 0; g < b.length; g++) {
                var k;
                var m = a,
                    n = b[g];
                if (!pg.exec(n)) throw Error("Invalid Wildcard");
                var p = n.slice(8),
                    q = p.slice(0, p.indexOf("/")),
                    r;
                var t = m.hostname,
                    u = q;
                if (0 !== u.indexOf("*.")) r = t.toLowerCase() === u.toLowerCase();
                else {
                    u = u.slice(2);
                    var v = t.toLowerCase().indexOf(u.toLowerCase());
                    r = -1 === v ? !1 : t.length === u.length ?
                        !0 : t.length !== u.length + v ? !1 : "." === t[v - 1]
                }
                if (r) {
                    var w = p.slice(p.indexOf("/"));
                    k = ng(m.pathname + m.search, w) ? !0 : !1
                } else k = !1;
                if (k) return !0
            }
            return !1
        },
        qg = function(a) {
            return "https:" === a.protocol && (!a.port || "443" === a.port)
        };
    var sg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function tg(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a << 2 | b]
    };
    var ug = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
        vg = {
            Fn: "function",
            DustMap: "Object",
            List: "Array"
        },
        L = function(a, b, c) {
            for (var d = 0; d < b.length; d++) {
                var e = ug.exec(b[d]);
                if (!e) throw Error("Internal Error in " + a);
                var f = e[1],
                    g = "!" === e[2],
                    k = e[3],
                    m = c[d];
                if (null == m) {
                    if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
                } else if ("*" !== k) {
                    var n = typeof m;
                    m instanceof eb ? n = "Fn" : m instanceof xa ? n = "List" : m instanceof ib ? n = "DustMap" : m instanceof Yc && (n = "OpaqueValue");
                    if (n != k) throw Error("Error in " + a + ". Argument " + f + " has type " + (vg[n] || n) + ", which does not match required type " + (vg[k] || k) + ".");
                }
            }
        };

    function wg(a) {
        return "" + a
    }

    function xg(a, b) {
        var c = [];
        return c
    };
    var yg = function(a, b) {
            var c = new eb(a, function() {
                for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = D(this, d[e]);
                return b.apply(this, d)
            });
            c.uc();
            return c
        },
        zg = function(a, b) {
            var c = new ib,
                d;
            for (d in b)
                if (b.hasOwnProperty(d)) {
                    var e = b[d];
                    Da(e) ? c.set(d, yg(a + "_" + d, e)) : dd(e) ? c.set(d, zg(a + "_" + d, e)) : (Ea(e) || h(e) || "boolean" === typeof e) && c.set(d, e)
                }
            c.uc();
            return c
        };
    var Ag = function(a, b) {
        L(E(this), ["apiName:!string", "message:?string"], arguments);
        var c = {},
            d = new ib;
        return d = zg("AssertApiSubject", c)
    };
    var Bg = function(a, b) {
        L(E(this), ["actual:?*", "message:?string"], arguments);
        if (a instanceof $c) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {},
            d = new ib;
        return d = zg("AssertThatSubject", c)
    };

    function Cg(a) {
        return function() {
            for (var b = [], c = this.h, d = 0; d < arguments.length; ++d) b.push(gd(arguments[d], c));
            return ed(a.apply(null, b))
        }
    }
    var Eg = function() {
        for (var a = Math, b = Dg, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Cg(a[e].bind(a)))
        }
        return c
    };
    var Hg = function(a) {
        var b;
        return b
    };
    var Ig = function(a) {
        var b;
        return b
    };
    var Jg = function(a) {
        try {
            return encodeURI(a)
        } catch (b) {}
    };
    var Kg = function(a) {
        try {
            return encodeURIComponent(a)
        } catch (b) {}
    };

    function Lg(a, b) {
        var c = !1;
        return c
    }
    Lg.I = "internal.evaluateBooleanExpression";
    var Qg = function(a) {
        L(E(this), ["message:?string"], arguments);
    };
    var Rg = function(a, b) {
        L(E(this), ["min:!number", "max:!number"], arguments);
        return Ja(a, b)
    };
    var M = function(a, b, c) {
        var d = a.h.h;
        if (!d) throw Error("Missing program state.");
        if (d.jm) {
            try {
                d.oj.apply(null, Array.prototype.slice.call(arguments, 1))
            } catch (e) {
                throw ub("TAGGING", 21), e;
            }
            return
        }
        d.oj.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var Sg = function() {
        M(this, "read_container_data");
        var a = new ib;
        a.set("containerId", 'GTM-NBS8LRM');
        a.set("version", '96');
        a.set("environmentName", '');
        a.set("debugMode", Mf);
        a.set("previewMode", Of);
        a.set("environmentMode", Nf);
        a.uc();
        return a
    };
    var Tg = function() {
        return (new Date).getTime()
    };
    var Ug = function(a) {
        if (null === a) return "null";
        if (a instanceof xa) return "array";
        if (a instanceof eb) return "function";
        if (a instanceof Yc) {
            a = a.fa;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var Vg = function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (Mf || Of) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return ed(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(gd(c))
            })
        }
    };
    var Wg = function(a) {
        return Oa(gd(a, this.h))
    };
    var Xg = function(a) {
        return Number(gd(a, this.h))
    };
    var Yg = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    };
    var Zg = function(a, b, c) {
        var d = null,
            e = !1;
        return e ? d : null
    };
    var Dg = "floor ceil round max min abs pow sqrt".split(" ");
    var $g = function() {
            var a = {};
            return {
                kl: function(b) {
                    return a.hasOwnProperty(b) ? a[b] : void 0
                },
                xm: function(b, c) {
                    a[b] = c
                },
                reset: function() {
                    a = {}
                }
            }
        },
        ah = function(a, b) {
            return function() {
                var c = Array.prototype.slice.call(arguments, 0);
                c.unshift(b);
                return eb.prototype.h.apply(a, c)
            }
        },
        bh = function(a, b) {
            L(E(this), ["apiName:!string", "mock:?*"], arguments);
        };
    var ch = {};
    ch.keys = function(a) {
        return new xa
    };
    ch.values = function(a) {
        return new xa
    };
    ch.entries = function(a) {
        return new xa
    };
    ch.freeze = function(a) {
        return a
    };
    ch.delete = function(a, b) {
        return !1
    };
    var eh = function() {
        this.h = {};
        this.B = {};
    };
    eh.prototype.get = function(a, b) {
        var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
        return c
    };
    eh.prototype.add = function(a, b, c) {
        if (this.h.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
        if (this.B.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.h[a] = c ? void 0 : Da(b) ? yg(a, b) : zg(a, b)
    };

    function fh(a, b) {
        var c = void 0;
        return c
    };

    function gh() {
        var a = {};
        return a
    };
    var ih = function(a) {
            return hh ? F.querySelectorAll(a) : null
        },
        jh = function(a, b) {
            if (!hh) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!F.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        kh = !1;
    if (F.querySelectorAll) try {
        var lh = F.querySelectorAll(":root");
        lh && 1 == lh.length && lh[0] == F.documentElement && (kh = !0)
    } catch (a) {}
    var hh = kh;
    var N = function(a) {
        ub("GTM", a)
    };
    var mh = function(a) {
            return null == a ? "" : h(a) ? Ra(String(a)) : "e0"
        },
        oh = function(a) {
            return a.replace(nh, "")
        },
        qh = function(a) {
            return ph(a.replace(/\s/g, ""))
        },
        ph = function(a) {
            return Ra(a.replace(rh, "").toLowerCase())
        },
        th = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return sh.test(a) ? a : "e0"
        },
        vh = function(a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (uh.test(c)) return c
            }
            return "e0"
        },
        yh = function(a,
            b) {
            window.Promise || b([]);
            Promise.all(a.map(function(c) {
                return c.value && -1 !== wh.indexOf(c.name) ? xh(c.value).then(function(d) {
                    c.value = d
                }) : Promise.resolve()
            })).then(function() {
                b(a)
            }).catch(function() {
                b([])
            })
        },
        xh = function(a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (z.crypto && z.crypto.subtle) {
                if (zh.test(a)) return Promise.resolve(a);
                try {
                    var b = Ah(a);
                    return z.crypto.subtle.digest("SHA-256", b).then(function(c) {
                        var d = Array.from(new Uint8Array(c)).map(function(e) {
                            return String.fromCharCode(e)
                        }).join("");
                        return z.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                    }).catch(function() {
                        return "e2"
                    })
                } catch (c) {
                    return Promise.resolve("e2")
                }
            } else return Promise.resolve("e1")
        },
        Ah = function(a) {
            var b;
            if (z.TextEncoder) b = (new TextEncoder("utf-8")).encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 |
                        e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        },
        rh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        uh = /^\S+@\S+\.\S+$/,
        sh = /^\+\d{10,15}$/,
        nh = /[.~]/g,
        Bh = /^[0-9A-Za-z_-]{43}$/,
        zh = /^[0-9A-Fa-f]{64}$/,
        Ch = {},
        Dh = (Ch.email = "em", Ch.phone_number = "pn", Ch.first_name = "fn", Ch.last_name = "ln", Ch.street = "sa", Ch.city = "ct", Ch.region = "rg", Ch.country = "co", Ch.postal_code = "pc", Ch.error_code = "ec", Ch),
        Eh = {},
        Fh = (Eh.email = "sha256_email_address", Eh.phone_number = "sha256_phone_number", Eh.first_name = "sha256_first_name", Eh.last_name =
            "sha256_last_name", Eh.street = "sha256_street", Eh),
        Gh = function(a, b) {
            function c(t, u, v, w) {
                var x = mh(t);
                "" !== x && (zh.test(x) ? m.push({
                    name: u,
                    value: x,
                    index: w
                }) : m.push({
                    name: u,
                    value: v(x),
                    index: w
                }))
            }

            function d(t, u) {
                var v = t;
                if (h(v) || Fa(v)) {
                    v = Fa(t) ? t : [t];
                    for (var w = 0; w < v.length; ++w) {
                        var x = mh(v[w]),
                            y = zh.test(x);
                        u && !y && N(89);
                        !u && y && N(88)
                    }
                }
            }

            function e(t, u) {
                var v = t[u];
                d(v, !1);
                var w = Fh[u];
                t.hasOwnProperty(w) && (t.hasOwnProperty(u) && N(90), v = t[w], d(v, !0));
                return v
            }

            function f(t, u, v) {
                var w = e(t, u);
                w = Fa(w) ? w : [w];
                for (var x =
                        0; x < w.length; ++x) c(w[x], u, v)
            }

            function g(t, u, v, w) {
                var x = e(t, u);
                c(x, u, v, w)
            }

            function k(t) {
                return function(u) {
                    N(64);
                    return t(u)
                }
            }
            var m = [];
            if ("https:" === z.location.protocol) {
                f(a, "email", vh);
                f(a, "phone_number", th);
                f(a, "first_name", k(qh));
                f(a, "last_name", k(qh));
                var n = a.home_address || {};
                f(n, "street", k(ph));
                f(n, "city", k(ph));
                f(n, "postal_code", k(oh));
                f(n, "region", k(ph));
                f(n, "country", k(oh));
                var p = a.address || {};
                p = Fa(p) ? p : [p];
                for (var q = 0; q < p.length; q++) {
                    var r = p[q];
                    g(r, "first_name", qh, q);
                    g(r, "last_name", qh, q);
                    g(r, "street", ph, q);
                    g(r, "city", ph, q);
                    g(r, "postal_code", oh, q);
                    g(r, "region", ph, q);
                    g(r, "country", oh, q)
                }
                yh(m, b)
            } else m.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }), b(m)
        },
        Hh = function(a, b) {
            Gh(a, function(c) {
                for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                    var g = c[f].name,
                        k = c[f].value,
                        m = c[f].index,
                        n = Dh[g];
                    n && k && (-1 === wh.indexOf(g) || /^e\d+$/.test(k) || Bh.test(k) || zh.test(k)) && (void 0 !== m && (n += m), d.push(n + "." + k), e++)
                }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e)
            })
        },
        Ih = function(a) {
            if (z.Promise) try {
                return new Promise(function(b) {
                    Hh(a,
                        function(c, d) {
                            b({
                                Mf: c,
                                Yl: d
                            })
                        })
                })
            } catch (b) {}
        },
        wh = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var P = {
            g: {
                md: "ad_personalization",
                H: "ad_storage",
                Ma: "ad_user_data",
                P: "analytics_storage",
                Va: "region",
                nd: "consent_updated",
                od: "wait_for_update",
                Yj: "ads",
                dg: "all",
                Zj: "android",
                bk: "chrome",
                dk: "playstore",
                ek: "search",
                fk: "shopping",
                gk: "youtube",
                ii: "app_remove",
                ji: "app_store_refund",
                ki: "app_store_subscription_cancel",
                li: "app_store_subscription_convert",
                mi: "app_store_subscription_renew",
                fg: "add_payment_info",
                gg: "add_shipping_info",
                Yb: "add_to_cart",
                Zb: "remove_from_cart",
                hg: "view_cart",
                Hb: "begin_checkout",
                ac: "select_item",
                ab: "view_item_list",
                tb: "select_promotion",
                cb: "view_promotion",
                ra: "purchase",
                bc: "refund",
                Ea: "view_item",
                ig: "add_to_wishlist",
                hk: "exception",
                ni: "first_open",
                oi: "first_visit",
                ka: "gtag.config",
                Ja: "gtag.get",
                ri: "in_app_purchase",
                fc: "page_view",
                ik: "screen_view",
                si: "session_start",
                jk: "timing_complete",
                kk: "track_social",
                rd: "user_engagement",
                ub: "gclid",
                la: "ads_data_redaction",
                aa: "allow_ad_personalization_signals",
                sd: "allow_custom_scripts",
                Ue: "allow_display_features",
                ud: "allow_enhanced_conversions",
                vb: "allow_google_signals",
                Fa: "allow_interest_groups",
                lk: "app_id",
                mk: "app_installer_id",
                nk: "app_name",
                pk: "app_version",
                hc: "auid",
                ui: "auto_detection_enabled",
                Ib: "aw_remarketing",
                Ve: "aw_remarketing_only",
                vd: "discount",
                wd: "aw_feed_country",
                xd: "aw_feed_language",
                W: "items",
                yd: "aw_merchant_id",
                jg: "aw_basket_type",
                Ec: "campaign_content",
                Fc: "campaign_id",
                Gc: "campaign_medium",
                Hc: "campaign_name",
                Ic: "campaign",
                Jc: "campaign_source",
                Kc: "campaign_term",
                eb: "client_id",
                vi: "content_group",
                wi: "content_type",
                Ka: "conversion_cookie_prefix",
                Lc: "conversion_id",
                za: "conversion_linker",
                Jb: "conversion_api",
                Na: "cookie_domain",
                Ga: "cookie_expires",
                Oa: "cookie_flags",
                ic: "cookie_name",
                Mc: "cookie_path",
                La: "cookie_prefix",
                hb: "cookie_update",
                wb: "country",
                sa: "currency",
                zd: "customer_lifetime_value",
                jc: "custom_map",
                xi: "gcldc",
                yi: "debug_mode",
                X: "developer_id",
                zi: "disable_merchant_reported_purchases",
                kc: "dc_custom_params",
                kg: "dc_natural_search",
                lg: "dynamic_event_settings",
                mg: "affiliation",
                Ad: "checkout_option",
                We: "checkout_step",
                ng: "coupon",
                Nc: "item_list_name",
                Xe: "list_name",
                Ai: "promotions",
                Oc: "shipping",
                Ye: "tax",
                Bd: "engagement_time_msec",
                Pc: "enhanced_client_id",
                Cd: "enhanced_conversions",
                og: "enhanced_conversions_automatic_settings",
                Dd: "estimated_delivery_date",
                Ze: "euid_logged_in_state",
                Qc: "event_callback",
                qk: "event_category",
                xb: "event_developer_id_string",
                rk: "event_label",
                pg: "event",
                Ed: "event_settings",
                Fd: "event_timeout",
                sk: "description",
                tk: "fatal",
                Bi: "experiments",
                af: "firebase_id",
                Gd: "first_party_collection",
                Hd: "_x_20",
                Kb: "_x_19",
                qg: "fledge",
                rg: "flight_error_code",
                sg: "flight_error_message",
                Ci: "fl_activity_category",
                Di: "fl_activity_group",
                ug: "fl_advertiser_id",
                Ei: "fl_ar_dedupe",
                Fi: "fl_random_number",
                Gi: "tran",
                Hi: "u",
                Id: "gac_gclid",
                mc: "gac_wbraid",
                vg: "gac_wbraid_multiple_conversions",
                wg: "ga_restrict_domain",
                bf: "ga_temp_client_id",
                Jd: "gdpr_applies",
                xg: "geo_granularity",
                ib: "value_callback",
                Pa: "value_key",
                uk: "google_ono",
                jb: "google_signals",
                yg: "google_tld",
                Kd: "groups",
                zg: "gsa_experiment_id",
                Ag: "iframe_state",
                Ld: "ignore_referrer",
                cf: "internal_traffic_results",
                Lb: "is_legacy_converted",
                zb: "is_legacy_loaded",
                Md: "is_passthrough",
                Aa: "language",
                df: "legacy_developer_id_string",
                Ba: "linker",
                nc: "accept_incoming",
                Ab: "decorate_forms",
                T: "domains",
                Mb: "url_position",
                Bg: "method",
                vk: "name",
                Rc: "new_customer",
                Cg: "non_interaction",
                Ii: "optimize_id",
                Ji: "page_hostname",
                Sc: "page_path",
                Ha: "page_referrer",
                Bb: "page_title",
                Dg: "passengers",
                Eg: "phone_conversion_callback",
                Ki: "phone_conversion_country_code",
                Fg: "phone_conversion_css_class",
                Li: "phone_conversion_ids",
                Gg: "phone_conversion_number",
                Hg: "phone_conversion_options",
                oc: "quantity",
                Tc: "redact_device_info",
                ef: "redact_enhanced_user_id",
                Mi: "redact_ga_client_id",
                Ni: "redact_user_id",
                Nd: "referral_exclusion_definition",
                Nb: "restricted_data_processing",
                Oi: "retoken",
                wk: "sample_rate",
                ff: "screen_name",
                Cb: "screen_resolution",
                Pi: "search_term",
                Qa: "send_page_view",
                Ob: "send_to",
                Od: "server_container_url",
                Uc: "session_duration",
                Pd: "session_engaged",
                hf: "session_engaged_time",
                kb: "session_id",
                Qd: "session_number",
                Vc: "delivery_postal_code",
                Ig: "temporary_client_id",
                jf: "topmost_url",
                Qi: "tracking_id",
                kf: "traffic_type",
                ma: "transaction_id",
                Pb: "transport_url",
                Jg: "trip_type",
                qc: "update",
                lb: "url_passthrough",
                Sd: "_user_agent_architecture",
                Td: "_user_agent_bitness",
                Ud: "_user_agent_full_version_list",
                Vd: "_user_agent_mobile",
                Wd: "_user_agent_model",
                Xd: "_user_agent_platform",
                Yd: "_user_agent_platform_version",
                Zd: "_user_agent_wow64",
                na: "user_data",
                Kg: "user_data_auto_latency",
                Lg: "user_data_auto_meta",
                Mg: "user_data_auto_multi",
                Ng: "user_data_auto_selectors",
                Og: "user_data_auto_status",
                lf: "user_data_mode",
                ae: "user_data_settings",
                Ca: "user_id",
                Ra: "user_properties",
                Ri: "_user_region",
                Pg: "us_privacy_string",
                ba: "value",
                sc: "wbraid",
                Qg: "wbraid_multiple_conversions",
                Xi: "_host_name",
                Yi: "_in_page_command",
                Zi: "_is_passthrough_cid",
                ee: "non_personalized_ads",
                je: "_sst_parameters",
                fb: "conversion_label",
                wa: "page_location",
                yb: "global_developer_id_string",
                Rd: "tc_privacy_string"
            }
        },
        Jh = {},
        Kh = Object.freeze((Jh[P.g.aa] = 1, Jh[P.g.Ue] = 1, Jh[P.g.ud] = 1, Jh[P.g.vb] = 1, Jh[P.g.W] = 1, Jh[P.g.Na] = 1, Jh[P.g.Ga] = 1, Jh[P.g.Oa] = 1, Jh[P.g.ic] = 1, Jh[P.g.Mc] = 1, Jh[P.g.La] =
            1, Jh[P.g.hb] = 1, Jh[P.g.jc] = 1, Jh[P.g.X] = 1, Jh[P.g.lg] = 1, Jh[P.g.Qc] = 1, Jh[P.g.Ed] = 1, Jh[P.g.Fd] = 1, Jh[P.g.Gd] = 1, Jh[P.g.wg] = 1, Jh[P.g.jb] = 1, Jh[P.g.yg] = 1, Jh[P.g.Kd] = 1, Jh[P.g.cf] = 1, Jh[P.g.Lb] = 1, Jh[P.g.zb] = 1, Jh[P.g.Ba] = 1, Jh[P.g.ef] = 1, Jh[P.g.Nd] = 1, Jh[P.g.Nb] = 1, Jh[P.g.Qa] = 1, Jh[P.g.Ob] = 1, Jh[P.g.Od] = 1, Jh[P.g.Uc] = 1, Jh[P.g.hf] = 1, Jh[P.g.Vc] = 1, Jh[P.g.Pb] = 1, Jh[P.g.qc] = 1, Jh[P.g.ae] = 1, Jh[P.g.Ra] = 1, Jh[P.g.je] = 1, Jh));
    Object.freeze([P.g.wa, P.g.Ha, P.g.Bb, P.g.Aa, P.g.ff, P.g.Ca, P.g.af, P.g.vi]);
    var Lh = {},
        Mh = Object.freeze((Lh[P.g.ii] = 1, Lh[P.g.ji] = 1, Lh[P.g.ki] = 1, Lh[P.g.li] = 1, Lh[P.g.mi] = 1, Lh[P.g.ni] = 1, Lh[P.g.oi] = 1, Lh[P.g.ri] = 1, Lh[P.g.si] = 1, Lh[P.g.rd] = 1, Lh)),
        Nh = {},
        Oh = Object.freeze((Nh[P.g.fg] = 1, Nh[P.g.gg] = 1, Nh[P.g.Yb] = 1, Nh[P.g.Zb] = 1, Nh[P.g.hg] = 1, Nh[P.g.Hb] = 1, Nh[P.g.ac] = 1, Nh[P.g.ab] = 1, Nh[P.g.tb] = 1, Nh[P.g.cb] = 1, Nh[P.g.ra] = 1, Nh[P.g.bc] = 1, Nh[P.g.Ea] = 1, Nh[P.g.ig] = 1, Nh)),
        Ph = Object.freeze([P.g.aa, P.g.vb, P.g.hb]),
        Qh = Object.freeze([].concat(Ph)),
        Rh = Object.freeze([P.g.Ga, P.g.Fd, P.g.Uc, P.g.hf, P.g.Bd]),
        Sh = Object.freeze([].concat(Rh)),
        Th = {},
        Uh = (Th[P.g.H] = "1", Th[P.g.P] = "2", Th[P.g.Ma] = "3", Th[P.g.md] = "4", Th),
        Vh = {},
        Wh = Object.freeze((Vh[P.g.aa] = 1, Vh[P.g.ud] = 1, Vh[P.g.Fa] = 1, Vh[P.g.Ib] = 1, Vh[P.g.Ve] = 1, Vh[P.g.vd] = 1, Vh[P.g.wd] = 1, Vh[P.g.xd] = 1, Vh[P.g.W] = 1, Vh[P.g.yd] = 1, Vh[P.g.Ka] = 1, Vh[P.g.za] = 1, Vh[P.g.Na] = 1, Vh[P.g.Ga] = 1, Vh[P.g.Oa] = 1, Vh[P.g.La] = 1, Vh[P.g.sa] = 1, Vh[P.g.zd] = 1, Vh[P.g.X] = 1, Vh[P.g.zi] = 1, Vh[P.g.Cd] = 1, Vh[P.g.Dd] = 1, Vh[P.g.af] = 1, Vh[P.g.Gd] = 1, Vh[P.g.Lb] = 1, Vh[P.g.zb] = 1, Vh[P.g.Aa] = 1, Vh[P.g.Rc] = 1, Vh[P.g.wa] =
            1, Vh[P.g.Ha] = 1, Vh[P.g.Eg] = 1, Vh[P.g.Fg] = 1, Vh[P.g.Gg] = 1, Vh[P.g.Hg] = 1, Vh[P.g.Nb] = 1, Vh[P.g.Qa] = 1, Vh[P.g.Ob] = 1, Vh[P.g.Od] = 1, Vh[P.g.Vc] = 1, Vh[P.g.ma] = 1, Vh[P.g.Pb] = 1, Vh[P.g.qc] = 1, Vh[P.g.lb] = 1, Vh[P.g.na] = 1, Vh[P.g.Ca] = 1, Vh[P.g.ba] = 1, Vh)),
        Xh = {},
        Yh = Object.freeze((Xh[P.g.ek] = "s", Xh[P.g.gk] = "y", Xh[P.g.Zj] = "n", Xh[P.g.bk] = "c", Xh[P.g.dk] = "p", Xh[P.g.fk] = "h", Xh[P.g.Yj] = "a", Xh));
    Object.freeze(P.g);
    var Zh = {},
        $h = z.google_tag_manager = z.google_tag_manager || {},
        ai = Math.random();
    Zh.Xg = "3820";
    Zh.ie = Number("0") || 0;
    Zh.ja = "dataLayer";
    Zh.Wj = "ChEI8Oa3pgYQoaO4j/rW55GIARIkADOWHYLxO3zVtRNe52aJGPnpphR6VNAfPvuhKFy8Bs67pJh3GgLUiA\x3d\x3d";
    var bi = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        ci = {
            __paused: 1,
            __tg: 1
        },
        di;
    for (di in bi) bi.hasOwnProperty(di) && (ci[di] = 1);
    var ei = Pa(""),
        fi, gi = !1;
    fi = gi;
    var hi, ii = !1;
    hi = ii;
    var ji, ki = !1;
    ji = ki;
    var li, mi = !1;
    li = mi;
    Zh.Te = "www.googletagmanager.com";
    var ni = "" + Zh.Te + (fi ? "/gtag/js" : "/gtm.js"),
        oi = null,
        pi = null,
        qi = {},
        ri = {},
        si = {},
        ti = function() {
            var a = $h.sequence || 1;
            $h.sequence = a + 1;
            return a
        };
    Zh.Vj = "";
    var ui = "";
    Zh.uf = ui;
    var vi = new Ka,
        wi = {},
        xi = {},
        Ai = {
            name: Zh.ja,
            set: function(a, b) {
                J(ab(a, b), wi);
                yi()
            },
            get: function(a) {
                return zi(a, 2)
            },
            reset: function() {
                vi = new Ka;
                wi = {};
                yi()
            }
        },
        zi = function(a, b) {
            return 2 != b ? vi.get(a) : Bi(a)
        },
        Bi = function(a, b) {
            var c = a.split(".");
            b = b || [];
            for (var d = wi, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        Ci = function(a, b) {
            xi.hasOwnProperty(a) || (vi.set(a, b), J(ab(a, b), wi), yi())
        },
        Di = function() {
            for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist",
                    "gtm.blacklist", "tagTypeBlacklist"
                ], b = 0; b < a.length; b++) {
                var c = a[b],
                    d = zi(c, 1);
                if (Fa(d) || dd(d)) d = J(d);
                xi[c] = d
            }
        },
        yi = function(a) {
            l(xi, function(b, c) {
                vi.set(b, c);
                J(ab(b), wi);
                J(ab(b, c), wi);
                a && delete xi[b]
            })
        },
        Ei = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? Bi(a) : vi.get(a);
            "array" === bd(d) || "object" === bd(d) ? c = J(d) : c = d;
            return c
        };
    var R = [];
    R[5] = !0;
    R[6] = !0;
    R[12] = !0;
    R[7] = !0;
    R[8] = !0;
    R[22] = !0;
    R[9] = !0;
    R[10] = !0;
    R[11] = !0;
    R[14] = !0;
    R[15] = !0;
    R[16] = !0;
    R[18] = !0;
    R[24] = !0;
    R[25] = !0;
    R[26] = !0;
    R[28] = !0;
    R[29] = !0;
    R[32] = !0;
    R[33] = !0;
    R[34] = !0;
    R[35] = !0;
    R[37] = !0;
    R[38] = !0;
    R[40] = !0;
    R[42] = !0;
    R[43] = !0;
    R[44] = !0;
    R[45] = !0;
    R[46] = !0;
    R[57] = !0;
    R[58] = !0;
    R[59] = !0;
    R[60] = !0;
    R[62] = !0;
    R[63] = !0;
    R[68] = !0;
    R[69] = !0;
    R[70] = !0;
    R[72] = !0;
    R[74] = !0;
    R[76] = !0;
    R[77] = !0;
    R[79] = !0;
    R[80] = !0;
    R[82] = !0;
    R[83] = !0;
    R[84] = !0;
    a: {
        for (var Fi = void 0, Gi = void 0, Hi = 0; Fi === Gi;)
            if (Fi = Math.floor(2 * Math.random()), Gi = Math.floor(2 * Math.random()), Hi++, 20 < Hi) break a;Fi ? R[87] = !0 : R[88] = !0
    }
    T(88) ? We[6] = !0 : T(87) && (We[5] = !0);
    R[91] = !0;
    R[94] = !0;

    function T(a) {
        return !!R[a]
    }
    var Oi = function(a) {
        ub("HEALTH", a)
    };
    var Pi;
    try {
        Pi = JSON.parse(sb("eyIwIjoiSU4iLCIxIjoiSU4tS0wiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5pbiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6IiJ9"))
    } catch (a) {
        N(123), Oi(2), Pi = {}
    }
    var Qi = function() {
            return Pi["0"] || ""
        },
        Ri = function() {
            return Pi["1"] || ""
        },
        Si = function() {
            var a = !1;
            return a
        },
        Ti = function() {
            return !!Pi["6"]
        },
        Ui = function() {
            var a = "";
            return a
        },
        Vi = function() {
            var a = !1;
            a = !!Pi["5"];
            return a
        },
        Wi = function() {
            var a = "";
            return a
        };
    var Xi, Yi = !1;

    function Zi() {
        Yi = !0;
        Xi = productSettings, productSettings = void 0;
        Xi = Xi || {}
    }
    var $i = function(a) {
        Yi || Zi();
        return Xi[a]
    };
    var aj = function() {
            var a = z.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        bj = function(a) {
            if (F.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
            var c = z.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    g = e.filter;
                if (g) {
                    var k = g.indexOf("opacity(");
                    0 <= k && (g = g.substring(k + 8, g.indexOf(")", k)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = z.getComputedStyle(d, null))
            }
            return !1
        };
    var cj = function() {
            var a = F.body,
                b = F.documentElement || a && a.parentElement,
                c, d;
            if (F.compatMode && "BackCompat" !== F.compatMode) c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;
            else {
                var e = function(f, g) {
                    return f && g ? Math.min(f, g) : Math.max(f, g)
                };
                c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
                d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
            }
            return {
                width: d,
                height: c
            }
        },
        dj = function(a) {
            var b = cj(),
                c = b.height,
                d = b.width,
                e = a.getBoundingClientRect(),
                f = e.bottom - e.top,
                g = e.right - e.left;
            return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right -
                d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
        };
    var kj = /:[0-9]+$/,
        lj = /^\d+\.fls\.doubleclick\.net$/,
        mj = function(a, b, c, d) {
            for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
                var k = f[g].split("=");
                if (decodeURIComponent(k[0]).replace(/\+/g, " ") === b) {
                    var m = k.slice(1).join("=");
                    if (!c) return d ? m : decodeURIComponent(m).replace(/\+/g, " ");
                    e.push(d ? m : decodeURIComponent(m).replace(/\+/g, " "))
                }
            }
            return c ? e : void 0
        },
        pj = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = nj(a.protocol) || nj(z.location.protocol);
            "port" === b ? a.port =
                String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(kj, "").toLowerCase());
            return oj(a, b, c, d, e)
        },
        oj = function(a, b, c, d, e) {
            var f, g = nj(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = qj(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(kj, "").toLowerCase();
                    if (c) {
                        var k = /^www\d*\./.exec(f);
                        k && k[0] && (f = f.substr(k[0].length))
                    }
                    break;
                case "port":
                    f =
                        String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || ub("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = mj(f, e, !1));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        nj = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        qj = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        rj = function(a) {
            var b = F.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || ub("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(kj, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        sj = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n :
                    p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = rj(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                k = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === k[0] && (k = k.substring(1));
            g = c(g);
            k = c(k);
            "" !== g && (g = "?" + g);
            "" !== k && (k = "#" + k);
            var m = "" + f + g + k;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m
        },
        tj = function(a) {
            var b = rj(z.location.href),
                c = pj(b, "host", !1);
            if (c && c.match(lj)) {
                var d = pj(b,
                    "path").split(a + "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        };
    var vj = function(a, b, c) {
            var d = a.element,
                e = {
                    U: a.U,
                    type: a.ia,
                    tagName: d.tagName
                };
            b && (e.querySelector = uj(d));
            c && (e.isVisible = !bj(d));
            return e
        },
        wj = function(a, b, c) {
            return vj({
                element: a.element,
                U: a.U,
                ia: "1"
            }, b, c)
        },
        xj = function(a) {
            var b = !!a.wc + "." + !!a.xc;
            a && a.ad && a.ad.length && (b += "." + a.ad.join("."));
            a && a.Xa && (b += "." + a.Xa.email + "." + a.Xa.phone + "." + a.Xa.address);
            return b
        },
        Aj = function(a) {
            if (0 != a.length) {
                var b;
                b = yj(a, function(c) {
                    return !zj.test(c.U)
                });
                b = yj(b, function(c) {
                    return "INPUT" === c.element.tagName.toUpperCase()
                });
                b = yj(b, function(c) {
                    return !bj(c.element)
                });
                return b[0]
            }
        },
        Bj = function(a, b) {
            if (!b || 0 === b.length) return a;
            for (var c = [], d = 0; d < a.length; d++) {
                for (var e = !0, f = 0; f < b.length; f++) {
                    var g = b[f];
                    if (g && jh(a[d].element, g)) {
                        e = !1;
                        break
                    }
                }
                e && c.push(a[d])
            }
            return c
        },
        yj = function(a, b) {
            if (1 >= a.length) return a;
            var c = a.filter(b);
            return 0 == c.length ? a : c
        },
        uj = function(a) {
            var b;
            if (a === F.body) b = "body";
            else {
                var c;
                if (a.id) c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a: {
                            var f = a.parentElement;
                            if (f) {
                                for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] ===
                                        a) {
                                        e = g + 1;
                                        break a
                                    }
                                e = -1
                            } else e = 1
                        }
                        d = uj(a.parentElement) + ">:nth-child(" + e + ")"
                    } else d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        Dj = function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = d.textContent;
                "INPUT" === d.tagName.toUpperCase() && d.value && (e = d.value);
                if (e) {
                    var f = e.match(Cj);
                    if (f) {
                        var g = f[0],
                            k;
                        if (z.location) {
                            var m = oj(z.location, "host", !0);
                            k = 0 <= g.toLowerCase().indexOf(m)
                        } else k = !1;
                        k || b.push({
                            element: d,
                            U: g
                        })
                    }
                }
            }
            return b
        },
        Hj = function() {
            var a = [],
                b = F.body;
            if (!b) return {
                elements: a,
                status: "4"
            };
            for (var c = b.querySelectorAll("*"),
                    d = 0; d < c.length && 1E4 > d; d++) {
                var e = c[d];
                if (!(0 <= Ej.indexOf(e.tagName.toUpperCase())) && e.children instanceof HTMLCollection) {
                    for (var f = !1, g = 0; g < e.childElementCount && 1E4 > g; g++)
                        if (!(0 <= Fj.indexOf(e.children[g].tagName.toUpperCase()))) {
                            f = !0;
                            break
                        }(!f || T(56) && -1 !== Gj.indexOf(e.tagName)) && a.push(e)
                }
            }
            return {
                elements: a,
                status: 1E4 < c.length ? "2" : "1"
            }
        },
        Ij = !0,
        Jj = !1;
    var Cj = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
        Kj = /@(gmail|googlemail)\./i,
        zj = /support|noreply/i,
        Ej = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
        Fj = ["BR"],
        Lj = {
            Jm: "1",
            Rm: "2",
            Km: "3",
            Mm: "4",
            Hm: "5",
            Sm: "6",
            Nm: "7"
        },
        Mj = {},
        Gj = ["INPUT", "SELECT"];
    var fk = function(a) {
            a = a || {
                wc: !0,
                xc: !0
            };
            a.Xa = a.Xa || {
                email: !0,
                phone: !1,
                address: !1
            };
            var b = xj(a),
                c = Mj[b];
            if (c && 200 > Ta() - c.timestamp) return c.result;
            var d = Hj(),
                e = d.status,
                f = [],
                g, k, m = [];
            if (!T(56)) {
                if (a.Xa && a.Xa.email) {
                    var n = Dj(d.elements);
                    f = Bj(n, a && a.ad);
                    g = Aj(f);
                    10 < n.length && (e = "3")
                }!a.Tf && g && (f = [g]);
                for (var p = 0; p < f.length; p++) m.push(wj(f[p], a.wc, a.xc));
                m = m.slice(0, 10)
            } else if (a.Xa) {}
            g && (k = wj(g, a.wc, a.xc));
            var C = {
                elements: m,
                Me: k,
                status: e
            };
            Mj[b] = {
                timestamp: Ta(),
                result: C
            };
            return C
        },
        gk = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.U.length + ":" + Kj.test(a.U)
        };
    var hk = function(a, b, c) {
            if (!c) return !1;
            var d = c.selector_type,
                e = String(c.value),
                f;
            if ("js_variable" === d) {
                e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                for (var g = e.split(","), k = 0; k < g.length; k++) {
                    var m = g[k].trim();
                    if (m) {
                        if (0 === m.indexOf("dataLayer.")) f = zi(m.substring(10));
                        else {
                            var n = m.split(".");
                            f = z[n.shift()];
                            for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                        }
                        if (void 0 !== f) break
                    }
                }
            } else if ("css_selector" === d && hh) {
                var q = ih(e);
                if (q && 0 < q.length) {
                    f = [];
                    for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++) f.push(Fc(q[r]) ||
                        Ra(q[r].value));
                    f = 1 === f.length ? f[0] : f
                }
            }
            return f ? (a[b] = f, !0) : !1
        },
        ik = function(a) {
            if (a) {
                var b = {},
                    c = !1;
                c = hk(b, "email", a.email) || c;
                c = hk(b, "phone_number", a.phone) || c;
                b.address = [];
                for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
                    var f = {};
                    c = hk(f, "first_name", d[e].first_name) || c;
                    c = hk(f, "last_name", d[e].last_name) || c;
                    c = hk(f, "street", d[e].street) || c;
                    c = hk(f, "city", d[e].city) || c;
                    c = hk(f, "region", d[e].region) || c;
                    c = hk(f, "country", d[e].country) || c;
                    c = hk(f, "postal_code", d[e].postal_code) || c;
                    b.address.push(f)
                }
                return c ?
                    b : void 0
            }
        },
        jk = function(a) {
            return dd(a) ? !!a.enable_code : !1
        };
    var kk = function(a) {
            var b = a && a[P.g.og];
            return b && b[P.g.ui]
        },
        lk = function() {
            return -1 !== qc.userAgent.toLowerCase().indexOf("firefox")
        },
        mk = function(a) {
            if (a && a.length) {
                for (var b = [], c = 0; c < a.length; ++c) {
                    var d = a[c];
                    d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) :
                        b.push("")
                }
                return b.join(",")
            }
        };
    var nk = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var ok = function(a) {
        ok[" "](a);
        return a
    };
    ok[" "] = function() {};
    var qk = function() {
        var a = pk,
            b = "rh";
        if (a.rh && a.hasOwnProperty(b)) return a.rh;
        var c = new a;
        return a.rh = c
    };
    var pk = function() {
        var a = {};
        this.h = function() {
            var b = nk.h,
                c = nk.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.B = function() {
            a[nk.h] = !0
        }
    };
    var rk = !1,
        sk = !1,
        tk = [],
        uk = {},
        vk = {},
        wk = !1,
        xk = {
            ad_storage: !1,
            ad_user_data: !1,
            ad_personalization: !1
        };

    function yk() {
        var a = sc("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            cps: {},
            default: zk,
            update: Ak,
            declare: Bk,
            implicit: Ck,
            addListener: Dk,
            notifyListeners: Ek,
            setCps: Fk,
            active: !1,
            usedDeclare: !1,
            usedDefault: !1,
            usedUpdate: !1,
            usedImplicit: !1,
            usedSetCps: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function Gk(a, b, c, d) {
        return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b
    }

    function Bk(a, b, c, d, e) {
        var f = yk();
        f.active = !0;
        f.usedDeclare = !0;
        var g = f.entries,
            k = g[a] || {},
            m = k.declare_region,
            n = c && h(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (Gk(n, m, d, e)) {
            var p = {
                region: k.region,
                declare_region: n,
                declare: "granted" === b,
                implicit: k.implicit,
                default: k.default,
                update: k.update,
                quiet: k.quiet
            };
            if ("" !== d || !1 !== k.declare) g[a] = p
        }
    }

    function Ck(a, b) {
        var c = yk();
        c.active = !0;
        c.usedImplicit = !0;
        var d = c.entries,
            e = d[a] = d[a] || {};
        !1 !== e.implicit && (e.implicit = "granted" === b)
    }

    function zk(a, b, c, d, e, f) {
        var g = yk();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        ub("TAGGING", 19);
        if (void 0 == b) ub("TAGGING", 18);
        else {
            var k = g.entries,
                m = k[a] || {},
                n = m.region,
                p = c && h(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if (Gk(p, n, d, e)) {
                var q = !!(f && 0 < f && void 0 === m.update),
                    r = {
                        region: p,
                        declare_region: m.declare_region,
                        implicit: m.implicit,
                        default: "granted" === b,
                        declare: m.declare,
                        update: m.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== m.default) k[a] =
                    r;
                q && z.setTimeout(function() {
                    if (k[a] === r && r.quiet) {
                        r.quiet = !1;
                        var t = [a];
                        if (Xe(4))
                            for (var u in uk) uk.hasOwnProperty(u) && uk[u] === a && t.push(u);
                        for (var v = 0; v < t.length; v++) Hk(t[v]);
                        Ek();
                        ub("TAGGING", 2)
                    }
                }, f)
            }
        }
    }

    function Ak(a, b) {
        var c = yk();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = Ik(c, a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Ik(c, a),
                k = [a];
            if (Xe(4))
                for (var m in uk) uk.hasOwnProperty(m) && uk[m] === a && k.push(m);
            if (f.quiet) {
                f.quiet = !1;
                for (var n = 0; n < k.length; n++) Hk(k[n])
            } else if (g !== d)
                for (var p = 0; p < k.length; p++) Hk(k[p])
        }
    }

    function Jk(a, b, c, d, e, f) {
        var g = a[b] || {},
            k = g.region,
            m = d && h(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (Gk(m, k, e, f)) {
            var n = {
                enabled: "granted" === c,
                region: m
            };
            if ("" !== e || !1 !== g.enabled) return a[b] = n, !0
        }
        return !1
    }

    function Fk(a, b, c, d, e) {
        var f = yk();
        Jk(f.cps, a, b, c, d, e) && (f.usedSetCps = !0)
    }

    function Dk(a, b) {
        tk.push({
            consentTypes: a,
            al: b
        })
    }

    function Hk(a) {
        for (var b = 0; b < tk.length; ++b) {
            var c = tk[b];
            Fa(c.consentTypes) && -1 !== c.consentTypes.indexOf(a) && (c.Dj = !0)
        }
    }

    function Ek(a, b) {
        for (var c = 0; c < tk.length; ++c) {
            var d = tk[c];
            if (d.Dj) {
                d.Dj = !1;
                try {
                    d.al({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }

    function Ik(a, b) {
        var c = a.entries,
            d = c[b] || {},
            e = d.update;
        if (void 0 !== e) return e ? 1 : 2;
        e = d.default;
        if (void 0 !== e) return e ? 1 : 2;
        if (Xe(4) && uk.hasOwnProperty(b)) {
            var f = c[uk[b]] || {};
            e = f.update;
            if (void 0 !== e) return e ? 1 : 2;
            e = f.default;
            if (void 0 !== e) return e ? 1 : 2
        }
        e = d.declare;
        if (void 0 !== e) return e ? 1 : 2;
        if (Xe(3)) {
            e = d.implicit;
            if (void 0 !== e) return e ? 3 : 4;
            if (xk.hasOwnProperty(b)) return xk[b] ? 3 : 4
        }
        return 0
    }
    var Kk = function(a) {
            var b = yk();
            b.accessedAny = !0;
            switch (Ik(b, a)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                case 4:
                    return !1;
                default:
                    return !0
            }
        },
        Lk = function(a) {
            var b = yk();
            b.accessedDefault = !0;
            switch ((b.entries[a] || {}).default) {
                case !0:
                    return 3;
                case !1:
                    return 2;
                default:
                    return 1
            }
        },
        Mk = function(a) {
            var b = yk();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        Nk = function() {
            if (!qk().h()) return !1;
            var a = yk();
            a.accessedAny = !0;
            return a.active
        },
        Ok = function() {
            var a = yk();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        Pk = function(a,
            b) {
            yk().addListener(a, b)
        },
        Qk = function(a, b) {
            yk().notifyListeners(a, b)
        },
        Rk = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Mk(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Pk(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Sk = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var k = d[g];
                    Kk(k) && !e[k] && (f.push(k), e[k] = !0)
                }
                return f
            }
            var d = h(b) ? [b] : b,
                e = {};
            c().length !== d.length && Pk(d, function(f) {
                var g = c();
                0 < g.length && (f.consentTypes = g, a(f))
            })
        };

    function Tk() {}

    function Uk() {};
    var Vk = [P.g.H, P.g.P, P.g.Ma, P.g.md],
        Wk = function(a) {
            for (var b = a[P.g.Va], c = Array.isArray(b) ? b : [b], d = {
                    Ae: 0
                }; d.Ae < c.length; d = {
                    Ae: d.Ae
                }, ++d.Ae) l(a, function(e) {
                return function(f, g) {
                    if (f !== P.g.Va) {
                        var k = c[e.Ae],
                            m = Qi(),
                            n = Ri();
                        sk = !0;
                        rk && ub("TAGGING", 20);
                        yk().declare(f, g, k, m, n)
                    }
                }
            }(d))
        },
        Xk = function(a) {
            var b = a[P.g.Va];
            b && N(40);
            var c = a[P.g.od];
            c && N(41);
            for (var d = Fa(b) ? b : [b], e = {
                    Be: 0
                }; e.Be < d.length; e = {
                    Be: e.Be
                }, ++e.Be) l(a, function(f) {
                return function(g, k) {
                    if (g !== P.g.Va && g !== P.g.od) {
                        var m = d[f.Be],
                            n = Number(c),
                            p = Qi(),
                            q = Ri();
                        rk = !0;
                        sk && ub("TAGGING", 20);
                        yk().default(g, k, m, p, q, n)
                    }
                }
            }(e))
        },
        Yk = function(a, b) {
            l(a, function(c, d) {
                rk = !0;
                sk && ub("TAGGING", 20);
                yk().update(c, d)
            });
            Qk(b.eventId, b.priorityId)
        },
        Zk = function(a) {
            for (var b = a[P.g.Va], c = Array.isArray(b) ? b : [b], d = {
                    Ce: 0
                }; d.Ce < c.length; d = {
                    Ce: d.Ce
                }, ++d.Ce) l(a, function(e) {
                return function(f, g) {
                    if (f !== P.g.Va) {
                        var k = c[e.Ce],
                            m = Qi(),
                            n = Ri();
                        yk().setCps(f, g, k, m, n)
                    }
                }
            }(d))
        },
        $k = function(a) {
            for (var b = a[P.g.Va], c = Array.isArray(b) ? b : [b], d = {
                    dd: 0
                }; d.dd < c.length; d = {
                    dd: d.dd
                }, ++d.dd) a.hasOwnProperty(P.g.dg) &&
                l(Yh, function(e) {
                    return function(f) {
                        Jk(vk, f, a[P.g.dg], c[e.dd], Qi(), Ri()) && (wk = !0)
                    }
                }(d)), l(a, function(e) {
                    return function(f, g) {
                        f !== P.g.Va && f !== P.g.dg && Jk(vk, f, g, c[e.dd], Qi(), Ri()) && (wk = !0)
                    }
                }(d))
        },
        al = function(a) {
            Array.isArray(a) || (a = [a]);
            return a.every(function(b) {
                return Kk(b)
            })
        },
        bl = function() {
            return Ti() || yk().usedSetCps || !al(P.g.Ma)
        },
        cl = function(a, b) {
            Pk(a, b)
        },
        dl = function(a, b) {
            Sk(a, b)
        },
        el = function(a, b) {
            Rk(a, b)
        };
    var fl = function(a) {
            var b = String(a[Ae.xa] || "").replace(/_/g, "");
            0 === b.indexOf("cvt") && (b = "cvt");
            return b
        },
        gl = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
    var il = function(a, b) {
            var c = hl();
            c.pending || (c.pending = []);
            Ga(c.pending, function(d) {
                return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
            }) || c.pending.push({
                target: a,
                onLoad: b
            })
        },
        jl = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {};
            this.pending = [];
            this.siloed = []
        },
        hl = function() {
            var a = sc("google_tag_data", {}),
                b = a.tidr;
            b || (b = new jl, a.tidr = b);
            return b
        };
    var kl = {},
        ll = !1,
        Ef = {
            ctid: "GTM-NBS8LRM",
            eh: "9001196",
            Of: "GTM-NBS8LRM",
            Cj: "GTM-NBS8LRM"
        };
    kl.pf = Pa("");
    var nl = function() {
            var a = Ef.Of ? Ef.Of.split("|") : [Ef.ctid];
            return ll ? a.map(ml) : a
        },
        pl = function() {
            var a = ol();
            return ll ? a.map(ml) : a
        },
        rl = function() {
            return ql(Ef.ctid)
        },
        sl = function() {
            return ql(Ef.eh || "_" + Ef.ctid)
        },
        ol = function() {
            return Ef.Cj ? Ef.Cj.split("|") : []
        },
        tl = function(a) {
            var b = hl();
            return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
        },
        ql = function(a) {
            return ll ? ml(a) : a
        },
        ml = function(a) {
            return "siloed_" + a
        },
        ul = function(a) {
            a = String(a);
            return ll && 0 === a.indexOf("siloed_") ? a.substring(7) : a
        },
        vl = function() {
            var a = !1;
            if (a) {
                var b = hl();
                if (b.siloed) {
                    for (var c = [], d = Ef.Of ? Ef.Of.split("|") : [Ef.ctid], e = ol(), f = {}, g = 0; g < b.siloed.length; f = {
                            pe: f.pe
                        }, g++) f.pe = b.siloed[g], !ll && Ga(f.pe.isDestination ? e : d, function(k) {
                        return function(m) {
                            return m === k.pe.ctid
                        }
                    }(f)) ? ll = !0 : c.push(f.pe);
                    b.siloed = c
                }
            }
        };

    function wl() {
        var a = hl();
        if (a.pending) {
            for (var b, c = [], d = !1, e = nl(), f = pl(), g = {}, k = 0; k < a.pending.length; g = {
                    gd: g.gd
                }, k++) g.gd = a.pending[k], Ga(g.gd.target.isDestination ? f : e, function(m) {
                return function(n) {
                    return n === m.gd.target.ctid
                }
            }(g)) ? d || (b = g.gd.onLoad, d = !0) : c.push(g.gd);
            a.pending = c;
            if (b) try {
                b(sl())
            } catch (m) {}
        }
    }
    var xl = function() {
            for (var a = hl(), b = nl(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                d ? (d.state = 2, d.containers = nl(), d.destinations = pl()) : a.container[b[c]] = {
                    state: 2,
                    containers: nl(),
                    destinations: pl()
                }
            }
            for (var e = pl(), f = 0; f < e.length; f++) {
                var g = a.destination[e[f]];
                g && 0 === g.state && N(93);
                g ? (g.state = 2, g.containers = nl(), g.destinations = pl()) : a.destination[e[f]] = {
                    state: 2,
                    containers: nl(),
                    destinations: pl()
                }
            }
            a.canonical[sl()] = {};
            wl()
        },
        yl = function(a) {
            return !!hl().container[a]
        },
        zl = function() {
            return {
                ctid: rl(),
                isDestination: kl.pf
            }
        };

    function Al(a) {
        var b = hl();
        (b.siloed = b.siloed || []).push(a)
    }
    var Bl = function() {
            var a = hl().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
            return !1
        },
        Cl = function() {
            var a = {};
            l(hl().destination, function(b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        },
        Dl = function(a) {
            return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"))
        };
    var El = {
            sampleRate: "0.005000",
            Rj: "",
            Qj: Number("5"),
            bn: Number("")
        },
        Fl = [];

    function Gl(a) {
        Fl.push(a)
    }
    var Hl = !1,
        Il;
    if (!(Il = gl)) {
        var Jl = Math.random(),
            Kl = El.sampleRate;
        Il = Jl < Number(Kl)
    }
    var Ll = Il,
        Ml = "https://www.googletagmanager.com/a?id=" + Ef.ctid,
        Nl = void 0,
        Ol = {},
        Pl = void 0,
        Ql = new function() {
            var a = 5;
            0 < El.Qj && (a = El.Qj);
            this.h = 0;
            this.C = [];
            this.B = a
        },
        Rl = 1E3;

    function Sl(a, b) {
        var c = Nl;
        if (void 0 === c)
            if (b) c = ti();
            else return "";
        for (var d = [Ml], e = 0; e < Fl.length; e++) {
            var f = Fl[e]({
                eventId: c,
                Xb: !!a,
                Kj: function() {
                    Hl = !0
                }
            });
            "&" === f[0] && d.push(f)
        }
        d.push("&z=0");
        return d.join("")
    }

    function Tl() {
        Pl && (z.clearTimeout(Pl), Pl = void 0);
        if (void 0 !== Nl && Ul) {
            var a;
            (a = Ol[Nl]) || (a = Ql.h < Ql.B ? !1 : 1E3 > Ta() - Ql.C[Ql.h % Ql.B]);
            if (a || 0 >= Rl--) N(1), Ol[Nl] = !0;
            else {
                var b = Ql.h++ % Ql.B;
                Ql.C[b] = Ta();
                var c = Sl(!0);
                Bc(c);
                if (Hl) {
                    var d = c.replace("/a?", "/td?");
                    Bc(d)
                }
                Ul = Hl = !1
            }
        }
    }
    var Ul = !1;

    function Vl(a) {
        Ol[a] || (a !== Nl && (Tl(), Nl = a), Ul = !0, Pl || (Pl = z.setTimeout(Tl, 500)), 2022 <= Sl().length && Tl())
    }
    var Wl = Ja();

    function Xl() {
        Wl = Ja()
    }

    function Yl() {
        return ["&v=3&t=t", "&pid=" + Wl].join("")
    };
    var Zl = function(a, b, c, d, e, f, g, k, m, n, p, q) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.M = d;
            this.C = e;
            this.D = f;
            this.R = g;
            this.B = k;
            this.eventMetadata = m;
            this.onSuccess = n;
            this.onFailure = p;
            this.isGtmEvent = q
        },
        U = function(a, b, c) {
            if (void 0 !== a.h[b]) return a.h[b];
            if (void 0 !== a.M[b]) return a.M[b];
            if (void 0 !== a.C[b]) return a.C[b];
            Ll && $l(a, a.D[b], a.R[b]) && (N(71), N(79));
            return void 0 !== a.D[b] ? a.D[b] : void 0 !== a.B[b] ? a.B[b] : c
        },
        am = function(a) {
            function b(g) {
                for (var k = Object.keys(g), m = 0; m < k.length; ++m) c[k[m]] = 1
            }
            var c = {};
            b(a.h);
            b(a.M);
            b(a.C);
            b(a.D);
            if (Ll)
                for (var d = Object.keys(a.R), e = 0; e < d.length; e++) {
                    var f = d[e];
                    if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                        N(71);
                        N(80);
                        break
                    }
                }
            return Object.keys(c)
        },
        bm = function(a, b, c) {
            function d(m) {
                dd(m) && l(m, function(n, p) {
                    f = !0;
                    e[n] = p
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.B[b]), d(a.D[b]), d(a.C[b]), d(a.M[b]));
            c && 2 !== c || d(a.h[b]);
            if (Ll) {
                var g = f,
                    k = e;
                e = {};
                f = !1;
                c && 1 !== c || (d(a.B[b]), d(a.R[b]), d(a.C[b]), d(a.M[b]));
                c && 2 !== c || d(a.h[b]);
                if (f !== g || $l(a, e, k)) N(71), N(81);
                f = g;
                e = k
            }
            return f ? e : void 0
        },
        cm = function(a) {
            var b = [P.g.Ic, P.g.Ec, P.g.Fc, P.g.Gc, P.g.Hc, P.g.Jc, P.g.Kc],
                c = {},
                d = !1,
                e = function(k) {
                    for (var m = 0; m < b.length; m++) void 0 !== k[b[m]] && (c[b[m]] = k[b[m]], d = !0);
                    return d
                };
            if (e(a.h) || e(a.M) || e(a.C)) return c;
            e(a.D);
            if (Ll) {
                var f = c,
                    g = d;
                c = {};
                d = !1;
                e(a.R);
                $l(a, c, f) && (N(71), N(82));
                c = f;
                d = g
            }
            if (d) return c;
            e(a.B);
            return c
        },
        $l = function(a, b, c) {
            if (!Ll) return !1;
            try {
                if (b === c) return !1;
                var d = bd(b);
                if (d !== bd(c) || !(dd(b) && dd(c) || "array" === d)) return !0;
                if ("array" === d) {
                    if (b.length !== c.length) return !0;
                    for (var e = 0; e < b.length; e++)
                        if ($l(a, b[e], c[e])) return !0
                } else {
                    for (var f in c)
                        if (!b.hasOwnProperty(f)) return !0;
                    for (var g in b)
                        if (!c.hasOwnProperty(g) || $l(a, b[g], c[g])) return !0
                }
            } catch (k) {
                N(72)
            }
            return !1
        },
        dm = function(a, b) {
            this.Tg = a;
            this.zk = b;
            this.D = {};
            this.de = {};
            this.h = {};
            this.M = {};
            this.B = {};
            this.ce = {};
            this.C = {};
            this.pd = function() {};
            this.sb = function() {};
            this.R = !1
        },
        em = function(a, b) {
            a.D = b;
            return a
        },
        fm = function(a, b) {
            a.de = b;
            return a
        },
        gm = function(a, b) {
            a.h = b;
            return a
        },
        hm = function(a, b) {
            a.M = b;
            return a
        },
        im = function(a,
            b) {
            a.B = b;
            return a
        },
        jm = function(a, b) {
            a.ce = b;
            return a
        },
        km = function(a, b) {
            a.C = b || {};
            return a
        },
        lm = function(a, b) {
            a.pd = b;
            return a
        },
        mm = function(a, b) {
            a.sb = b;
            return a
        },
        nm = function(a, b) {
            a.R = b;
            return a
        },
        om = function(a) {
            return new Zl(a.Tg, a.zk, a.D, a.de, a.h, a.M, a.B, a.ce, a.C, a.pd, a.sb, a.R)
        };
    var pm = [P.g.H, P.g.P],
        qm = [P.g.H, P.g.P, P.g.Ma, P.g.md],
        rm = {},
        sm = (rm[P.g.H] = 1, rm[P.g.P] = 2, rm);

    function tm(a) {
        switch (U(a, P.g.aa)) {
            case void 0:
                return 1;
            case !1:
                return 3;
            default:
                return 2
        }
    }
    var um = function(a) {
            var b = 3 !== tm(a);
            T(75) && (b = b && Kk(P.g.md));
            return b
        },
        vm = function() {
            var a = {},
                b;
            for (b in sm)
                if (sm.hasOwnProperty(b)) {
                    var c = sm[b],
                        d, e = yk();
                    e.accessedAny = !0;
                    d = Ik(e, b);
                    a[c] = d
                }
            var f = T(54) && pm.every(Kk),
                g = T(49);
            return f || g ? ze(a, 1) : ze(a, 0)
        },
        wm = {},
        xm = (wm[P.g.H] = 0, wm[P.g.P] = 1, wm[P.g.Ma] = 2, wm[P.g.md] = 3, wm);

    function ym(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }
    var zm = function(a) {
            if (T(51)) {
                for (var b = "1", c = 0; c < qm.length; c++) {
                    var d = b,
                        e, f = qm[c],
                        g = uk[f];
                    e = void 0 === g ? 0 : xm.hasOwnProperty(g) ? 12 | xm[g] : 8;
                    var k = yk();
                    k.accessedAny = !0;
                    var m = k.entries[f] || {};
                    e = e << 2 | ym(m.implicit);
                    b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [ym(m.declare) << 4 | ym(m.default) << 2 | ym(m.update)])
                }
                void 0 !== a && (b += tm(a));
                return b
            }
            for (var n = "G1", p = 0; p < pm.length; p++) switch (Lk(pm[p])) {
                case 3:
                    n += "1";
                    break;
                case 2:
                    n += "0";
                    break;
                case 1:
                    n += "-"
            }
            return n
        },
        Am = function() {
            if (!Kk(P.g.Ma)) return "-";
            var a = yk(),
                b = wk,
                c = a.cps,
                d = a.usedSetCps,
                e = [];
            if (b && d)
                for (var f in vk) vk.hasOwnProperty(f) && vk[f].enabled && c.hasOwnProperty(f) && c[f].enabled && e.push(f);
            else {
                var g = b ? vk : c,
                    k;
                for (k in g) g.hasOwnProperty(k) && g[k].enabled && e.push(k)
            }
            for (var m = "", n = 0; n < e.length; n++) {
                var p = Yh[e[n]];
                p && (m += p)
            }
            return "" === m ? "-" : m
        };
    var Bm = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var Cm = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                k = g[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var Dm = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        Em = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };

    function Fm(a) {
        return "null" !== a.origin
    };
    var Rm = function(a, b, c, d) {
            return Pm(d) ? Cm(a, String(b || Qm()), c) : []
        },
        Um = function(a, b, c, d, e) {
            if (Pm(e)) {
                var f = Sm(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Tm(f, function(g) {
                        return g.Bf
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Tm(f, function(g) {
                        return g.Ke
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Vm(a, b, c, d) {
        var e = Qm(),
            f = window;
        Fm(f) && (f.document.cookie = a);
        var g = Qm();
        return e != g || void 0 != c && 0 <= Rm(b, g, !1, d).indexOf(c)
    }
    var Zm = function(a, b, c, d) {
            function e(w, x, y) {
                if (null == y) return delete k[x], w;
                k[x] = y;
                return w + "; " + x + "=" + y
            }

            function f(w, x) {
                if (null == x) return delete k[x], w;
                k[x] = !0;
                return w + "; " + x
            }
            if (!Pm(c.Gb)) return 2;
            var g;
            void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Wm(b), g = a + "=" + b);
            var k = {};
            g = e(g, "path", c.path);
            var m;
            c.expires instanceof Date ? m = c.expires.toUTCString() : null != c.expires && (m = "" + c.expires);
            g = e(g, "expires", m);
            g = e(g, "max-age", c.Ql);
            g = e(g, "samesite",
                c.mm);
            c.qm && (g = f(g, "secure"));
            var n = c.domain;
            if (n && "auto" === n.toLowerCase()) {
                for (var p = Xm(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
                    var u = "none" !== p[t] ? p[t] : void 0,
                        v = e(g, "domain", u);
                    v = f(v, c.flags);
                    try {
                        d && d(a, k)
                    } catch (w) {
                        q = w;
                        continue
                    }
                    r = !0;
                    if (!Ym(u, c.path) && Vm(v, a, b, c.Gb)) return 0
                }
                if (q && !r) throw q;
                return 1
            }
            n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
            g = f(g, c.flags);
            d && d(a, k);
            return Ym(n, c.path) ? 1 : Vm(g, a, b, c.Gb) ? 0 : 1
        },
        $m = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Zm(a,
                b, c)
        };

    function Tm(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var k = a[g],
                m = b(k);
            m === c ? d.push(k) : void 0 === f || m < f ? (e = [k], f = m) : m === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function Sm(a, b, c) {
        for (var d = [], e = Rm(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                k = g.shift();
            if (!b || -1 !== b.indexOf(k)) {
                var m = g.shift();
                m && (m = m.split("-"), d.push({
                    id: g.join("."),
                    Bf: 1 * m[0] || 1,
                    Ke: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var Wm = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        an = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        bn = /(^|\.)doubleclick\.net$/i,
        Ym = function(a, b) {
            return bn.test(window.document.location.hostname) || "/" === b && an.test(a)
        },
        Qm = function() {
            return Fm(window) ? window.document.cookie : ""
        },
        Xm = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            bn.test(e) || an.test(e) || a.push("none");
            return a
        },
        Pm = function(a) {
            return qk().h() && a && Nk() ? Mk(a) ? Kk(a) : !1 : !0
        };
    var cn = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ Bm(a) & 2147483647) : String(b)
        },
        dn = function(a) {
            return [cn(a), Math.round(Ta() / 1E3)].join(".")
        },
        gn = function(a, b, c, d, e) {
            var f = en(b);
            return Um(a, f, fn(c), d, e)
        },
        hn = function(a, b, c, d) {
            var e = "" + en(c),
                f = fn(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        en = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        fn = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };
    var jn = function() {
        $h.dedupe_gclid || ($h.dedupe_gclid = "" + dn());
        return $h.dedupe_gclid
    };
    var kn = function() {
        var a = !1;
        return a
    };
    var ln = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        mn = function(a) {
            var b = Ef.ctid.split("-")[0].toUpperCase(),
                c = {};
            c.ctid = Ef.ctid;
            c.im = Zh.ie;
            c.lm = Zh.Xg;
            c.Nl = kl.pf ? 2 : 1;
            fi ? (c.Sf = ln[b], c.Sf || (c.Sf = 0)) : c.Sf = li ? 13 : 10;
            ji ? c.Eh = 1 : kn() ? c.Eh = 2 : c.Eh = 3;
            var d;
            var e = c.Sf,
                f = c.Eh;
            void 0 === e ? d = "" : (f || (f = 0), d = "" + tg(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e << 2 | f]);
            var g = c.Vm,
                k = 4 + d + (g ? "" + tg(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [g] : ""),
                m, n = c.lm;
            m = n &&
                sg.test(n) ? "" + tg(3, 2) + n : "";
            var p, q = c.im;
            p = q ? "" + tg(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [q] : "";
            var r;
            var t = c.ctid;
            if (t && a) {
                var u = t.split("-"),
                    v = u[0].toUpperCase();
                if ("GTM" !== v && "OPT" !== v) r = "";
                else {
                    var w = u[1];
                    r = "" + tg(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [1 + w.length] + (c.Nl || 0) + w
                }
            } else r = "";
            return k + m + p + r
        };

    function nn(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var on = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function pn() {
        return Ib ? !!Pb && !!Pb.platform : !1
    }

    function qn() {
        return Sb("iPhone") && !Sb("iPod") && !Sb("iPad")
    }

    function rn() {
        qn() || Sb("iPad") || Sb("iPod")
    };
    Ub();
    Tb() || Sb("Trident") || Sb("MSIE");
    Sb("Edge");
    !Sb("Gecko") || -1 != Ob().toLowerCase().indexOf("webkit") && !Sb("Edge") || Sb("Trident") || Sb("MSIE") || Sb("Edge"); - 1 != Ob().toLowerCase().indexOf("webkit") && !Sb("Edge") && Sb("Mobile");
    pn() || Sb("Macintosh");
    pn() || Sb("Windows");
    (pn() ? "Linux" === Pb.platform : Sb("Linux")) || pn() || Sb("CrOS");
    var sn = qa.navigator || null;
    sn && (sn.appVersion || "").indexOf("X11");
    pn() || Sb("Android");
    qn();
    Sb("iPad");
    Sb("iPod");
    rn();
    Ob().toLowerCase().indexOf("kaios");
    var tn = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (38 == g || 63 == g) {
                    var k = a.charCodeAt(e + f);
                    if (!k || 61 == k || 38 == k || 35 == k) return e
                }
                e += f + 1
            }
            return -1
        },
        un = /#|$/,
        vn = function(a, b) {
            var c = a.search(un),
                d = tn(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        wn = /[?&]($|#)/,
        xn = function(a, b, c) {
            for (var d, e = a.search(un), f = 0, g, k = []; 0 <= (g = tn(a, f, b, e));) k.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            k.push(a.slice(f));
            d = k.join("").replace(wn, "$1");
            var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                0 > r && (r = d.length);
                var t = d.indexOf("?"),
                    u;
                0 > t || t > r ? (t = r, u = "") : u = d.substring(t + 1, r);
                q = [d.slice(0, t), u, d.slice(r)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var yn = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        ok(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        zn = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        };

    function An(a) {
        if (!a || !F.head) return null;
        var b = Bn("META");
        F.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var Cn = function() {
            if (z.top == z) return 0;
            var a = z.location.ancestorOrigins;
            return a ? a[a.length - 1] == z.location.origin ? 1 : 2 : yn(z.top) ? 1 : 2
        },
        Bn = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function Dn(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = Bn("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        k = xb(g, e);
                    0 <= k && Array.prototype.splice.call(g, k, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            on(e, "load", f);
            on(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Fn = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            zn(a, function(d, e) {
                if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            En(c, b)
        },
        En = function(a, b) {
            var c = window,
                d;
            b = void 0 === b ? !1 : b;
            d = void 0 === d ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
                        eventSourceEligible: "true",
                        triggerEligible: "false"
                    } :
                    e.headers = {
                        "Attribution-Reporting-Eligible": "event-source"
                    });
                c.fetch(a, e)
            } else Dn(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var Gn = function() {};
    var Hn = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        In = function(a, b) {
            b = void 0 === b ? {} : b;
            this.B = a;
            this.h = null;
            this.M = {};
            this.sb = 0;
            var c;
            this.R = null != (c = b.Bm) ? c : 500;
            var d;
            this.D = null != (d = b.Wm) ? d : !1;
            this.C = null
        };
    pa(In, Gn);
    var Kn = function(a) {
        return "function" === typeof a.B.__tcfapi || null != Jn(a)
    };
    In.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.D
            },
            d = Em(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.R && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.R));
        var f = function(g, k) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = Hn(c), c.internalBlockOnErrors = b.D, k && 0 === c.internalErrorState || (c.tcString = "tcunavailable", k || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Ln(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    In.prototype.removeEventListener = function(a) {
        a && a.listenerId && Ln(this, "removeEventListener", null, a.listenerId)
    };
    var Nn = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var k = c;
            2 === c ? (k = 0, 2 === g && (k = 1)) : 3 === c && (k = 1, 1 === g && (k = 0));
            var m;
            if (0 === k)
                if (a.purpose && a.vendor) {
                    var n = Mn(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Mn(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === k ? a.purpose && a.vendor ? Mn(a.purpose.legitimateInterests,
                b) && Mn(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        Mn = function(a, b) {
            return !(!a || !a[b])
        },
        Ln = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.B.__tcfapi) {
                var e = a.B.__tcfapi;
                e(b, 2, c, d)
            } else if (Jn(a)) {
                On(a);
                var f = ++a.sb;
                a.M[f] = c;
                if (a.h) {
                    var g = {};
                    a.h.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        Jn = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.B, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (k) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (k) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        On = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.M[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, on(a.B, "message", a.C))
        },
        Pn = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Hn(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (Fn({
                    e: String(a.internalErrorState)
                }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var Qn = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        Rn = nn('', 500);

    function Sn() {
        var a = $h.tcf || {};
        return $h.tcf = a
    }
    var Xn = function() {
        var a = Sn(),
            b = new In(z, {
                Bm: -1
            });
        Kn(b) && Tn() && N(124);
        if (!Tn() && !a.active && Kn(b)) {
            a.active = !0;
            a.Pf = {};
            Un();
            a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(c) {
                    if (0 !== c.internalErrorState) Vn(a), Wn(a);
                    else {
                        var d;
                        a.gdprApplies = c.gdprApplies;
                        if (!1 === c.gdprApplies) {
                            var e = {},
                                f;
                            for (f in Qn) Qn.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus || "cmpuishown" === c.eventStatus) {
                            var g = {},
                                k;
                            for (k in Qn)
                                if (Qn.hasOwnProperty(k))
                                    if ("1" ===
                                        k) {
                                        var m, n = c,
                                            p = !0;
                                        p = void 0 === p ? !1 : p;
                                        m = Pn(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Nn(n, "1", 0) : !1;
                                        g["1"] = m
                                    } else g[k] = Nn(c, k, Qn[k]);
                            d = g
                        }
                        d && (a.tcString = c.tcString || "tcempty", a.Pf = d, Wn(a))
                    }
                })
            } catch (c) {
                Vn(a), Wn(a)
            }
        }
    };

    function Vn(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function Un() {
        var a = {},
            b = (a[P.g.H] = "denied", a[P.g.od] = Rn, a);
        Xk(b)
    }
    var Tn = function() {
        return !0 !== z.gtag_enable_tcf_support
    };

    function Wn(a) {
        var b = {},
            c = (b[P.g.H] = a.Pf["1"] ? "granted" : "denied", b);
        Yk(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: Yn()
        })
    }
    var Yn = function() {
            var a = Sn();
            return a.active ? a.tcString || "" : ""
        },
        Zn = function() {
            var a = Sn();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        $n = function(a) {
            if (!Qn.hasOwnProperty(String(a))) return !0;
            var b = Sn();
            return b.active && b.Pf ? !!b.Pf[String(a)] : !0
        };
    var ao = void 0;

    function bo(a) {
        var b = "";
        return b
    };
    var co = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };
    Vb();
    qn() || Sb("iPod");
    Sb("iPad");
    !Sb("Android") || Wb() || Vb() || Ub() || Sb("Silk");
    Wb();
    !Sb("Safari") || Wb() || (Tb() ? 0 : Sb("Coast")) || Ub() || (Tb() ? 0 : Sb("Edge")) || (Tb() ? Rb("Microsoft Edge") : Sb("Edg/")) || (Tb() ? Rb("Opera") : Sb("OPR")) || Vb() || Sb("Silk") || Sb("Android") || rn();
    var eo = {},
        fo = null,
        go = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!fo) {
                fo = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), k = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                    var n = g.concat(k[m].split(""));
                    eo[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === fo[q] && (fo[q] = p)
                    }
                }
            }
            for (var r = eo[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var x = b[v],
                    y = b[v + 1],
                    A = b[v + 2],
                    B = r[x >> 2],
                    C = r[(x & 3) << 4 | y >> 4],
                    G = r[(y & 15) << 2 | A >> 6],
                    K = r[A & 63];
                t[w++] = "" + B + C + G + K
            }
            var H = 0,
                O = u;
            switch (b.length - v) {
                case 2:
                    H = b[v + 1], O = r[(H & 15) << 2] || u;
                case 1:
                    var Q = b[v];
                    t[w] = "" + r[Q >> 2] + r[(Q & 3) << 4 | H >> 4] + O + u
            }
            return t.join("")
        };
    var ho = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function io(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function jo() {
        var a = z.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function ko() {
        var a, b;
        return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function lo(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function mo() {
        var a = z;
        if (!lo(a)) return null;
        var b = io(a);
        if (b.uach_promise) return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(ho).then(function(d) {
            null != b.uach || (b.uach = d);
            return d
        });
        return b.uach_promise = c
    };
    var no, oo = function() {
            if (lo(z) && (no = Ta(), !ko())) {
                var a = mo();
                a && (a.then(function() {
                    N(95);
                }), a.catch(function() {
                    N(96)
                }))
            }
        },
        qo = function(a) {
            var b = po.Fm,
                c = function(g, k) {
                    try {
                        a(g, k)
                    } catch (m) {}
                },
                d = jo();
            if (d) c(d);
            else {
                var e = ko();
                if (e) {
                    b =
                        Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                    var f = z.setTimeout(function() {
                        c.Fe || (c.Fe = !0, N(106), c(null, Error("Timeout")))
                    }, b);
                    e.then(function(g) {
                        c.Fe || (c.Fe = !0, N(104), z.clearTimeout(f), c(g))
                    }).catch(function(g) {
                        c.Fe || (c.Fe = !0, N(105), z.clearTimeout(f), c(null, g))
                    })
                } else c(null)
            }
        },
        ro = function(a, b) {
            a && (b.h[P.g.Sd] = a.architecture, b.h[P.g.Td] = a.bitness, a.fullVersionList && (b.h[P.g.Ud] = a.fullVersionList.map(function(c) {
                    return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
                }).join("|")),
                b.h[P.g.Vd] = a.mobile ? "1" : "0", b.h[P.g.Wd] = a.model, b.h[P.g.Xd] = a.platform, b.h[P.g.Yd] = a.platformVersion, b.h[P.g.Zd] = a.wow64 ? "1" : "0")
        };

    function so(a, b, c, d) {
        var e, f = Number(null != a.Eb ? a.Eb : void 0);
        0 !== f && (e = new Date((b || Ta()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            Gb: d
        }
    };
    var to;
    var xo = function() {
            var a = uo,
                b = vo,
                c = wo(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                Cc(F, "mousedown", d);
                Cc(F, "keyup", d);
                Cc(F, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        yo = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            wo().decorators.push(f)
        },
        zo = function(a, b, c) {
            for (var d = wo().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    k;
                if (k = !c || g.forms) a: {
                    var m = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (m && (p || n !== F.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    k = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        k = !0;
                        break a
                    }
                    k = !1
                }
                if (k) {
                    var r = g.placement;
                    void 0 == r && (r = g.fragment ? 2 : 1);
                    r === b && Wa(e, g.callback())
                }
            }
            return e
        };

    function wo() {
        var a = sc("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Ao = /(.*?)\*(.*?)\*(.*)/,
        Bo = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Co = /^(?:www\.|m\.|amp\.)+/,
        Do = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Eo(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var Go = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(rb(String(d))))
            }
        var e = b.join("*");
        return ["1", Fo(e), e].join("*")
    };

    function Fo(a, b) {
        var c = [qc.userAgent, (new Date).getTimezoneOffset(), qc.userLanguage || qc.language, Math.floor(Ta() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = to)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, k = 0; 8 > k; k++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        to = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ to[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function Ho() {
        return function(a) {
            var b = rj(z.location.href),
                c = b.search.replace("?", ""),
                d = mj(c, "_gl", !1, !0) || "";
            a.query = Io(d) || {};
            var e = pj(b, "fragment").match(Eo("_gl"));
            a.fragment = Io(e && e[3] || "") || {}
        }
    }

    function Jo(a, b) {
        var c = Eo(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var Ko = function(a, b) {
            b || (b = "_gl");
            var c = Do.exec(a);
            if (!c) return "";
            var d = c[1],
                e = Jo(b, (c[2] || "").slice(1)),
                f = Jo(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        Lo = function(a) {
            var b = Ho(),
                c = wo();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Wa(d, e.query), a && Wa(d, e.fragment));
            return d
        },
        Io = function(a) {
            try {
                var b = Mo(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = sb(d[e + 1]);
                        c[f] = g
                    }
                    ub("TAGGING", 6);
                    return c
                }
            } catch (k) {
                ub("TAGGING",
                    8)
            }
        };

    function Mo(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Ao.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var k = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === Fo(k, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return k;
                ub("TAGGING", 7)
            }
        }
    }

    function No(a, b, c, d) {
        function e(p) {
            p = Jo(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Do.exec(c);
        if (!f) return "";
        var g = f[1],
            k = f[2] || "",
            m = f[3] || "",
            n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : k = "?" + e(k.substring(1));
        return "" + g + k + m
    }

    function Oo(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = zo(b, 1, c),
            e = zo(b, 2, c),
            f = zo(b, 3, c);
        if (Xa(d)) {
            var g = Go(d);
            c ? Po("_gl", g, a) : Qo("_gl", g, a, !1)
        }
        if (!c && Xa(e)) {
            var k = Go(e);
            Qo("_gl", k, a, !0)
        }
        for (var m in f)
            if (f.hasOwnProperty(m)) a: {
                var n = m,
                    p = f[m],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        Qo(n, p, q);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        Po(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && No(n, p, q)
            }
    }

    function Qo(a, b, c, d) {
        if (c.href) {
            var e = No(a, b, c.href, void 0 === d ? !1 : d);
            Fb.test(e) && (c.href = e)
        }
    }

    function Po(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var k = e[g];
                    if (k.name === a) {
                        k.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = F.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = No(a, b, c.action);
                Fb.test(n) && (c.action = n)
            }
        }
    }

    function uo(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || Oo(e, e.hostname)
            }
        } catch (g) {}
    }

    function vo(a) {
        try {
            if (a.action) {
                var b = pj(rj(a.action), "host");
                Oo(a, b)
            }
        } catch (c) {}
    }
    var Ro = function(a, b, c, d) {
            xo();
            yo(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        So = function(a, b) {
            xo();
            yo(a, [oj(z.location, "host", !0)], b, !0, !0)
        },
        To = function() {
            var a = F.location.hostname,
                b = Bo.exec(F.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var k = a.replace(Co, ""),
                m = e.replace(Co, ""),
                n;
            if (!(n = k === m)) {
                var p = "." + m;
                n = k.substring(k.length - p.length,
                    k.length) === p
            }
            return n
        },
        Uo = function(a, b) {
            return !1 === a ? !1 : a || b || To()
        };
    var Vo = ["1"],
        Wo = {},
        Xo = {},
        Zo = function(a) {
            return Wo[Yo(a)]
        },
        cp = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = Yo(a.prefix);
            if (!Wo[c])
                if ($o(c, a.path, a.domain)) {
                    var d = Xo[Yo(a.prefix)];
                    ap(a, d ? d.id : void 0, d ? d.Bh : void 0)
                } else {
                    var e = tj("auiddc");
                    if (e) ub("TAGGING", 17), Wo[c] = e;
                    else if (b) {
                        var f = Yo(a.prefix),
                            g = dn();
                        if (0 === bp(f, g, a)) {
                            var k = sc("google_tag_data", {});
                            k._gcl_au || (k._gcl_au = g)
                        }
                        $o(c, a.path, a.domain)
                    }
                }
        };

    function ap(a, b, c) {
        var d = Yo(a.prefix),
            e = Wo[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var k = e;
                    b && (k = e + "." + b + "." + (c ? c : Math.floor(Ta() / 1E3)));
                    bp(d, k, a, 1E3 * g)
                }
            }
        }
    }

    function bp(a, b, c, d) {
        var e = hn(b, "1", c.domain, c.path),
            f = so(c, d);
        f.Gb = "ad_storage";
        return $m(a, e, f)
    }

    function $o(a, b, c) {
        var d = gn(a, b, c, Vo, "ad_storage");
        if (!d) return !1;
        dp(a, d);
        return !0
    }

    function dp(a, b) {
        var c = b.split(".");
        5 === c.length ? (Wo[a] = c.slice(0, 2).join("."), Xo[a] = {
            id: c.slice(2, 4).join("."),
            Bh: Number(c[4]) || 0
        }) : 3 === c.length ? Xo[a] = {
            id: c.slice(0, 2).join("."),
            Bh: Number(c[2]) || 0
        } : Wo[a] = b
    }

    function Yo(a) {
        return (a || "_gcl") + "_au"
    }

    function ep(a) {
        Nk() ? Rk(function() {
            Kk("ad_storage") ? a() : Sk(a, "ad_storage")
        }, ["ad_storage"]) : a()
    }

    function fp(a) {
        var b = Lo(!0),
            c = Yo(a.prefix);
        ep(function() {
            var d = b[c];
            if (d) {
                dp(c, d);
                var e = 1E3 * Number(Wo[c].split(".")[1]);
                if (e) {
                    ub("TAGGING", 16);
                    var f = so(a, e);
                    f.Gb = "ad_storage";
                    var g = hn(d, "1", a.domain, a.path);
                    $m(c, g, f)
                }
            }
        })
    }

    function gp(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var g = {},
                k = gn(a, e.path, e.domain, Vo, "ad_storage");
            k && (g[a] = k);
            return g
        };
        ep(function() {
            Ro(f, b, c, d)
        })
    };
    var hp = function(a) {
        for (var b = [], c = F.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Uh: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, k) {
            return k.timestamp - g.timestamp
        });
        return b
    };

    function ip(a, b) {
        var c = hp(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Uh] || (d[c[e].Uh] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    Z: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Uh].push(g)
            }
        }
        return d
    };
    var jp = /^\w+$/,
        kp = /^[\w-]+$/,
        lp = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        mp = function() {
            return qk().h() && Nk() ? Kk("ad_storage") : !0
        },
        np = function(a, b) {
            Mk("ad_storage") ? mp() ? a() : Sk(a, "ad_storage") : b ? ub("TAGGING", 3) : Rk(function() {
                np(a, !0)
            }, ["ad_storage"])
        },
        pp = function(a) {
            return op(a).map(function(b) {
                return b.Z
            })
        },
        op = function(a) {
            var b = [];
            if (!Fm(z) || !F.cookie) return b;
            var c = Rm(a, F.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    Z: d.Z
                }, e++) {
                var f = qp(c[e]);
                if (null != f) {
                    var g = f,
                        k = g.version;
                    d.Z = g.Z;
                    var m = g.timestamp,
                        n = g.labels,
                        p = Ga(b, function(q) {
                            return function(r) {
                                return r.Z === q.Z
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = rp(p.labels, n || [])) : b.push({
                        version: k,
                        Z: d.Z,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return sp(b)
        };

    function rp(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function tp(a) {
        return a && "string" == typeof a && a.match(jp) ? a : "_gcl"
    }
    var vp = function() {
            var a = rj(z.location.href),
                b = pj(a, "query", !1, void 0, "gclid"),
                c = pj(a, "query", !1, void 0, "gclsrc"),
                d = pj(a, "query", !1, void 0, "wbraid"),
                e = pj(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || mj(f, "gclid", !1);
                c = c || mj(f, "gclsrc", !1);
                d = d || mj(f, "wbraid", !1)
            }
            return up(b, c, e, d)
        },
        up = function(a, b, c, d) {
            var e = {},
                f = function(g, k) {
                    e[k] || (e[k] = []);
                    e[k].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && kp.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(kp)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        xp = function(a) {
            var b = vp();
            np(function() {
                wp(b, !1, a)
            })
        };

    function wp(a, b, c, d, e) {
        function f(w, x) {
            var y = yp(w, g);
            y && ($m(y, x, k), m = !0)
        }
        c = c || {};
        e = e || [];
        var g = tp(c.prefix);
        d = d || Ta();
        var k = so(c, d, !0);
        k.Gb = "ad_storage";
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var x = ["GCL", n, w];
                0 < e.length && x.push(e.join("."));
                return x.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!m && a.gb) {
            var q = a.gb[0],
                r = yp("gb", g),
                t = !1;
            if (!b)
                for (var u = op(r), v = 0; v < u.length; v++) u[v].Z === q && u[v].labels &&
                    0 < u[v].labels.length && (t = !0);
            t || f("gb", p(q))
        }
    }
    var Ap = function(a, b) {
            var c = Lo(!0);
            np(function() {
                for (var d = tp(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== lp[f]) {
                        var g = yp(f, d),
                            k = c[g];
                        if (k) {
                            var m = Math.min(zp(k), Ta()),
                                n;
                            b: {
                                var p = m;
                                if (Fm(z))
                                    for (var q = Rm(g, F.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                        if (zp(q[r]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var t = so(b, m, !0);
                                t.Gb = "ad_storage";
                                $m(g, k, t)
                            }
                        }
                    }
                }
                wp(up(c.gclid, c.gclsrc), !1, b)
            })
        },
        yp = function(a, b) {
            var c = lp[a];
            if (void 0 !== c) return b + c
        },
        zp = function(a) {
            return 0 !== Bp(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function qp(a) {
        var b = Bp(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            Z: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function Bp(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !kp.test(a[2]) ? [] : a
    }
    var Cp = function(a, b, c, d, e) {
            if (Fa(b) && Fm(z)) {
                var f = tp(e),
                    g = function() {
                        for (var k = {}, m = 0; m < a.length; ++m) {
                            var n = yp(a[m], f);
                            if (n) {
                                var p = Rm(n, F.cookie, void 0, "ad_storage");
                                p.length && (k[n] = p.sort()[p.length - 1])
                            }
                        }
                        return k
                    };
                np(function() {
                    Ro(g, b, c, d)
                })
            }
        },
        sp = function(a) {
            return a.filter(function(b) {
                return kp.test(b.Z)
            })
        },
        Dp = function(a, b) {
            if (Fm(z)) {
                for (var c = tp(b.prefix), d = {}, e = 0; e < a.length; e++) lp[a[e]] && (d[a[e]] = lp[a[e]]);
                np(function() {
                    l(d, function(f, g) {
                        var k = Rm(c + g, F.cookie, void 0, "ad_storage");
                        k.sort(function(t,
                            u) {
                            return zp(u) - zp(t)
                        });
                        if (k.length) {
                            var m = k[0],
                                n = zp(m),
                                p = 0 !== Bp(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== Bp(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [r];
                            wp(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function Ep(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var Fp = function(a) {
            function b(e, f, g) {
                g && (e[f] = g)
            }
            if (Nk()) {
                var c = vp();
                if (Ep(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.gbraid);
                    So(function() {
                        return d
                    }, 3);
                    So(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        Gp = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!mp()) return e;
            var f = op(a);
            if (!f.length) return e;
            for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var k = f[0],
                    m = f[0].timestamp,
                    n = [k.version, Math.round(m /
                        1E3), k.Z].concat(k.labels || [], [b]).join("."),
                    p = so(c, m, !0);
                p.Gb = "ad_storage";
                $m(a, n, p)
            }
            return e
        };

    function Hp(a, b) {
        var c = tp(b),
            d = yp(a, c);
        if (!d) return 0;
        for (var e = op(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Ip(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var Jp = function(a) {
        var b = Math.max(Hp("aw", a), Ip(mp() ? ip() : {}));
        return Math.max(Hp("gb", a), Ip(mp() ? ip("_gac_gb", !0) : {})) > b
    };
    var Kp = function(a, b) {
            var c = a && !al(P.g.H);
            return b && c ? "0" : b
        },
        Np = function(a) {
            function b(v) {
                var w;
                $h.reported_gclid || ($h.reported_gclid = {});
                w = $h.reported_gclid;
                var x, y = k;
                x = !k || Nk() && !al(P.g.H) ? n + (v ? "gcu" : "gcs") : n + "." + (g.prefix || "_gcl") + (v ? "gcu" : "gcs");
                if (!w[x]) {
                    w[x] = !0;
                    var A = [],
                        B = {},
                        C = function(W, S) {
                            S && (A.push(W + "=" + encodeURIComponent(S)), B[W] = !0)
                        },
                        G = "https://www.google.com";
                    if (Nk()) {
                        var K = al(P.g.H);
                        C("gcs", vm());
                        v && C("gcu", "1");
                        (T(51) || Ok()) && C("gcd", zm(f));
                        C("rnd", jn());
                        if ((!n || p && "aw.ds" !== p) && al(P.g.H)) {
                            var H = pp("_gcl_aw");
                            C("gclaw", H.join("."))
                        }
                        C("url", String(z.location).split(/[?#]/)[0]);
                        C("dclid", Kp(d, q));
                        K || (G = "https://pagead2.googlesyndication.com")
                    }
                    T(53) && (bl() && C("dma_cps", Am()), C("dma", Ti() ? "1" : "0"));
                    C("gdpr_consent", Yn());
                    C("gdpr", Zn());
                    "1" === Lo(!1)._up && C("gtm_up", "1");
                    C("gclid", Kp(d, n));
                    C("gclsrc", p);
                    if (!(B.gclid || B.dclid || B.gclaw) && (C("gbraid", Kp(d, r)), !B.gbraid && Nk() && al(P.g.H))) {
                        var O =
                            pp("_gcl_gb");
                        0 < O.length && C("gclgb", O.join("."))
                    }
                    C("gtm", mn(!e));
                    k && al(P.g.H) && (cp(g || {}), y && C("auid", Zo(g.prefix) || ""));
                    Mp || a.uj && C("did", a.uj);
                    a.Gf && C("gdid", a.Gf);
                    a.Cf && C("edid", a.Cf);
                    var Q = T(27) ? jo() : null;
                    if (Q) {
                        var V = function(W, S) {
                            A.push(W + "=" + encodeURIComponent(S));
                            B[W] = !0
                        };
                        V("uaa", Q.architecture);
                        V("uab", Q.bitness);
                        Q.fullVersionList && V("uafvl", Q.fullVersionList.map(function(W) {
                            return encodeURIComponent(W.brand || "") + ";" + encodeURIComponent(W.version || "")
                        }).join("|"));
                        V("uam", Q.model);
                        V("uap",
                            Q.platform);
                        V("uapv", Q.platformVersion);
                        V("uaw", Q.wow64 ? "1" : "0")
                    }
                    var ma = G + "/pagead/landing?" + A.join("&");
                    Ic(ma)
                }
            }
            var c = !!a.Af,
                d = !!a.Oe,
                e = a.Sh,
                f = a.m,
                g = void 0 === a.vc ? {} : a.vc,
                k = void 0 === a.De ? !0 : a.De,
                m = vp(),
                n = m.gclid || "",
                p = m.gclsrc,
                q = m.dclid || "",
                r = m.gbraid || "",
                t = !c && ((!n || p && "aw.ds" !== p ? !1 : !0) || r),
                u = Nk();
            if (t || u) u ? el(function() {
                b();
                al(P.g.H) || dl(function(v) {
                    return b(!0, v.consentEventId, v.consentPriorityId)
                }, P.g.H)
            }, [P.g.H]) : b()
        },
        Lp = function(a) {
            var b = String(z.location).split(/[?#]/)[0],
                c = Zh.Wj || z._CONSENT_MODE_SALT;
            return a ? c ? String(Bm(b + a + c)) : "0" : ""
        },
        Mp = !1;
    var Op = /[A-Z]+/,
        Pp = /\s/,
        Qp = function(a, b) {
            if (h(a)) {
                a = Ra(a);
                var c = a.indexOf("-");
                if (!(0 > c)) {
                    var d = a.substring(0, c);
                    if (Op.test(d)) {
                        var e = a.substring(c + 1),
                            f;
                        if (b) {
                            var g = function(n) {
                                var p = n.indexOf("/");
                                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)]
                            };
                            f = g(e);
                            if ("DC" === d && 2 === f.length) {
                                var k = g(f[1]);
                                2 === k.length && (f[1] = k[0], f.push(k[1]))
                            }
                        } else {
                            f = e.split("/");
                            for (var m = 0; m < f.length; m++)
                                if (!f[m] || Pp.test(f[m]) && ("AW" !== d || 1 !== m)) return
                        }
                        return {
                            id: a,
                            prefix: d,
                            da: d + "-" + f[0],
                            K: f
                        }
                    }
                }
            }
        },
        Sp = function(a, b) {
            for (var c = {}, d = 0; d < a.length; ++d) {
                var e = Qp(a[d], b);
                e && (c[e.id] = e)
            }
            Rp(c);
            var f = [];
            l(c, function(g, k) {
                f.push(k)
            });
            return f
        };

    function Rp(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.K[1] && b.push(d.da)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var Tp = function(a, b, c, d) {
        var e = zc(),
            f;
        if (1 === e) a: {
            var g = ni;g = g.toLowerCase();
            for (var k = "https://" + g, m = "http://" + g, n = 1, p = F.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                var r = p[q].src;
                if (r) {
                    r = r.toLowerCase();
                    if (0 === r.indexOf(m)) {
                        f = 3;
                        break a
                    }
                    1 === n && 0 === r.indexOf(k) && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (2 === f || d || "http:" != z.location.protocol ? a : b) + c
    };
    var Vp = function(a, b, c) {
            if (z[a.functionName]) return b.Ih && I(b.Ih), z[a.functionName];
            var d = Up();
            z[a.functionName] = d;
            if (a.xf)
                for (var e = 0; e < a.xf.length; e++) z[a.xf[e]] = z[a.xf[e]] || Up();
            a.If && void 0 === z[a.If] && (z[a.If] = c);
            yc(Tp("https://", "http://", a.Rh), b.Ih, b.Tl);
            return d
        },
        Up = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        Wp = {
            functionName: "_googWcmImpl",
            If: "_googWcmAk",
            Rh: "www.gstatic.com/wcm/loader.js"
        },
        Xp = {
            functionName: "_gaPhoneImpl",
            If: "ga_wpid",
            Rh: "www.gstatic.com/gaphone/loader.js"
        },
        Yp = {
            Tj: "",
            Kk: "5"
        },
        Zp = {
            functionName: "_googCallTrackingImpl",
            xf: [Xp.functionName, Wp.functionName],
            Rh: "www.gstatic.com/call-tracking/call-tracking_" + (Yp.Tj || Yp.Kk) + ".js"
        },
        $p = {},
        aq = function(a, b, c, d) {
            N(22);
            if (c) {
                d = d || {};
                var e = Vp(Wp, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.Fb && (f.autoreplace = c);
                e(2, d.Fb, f, c, 0, Sa(), d.options)
            }
        },
        bq = function(a, b, c, d) {
            N(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Sa()
                    }, f = 0; f < a.length; f++) {
                    var g = a[f];
                    $p[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.K.length ? (e.adData = {
                            ak: g.K[0],
                            cl: g.K[1]
                        }, $p[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                            gaWpid: g.da
                        }, $p[g.id] = !0))
                }(e.gaData || e.adData) && Vp(Zp, d)(d.Fb, e, d.options)
            }
        },
        cq = function() {
            var a = !1;
            return a
        },
        dq = function(a, b) {
            if (a)
                if (kn()) {} else {
                    if (h(a)) {
                        var c =
                            Qp(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = U(b, P.g.Li);
                    if (f && Fa(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var k = Qp(f[g]);
                            k && (d.push(k), (a.id === k.id || a.id === a.da && a.da === k.da) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var m = U(b, P.g.Gg),
                            n;
                        if (m) {
                            Fa(m) ? n = m : n = [m];
                            var p = U(b, P.g.Eg),
                                q = U(b, P.g.Fg),
                                r = U(b, P.g.Hg),
                                t = U(b, P.g.Ki),
                                u = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var w = 0; w < n.length; w++)
                                if (w < v)
                                    if (d) bq(d, n[w], t, {
                                        Fb: u,
                                        options: r
                                    });
                                    else if ("AW" === a.prefix && a.K[1]) cq() ? bq([a], n[w], t || "US", {
                                Fb: u,
                                options: r
                            }) : aq(a.K[0], a.K[1], n[w], {
                                Fb: u,
                                options: r
                            });
                            else if ("UA" === a.prefix)
                                if (cq()) bq([a], n[w], t || "US", {
                                    Fb: u
                                });
                                else {
                                    var x = a.da,
                                        y = n[w],
                                        A = {
                                            Fb: u
                                        };
                                    N(23);
                                    if (y) {
                                        A = A || {};
                                        var B = Vp(Xp, A, x),
                                            C = {};
                                        void 0 !== A.Fb ? C.receiver = A.Fb : C.replace = y;
                                        C.ga_wpid = x;
                                        C.destination = y;
                                        B(2, Sa(), C)
                                    }
                                }
                        }
                    }
                }
        };
    var eq = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.m = c;
        this.h = {};
        this.metadata = J(c.eventMetadata || {});
        this.isAborted = !1
    };
    eq.prototype.copyToHitData = function(a, b) {
        var c = U(this.m, a);
        void 0 !== c ? this.h[a] = c : void 0 !== b && (this.h[a] = b)
    };
    var fq = function(a, b, c) {
        var d = $i(a.target.da);
        return d && d.hasOwnProperty(b) ? d[b] : c
    };

    function gq(a) {
        return {
            getDestinationId: function() {
                return a.target.da
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.h[b]
            },
            setHitData: function(b, c) {
                a.h[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.h[b] && (a.h[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return U(a.m, b)
            },
            yj: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.h)
            }
        }
    };
    var iq = function(a) {
            var b = hq[a.target.da];
            if (!a.isAborted && b)
                for (var c = gq(a), d = 0; d < b.length; ++d) {
                    try {
                        b[d](c)
                    } catch (e) {
                        a.isAborted = !0
                    }
                    if (a.isAborted) break
                }
        },
        jq = function(a, b) {
            var c = hq[a];
            c || (c = hq[a] = []);
            c.push(b)
        },
        hq = {};
    var mq = function(a) {
            a = a || {};
            var b;
            if (!Nk() || al(kq)) {
                (b = lq(a)) || (b = dn());
                var c = a,
                    d = Yo(c.prefix);
                ap(c, b);
                delete Wo[d];
                delete Xo[d];
                $o(d, c.path, c.domain);
                return lq(a)
            }
        },
        lq = function(a) {
            if (!Nk() || al(kq)) {
                a = a || {};
                cp(a, !1);
                var b = Xo[Yo(tp(a.prefix))];
                if (b && !(18E5 < Ta() - 1E3 * b.Bh)) {
                    var c = b.id,
                        d = c.split(".");
                    if (2 === d.length && !(864E5 < Ta() - 1E3 * (Number(d[1]) || 0))) return c
                }
            }
        },
        kq = P.g.H;
    var nq = function(a, b) {
            var c = $h.joined_auid = $h.joined_auid || {},
                d = (a || "_gcl") + "." + b;
            if (c[d]) return !0;
            c[d] = !0;
            return !1
        },
        oq = function() {
            var a = rj(z.location.href).search.replace("?", "");
            return "1" === mj(a, "gad", !1, !0)
        },
        pq = function(a) {
            var b = [];
            l(a, function(c, d) {
                d = sp(d);
                for (var e = [], f = 0; f < d.length; f++) e.push(d[f].Z);
                e.length && b.push(c + ":" + e.join(","))
            });
            return b.join(";")
        },
        rq = function(a, b, c) {
            if ("aw" === a || "dc" === a || "gb" === a) {
                var d = tj("gcl" + a);
                if (d) return d.split(".")
            }
            var e = tp(b);
            if ("_gcl" == e) {
                c = void 0 === c ? !0 :
                    c;
                var f = !al(qq) && c,
                    g;
                g = vp()[a] || [];
                if (0 < g.length) return f ? ["0"] : g
            }
            var k = yp(a, e);
            return k ? pp(k) : []
        },
        sq = function(a, b) {
            Mk(qq) ? al(qq) ? a() : Sk(a, qq) : b ? N(42) : el(function() {
                sq(a, !0)
            }, [qq])
        },
        qq = P.g.H,
        tq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        uq = /^www.googleadservices.com$/,
        vq = function(a, b) {
            return rq("aw", a, b)
        },
        wq = function(a, b) {
            return rq("dc", a, b)
        },
        xq = function(a) {
            var b = tj("gac");
            return b ? !al(qq) && a ? "0" : decodeURIComponent(b) : pq(mp() ? ip() : {})
        },
        yq = function(a) {
            var b = tj("gacgb");
            return b ? !al(qq) && a ? "0" : decodeURIComponent(b) :
                pq(mp() ? ip("_gac_gb", !0) : {})
        },
        zq = function(a) {
            var b = vp(),
                c = [],
                d = b.gclid,
                e = b.dclid,
                f = b.gclsrc || "aw",
                g = T(43) && oq();
            !d || "aw.ds" !== f && "aw" !== f && "ds" !== f || c.push({
                Z: d,
                ve: f
            });
            e && c.push({
                Z: e,
                ve: "ds"
            });
            0 === c.length && b.gbraid && c.push({
                Z: b.gbraid,
                ve: "gb"
            });
            T(35) && 0 === c.length && "aw.ds" === f && c.push({
                Z: "",
                ve: "aw.ds"
            });
            sq(function() {
                cp(a);
                var k = Zo(a.prefix);
                if (k) {
                    var m = ["auid=" + k];
                    if (T(9)) {
                        var n = F.referrer ? pj(rj(F.referrer), "host") : "";
                        0 === c.length && (T(40) ? tq.test(n) || uq.test(n) : tq.test(n)) && c.push({
                            Z: "",
                            ve: ""
                        });
                        if (0 === c.length && !g) return;
                        n && m.push("ref=" + encodeURIComponent(n));
                        var p = 1 === Cn() ? z.top.location.href : z.location.href;
                        p = p.replace(/[\?#].*$/, "");
                        m.push("url=" + encodeURIComponent(p));
                        m.push("tft=" + Ta());
                        var q = Lc();
                        void 0 !== q && m.push("tfd=" + Math.round(q));
                        if (T(34)) {
                            var r = Cn();
                            m.push("frm=" + r)
                        }
                        g && m.push("gad=1")
                    }
                    if (0 < c.length)
                        for (var t = 0; t < c.length; t++) {
                            var u = c[t],
                                v = u.Z,
                                w = u.ve;
                            if (!nq(a.prefix, w + "." + v)) {
                                var x = "https://adservice.google.com/pagead/regclk?" + m.join("&");
                                "" !== v ? x = "gb" === w ? x + "&wbraid=" + v : x + "&gclid=" + v + "&gclsrc=" +
                                    w : "aw.ds" === w && (x += "&gclsrc=aw.ds");
                                Ic(x)
                            }
                        } else if (g && !nq(a.prefix, "gad")) {
                            var y = "https://adservice.google.com/pagead/regclk?" + m.join("&");
                            Ic(y)
                        }
                }
            })
        },
        Aq = function(a) {
            return tj("gclaw") || tj("gac") || 0 < (vp().aw || []).length ? !1 : 0 < (vp().gb || []).length ? !0 : Jp(a)
        };
    var Cq = function(a, b) {
            var c = a.Dh,
                d = a.Vh;
            a.ih && (Uo(c[P.g.nc], !!c[P.g.T]) && (Ap(Bq, b), fp(b)), xp(b), Dp(Bq, b), zq(b));
            c[P.g.T] && (Cp(Bq, c[P.g.T], c[P.g.Mb], !!c[P.g.Ab], b.prefix), gp(Yo(b.prefix), c[P.g.T], c[P.g.Mb], !!c[P.g.Ab], b), gp("FPAU", c[P.g.T], c[P.g.Mb], !!c[P.g.Ab], b));
            d && Fp(Bq)
        },
        Dq = function(a, b, c, d) {
            var e = a.Wh,
                f = a.callback,
                g = a.Gh;
            if ("function" === typeof f)
                if (e === P.g.ub && void 0 === g) {
                    var k = d(b.prefix, c);
                    0 === k.length ? f(void 0) : 1 === k.length ? f(k[0]) : f(k)
                } else e === P.g.hc ? (N(65), cp(b, !1), f(Zo(b.prefix))) : f(g)
        },
        Bq = ["aw", "dc", "gb"];

    function Eq(a) {
        var b = U(a.m, P.g.zb),
            c = U(a.m, P.g.Lb);
        b && !c ? (a.eventName !== P.g.ka && a.eventName !== P.g.rd && N(131), a.isAborted = !0) : !b && c && (N(132), a.isAborted = !0)
    };
    var Fq = function() {
        var a = qc && qc.userAgent || "";
        if (0 > a.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)) return !1;
        var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
        if ("" === b) return !1;
        for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
            if (void 0 === c[e]) return !0;
            if (d[e] != c[e]) return Number(d[e]) > Number(c[e])
        }
        return d.length >= c.length
    };

    function Gq() {
        return "attribution-reporting"
    }

    function Hq(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var Iq = !1;

    function Jq() {
        if (Hq("join-ad-interest-group") && Da(qc.joinAdInterestGroup)) return !0;
        Iq || (An('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), Iq = !0);
        return Hq("join-ad-interest-group") && Da(qc.joinAdInterestGroup)
    }

    function Kq(a, b) {
        var c = void 0;
        try {
            c = F.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Ta() - d) {
                ub("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= F.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                ub("TAGGING", 10);
                return
            }
        } catch (e) {}
        Ac(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Ta()
        }, c)
    }

    function Lq() {
        return "https://td.doubleclick.net"
    };
    var Mq = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        Nq = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        Oq = /^\d+\.fls\.doubleclick\.net$/,
        Pq = /;gac=([^;?]+)/,
        Qq = /;gacgb=([^;?]+)/,
        Rq = /;gclaw=([^;?]+)/,
        Sq = /;gclgb=([^;?]+)/;

    function Tq(a, b) {
        if (Oq.test(F.location.host)) {
            var c = F.location.href.match(b);
            return c && 2 == c.length && c[1].match(Mq) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], g = a[e], k = 0; k < g.length; k++) f.push(g[k].Z);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var Uq = function(a, b, c) {
        var d = mp() ? ip("_gac_gb", !0) : {},
            e = [],
            f = !1,
            g;
        for (g in d) {
            var k = Gp("_gac_gb_" + g, a, b, c);
            f = f || 0 !== k.length && k.some(function(m) {
                return 1 === m
            });
            e.push(g + ":" + k.join(","))
        }
        return {
            il: f ? e.join(";") : "",
            fl: Tq(d, Qq)
        }
    };

    function Vq(a, b, c) {
        if (Oq.test(F.location.host)) {
            var d = F.location.href.match(c);
            if (d && 2 == d.length && d[1].match(Nq)) return [{
                Z: d[1]
            }]
        } else return op((a || "_gcl") + b);
        return []
    }
    var Wq = function(a) {
            return Vq(a, "_aw", Rq).map(function(b) {
                return b.Z
            }).join(".")
        },
        Xq = function(a) {
            return Vq(a, "_gb", Sq).map(function(b) {
                return b.Z
            }).join(".")
        },
        Yq = function(a, b) {
            var c = Gp((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var Zq = function() {
        if (Da(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var $q = function(a) {
            if (null != a) {
                var b = String(a).substring(0, 512),
                    c = b.indexOf("#");
                return -1 == c ? b : b.substring(0, c)
            }
            return ""
        },
        ar = function() {
            var a = F.title;
            if (void 0 == a || "" == a) return "";
            var b = function(d) {
                try {
                    return decodeURIComponent(d), !0
                } catch (e) {
                    return !1
                }
            };
            a = encodeURIComponent(a);
            for (var c = 256; !b(a.substr(0, c));) c--;
            return decodeURIComponent(a.substr(0, c))
        },
        br = function(a) {
            a.metadata.speculative_in_message || (a.metadata.speculative = !1)
        },
        cr = function(a, b) {
            Fa(b) || (b = [b]);
            return 0 <= b.indexOf(a.metadata.hit_type)
        },
        dr = function(a) {
            var b = a.target.K[0];
            if (b) {
                a.h[P.g.Lc] = b;
                var c = a.target.K[1];
                c && (a.h[P.g.fb] = c)
            } else a.isAborted = !0
        },
        er = function(a) {
            if (cr(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])) {
                var b = a.h[P.g.fb],
                    c = !0 === U(a.m, P.g.Ve);
                c && (a.metadata.remarketing_only = !0);
                switch (a.metadata.hit_type) {
                    case "conversion":
                        !c && b && br(a);
                        lk() && (a.metadata.is_gcp_conversion = !0);
                        break;
                    case "user_data_lead":
                    case "user_data_web":
                        !c && b && (a.isAborted = !0);
                        break;
                    case "remarketing":
                        !c && b || br(a)
                }
                a.h[P.g.Xi] = a.metadata.is_gcp_conversion ?
                    "www.google.com" : "www.googleadservices.com"
            }
        },
        fr = function(a) {
            cr(a, ["conversion", "remarketing"])
        },
        gr = function(a) {
            if (cr(a, ["conversion", "remarketing"])) {
                var b = Cn();
                a.h[P.g.Ag] = b;
                var c = U(a.m, P.g.wa);
                c || (c = 1 === b ? z.top.location.href : z.location.href);
                a.h[P.g.wa] = $q(c);
                a.copyToHitData(P.g.Ha, F.referrer);
                a.h[P.g.Bb] = ar();
                a.copyToHitData(P.g.Aa);
                var d = aj();
                a.h[P.g.Cb] = d.width + "x" + d.height;
                if (T(39)) {
                    for (var e, f = z, g = f; f && f != f.parent;) f = f.parent, yn(f) && (g = f);
                    e = g;
                    var k;
                    var m = e.location.href;
                    if (e === e.top) k = {
                        url: m,
                        El: !0
                    };
                    else {
                        var n = !1,
                            p = e.document;
                        p && p.referrer && (m = p.referrer, e.parent === e.top && (n = !0));
                        var q = e.location.ancestorOrigins;
                        if (q) {
                            var r = q[q.length - 1];
                            r && -1 === m.indexOf(r) && (n = !1, m = r)
                        }
                        k = {
                            url: m,
                            El: n
                        }
                    }
                    var t = k;
                    t.url && c !== t.url && (a.h[P.g.jf] = $q(t.url))
                }
            }
        },
        hr = function(a) {
            cr(a, ["conversion", "remarketing"]) && (a.copyToHitData(P.g.ma), a.copyToHitData(P.g.ba), a.copyToHitData(P.g.sa), ("remarketing" === a.metadata.hit_type || T(85)) && a.copyToHitData(P.g.Ca))
        },
        ir = function(a) {
            if (T(8))
                if (!lo(z)) N(87);
                else if (void 0 !==
                no) {
                N(85);
                var b = jo();
                b ? ro(b, a) : N(86)
            }
        },
        lr = function(a) {
            cr(a, ["conversion"]) && (!0 === z._gtmpcm || Fq() ? a.h[P.g.Jb] = "2" : T(5) && (jr || Hq(Gq()) || (An('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), jr = !0), kr || (kr = !0, An('A+xK4jmZTgh1KBVry/UZKUE3h6Dr9HPPioFS4KNCzify+KEoOii7z/goKS2zgbAOwhpZ1GZllpdz7XviivJM9gcAAACFeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiQXR0cmlidXRpb25SZXBvcnRpbmdDcm9zc0FwcFdlYiIsImV4cGlyeSI6MTcwNzI2Mzk5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ\x3d\x3d')), Hq(Gq()) && (a.h[P.g.Jb] = "1")))
        },
        mr = function(a) {
            cr(a, ["conversion", "remarketing"]) && T(6) && al(P.g.H) && (!T(93) || al(P.g.Ma)) && !1 !== U(a.m, P.g.Fa) && !1 !== U(a.m, P.g.aa) && !1 !== U(a.m, P.g.Ib) && !1 !== U(a.m, P.g.Qa) && Jq() && (a.h[P.g.qg] = "1", a.metadata.send_fledge_experiment = !0)
        },
        nr = function(a) {
            var b = function(d) {
                return U(a.m, d)
            };
            a.metadata.conversion_linker_enabled = !1 !== b(P.g.za);
            var c = {
                prefix: b(P.g.Ka) || b(P.g.La),
                domain: b(P.g.Na),
                Eb: b(P.g.Ga),
                flags: b(P.g.Oa)
            };
            a.metadata.cookie_options = c;
            a.metadata.redact_ads_data = null != b(P.g.la) && !1 !== b(P.g.la);
            a.metadata.allow_ad_personalization = !1 !== b(P.g.aa)
        },
        or = function(a) {
            if (fq(a, "ccd_add_1p_data", !1) && al(P.g.H)) {
                var b = a.m.B[P.g.ae];
                if (jk(b)) {
                    var c = U(a.m, P.g.na);
                    null === c ? a.metadata.user_data_from_code = null : (b.enable_code && dd(c) &&
                        (a.metadata.user_data_from_code = c), dd(b.selectors) && (a.metadata.user_data_from_manual = ik(b.selectors)))
                }
            }
        },
        pr = function(a) {
            var b = !a.metadata.send_user_data_hit && cr(a, ["conversion", "user_data_web"]),
                c = !fq(a, "ccd_add_1p_data", !1) && cr(a, "user_data_lead");
            if ((b || c) && al(P.g.H)) {
                var d = "conversion" === a.metadata.hit_type,
                    e = a.m,
                    f = void 0,
                    g = U(e, P.g.na);
                if (d) {
                    var k = (U(e, P.g.Cd) || {})[a.h[P.g.fb]];
                    if (!0 === U(e, P.g.ud) || k) {
                        var m;
                        var n;
                        if (k) b: {
                            switch (k.enhanced_conversions_mode) {
                                case "manual":
                                    if (g && dd(g)) {
                                        n = g;
                                        break b
                                    }
                                    var p =
                                        k.enhanced_conversions_manual_var;
                                    n = void 0 !== p ? p : z.enhanced_conversion_data;
                                    break b;
                                case "automatic":
                                    n = ik(k[P.g.og]);
                                    break b
                            }
                            n = void 0
                        }
                        else n = z.enhanced_conversion_data;
                        var q = n,
                            r = (k || {}).enhanced_conversions_mode,
                            t;
                        if (q) {
                            if ("manual" === r) switch (q._tag_mode) {
                                case "CODE":
                                    t = "c";
                                    break;
                                case "AUTO":
                                    t = "a";
                                    break;
                                case "MANUAL":
                                    t = "m";
                                    break;
                                default:
                                    t = "c"
                            } else t = "automatic" === r ? kk(k) ? "a" : "m" : "c";
                            m = {
                                U: q,
                                Pj: t
                            }
                        } else m = {
                            U: q,
                            Pj: void 0
                        };
                        var u = m,
                            v = u.Pj;
                        f = u.U;
                        a.h[P.g.lf] = v
                    }
                } else if (a.m.isGtmEvent) {
                    br(a);
                    a.metadata.user_data =
                        g;
                    return
                }
                a.metadata.user_data = f
            }
        },
        qr = function(a) {
            cr(a, ["conversion", "remarketing"]) && (a.m.isGtmEvent ? "conversion" !== a.metadata.hit_type && a.eventName && (a.h[P.g.pg] = a.eventName) : a.h[P.g.pg] = a.eventName, l(a.m.h, function(b, c) {
                Wh[b.split(".")[0]] || (a.h[b] = c)
            }))
        },
        rr = function(a) {
            if (a.eventName === P.g.ka && (a.metadata.is_config_command = !0, cr(a, "conversion") && (a.metadata.speculative = !0), !cr(a, "remarketing") || !1 !== U(a.m, P.g.Ib) && !1 !== U(a.m, P.g.Qa) || (a.metadata.speculative = !0), cr(a, "landing_page"))) {
                var b = U(a.m,
                        P.g.hb),
                    c = U(a.m, P.g.Ba) || {},
                    d = U(a.m, P.g.lb),
                    e = a.metadata.conversion_linker_enabled,
                    f = a.metadata.cookie_options;
                Cq({
                    ih: e,
                    rj: b,
                    Dh: c,
                    Vh: d
                }, f);
                dq(a.target, a.m);
                Np({
                    Af: !1,
                    Oe: a.metadata.redact_ads_data,
                    Sh: a.target.id,
                    m: a.m,
                    vc: e ? f : void 0,
                    De: e,
                    uj: a.h[P.g.df],
                    Gf: a.h[P.g.yb],
                    Cf: a.h[P.g.xb]
                });
                a.isAborted = !0
            }
        },
        sr = function(a) {
            if (!fq(a, "hasPreAutoPiiCcdRule", !1) && cr(a, "conversion") && al(P.g.H)) {
                var b = (U(a.m, P.g.Cd) || {})[a.h[P.g.fb]],
                    c = a.h[P.g.Lc],
                    d;
                if (!(d = kk(b)))
                    if (Vi() && Ij)
                        if (Jj) d = !0;
                        else {
                            var e = $i("AW-" + c);
                            d = !!e &&
                                !!e.preAutoPii
                        }
                else d = !1;
                if (d) {
                    var f = Ta(),
                        g = fk({
                            wc: !0,
                            xc: !0,
                            Tf: !0
                        });
                    if (0 !== g.elements.length) {
                        for (var k = [], m = 0; m < g.elements.length; ++m) {
                            var n = g.elements[m];
                            k.push(n.querySelector + "*" + gk(n) + "*" + n.type)
                        }
                        a.h[P.g.Mg] = k.join("~");
                        var p = g.Me;
                        p && (a.h[P.g.Ng] = p.querySelector, a.h[P.g.Lg] = gk(p));
                        a.h[P.g.Kg] = String(Ta() - f);
                        a.h[P.g.Og] = g.status
                    }
                }
            }
        },
        tr = function(a) {
            if (a.eventName === P.g.Ja && !a.m.isGtmEvent) {
                if (!a.metadata.consent_updated && cr(a, "conversion")) {
                    var b = U(a.m, P.g.ib);
                    if ("function" !== typeof b) return;
                    var c =
                        String(U(a.m, P.g.Pa)),
                        d = a.h[c],
                        e = U(a.m, c);
                    c === P.g.ub || c === P.g.hc ? Dq({
                        Wh: c,
                        callback: b,
                        Gh: e
                    }, a.metadata.cookie_options, a.metadata.redact_ads_data, vq) : b(d || e)
                }
                a.isAborted = !0
            }
        },
        ur = function(a) {
            if (cr(a, "conversion") && al(P.g.H) && (a.h[P.g.sc] || a.h[P.g.mc])) {
                var b = a.h[P.g.fb],
                    c = J(a.metadata.cookie_options),
                    d = tp(c.prefix);
                c.prefix = "_gcl" === d ? "" : d;
                if (a.h[P.g.sc]) {
                    var e = Yq(b, c);
                    e && (a.h[P.g.Qg] = e)
                }
                if (a.h[P.g.mc]) {
                    var f = Uq(b, c).il;
                    f && (a.h[P.g.vg] = f)
                }
            }
        },
        vr = function(a) {
            var b = T(4),
                c = a.m,
                d, e, f;
            if (!b) {
                var g = bm(c, P.g.X);
                d = cb(dd(g) ? g : {})
            }
            var k = bm(c, P.g.X, 1),
                m = bm(c, P.g.X, 2);
            e = cb(dd(k) ? k : {}, ".");
            f = cb(dd(m) ? m : {}, ".");
            b || (a.h[P.g.df] = d);
            a.h[P.g.yb] = e;
            a.h[P.g.xb] = f
        },
        wr = function(a) {
            if (cr(a, ["conversion", "remarketing"])) {
                var b = "conversion" === a.metadata.hit_type;
                b && a.eventName !== P.g.ra || (a.copyToHitData(P.g.W), b && (a.copyToHitData(P.g.yd), a.copyToHitData(P.g.wd), a.copyToHitData(P.g.xd), a.copyToHitData(P.g.vd), a.h[P.g.jg] = a.eventName))
            }
        },
        xr = function(a) {
            if (cr(a, ["conversion", "remarketing"])) {
                var b = a.m,
                    c = U(b, P.g.Nb);
                if (!0 ===
                    c || !1 === c) a.h[P.g.Nb] = c;
                var d = U(b, P.g.aa);
                if (!0 === d || !1 === d) a.h[P.g.ee] = !d;
                !1 === d && cr(a, "remarketing") && (a.isAborted = !0)
            }
        },
        yr = function(a) {
            cr(a, "conversion") && (a.copyToHitData(P.g.Rc), a.copyToHitData(P.g.zd), a.copyToHitData(P.g.Vc), a.copyToHitData(P.g.Dd), a.copyToHitData(P.g.wb), a.copyToHitData(P.g.Oc))
        },
        zr = function(a) {
            iq(a);
        },
        Ar = function(a) {
            if (cr(a, ["conversion", "remarketing"]) && z.__gsaExp && z.__gsaExp.id) {
                var b = z.__gsaExp.id;
                if (Da(b)) try {
                    var c = Number(b());
                    isNaN(c) || (a.h[P.g.zg] = c)
                } catch (d) {}
            }
        },
        Br = function(a) {
            if (cr(a, ["conversion", "remarketing"])) {
                var b = Zq();
                void 0 !== b && (a.h[P.g.Pg] = b || "error");
                var c = Zn();
                c && (a.h[P.g.Jd] = c);
                var d = Yn();
                d && (a.h[P.g.Rd] = d)
            }
        },
        Cr = function(a) {
            cr(a, ["conversion"]) && "1" === Lo(!1)._up && (a.h[P.g.Md] = !0)
        },
        Dr = function(a) {
            cr(a, ["conversion"]) && (a.metadata.redact_click_ids = !!a.metadata.redact_ads_data && !al(P.g.H))
        },
        Er = function(a) {
            if (cr(a, ["conversion", "user_data_lead", "user_data_web"]) && al(P.g.H) && a.metadata.conversion_linker_enabled) {
                var b =
                    a.metadata.cookie_options,
                    c = tp(b.prefix);
                "_gcl" === c && (c = "");
                var d = c;
                if (Oq.test(F.location.host) ? Rq.test(F.location.href) || Pq.test(F.location.href) : !Jp(d)) {
                    var e = Wq(c);
                    e && (a.h[P.g.ub] = e);
                    if (!c) {
                        var f = Tq(mp() ? ip() : {}, Pq);
                        f && (a.h[P.g.Id] = f)
                    }
                } else {
                    var g = Xq(c);
                    g && (a.h[P.g.sc] = g);
                    if (!c) {
                        var k = a.h[P.g.fb];
                        b = J(b);
                        b.prefix = c;
                        var m = Uq(k, b, !0).fl;
                        m && (a.h[P.g.mc] = m)
                    }
                }
            }
        },
        Fr = function(a) {
            if (cr(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"]) && a.metadata.conversion_linker_enabled && al(P.g.H)) {
                var b = !T(3);
                if ("remarketing" !== a.metadata.hit_type || b) {
                    var c = a.metadata.cookie_options;
                    cp(c, "conversion" === a.metadata.hit_type && a.eventName !== P.g.Ja);
                    a.h[P.g.hc] = Zo(c.prefix)
                }
            }
        },
        Gr = function(a) {
            if (cr(a, ["conversion"])) {
                var b = lq(a.metadata.cookie_options);
                if (b && !a.h[P.g.ma]) {
                    var c = dn(a.h[P.g.fb]);
                    a.h[P.g.ma] = c
                }
                b && (a.h[P.g.kb] = b, a.metadata.send_ccm_parallel_ping = !0)
            }
        },
        Hr = function(a) {
            var b = !al(P.g.H);
            switch (a.metadata.hit_type) {
                case "user_data_lead":
                case "user_data_web":
                    a.isAborted = !(!b && !a.metadata.consent_updated);
                    break;
                case "remarketing":
                    a.isAborted = b;
                    break;
                case "conversion":
                    a.metadata.consent_updated && (a.h[P.g.nd] = !0)
            }
        },
        Ir = function(a) {
            cr(a, ["conversion"]) && a.m.eventMetadata.is_external_event && (a.h[P.g.Yi] = !0)
        },
        Jr = function(a) {
            var b;
            if ("gtag.config" !== a.eventName && a.metadata.send_user_data_hit) switch (a.metadata.hit_type) {
                case "user_data_web":
                    b = 97;
                    br(a);
                    break;
                case "user_data_lead":
                    b = 98;
                    br(a);
                    break;
                case "conversion":
                    b = 99
            }!a.metadata.speculative && b && N(b);
            !0 === a.metadata.speculative && (a.isAborted = !0)
        },
        jr = !1,
        kr = !1;
    var Kr = {
        F: {
            Yh: "ads_conversion_hit",
            Zf: "container_execute_start",
            ai: "container_setup_end",
            ag: "container_setup_start",
            Zh: "container_execute_end",
            bi: "container_yield_end",
            cg: "container_yield_start",
            Ti: "event_execute_end",
            Si: "event_evaluation_end",
            Rg: "event_evaluation_start",
            Ui: "event_setup_end",
            be: "event_setup_start",
            Vi: "ga4_conversion_hit",
            fe: "page_load",
            Qm: "pageview",
            Rb: "snippet_load",
            fj: "tag_callback_error",
            gj: "tag_callback_failure",
            ij: "tag_callback_success",
            jj: "tag_execute_end",
            Xc: "tag_execute_start"
        }
    };

    function Lr() {
        function a(c, d) {
            var e = wb(d);
            e && b.push(c + "=" + e)
        }
        var b = [];
        a("&u", "GTM");
        a("&ut", "TAGGING");
        a("&h", "HEALTH");
        return b.join("")
    };
    var Mr = !1,
        Nr = "L S Y E EC TC HTC".split(" "),
        Or = ["S", "V", "E"],
        Pr = ["TS", "TI", "TE"];
    var rs = function(a) {},
        ss = function(a) {},
        ts = function() {},
        us = function(a, b) {},
        vs = function(a, b) {},
        ws = function(a, b) {},
        xs = function(a, b) {},
        Qr = function(a, b, c, d, e, f) {
            var g;
            g = void 0 === g ? !1 : g;
            var k = {};
            return k
        },
        Rr = function(a) {
            var b = !1;
            return b
        },
        Sr = function(a, b) {},
        ys = function() {
            var a = {};
            return a
        },
        ks = function(a) {
            a = void 0 === a ? !0 : a;
            var b = {};
            return b
        },
        zs = function() {},
        As = function(a, b) {},
        Bs = function(a, b, c) {},
        Cs = function() {
            var a = Qr("PAGEVIEW", rl());
            if (bs(a.entry, "mark")[0]) {
                var b = Mc();
                b.clearMarks(a.entry);
                b.clearMeasures("GTM-" + rl() + ":" + Kr.F.fe + ":to:PAGEVIEW")
            }
            var c = Qr(Kr.F.fe, rl());
            Rr(a) && Sr(a, c)
        };
    var Ds = function(a, b) {
        var c = z,
            d, e = c.GooglebQhCsO;
        e || (e = {}, c.GooglebQhCsO = e);
        d = e;
        if (d[a]) return !1;
        d[a] = [];
        d[a][0] = b;
        return !0
    };
    var Es = function(a, b, c) {
        var d = vn(a, "fmt");
        if (b) {
            var e = vn(a, "random"),
                f = vn(a, "label") || "";
            if (!e) return !1;
            var g = go(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!Ds(g, b)) return !1
        }
        d && 4 != d && (a = xn(a, "rfmt", d));
        var k = xn(a, "fmt", 4);
        yc(k, function() {
            z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b())
        }, void 0, c, F.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var Fs = function(a) {
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = a[c],
                    e = void 0;
                if (d.hasOwnProperty("google_business_vertical")) {
                    e = d.google_business_vertical;
                    var f = {};
                    b[e] = b[e] || (f.google_business_vertical = e, f)
                } else e = "", b.hasOwnProperty(e) || (b[e] = {});
                var g = b[e],
                    k;
                for (k in d) "google_business_vertical" !== k && (k in g || (g[k] = []), g[k].push(d[k]))
            }
            return Object.keys(b).map(function(m) {
                return b[m]
            })
        },
        Gs = function(a) {
            if (!a || !a.length) return [];
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                if (d) {
                    var e = {};
                    b.push((e.id =
                        d.id, e.origin = d.origin, e.destination = d.destination, e.start_date = d.start_date, e.end_date = d.end_date, e.location_id = d.location_id, e.google_business_vertical = d.google_business_vertical, e))
                }
            }
            return b
        },
        Hs = function(a) {
            if (!a || !a.length) return [];
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d && b.push({
                    item_id: d.id,
                    quantity: d.quantity,
                    value: d.price,
                    start_date: d.start_date,
                    end_date: d.end_date
                })
            }
            return b
        },
        Js = function(a) {
            if (!a) return "";
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = [];
                d && (e.push(Is(d.value)), e.push(Is(d.quantity)),
                    e.push(Is(d.item_id)), e.push(Is(d.start_date)), e.push(Is(d.end_date)), b.push("(" + e.join("*") + ")"))
            }
            return 0 < b.length ? b.join("") : ""
        },
        Is = function(a) {
            return "number" !== typeof a && "string" !== typeof a ? "" : a.toString()
        },
        Ls = function(a, b) {
            var c = Ks(b);
            return "" + a + (a && c ? ";" : "") + c
        },
        Ks = function(a) {
            if (!a || "object" !== typeof a || "function" === typeof a.join) return "";
            var b = [];
            l(a, function(c, d) {
                var e, f;
                if (Fa(d)) {
                    for (var g = [], k = 0; k < d.length; ++k) {
                        var m = Ms(d[k]);
                        void 0 != m && g.push(m)
                    }
                    f = 0 !== g.length ? g.join(",") : void 0
                } else f =
                    Ms(d);
                e = f;
                var n = Ms(c);
                n && void 0 != e && b.push(n + "=" + e)
            });
            return b.join(";")
        },
        Ms = function(a) {
            var b = typeof a;
            if (null != a && "object" !== b && "function" !== b) return String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
        },
        Ns = function(a, b) {
            var c = [],
                d = function(f, g) {
                    null != g && "" !== g && (!0 === g && (g = 1), !1 === g && (g = 0), c.push(f + "=" + encodeURIComponent(g)))
                },
                e = a.metadata.hit_type;
            "conversion" !== e && "remarketing" !== e || d("random", a.metadata.event_start_timestamp_ms);
            l(b, d);
            return c.join("&")
        },
        Os = function(a, b) {
            var c =
                a.metadata.hit_type,
                d = a.h[P.g.Lc],
                e = al(P.g.H),
                f = [],
                g, k = a.m.onSuccess,
                m, n = kn() ? 2 : 3,
                p = 0,
                q = function(w) {
                    f.push(w);
                    w.qb && p++
                };
            switch (c) {
                case "conversion":
                    m = "pagead/conversion";
                    var r = "";
                    e ? a.metadata.is_gcp_conversion ? (g = "https://www.google.com/", m = "pagead/1p-conversion") : g = "https://www.googleadservices.com/" : g = "https://pagead2.googlesyndication.com/";
                    a.metadata.is_gcp_conversion && (r = "&gcp=1&sscte=1&ct_cookie_present=1");
                    q({
                        Db: "" + g + m + "/" + d + "/?" + Ns(a, b) + r,
                        format: n,
                        qb: !0,
                        attributes: {
                            attributionsrc: ""
                        }
                    });
                    a.metadata.send_ccm_parallel_ping &&
                        q({
                            Db: "" + g + "ccm/conversion/" + d + "/?" + Ns(a, b) + r,
                            format: 2,
                            qb: !0
                        });
                    a.metadata.is_gcp_conversion && (r = "&gcp=1&ct_cookie_present=1", q({
                        Db: "" + (e ? "https://googleads.g.doubleclick.net/" : g) + "pagead/viewthroughconversion/" + d + "/?" + Ns(a, b) + r,
                        format: n,
                        qb: !0
                    }));
                    break;
                case "remarketing":
                    var t = b.data || "",
                        u = Fs(Gs(a.h[P.g.W]));
                    if (u.length) {
                        for (var v = 0; v < u.length; v++) b.data = Ls(t, u[v]), q({
                                Db: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" + d + "/?" + Ns(a, b),
                                format: n,
                                qb: !0
                            }), a.metadata.send_fledge_experiment &&
                            q({
                                Db: Lq() + "/td/rul/" + d + "?" + Ns(a, b),
                                format: 4,
                                qb: !1
                            }), a.metadata.event_start_timestamp_ms += 1;
                        a.metadata.send_fledge_experiment = !1
                    } else q({
                        Db: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" + d + "/?" + Ns(a, b),
                        format: n,
                        qb: !0
                    });
                    break;
                case "user_data_lead":
                    q({
                        Db: "https://google.com/pagead/form-data/" + d + "?" + Ns(a, b),
                        format: 1,
                        qb: !0
                    });
                    break;
                case "user_data_web":
                    q({
                        Db: "https://google.com/ccm/form-data/" + d + "?" + Ns(a, b),
                        format: 1,
                        qb: !0
                    })
            }
            1 < f.length && Da(a.m.onSuccess) && (k = db(a.m.onSuccess, p));
            kn() ||
                "conversion" !== c && "remarketing" !== c || !a.metadata.send_fledge_experiment || q({
                    Db: Lq() + "/td/rul/" + d + "?" + Ns(a, b),
                    format: 4,
                    qb: !1
                });
            return {
                onSuccess: k,
                xl: f
            }
        },
        Ps = function(a, b, c, d, e, f) {
            ss(c);
            var g = function() {
                e && e()
            };
            switch (b) {
                case 1:
                    Ic(a);
                    e && e();
                    break;
                case 2:
                    Bc(a, g, void 0, f);
                    break;
                case 3:
                    var k = !1;
                    try {
                        k = Es(a, g, f)
                    } catch (p) {
                        k = !1
                    }
                    k || Ps(a, 2, c, d, g, f);
                    break;
                case 4:
                    var m = "AW-" + c.h[P.g.Lc],
                        n = c.h[P.g.fb];
                    n && (m = m + "/" + n);
                    Kq(a, m)
            }
        },
        Qs = {},
        Rs = (Qs[P.g.nd] = "gcu", Qs[P.g.ub] = "gclaw", Qs[P.g.hc] = "auid", Qs[P.g.vd] = "dscnt", Qs[P.g.wd] =
            "fcntr", Qs[P.g.xd] = "flng", Qs[P.g.yd] = "mid", Qs[P.g.jg] = "bttype", Qs[P.g.fb] = "label", Qs[P.g.Jb] = "capi", Qs[P.g.sa] = "currency_code", Qs[P.g.zd] = "vdltv", Qs[P.g.yi] = "_dbg", Qs[P.g.Dd] = "oedeld", Qs[P.g.xb] = "edid", Qs[P.g.qg] = "fledge", Qs[P.g.Id] = "gac", Qs[P.g.mc] = "gacgb", Qs[P.g.vg] = "gacmcov", Qs[P.g.Jd] = "gdpr", Qs[P.g.yb] = "gdid", Qs[P.g.zg] = "gsaexp", Qs[P.g.Ag] = "frm", Qs[P.g.Md] = "gtm_up", Qs[P.g.df] = "did", Qs[P.g.Rc] = void 0, Qs[P.g.Bb] = "tiba", Qs[P.g.Nb] = "rdp", Qs[P.g.kb] = "ecsid", Qs[P.g.Vc] = "delopc", Qs[P.g.Rd] = "gdpr_consent",
            Qs[P.g.ma] = "oid", Qs[P.g.Kg] = "ec_lat", Qs[P.g.Lg] = "ec_meta", Qs[P.g.Mg] = "ec_m", Qs[P.g.Ng] = "ec_sel", Qs[P.g.Og] = "ec_s", Qs[P.g.lf] = "ec_mode", Qs[P.g.Ca] = "userId", Qs[P.g.Pg] = "us_privacy", Qs[P.g.ba] = "value", Qs[P.g.sc] = "gclgb", Qs[P.g.Qg] = "mcov", Qs[P.g.Xi] = "hn", Qs[P.g.Yi] = "gtm_ee", Qs[P.g.ee] = "npa", Qs[P.g.Lc] = null, Qs[P.g.Cb] = null, Qs[P.g.Aa] = null, Qs[P.g.W] = null, Qs[P.g.wa] = null, Qs[P.g.Ha] = null, Qs[P.g.jf] = null, Qs),
        Ts = function(a) {
            Ss(a, function(b) {
                for (var c = Os(a, b), d = c.onSuccess, e = c.xl, f = 0; f < e.length; f++) {
                    var g = e[f];
                    Ps(g.Db, g.format, a, b, g.qb ? d : void 0, g.attributes)
                }
            })
        },
        Ss = function(a, b) {
            var c = a.metadata.hit_type,
                d = {},
                e = {},
                f = [],
                g = a.metadata.event_start_timestamp_ms;
            if ("conversion" === c || "remarketing" === c) d.cv = "11", d.fst = g, d.fmt = 3, d.bg = "ffffff", d.guid = "ON", d.async = "1";
            d.gtm = mn();
            Nk() && (T(49) || "remarketing" !== c) && (d.gcs = vm(), T(51) || "remarketing" !== c && Ok()) && (d.gcd = zm(a.m));
            T(53) && (bl() && (d.dma_cps = Am()), d.dma = Ti() ? "1" : "0");
            if (a.h[P.g.Cb]) {
                var k = a.h[P.g.Cb].split("x");
                2 === k.length && (d.u_w = k[0], d.u_h = k[1])
            }
            if (a.h[P.g.Aa]) {
                var m =
                    a.h[P.g.Aa];
                2 === m.length ? d.hl = m : 5 === m.length && (d.hl = m.substring(0, 2), d.gl = m.substring(3, 5))
            }
            var n = a.metadata.redact_click_ids,
                p = function(w, x) {
                    var y = a.h[x];
                    y && (d[w] = n ? sj(y) : y)
                };
            p("url", P.g.wa);
            p("ref", P.g.Ha);
            p("top", P.g.jf);
            T(8) && (Rs[P.g.Sd] = "uaa", Rs[P.g.Td] = "uab", Rs[P.g.Ud] = "uafvl", Rs[P.g.Vd] = "uamb", Rs[P.g.Wd] = "uam", Rs[P.g.Xd] = "uap", Rs[P.g.Yd] = "uapv", Rs[P.g.Zd] = "uaw");
            l(a.h, function(w, x) {
                if (Rs.hasOwnProperty(w)) {
                    var y = Rs[w];
                    y && (d[y] = x)
                } else e[w] = x
            });
            var q = a.h[P.g.Rc];
            void 0 != q && "" !== q && (d.vdnc = String(q));
            var r = a.h[P.g.Oc];
            void 0 !== r && (d.shf = r);
            var t = a.h[P.g.wb];
            void 0 !== t && (d.delc = t);
            d.data = Ks(e);
            var u = a.h[P.g.W];
            u && "conversion" === c && (d.iedeld = mk(u), d.item = Js(Hs(u)));
            if (("conversion" === c || "user_data_lead" === c || "user_data_web" === c) && a.metadata.user_data && (!T(29) || al(P.g.H))) {
                var v = Ih(a.metadata.user_data);
                v && f.push(v.then(function(w) {
                    d.em = w.Mf;
                    if ("user_data_web" === c && 0 < w.Yl) {
                        var x = mq(a.metadata.cookie_options);
                        d.ecsid = x
                    }
                }))
            }
            if (f.length) try {
                Promise.all(f).then(function() {
                    b(d)
                });
                return
            } catch (w) {}
            b(d)
        };
    var Us = function() {
            this.h = {}
        },
        Vs = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        Ws = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        Ys = function(a, b, c, d) {
            if (!Nk()) {
                Xs(a, b, c, d);
                return
            }
            el(function() {
                al(P.g.H) ? Xs(a, b, c, d) : d && d()
            }, [P.g.H]);
        };
    var Zs = function(a, b, c) {
            c = void 0 === c ? !0 : c;
            var d = {
                    gclgb: function() {
                        return rq("gb", b, c).join(".")
                    },
                    gacgb: function() {
                        return yq(c)
                    },
                    gclaw: function() {
                        return vq(b, c).join(".")
                    },
                    gac: function() {
                        return xq(c)
                    }
                },
                e = Aq(b),
                f = e ? "gclgb" : "gclaw",
                g = e ? "gacgb" : "gac",
                k = d[g],
                m = (0, d[f])(),
                n = "_gcl" !== b ? "" : k();
            m && Vs(a, f, m);
            n && Vs(a, g, n)
        },
        Xs = function(a, b, c, d) {
            c = c || {};
            var e = c.vc || {},
                f = new Us;
            Hh(b, function(g, k) {
                Vs(f, "em", g);
                Vs(f, "gtm", mn());
                Nk() && (Vs(f, "gcs", vm()), Vs(f, "gcd", zm()));
                T(53) && (bl() && Vs(f, "dma_cps", Am()), Vs(f, "dma",
                    Ti() ? "1" : "0"));
                Zs(f, tp(e.prefix), c.Oe);
                Vs(f, "auid", Zo(e.prefix));
                if (0 < k) {
                    var m = mq(e);
                    Vs(f, "ecsid", m)
                }
                var n = Ws(f);
                Ic("https://google.com/pagead/form-data/" + a + "?" + n);
                Ic("https://google.com/ccm/form-data/" + a + "?" + n);
                d && d()
            })
        };

    function $s(a, b) {
        if (data.entities && data.entities[a]) return data.entities[a][b]
    };
    var bt = function(a, b) {
            at(a).entity.push(b)
        },
        ct = function(a, b) {
            at(a).event && at(a).event.push(b)
        },
        dt = function() {
            var a = at(sl());
            return a.event ? a.event : []
        };

    function at(a) {
        var b, c = $h.r;
        c || (c = {
            container: {}
        }, $h.r = c);
        b = c;
        var d = b.container[a];
        d || (d = {
            entity: [],
            event: []
        }, b.container[a] = d);
        return d
    };
    var et = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        ft = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        gt = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        ht = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        kt = function(a) {
            var b = zi("gtm.allowlist") || zi("gtm.whitelist");
            b && N(9);
            fi && (b = ["google", "gtagfl", "lcl", "zone"]);
            it() && (fi ?
                N(116) : N(117), jt && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
            var c = b && Za(Qa(b), ft),
                d = zi("gtm.blocklist") || zi("gtm.blacklist");
            d || (d = zi("tagTypeBlacklist")) && N(3);
            d ? N(8) : d = [];
            it() && (d = Qa(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Qa(d).indexOf("google") && N(2);
            var e = d && Za(Qa(d), gt),
                f = {};
            return function(g) {
                var k = g && g[Ae.xa];
                if (!k || "string" != typeof k) return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== f[k]) return f[k];
                var m = ri[k] || [],
                    n = a(k, m),
                    p;
                p = at(sl()).entity;
                for (var q = 0; q < p.length; q++) try {
                    n = n && p[q](k, m)
                } catch (y) {
                    n = !1
                }
                if (b) {
                    var r;
                    if (r = n) a: {
                        if (0 > c.indexOf(k))
                            if (m && 0 < m.length)
                                for (var t = 0; t < m.length; t++) {
                                    if (0 > c.indexOf(m[t])) {
                                        N(11);
                                        r = !1;
                                        break a
                                    }
                                } else {
                                    r = !1;
                                    break a
                                }
                        r = !0
                    }
                    n = r
                }
                var u = !1;
                if (d) {
                    var v = 0 <= e.indexOf(k);
                    if (v) u = v;
                    else {
                        var w = La(e, m || []);
                        w && N(10);
                        u = w
                    }
                }
                var x = !n || u;
                x || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = La(e, ht));
                return f[k] = x
            }
        },
        jt = !1;
    var it = function() {
            return et.test(z.location && z.location.hostname)
        },
        lt = function() {
            ll && bt(sl(), function(a) {
                var b = mf(a),
                    c;
                if (rf(b)) {
                    var d = b[Ae.xa];
                    if (!d) throw "Error: No function name given for function call.";
                    var e = df[d];
                    c = !!e && !!e.runInSiloedMode
                } else c = !!$s(b[Ae.xa], 4);
                return c
            })
        };

    function mt(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return rj("" + c + b).href
        }
    }

    function nt() {
        return !!Zh.uf && "SGTM_TOKEN" !== Zh.uf.split("@@").join("")
    }

    function ot(a) {
        for (var b = ea([P.g.Od, P.g.Pb]), c = b.next(); !c.done; c = b.next()) {
            var d = U(a, c.value);
            if (d) return d
        }
    };
    var qt = function(a, b, c, d, e) {
            if (!pt() && !yl(a)) {
                var f = "?id=" + encodeURIComponent(a) + "&l=" + Zh.ja,
                    g = 0 === a.indexOf("GTM-");
                g || (f += "&cx=c");
                T(73) && (f += "&gtm=" + mn());
                var k = nt();
                k && (f += "&sign=" + Zh.uf);
                var m = c ? "/gtag/js" : "/gtm.js",
                    n = hi || ji ? mt(b, m + f) : void 0;
                if (!n) {
                    var p = Zh.Te + m;
                    k && rc && g && (p = rc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    n = Tp("https://", "http://", p + f)
                }
                var q = a;
                d.siloed && (Al({
                    ctid: q,
                    isDestination: !1
                }), q = ml(q));
                var r = q,
                    t = zl();
                hl().container[r] = {
                    state: 1,
                    context: d,
                    parent: t
                };
                il({
                        ctid: r,
                        isDestination: !1
                    },
                    e);
                yc(n)
            }
        },
        rt = function(a, b, c) {
            var d;
            if (d = !pt()) {
                var e = hl().destination[a];
                d = !(e && e.state)
            }
            if (d)
                if (Bl()) hl().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c,
                    parent: zl()
                }, il({
                    ctid: a,
                    isDestination: !0
                }), N(91);
                else {
                    var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + Zh.ja + "&cx=c";
                    T(73) && (f += "&gtm=" + mn());
                    nt() && (f += "&sign=" + Zh.uf);
                    var g = hi || ji ? mt(b, f) : void 0;
                    g || (g = Tp("https://", "http://", Zh.Te + f));
                    var k = a;
                    c.siloed && (Al({
                        ctid: k,
                        isDestination: !0
                    }), k = ml(k));
                    hl().destination[k] = {
                        state: 1,
                        context: c,
                        parent: zl()
                    };
                    il({
                        ctid: k,
                        isDestination: !0
                    });
                    yc(g)
                }
        };

    function pt() {
        if (kn()) {
            return !0
        }
        return !1
    };
    var st = "",
        tt = [];

    function ut(a) {
        var b = "";
        st && (b = "&dl=" + encodeURIComponent(st));
        0 < tt.length && (b += "&tdp=" + tt.join("."));
        a.Xb && (st = "", tt.length = 0, b && a.Kj());
        return b
    };
    var vt = [];

    function wt(a) {
        if (!vt.length) return "";
        var b = "&tdc=" + vt.join("!");
        a.Xb && (a.Kj(), vt.length = 0);
        return b
    };
    var xt = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        zt = {},
        At = Object.freeze((zt[P.g.Qa] = !0, zt)),
        Bt = 0 <= F.location.search.indexOf("?gtm_diagnostics=") || 0 <= F.location.search.indexOf("&gtm_diagnostics="),
        Dt = function(a, b, c) {
            if (Ll && "config" === a && !(1 < Qp(b).K.length)) {
                var d, e = sc("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = J(c.D);
                J(c.h, f);
                var g = [],
                    k;
                for (k in d) {
                    var m = Ct(d[k], f);
                    m.length && (Bt && console.log(m), g.push(k))
                }
                g.length && (g.length && Ll && vt.push(b + "*" + g.join(".")), ub("TAGGING", xt[F.readyState] ||
                    14));
                d[b] = f
            }
        };

    function Et(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function Ct(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, r) {
                var t = r[q];
                return void 0 === t ? At[q] : t
            },
            f;
        for (f in Et(a, b)) {
            var g = (d ? d + "." : "") + f,
                k = e(f, a),
                m = e(f, b),
                n = "object" === bd(k) || "array" === bd(k),
                p = "object" === bd(m) || "array" === bd(m);
            if (n && p) Ct(k, m, c, g);
            else if (n || p || k !== m) c[g] = !0
        }
        return Object.keys(c)
    };
    var Ft = !1,
        Gt = 0,
        Ht = [];

    function It(a) {
        if (!Ft) {
            var b = F.createEventObject,
                c = "complete" == F.readyState,
                d = "interactive" == F.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Ft = !0;
                for (var e = 0; e < Ht.length; e++) I(Ht[e])
            }
            Ht.push = function() {
                for (var f = 0; f < arguments.length; f++) I(arguments[f]);
                return 0
            }
        }
    }

    function Jt() {
        if (!Ft && 140 > Gt) {
            Gt++;
            try {
                F.documentElement.doScroll("left"), It()
            } catch (a) {
                z.setTimeout(Jt, 50)
            }
        }
    }
    var Kt = function(a) {
        Ft ? a() : Ht.push(a)
    };
    var Mt = function(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: rl()
        }
    };
    var Ot = function(a, b) {
            this.h = !1;
            this.D = [];
            this.M = {
                tags: []
            };
            this.R = !1;
            this.B = this.C = 0;
            Nt(this, a, b)
        },
        Pt = function(a, b, c, d) {
            if (ci.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            dd(d) && (e = J(d, e));
            e.id = c;
            e.status = "timeout";
            return a.M.tags.push(e) - 1
        },
        Qt = function(a, b, c, d) {
            var e = a.M.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Rt = function(a) {
            if (!a.h) {
                for (var b = a.D, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.D.length = 0
            }
        },
        Nt = function(a, b, c) {
            void 0 !== b && a.wf(b);
            c && z.setTimeout(function() {
                return Rt(a)
            }, Number(c))
        };
    Ot.prototype.wf = function(a) {
        var b = this,
            c = Va(function() {
                return I(function() {
                    a(rl(), b.M)
                })
            });
        this.h ? c() : this.D.push(c)
    };
    var St = function(a) {
            a.C++;
            return Va(function() {
                a.B++;
                a.R && a.B >= a.C && Rt(a)
            })
        },
        Tt = function(a) {
            a.R = !0;
            a.B >= a.C && Rt(a)
        };
    var Ut = {},
        Wt = function() {
            return z[Vt()]
        },
        Xt = !1;
    var Yt = function(a) {
            z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
            var b = z.GoogleAnalyticsObject;
            if (z[b]) z.hasOwnProperty(b);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Sa());
                z[b] = c
            }
            return z[b]
        },
        Zt = function(a) {
            if (Nk()) {
                var b = Wt();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        };

    function Vt() {
        return z.GoogleAnalyticsObject || "ga"
    }
    var $t = function(a) {},
        au = function(a, b) {
            return function() {
                var c = Wt(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            k = f.get("hitCallback"),
                            m = 0 > g.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var fu = {},
        gu = {};

    function hu(a, b) {
        if (Ll) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            fu[a] = "&e=" + c + "&eid=" + a;
            Vl(a)
        }
    }

    function iu(a) {
        var b = a.eventId,
            c = a.Xb;
        if (!fu[b]) return "";
        var d = gu[b] ? "" : "&es=1";
        d += fu[b];
        c && (gu[b] = !0);
        return d
    };
    var ju = {};

    function ku(a, b) {
        Ll && (ju[a] = ju[a] || {}, ju[a][b] = (ju[a][b] || 0) + 1)
    }

    function lu(a) {
        var b = a.eventId,
            c = a.Xb,
            d = ju[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete ju[b];
        return e.length ? "&md=" + e.join(".") : ""
    };
    var mu = {},
        nu = {
            aev: "1",
            c: "2",
            jsm: "3",
            v: "4",
            j: "5",
            smm: "6",
            rmm: "7",
            input: "8"
        };

    function ou(a, b, c) {
        if (Ll) {
            mu[a] = mu[a] || [];
            var d = nu[b] || "0",
                e;
            e = c instanceof z.Element ? "1" : c instanceof z.Event ? "2" : c instanceof z.RegExp ? "3" : c === z ? "4" : c === F ? "5" : c instanceof z.Promise ? "6" : c instanceof z.Storage ? "7" : c instanceof z.Date ? "8" : c instanceof z.History ? "9" : c instanceof z.Performance ? "a" : c === z.crypto ? "b" : c instanceof z.Location ? "c" : c instanceof z.Navigator ? "d" : "object" !== typeof c || dd(c) ? "0" : "e";
            mu[a].push("" + d + e)
        }
    }

    function pu(a) {
        var b = a.eventId,
            c = mu[b] || [];
        if (!c.length) return "";
        a.Xb && delete mu[b];
        return "&pcr=" + c.join(".")
    };
    var qu = {},
        ru = {};

    function su(a, b, c) {
        if (Ll && b) {
            var d = fl(b);
            qu[a] = qu[a] || [];
            qu[a].push(c + d);
            var e = (rf(b) ? "1" : "2") + d;
            ru[a] = ru[a] || [];
            ru[a].push(e);
            Vl(a)
        }
    }

    function tu(a) {
        var b = a.eventId,
            c = a.Xb,
            d = "",
            e = qu[b] || [];
        e.length && (d += "&tr=" + e.join("."));
        var f = ru[b] || [];
        f.length && (d += "&ti=" + f.join("."));
        c && (delete qu[b], delete ru[b]);
        return d
    };

    function uu(a, b, c, d) {
        var e = bf[a],
            f = vu(a, b, c, d);
        if (!f) return null;
        var g = of (e[Ae.ej], c, []);
        if (g && g.length) {
            var k = g[0];
            f = uu(k.index, {
                onSuccess: f,
                onFailure: 1 === k.vj ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function vu(a, b, c, d) {
        function e() {
            if (f[Ae.Ek]) k();
            else {
                var w = pf(f, c, []),
                    x = w[Ae.Uj];
                if (null != x)
                    for (var y = 0; y < x.length; y++)
                        if (!al(x[y])) {
                            k();
                            return
                        }
                var A = Pt(c.Sb, String(f[Ae.xa]), Number(f[Ae.ke]), w[Ae.Fk]),
                    B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var K = Ta() - G;
                        su(c.id, bf[a], "5");
                        Qt(c.Sb, A, "success", K);
                        T(30) && Bs(c, f, Kr.F.ij);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var K = Ta() - G;
                        su(c.id, bf[a], "6");
                        Qt(c.Sb, A, "failure", K);
                        T(30) && Bs(c, f, Kr.F.gj);
                        k()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId =
                    c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                su(c.id, f, "1");
                var C = function() {
                    Oi(3);
                    var K = Ta() - G;
                    su(c.id, f, "7");
                    Qt(c.Sb, A, "exception", K);
                    T(30) && Bs(c, f, Kr.F.fj);
                    B || (B = !0, k())
                };
                T(30) && As(c, f);
                var G = Ta();
                try {
                    nf(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (K) {
                    C(K)
                }
                T(30) && Bs(c, f, Kr.F.jj)
            }
        }
        var f = bf[a],
            g = b.onSuccess,
            k = b.onFailure,
            m = b.terminate;
        if (c.th(f)) return null;
        var n = of (f[Ae.kj], c, []);
        if (n && n.length) {
            var p = n[0],
                q = uu(p.index, {
                    onSuccess: g,
                    onFailure: k,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            k = 2 === p.vj ? m :
                q
        }
        if (f[Ae.aj] || f[Ae.Hk]) {
            var r = f[Ae.aj] ? cf : c.ym,
                t = g,
                u = k;
            if (!r[a]) {
                e = Va(e);
                var v = wu(a, r, e);
                g = v.onSuccess;
                k = v.onFailure
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }

    function wu(a, b, c) {
        var d = [],
            e = [];
        b[a] = xu(d, e, c);
        return {
            onSuccess: function() {
                b[a] = yu;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = zu;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function xu(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function yu(a) {
        a()
    }

    function zu(a, b) {
        b()
    };
    var Bu = function(a, b) {
            return 1 === arguments.length ? Au("set", a) : Au("set", a, b)
        },
        Cu = function(a, b) {
            return 1 === arguments.length ? Au("config", a) : Au("config", a, b)
        },
        Du = function(a, b, c) {
            c = c || {};
            c[P.g.Ob] = a;
            return Au("event", b, c)
        };

    function Au(a) {
        return arguments
    }
    var Eu = function() {
        this.h = [];
        this.B = []
    };
    Eu.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.B.length; f++) try {
            this.B[f](e)
        } catch (g) {}
    };
    Eu.prototype.listen = function(a) {
        this.B.push(a)
    };
    Eu.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    Eu.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var Gu = function(a, b, c) {
            Fu().enqueue(a, b, c)
        },
        Iu = function() {
            var a = Hu;
            Fu().listen(a)
        };

    function Fu() {
        var a = $h.mb;
        a || (a = new Eu, $h.mb = a);
        return a
    }
    var Qu = function(a) {
            var b = $h.zones;
            return b ? b.getIsAllowedFn(nl(), a) : function() {
                return !0
            }
        },
        Ru = function(a) {
            var b = $h.zones;
            return b ? b.isActive(nl(), a) : !0
        },
        Su = function() {
            ct(sl(), function(a, b) {
                return Ru(b)
            })
        };
    var qv = function(a, b) {
        for (var c = [], d = 0; d < bf.length; d++)
            if (a[d]) {
                var e = bf[d];
                var f = St(b.Sb);
                try {
                    var g = uu(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var k = e[Ae.xa];
                        if (!k) throw "Error: No function name given for function call.";
                        var m = df[k];
                        c.push({
                            Mj: d,
                            Ej: (m ? m.priorityOverride || 0 : 0) || $s(e[Ae.xa], 1) || 0,
                            execute: g
                        })
                    } else jv(d, b), f()
                } catch (p) {
                    f()
                }
            }
        c.sort(pv);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return 0 < c.length
    };

    function pv(a, b) {
        var c, d = b.Ej,
            e = a.Ej;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Mj,
                k = b.Mj;
            f = g > k ? 1 : g < k ? -1 : 0
        }
        return f
    }

    function jv(a, b) {
        if (Ll) {
            var c = function(d) {
                var e = b.th(bf[d]) ? "3" : "4",
                    f = of (bf[d][Ae.ej], b, []);
                f && f.length && c(f[0].index);
                su(b.id, bf[d], e);
                var g = of (bf[d][Ae.kj], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var tv = !1,
        rv;
    var zv = function(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        T(30) && us(b, d);
        if ("gtm.js" === d) {
            if (tv) return !1;
            tv = !0
        }
        for (var e, f = !1, g = Ru(b), k = dt(), m = 0; g && m < k.length; m++) g = (0, k[m])(d, b);
        if (g) e = Qu(b);
        else {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
            f = !0;
            e = Qu(Number.MAX_SAFE_INTEGER)
        }
        hu(b, d);
        var n = a.eventCallback,
            p = a.eventTimeout,
            q = {
                id: b,
                priorityId: c,
                name: d,
                th: kt(e),
                ym: [],
                Bj: function() {
                    N(6);
                    Oi(0)
                },
                pj: vv(),
                qj: wv(b),
                Sb: new Ot(function() {
                    if (T(30)) {}
                    n && n.apply(n, [].slice.call(arguments, 0))
                }, p)
            };
        T(59) && (q.Ij = ku);
        T(30) && ws(q.id, q.name);
        var r = zf(q);
        T(30) && xs(q.id, q.name);
        f && (r = xv(r));
        T(30) && vs(b, d);
        var t = qv(r, q),
            u = !1;
        Tt(q.Sb);
        "gtm.js" !== d && "gtm.sync" !== d || $t(rl());
        return yv(r, t) || u
    };

    function wv(a) {
        return function(b) {
            id(b) || ou(a, "input", b)
        }
    }

    function vv() {
        var a = {};
        a.event = Ei("event", 1);
        a.ecommerce = Ei("ecommerce", 1);
        a.gtm = Ei("gtm");
        a.eventModel = Ei("eventModel");
        return a
    }

    function xv(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(bf[c][Ae.xa]);
                if (bi[d] || void 0 !== bf[c][Ae.Ik] || si[d] || $s(d, 2)) b[c] = !0
            }
        return b
    }

    function yv(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && bf[c] && !ci[String(bf[c][Ae.xa])]) return !0;
        return !1
    }
    var Av = {};

    function Bv(a, b, c) {
        Ll && void 0 !== a && (Av[a] = Av[a] || [], Av[a].push(c + b), Vl(a))
    }

    function Cv(a) {
        var b = a.eventId,
            c = a.Xb,
            d = "",
            e = Av[b] || [];
        e.length && (d += "&epr=" + e.join("."));
        c && delete Av[b];
        return d
    };
    var Ev = function(a, b) {
            var c = Qp(ql(a), !0);
            c && Dv.register(c, b)
        },
        Fv = function(a, b, c, d) {
            var e = Qp(c, d.isGtmEvent);
            e && Dv.push("event", [b, a], e, d)
        },
        Gv = function(a, b, c, d) {
            var e = Qp(c, d.isGtmEvent);
            e && Dv.push("get", [a, b], e, d)
        },
        Iv = function(a) {
            var b = Qp(ql(a), !0),
                c;
            b ? c = Hv(Dv, b).h : c = {};
            return c
        },
        Jv = function(a, b) {
            var c = Qp(ql(a), !0);
            if (c) {
                var d = Dv,
                    e = J(b);
                J(Hv(d, c).h, e);
                Hv(d, c).h = e
            }
        },
        Kv = function() {
            this.status = 1;
            this.M = {};
            this.h = {};
            this.B = {};
            this.R = null;
            this.D = {};
            this.C = !1
        },
        Lv = function(a, b, c, d) {
            var e = Ta();
            this.type = a;
            this.C = e;
            this.h = b;
            this.B = c;
            this.messageContext = d
        },
        Mv = function() {
            this.B = {};
            this.C = {};
            this.h = []
        },
        Hv = function(a, b) {
            var c = b.da;
            return a.B[c] = a.B[c] || new Kv
        },
        Nv = function(a, b, c, d) {
            if (d.h) {
                var e = Hv(a, d.h),
                    f = e.R;
                if (f) {
                    var g = J(c),
                        k = J(e.M[d.h.id]),
                        m = J(e.D),
                        n = J(e.h),
                        p = J(a.C),
                        q = {};
                    if (Ll) try {
                        q = J(wi)
                    } catch (v) {
                        N(72)
                    }
                    var r = d.h.prefix,
                        t = function(v) {
                            Bv(d.messageContext.eventId, r, v)
                        },
                        u = om(nm(mm(lm(km(im(hm(jm(gm(fm(em(new dm(d.messageContext.eventId, d.messageContext.priorityId), g), k), m), n), p), q), d.messageContext.eventMetadata),
                            function() {
                                if (t) {
                                    var v = t;
                                    t = void 0;
                                    v("2");
                                    if (d.messageContext.onSuccess) d.messageContext.onSuccess()
                                }
                            }), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("3");
                                if (d.messageContext.onFailure) d.messageContext.onFailure()
                            }
                        }), !!d.messageContext.isGtmEvent));
                    try {
                        Bv(d.messageContext.eventId, r, "1"), Dt(d.type, d.h.id, u), f(d.h.id, b, d.C, u)
                    } catch (v) {
                        Bv(d.messageContext.eventId, r, "4")
                    }
                }
            }
        };
    Mv.prototype.register = function(a, b, c) {
        var d = Hv(this, a);
        3 !== d.status && (d.R = b, d.status = 3, c && (J(d.h, c), d.h = c), this.flush())
    };
    Mv.prototype.push = function(a, b, c, d) {
        void 0 !== c && (1 === Hv(this, c).status && (Hv(this, c).status = 2, this.push("require", [{}], c, {})), Hv(this, c).C && (d.deferrable = !1));
        this.h.push(new Lv(a, c, b, d));
        d.deferrable || this.flush()
    };
    Mv.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
            e = {
                Tb: e.Tb,
                Df: e.Df
            };
            var f = this.h[0],
                g = f.h;
            if (f.messageContext.deferrable) !g || Hv(this, g).C ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== Hv(this, g).status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        l(f.B[0], function(r, t) {
                            J(ab(r, t), b.C)
                        });
                        break;
                    case "config":
                        var k = Hv(this, g);
                        e.Tb = {};
                        l(f.B[0], function(r) {
                            return function(t, u) {
                                J(ab(t, u), r.Tb)
                            }
                        }(e));
                        var m = !!e.Tb[P.g.qc];
                        delete e.Tb[P.g.qc];
                        var n = g.da === g.id;
                        m || (n ? k.D = {} : k.M[g.id] = {});
                        k.C && m || Nv(this, P.g.ka, e.Tb, f);
                        k.C = !0;
                        n ? J(e.Tb, k.D) : (J(e.Tb, k.M[g.id]), N(70));
                        d = !0;
                        break;
                    case "event":
                        e.Df = {};
                        l(f.B[0], function(r) {
                            return function(t, u) {
                                J(ab(t, u), r.Df)
                            }
                        }(e));
                        Nv(this, f.B[1], e.Df, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[P.g.Pa] = f.B[0], p[P.g.ib] = f.B[1], p);
                        Nv(this, P.g.Ja, q, f)
                }
                this.h.shift();
                Ov(this, f)
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var Ov = function(a, b) {
            if ("require" !== b.type)
                if (b.h)
                    for (var c = Hv(a, b.h).B[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.B)
                        if (a.B.hasOwnProperty(e)) {
                            var f = a.B[e];
                            if (f && f.B)
                                for (var g = f.B[b.type] || [], k = 0; k < g.length; k++) g[k]()
                        }
        },
        Dv = new Mv;
    var If;
    var Pv = {},
        Qv = {},
        Rv = function(a, b) {
            for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                    Nf: e.Nf,
                    Hf: e.Hf
                }, f++) {
                var g = a[f];
                if (0 <= g.indexOf("-")) {
                    if (e.Nf = Qp(g, b), e.Nf) {
                        var k = pl();
                        Ga(k, function(r) {
                            return function(t) {
                                return r.Nf.da === t
                            }
                        }(e)) ? c.push(g) : d.push(g)
                    }
                } else {
                    var m = Pv[g] || [];
                    e.Hf = {};
                    m.forEach(function(r) {
                        return function(t) {
                            return r.Hf[t] = !0
                        }
                    }(e));
                    for (var n = nl(), p = 0; p < n.length; p++)
                        if (e.Hf[n[p]]) {
                            c = c.concat(pl());
                            break
                        }
                    var q = Qv[g] || [];
                    q.length && (c = c.concat(q))
                }
            }
            return {
                Pl: c,
                Sl: d
            }
        },
        Sv = function(a) {
            l(Pv, function(b,
                c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        Tv = function(a) {
            l(Qv, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var Uv = "HA GF G UA AW DC MC".split(" "),
        Vv = !1,
        Wv = !1;

    function Xv(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: ti()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var Yv = void 0,
        Zv = void 0;

    function $v(a, b, c) {
        var d = J(a);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return void 0 !== b[f]
        }) && N(136);
        var e = J(b);
        J(c, e);
        Gu(Cu(nl()[0], e), a.eventId, d)
    }

    function aw(a) {
        for (var b = ea([P.g.Od, P.g.Pb]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value,
                e = a && a[d] || Dv.C[d];
            if (e) return e
        }
    }
    var bw = {
            config: function(a, b) {
                var c = T(60),
                    d = Xv(a, b);
                if (!(2 > a.length) && h(a[1])) {
                    var e = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !dd(a[2]) || 3 < a.length) return;
                        e = a[2]
                    }
                    var f = Qp(a[1], b.isGtmEvent);
                    if (f) {
                        var g, k, m;
                        a: {
                            if (!kl.pf) {
                                var n = tl(zl());
                                if (Dl(n)) {
                                    var p = n.parent,
                                        q = p.isDestination;
                                    m = {
                                        Vl: tl(p),
                                        Ol: q
                                    };
                                    break a
                                }
                            }
                            m = void 0
                        }
                        var r = m;
                        r && (g = r.Vl, k = r.Ol);
                        hu(d.eventId, "gtag.config");
                        var t = f.da,
                            u = f.id !== t;
                        if (u ? -1 === pl().indexOf(t) : -1 === nl().indexOf(t)) {
                            if (!(c && b.inheritParentConfig || T(26) && e[P.g.zb])) {
                                var v = aw(e);
                                if (u) rt(t,
                                    v, {
                                        source: 2,
                                        fromContainerExecution: b.fromContainerExecution
                                    });
                                else if (c && void 0 !== g && -1 !== g.containers.indexOf(t)) {
                                    var w = e;
                                    Yv ? $v(b, w, Yv) : Zv || (Zv = J(w))
                                } else qt(t, v, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (g && (N(128), k && N(130), c && b.inheritParentConfig)) {
                                var x = e;
                                Zv ? $v(b, Zv, x) : !x[P.g.qc] && ei && Yv || (Yv = J(x));
                                return
                            }
                            if (ei && !u && !e[P.g.qc]) {
                                var y = Wv;
                                Wv = !0;
                                if (y) return
                            }
                            Vv || N(43);
                            if (!b.noTargetGroup)
                                if (u) {
                                    Tv(f.id);
                                    var A = f.id,
                                        B = e[P.g.Kd] || "default";
                                    B = String(B).split(",");
                                    for (var C =
                                            0; C < B.length; C++) {
                                        var G = Qv[B[C]] || [];
                                        Qv[B[C]] = G;
                                        0 > G.indexOf(A) && G.push(A)
                                    }
                                } else {
                                    Sv(f.id);
                                    var K = f.id,
                                        H = e[P.g.Kd] || "default";
                                    H = H.toString().split(",");
                                    for (var O = 0; O < H.length; O++) {
                                        var Q = Pv[H[O]] || [];
                                        Pv[H[O]] = Q;
                                        0 > Q.indexOf(K) && Q.push(K)
                                    }
                                }
                            delete e[P.g.Kd];
                            var V = b.eventMetadata || {};
                            V.hasOwnProperty("is_external_event") || (V.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = V;
                            delete e[P.g.Qc];
                            for (var ma = u ? [f.id] : pl(), W = 0; W < ma.length; W++) {
                                var S = e,
                                    ja = J(b),
                                    ka = Qp(ma[W], ja.isGtmEvent);
                                ka && Dv.push("config", [S], ka, ja)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    N(39);
                    var c = Xv(a, b),
                        d = a[1];
                    "default" === d ? Xk(a[2]) : "update" === d ? Yk(a[2], c) : "declare" === d ? b.fromContainerExecution && Wk(a[2]) : "core_platform_services" === d && Zk(a[2])
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && h(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!dd(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = J(e), e[P.g.Qc] && (g.eventCallback = e[P.g.Qc]), e[P.g.Fd] && (g.eventTimeout = e[P.g.Fd]));
                    var k = Xv(a, b),
                        m = k.eventId,
                        n = k.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        r = q && q[P.g.Ob];
                    void 0 === r && (r = zi(P.g.Ob, 2), void 0 === r && (r = "default"));
                    if (h(r) || Fa(r)) {
                        var t;
                        b.isGtmEvent ? t = h(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
                        var u = Rv(t, b.isGtmEvent),
                            v = u.Pl,
                            w = u.Sl;
                        if (w.length)
                            for (var x = aw(q), y = 0; y < w.length; y++) {
                                var A = Qp(w[y], b.isGtmEvent);
                                A && rt(A.da, x, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = Sp(v,
                            b.isGtmEvent)
                    } else p = void 0;
                    var B = p;
                    if (B) {
                        hu(m, c);
                        for (var C = [], G = 0; G < B.length; G++) {
                            var K = B[G],
                                H = J(b);
                            if (-1 !== Uv.indexOf(ul(K.prefix))) {
                                var O = J(d),
                                    Q = H.eventMetadata || {};
                                Q.hasOwnProperty("is_external_event") || (Q.is_external_event = !H.fromContainerExecution);
                                H.eventMetadata = Q;
                                delete O[P.g.Qc];
                                Fv(c, O, K.id, H)
                            }
                            C.push(K.id)
                        }
                        g.eventModel = g.eventModel || {};
                        0 < B.length ? g.eventModel[P.g.Ob] = C.join() : delete g.eventModel[P.g.Ob];
                        Vv || N(43);
                        void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                        g.eventModel[P.g.Lb] && (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                N(53);
                if (4 === a.length && h(a[1]) && h(a[2]) && Da(a[3])) {
                    var c = Qp(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        Vv || N(43);
                        var f = aw();
                        if (!Ga(pl(), function(k) {
                                return c.da === k
                            })) rt(c.da, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !== Uv.indexOf(ul(c.prefix))) {
                            Xv(a, b);
                            var g = {};
                            Tk(J((g[P.g.Pa] = d, g[P.g.ib] = e, g)));
                            Gv(d, function(k) {
                                I(function() {
                                    return e(k)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 ==
                    a.length && a[1].getTime) {
                    Vv = !0;
                    var c = Xv(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function(a) {
                if (3 === a.length && h(a[1]) && Da(a[2])) {
                    var b = a[1],
                        c = a[2],
                        d = If.B;
                    d.h[b] ? d.h[b].push(c) : d.h[b] = [c];
                    if (N(74), "all" === a[1]) {
                        N(75);
                        var e = !1;
                        try {
                            e = a[2](rl(), "unknown", {})
                        } catch (f) {}
                        e || N(76)
                    }
                } else {
                    N(73);
                }
            },
            set: function(a, b) {
                var c;
                2 == a.length && dd(a[1]) ? c = J(a[1]) : 3 == a.length && h(a[1]) && (c = {}, dd(a[2]) || Fa(a[2]) ? c[a[1]] = J(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = Xv(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    J(c);
                    var g = J(c);
                    Dv.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    T(14) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        cw = {
            policy: !0
        };
    var dw = function(a) {
            var b = z[Zh.ja].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        ew = function(a) {
            var b = z[Zh.ja],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var fw = !1,
        gw = [];

    function hw() {
        if (!fw) {
            fw = !0;
            for (var a = 0; a < gw.length; a++) I(gw[a])
        }
    }
    var iw = function(a) {
        fw ? I(a) : gw.push(a)
    };
    var zw = function(a) {
        if (yw(a)) return a;
        this.h = a
    };
    zw.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var yw = function(a) {
        return !a || "object" !== bd(a) || dd(a) ? !1 : "getUntrustedMessageValue" in a
    };
    zw.prototype.getUntrustedMessageValue = zw.prototype.getUntrustedMessageValue;
    var Aw = 0,
        Bw = {},
        Cw = [],
        Dw = [],
        Ew = !1,
        Fw = !1;

    function Gw(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Hw = function(a) {
            return z[Zh.ja].push(a)
        },
        Iw = function(a, b, c) {
            a.eventCallback = b;
            c && (a.eventTimeout = c);
            return Hw(a)
        },
        Jw = function(a, b) {
            if (!Ea(b) || 0 > b) b = 0;
            var c = $h[Zh.ja],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            g = z.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b);
            return function() {
                T(83) && (d = c ? c.subscribers : 1);
                ++e === d && (g && (z.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function Kw(a, b) {
        var c = a._clear || b.overwriteModelFields;
        l(a, function(e, f) {
            "_clear" !== e && (c && Ci(e), Ci(e, f))
        });
        oi || (oi = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = ti(), a["gtm.uniqueEventId"] = d, Ci("gtm.uniqueEventId", d));
        return zv(a)
    }

    function Lw(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Ma(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function Mw() {
        var a;
        if (Dw.length) a = Dw.shift();
        else if (Cw.length) a = Cw.shift();
        else return;
        var b;
        var c = a;
        if (Ew || !Lw(c.message)) b = c;
        else {
            Ew = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = ti());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                k = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            Cw.unshift(k, c);
            if (Ll) {
                var m = Ef.ctid;
                if (m) {
                    var n, p = tl(zl());
                    n = p && p.context;
                    var q, r = rj(z.location.href);
                    q = r.hostname + r.pathname;
                    var t = n && n.fromContainerExecution,
                        u = n && n.source,
                        v = Ef.eh,
                        w = kl.pf;
                    Ll && (st || (st = q), tt.push(m + ";" + v + ";" + (t ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)))
                }
            }
            b = f
        }
        return b
    }

    function Nw() {
        for (var a = !1, b; !Fw && (b = Mw());) {
            Fw = !0;
            delete wi.eventModel;
            yi();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) Fw = !1;
            else {
                e.fromContainerExecution && Di();
                try {
                    if (Da(d)) try {
                        d.call(Ai)
                    } catch (x) {} else if (Fa(d)) {
                        var f = d;
                        if (h(f[0])) {
                            var g = f[0].split("."),
                                k = g.pop(),
                                m = f.slice(1),
                                n = zi(g.join("."), 2);
                            if (null != n) try {
                                n[k].apply(n, m)
                            } catch (x) {}
                        }
                    } else {
                        var p = void 0,
                            q = !1;
                        if (Ma(d)) {
                            a: {
                                if (d.length && h(d[0])) {
                                    var r = bw[d[0]];
                                    if (r && (!e.fromContainerExecution || !cw[d[0]])) {
                                        p = r(d, e);
                                        break a
                                    }
                                }
                                p = void 0
                            }(q = p &&
                                "set" === d[0] && !!p.event) && N(101)
                        }
                        else p = d;
                        if (p) {
                            var t = Kw(p, e);
                            a = t || a;
                            q && t && N(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && yi(!0);
                    var u = d["gtm.uniqueEventId"];
                    if ("number" === typeof u) {
                        for (var v = Bw[String(u)] || [], w = 0; w < v.length; w++) Dw.push(Ow(v[w]));
                        v.length && Dw.sort(Gw);
                        delete Bw[String(u)];
                        u > Aw && (Aw = u)
                    }
                    Fw = !1
                }
            }
        }
        return !a
    }

    function Pw() {
        if (T(30)) {
            var a = Qw();
        }
        var e = Nw();
        try {
            dw(rl())
        } catch (f) {}
        return e
    }

    function Hu(a) {
        if (Aw < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Bw[b] = Bw[b] || [];
            Bw[b].push(a)
        } else Dw.push(Ow(a)), Dw.sort(Gw), I(function() {
            Fw || Nw()
        })
    }

    function Ow(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var Rw = function() {
            function a(f) {
                var g = {};
                if (yw(f)) {
                    var k = f;
                    f = yw(k) ? k.getUntrustedMessageValue() : void 0;
                    g.fromContainerExecution = !0
                }
                return {
                    message: f,
                    messageContext: g
                }
            }
            var b = sc(Zh.ja, []),
                c = $h[Zh.ja] = $h[Zh.ja] || {};
            !0 === c.pruned && N(83);
            Bw = Fu().get();
            Iu();
            Kt(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var f = {};
                    b.push((f.event = "gtm.dom", f))
                }
            });
            iw(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var f = {};
                    b.push((f.event = "gtm.load", f))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var f;
                if (0 < $h.SANDBOXED_JS_SEMAPHORE) {
                    f = [];
                    for (var g = 0; g < arguments.length; g++) f[g] = new zw(arguments[g])
                } else f = [].slice.call(arguments, 0);
                var k = f.map(function(q) {
                    return a(q)
                });
                Cw.push.apply(Cw, k);
                var m = d.apply(b, f),
                    n = Math.max(100, Number("1000") || 300);
                if (this.length > n)
                    for (N(4), c.pruned = !0; this.length > n;) this.shift();
                var p = "boolean" !== typeof m || m;
                return Nw() && p
            };
            var e = b.slice(0).map(function(f) {
                return a(f)
            });
            Cw.push.apply(Cw, e);
            Qw() && (T(30) && ts(), I(Pw))
        },
        Qw = function() {
            var a = !0;
            return a
        };

    function Sw(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Ta();
        return b < c + 3E5 && b > c - 9E5
    }

    function Tw(a) {
        return a && 0 === a.indexOf("pending:") ? Sw(a.substr(8)) : !1
    };
    var nx = function() {};
    var gf = {};
    gf.nf = new String("undefined");
    var ox = function(a) {
        this.h = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === gf.nf ? b : a[d]);
            return c.join("")
        }
    };
    ox.prototype.toString = function() {
        return this.h("undefined")
    };
    ox.prototype.valueOf = ox.prototype.toString;
    gf.Lk = ox;
    gf.Wg = {};
    gf.Tk = function(a) {
        return new ox(a)
    };
    var px = {};
    gf.gm = function(a, b) {
        var c = ti();
        px[c] = [a, b];
        return c
    };
    gf.sj = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            N(a ? 134 : 135);
            var d = px[c];
            if (d && "function" === typeof d[b]) d[b]();
            px[c] = void 0
        }
    };
    gf.Dl = function(a) {
        for (var b = !1, c = !1,
                d = 2; d < a.length; d++) b = b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    gf.am = function(a) {
        if (a === gf.nf) return a;
        var b = ti();
        gf.Wg[b] = a;
        return 'google_tag_manager["rm"]["' + sl() + '"](' + b + ")"
    };
    gf.Rl = function(a, b, c) {
        a instanceof gf.Lk && (a = a.h(gf.gm(b, c)), b = Ca);
        return {
            yl: a,
            onSuccess: b
        }
    };
    var qx = function() {
        ($h.rm = $h.rm || {})[sl()] = function(a) {
            if (gf.Wg.hasOwnProperty(a)) return gf.Wg[a]
        }
    };
    var rx = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": Jc(a, "className"),
                "gtm.elementId": a["for"] || Ec(a, "id") || "",
                "gtm.elementTarget": a.formTarget || Jc(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Jc(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        sx = function(a) {
            $h.hasOwnProperty("autoEventsSettings") || ($h.autoEventsSettings = {});
            var b = $h.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        tx = function(a, b, c) {
            sx(a)[b] = c
        },
        ux = function(a, b, c, d) {
            var e = sx(a),
                f = Ua(e, b, d);
            e[b] = c(f)
        },
        vx = function(a, b, c) {
            var d = sx(a);
            return Ua(d, b, c)
        },
        wx = function(a) {
            return "string" === typeof a ? a : String(ti())
        };
    var Cx = !!z.MutationObserver,
        Dx = void 0,
        Ex = function(a) {
            if (!Dx) {
                var b = function() {
                    var c = F.body;
                    if (c)
                        if (Cx)(new MutationObserver(function() {
                            for (var e = 0; e < Dx.length; e++) I(Dx[e])
                        })).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var d = !1;
                            Cc(c, "DOMNodeInserted", function() {
                                d || (d = !0, I(function() {
                                    d = !1;
                                    for (var e = 0; e < Dx.length; e++) I(Dx[e])
                                }))
                            })
                        }
                };
                Dx = [];
                F.body ? b() : I(b)
            }
            Dx.push(a)
        },
        Fx = function(a) {
            if (Dx)
                for (var b = 0; b < Dx.length; b++) Dx[b] === a && Dx.splice(b, 1)
        };
    var Qx = function(a, b, c) {
        function d() {
            var g = a();
            f += e ? (Ta() - e) * g.playbackRate / 1E3 : 0;
            e = Ta()
        }
        var e = 0,
            f = 0;
        return {
            createEvent: function(g, k, m) {
                var n = a(),
                    p = n.mh,
                    q = void 0 !== m ? Math.round(m) : void 0 !== k ? Math.round(n.mh * k) : Math.round(n.tj),
                    r = void 0 !== k ? Math.round(100 * k) : 0 >= p ? 0 : Math.round(q / p * 100),
                    t = F.hidden ? !1 : .5 <= dj(c);
                d();
                var u = void 0;
                void 0 !== b && (u = [b]);
                var v = rx(c, "gtm.video", u);
                v["gtm.videoProvider"] = "youtube";
                v["gtm.videoStatus"] = g;
                v["gtm.videoUrl"] = n.url;
                v["gtm.videoTitle"] = n.title;
                v["gtm.videoDuration"] =
                    Math.round(p);
                v["gtm.videoCurrentTime"] = Math.round(q);
                v["gtm.videoElapsedTime"] = Math.round(f);
                v["gtm.videoPercent"] = r;
                v["gtm.videoVisible"] = t;
                return v
            },
            Jj: function() {
                e = Ta()
            },
            Yc: function() {
                d()
            }
        }
    };
    var Rx = z.clearTimeout,
        Sx = z.setTimeout,
        Tx = function(a, b, c, d) {
            if (kn()) {
                b && I(b)
            } else return yc(a, b, c, d)
        },
        Ux = function() {
            return new Date
        },
        Vx = function() {
            return z.location.href
        },
        Wx = function(a) {
            return pj(rj(a), "fragment")
        },
        Xx = function(a) {
            return qj(rj(a))
        },
        Yx = function(a, b) {
            return zi(a, b || 2)
        },
        Zx = function(a, b, c) {
            return b ? Iw(a, b, c) : Hw(a)
        },
        $x = function(a, b) {
            z[a] = b
        },
        X = function(a, b, c) {
            b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
            return z[a]
        },
        ay = function(a, b, c) {
            return Rm(a, b, void 0 === c ? !0 : !!c)
        },
        by = function(a, b, c) {
            return 0 === $m(a, b, c)
        },
        cy = function(a, b) {
            if (kn()) {
                b && I(b)
            } else Ac(a, b)
        },
        dy = function(a) {
            return !!vx(a, "init", !1)
        },
        ey = function(a) {
            tx(a, "init", !0)
        },
        fy = function(a, b, c) {
            id(a) || ou(c, b, a)
        };
    var gy = gf.Rl;

    function Dy(a, b) {
        function c(g) {
            var k = rj(g),
                m = pj(k, "protocol"),
                n = pj(k, "host", !0),
                p = pj(k, "port"),
                q = pj(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Ey(a) {
        return Fy(a) ? 1 : 0
    }

    function Fy(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = J(a, {});
                J({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Ey(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return fg(b, c);
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < bg.length; g++) {
                            var k = bg[g];
                            if (b[k]) {
                                f = b[k](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return cg(b, c);
            case "_eq":
                return gg(b, c);
            case "_ge":
                return hg(b, c);
            case "_gt":
                return jg(b, c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return ig(b, c);
            case "_lt":
                return kg(b, c);
            case "_re":
                return eg(b, c, a.ignore_case);
            case "_sw":
                return lg(b, c);
            case "_um":
                return Dy(b, c)
        }
        return !1
    };

    function Gy() {
        var a = ["&cv=96", "&rv=" + Zh.Xg, "&tc=" + bf.filter(function(b) {
            return b
        }).length];
        Zh.ie && a.push("&x=" + Zh.ie);
        return a.join("")
    };
    var Hy;

    function Iy(a, b, c) {
        Hy = Hy || new eh;
        Hy.add(a, b, c)
    }

    function Jy(a, b) {
        var c = Hy = Hy || new eh;
        if (c.B.hasOwnProperty(a)) throw "Attempting to add a private function which already exists: " + a + ".";
        if (c.h.hasOwnProperty(a)) throw "Attempting to add a private function with an existing API name: " + a + ".";
        c.B[a] = Da(b) ? yg(a, b) : zg(a, b)
    }

    function Ky() {
        return function(a) {
            var b;
            var c = Hy;
            if (c.h.hasOwnProperty(a)) b = c.get(a, this);
            else {
                var d;
                if (d = c.B.hasOwnProperty(a)) {
                    var e = !1,
                        f = this.h.h;
                    if (f) {
                        var g = f.bd();
                        if (g) {
                            0 !== g.indexOf("__cvt_") && (e = !0);
                        }
                    } else e = !0;
                    d = e
                }
                if (d) {
                    var k = c.B.hasOwnProperty(a) ? c.B[a] : void 0;
                    b = k
                } else throw Error(a + " is not a valid API name.");
            }
            return b
        }
    };

    function Ly(a, b) {
        var c = this;
    }
    Ly.N = "addConsentListener";
    var My;
    var Ny = function(a) {
        for (var b = 0; b < a.length; ++b)
            if (My) try {
                a[b]()
            } catch (c) {
                N(77)
            } else a[b]()
    };

    function Oy(a, b, c) {
        var d = this,
            e;
        return e
    }
    Oy.I = "internal.addDataLayerEventListener";

    function Py(a, b, c) {}
    Py.N = "addDocumentEventListener";

    function Qy(a, b, c, d) {}
    Qy.N = "addElementEventListener";

    function Ry(a) {}
    Ry.N = "addEventCallback";

    function Vy(a) {}
    Vy.I = "internal.addFormAbandonmentListener";

    function Wy(a, b, c, d) {}
    Wy.I = "internal.addFormData";
    var Xy = {},
        Yy = [],
        Zy = {},
        $y = 0,
        az = 0;

    function hz(a, b) {}
    hz.I = "internal.addFormInteractionListener";

    function oz(a, b) {}
    oz.I = "internal.addFormSubmitListener";

    function tz(a) {}
    tz.I = "internal.addGaSendListener";
    var uz = function(a, b) {
        this.tagId = a;
        this.h = b
    };

    function vz(a, b, c) {
        var d = this;
    }
    vz.I = "internal.loadGoogleTag";

    function wz(a, b, c) {}
    wz.I = "internal.addGoogleTagRestriction";
    var xz = {},
        yz = [];
    var Fz = function(a, b) {};
    Fz.I = "internal.addHistoryChangeListener";

    function Gz(a, b, c) {}
    Gz.N = "addWindowEventListener";

    function Hz(a, b) {
        return !0
    }
    Hz.N = "aliasInWindow";

    function Iz(a, b, c) {}
    Iz.I = "internal.appendRemoteConfigParameter";

    function Jz() {
        var a = 2;
        return a
    };

    function Kz(a, b) {
        var c;
        return c
    }
    Kz.N = "callInWindow";

    function Lz(a) {}
    Lz.N = "callLater";

    function Mz(a) {}
    Mz.I = "callOnDomReady";

    function Nz(a) {}
    Nz.I = "callOnWindowLoad";

    function Oz(a) {
        var b;
        return b
    }
    Oz.I = "internal.computeGtmParameter";

    function Pz(a, b) {
        var c;
        var d = ed(c, this.h, Jz());
        void 0 === d && void 0 !== c && N(45);
        return d
    }
    Pz.N = "copyFromDataLayer";

    function Qz(a) {
        var b;
        return b
    }
    Qz.N = "copyFromWindow";

    function Rz(a, b) {
        var c;
        return c
    }
    Rz.I = "internal.copyPreHit";

    function Sz(a, b) {
        var c = null,
            d = Jz();
        L(E(this), ["functionPath:!string", "arrayPath:!string"], arguments);
        M(this, "access_globals", "readwrite", a);
        M(this, "access_globals", "readwrite", b);
        var e = [z, F],
            f = a.split("."),
            g = $a(f, e),
            k = f[f.length - 1];
        if (void 0 === g) throw Error("Path " + a + " does not exist.");
        var m = g[k];
        if (m && !Da(m)) return null;
        if (m) return ed(m, this.h, d);
        var n;
        m = function() {
            if (!Da(n.push)) throw Error("Object at " + b + " in window is not an array.");
            n.push.call(n, arguments)
        };
        g[k] = m;
        var p = b.split("."),
            q = $a(p, e),
            r = p[p.length - 1];
        if (void 0 === q) throw Error("Path " + p + " does not exist.");
        n = q[r];
        void 0 === n && (n = [], q[r] = n);
        c = function() {
            m.apply(m, Array.prototype.slice.call(arguments, 0))
        };
        return ed(c, this.h, d)
    }
    Sz.N = "createArgumentsQueue";

    function Tz(a) {
        var b;
        return ed(b, this.h,
            Jz())
    }
    Tz.N = "createQueue";

    function Uz(a, b) {
        var c = null;
        return c
    }
    Uz.I = "internal.createRegex";

    function Vz(a) {
        if (!a) return {};
        var b = a.Zk;
        return Mt(b.type, b.index, b.name)
    }

    function Wz(a) {
        return a ? {
            originatingEntity: Vz(a)
        } : {}
    };

    function Xz(a) {}
    Xz.I = "internal.declareConsentState";

    function Yz(a) {
        var b;
        return b
    }
    Yz.I = "internal.detectUserProvidedData";

    function dA(a, b) {
        return b
    }
    dA.I = "internal.enableAutoEventOnElementVisibility";
    var eA = {},
        fA = [],
        gA = {},
        hA = 0,
        iA = 0;

    function oA(a, b) {
        var c = this;
        return b
    }
    oA.I = "internal.enableAutoEventOnFormInteraction";

    function tA(a, b) {
        var c = this;
        return b
    }
    tA.I = "internal.enableAutoEventOnFormSubmit";

    function yA() {
        var a = this;
    }
    yA.I = "internal.enableAutoEventOnGaSend";
    var zA = {},
        AA = [];

    function HA(a, b) {
        var c = this;
        return b
    }
    HA.I = "internal.enableAutoEventOnHistoryChange";

    function LA(a, b) {
        var c = this;
        return b
    }
    LA.I = "internal.enableAutoEventOnLinkClick";
    var MA, NA;

    function WA(a, b) {
        var c = this;
        return b
    }
    WA.I = "internal.enableAutoEventOnScroll";
    var gc = da(["data-gtm-yt-inspected-"]),
        XA = ["www.youtube.com", "www.youtube-nocookie.com"],
        YA, ZA = !1;

    function iB(a, b) {
        var c = this;
        return b
    }
    iB.I = "internal.enableAutoEventOnYouTubeActivity";
    var jB;

    function kB(a) {
        var b = !1;
        return b
    }
    kB.I = "internal.evaluateMatchingRules";
    var lB = function(a, b) {
            var c;
            c = b ? [Br, Cr, Er, or, sr, Gr, tr, Fr, zr, pr, Jr, ur, Dr, mr, Hr, ir] : [Eq, nr, dr, qr, er, fr, gr, hr, vr, wr, yr, Ar, rr, xr, lr, Ir];
            for (var d = 0; d < c.length && (c[d](a), !a.isAborted); d++);
        },
        mB = function(a, b, c, d) {
            var e = new eq(b, c, d);
            e.metadata.hit_type = a;
            e.metadata.speculative = !0;
            e.metadata.event_start_timestamp_ms = Ta();
            e.metadata.speculative_in_message = d.eventMetadata.speculative;
            return e
        },
        nB = function(a, b, c, d) {
            function e() {
                for (var q = 0; q < g.length; q++) {
                    var r = g[q];
                    r.isAborted || (lB(g[q], !0), r.metadata.speculative ||
                        r.isAborted || Ts(r))
                }
            }
            var f = Qp(a, d.isGtmEvent);
            if (f) {
                var g = [];
                if (d.eventMetadata.hit_type_override) {
                    var k = d.eventMetadata.hit_type_override;
                    Array.isArray(k) || (k = [k]);
                    for (var m = 0; m < k.length; m++) {
                        var n = mB(k[m], f, b, d);
                        n.metadata.speculative = !1;
                        g.push(n)
                    }
                } else b === P.g.ka && g.push(mB("landing_page", f, b, d)), g.push(mB("conversion", f, b, d)), g.push(mB("user_data_lead", f, b, d)), g.push(mB("user_data_web", f, b, d)), g.push(mB("remarketing", f, b, d));
                for (var p = 0; p < g.length; p++) lB(g[p], !1);
                el(function() {
                    for (var q = [], r = [], t = 0; t < g.length; t++) {
                        var u = g[t];
                        q.push(u.isAborted);
                        r.push(u.metadata.speculative)
                    }
                    e();
                    al(P.g.H) || dl(function(v) {
                        for (var w = v.consentEventId, x = v.consentPriorityId, y = 0; y < g.length; y++) {
                            var A = g[y];
                            A.metadata.consent_updated = !0;
                            A.metadata.speculative = r[y];
                            A.metadata.event_start_timestamp_ms = Ta();
                            A.isAborted = q[y];
                            A.metadata.consent_event_id = w;
                            A.metadata.consent_priority_id = x
                        }
                        e()
                    }, [P.g.H])
                }, [P.g.H])
            }
        };
    var ZB = function() {
            var a = !0;
            $n(7) && $n(9) && $n(10) || (a = !1);
            return a
        },
        $B = function() {
            var a = !0;
            $n(3) && $n(4) || (a = !1);
            return a
        };
    var dC = function(a, b) {
            if (!b.isGtmEvent) {
                var c = U(b, P.g.Pa),
                    d = U(b, P.g.ib),
                    e = U(b, c);
                if (void 0 === e) {
                    var f = void 0;
                    aC.hasOwnProperty(c) ? f = aC[c] : bC.hasOwnProperty(c) && (f = bC[c]);
                    1 === f && (f = cC(c));
                    h(f) ? Wt()(function() {
                        var g = Wt().getByName(a).get(f);
                        d(g)
                    }) : d(void 0)
                } else d(e)
            }
        },
        eC = function(a, b) {
            var c = a[P.g.Mb],
                d = b + ".",
                e = a[P.g.T] || "",
                f = void 0 === c ? !!a.use_anchor : "fragment" === c,
                g = !!a[P.g.Ab];
            e = String(e).replace(/\s+/g, "").split(",");
            var k = Wt();
            k(d + "require", "linker");
            k(d + "linker:autoLink", e, f, g)
        },
        iC = function(a,
            b, c) {
            if (Nk() && (!c.isGtmEvent || !fC[a])) {
                var d = !al(P.g.P),
                    e = function(f) {
                        var g, k, m = Wt(),
                            n = gC(b, "", c),
                            p, q = n.createOnlyFields._useUp;
                        if (c.isGtmEvent || hC(b, n.createOnlyFields)) {
                            c.isGtmEvent && (g = "gtm" + ti(), k = n.createOnlyFields, n.gtmTrackerName && (k.name = g));
                            m(function() {
                                var t = m.getByName(b);
                                t && (p = t.get("clientId"));
                                c.isGtmEvent || m.remove(b)
                            });
                            m("create", a, c.isGtmEvent ? k : n.createOnlyFields);
                            d && al(P.g.P) && (d = !1, m(function() {
                                var t = Wt().getByName(c.isGtmEvent ? g : b);
                                !t || t.get("clientId") == p && q || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&sst.gcut"] = Uh[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&sst.gcut"] = Uh[f]), t.set(n.fieldsToSet), c.isGtmEvent ? t.send("pageview") : t.send("pageview", n.fieldsToSend))
                            }));
                            c.isGtmEvent && m(function() {
                                m.remove(g)
                            })
                        }
                    };
                dl(function() {
                    return e(P.g.P)
                }, P.g.P);
                dl(function() {
                        return e(P.g.H)
                    },
                    P.g.H);
                c.isGtmEvent && (fC[a] = !0)
            }
        },
        jC = function(a, b) {
            nt() && b && (a[P.g.Kb] = b)
        },
        sC = function(a, b, c) {
            function d() {
                var H = U(c, P.g.jc);
                k(function() {
                    if (!c.isGtmEvent && dd(H)) {
                        var O = u.fieldsToSend,
                            Q = m().getByName(n),
                            V;
                        for (V in H)
                            if (H.hasOwnProperty(V) && /^(dimension|metric)\d+$/.test(V) && void 0 != H[V]) {
                                var ma = Q.get(cC(H[V]));
                                kC(O, V, ma)
                            }
                    }
                })
            }

            function e() {
                if (u.displayfeatures) {
                    var H = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, {
                        cookieName: H
                    })
                }
            }
            var f = a,
                g = "https://www.google-analytics.com/analytics.js",
                k = c.isGtmEvent ? Yt(U(c, "gaFunctionName")) : Yt();
            if (Da(k)) {
                var m = Wt,
                    n;
                c.isGtmEvent ? n = U(c, "name") || U(c, "gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
                var p = function(H) {
                        var O = [].slice.call(arguments, 0);
                        O[0] = n ? n + "." + O[0] : "" + O[0];
                        k.apply(window, O)
                    },
                    q = function(H) {
                        var O = function(ja, ka) {
                                for (var ca = 0; ka && ca < ka.length; ca++) p(ja, ka[ca])
                            },
                            Q = c.isGtmEvent,
                            V = Q ? lC(u) : mC(b, c);
                        if (V) {
                            var ma = {};
                            jC(ma, H);
                            p("require", "ec", "ec.js", ma);
                            Q && V.jh && p("set", "&cu", V.jh);
                            var W = V.action;
                            if (Q || "impressions" === W)
                                if (O("ec:addImpression",
                                        V.Aj), !Q) return;
                            if ("promo_click" === W || "promo_view" === W || Q && V.Ne) {
                                var S = V.Ne;
                                O("ec:addPromo", S);
                                if (S && 0 < S.length && "promo_click" === W) {
                                    Q ? p("ec:setAction", W, V.nb) : p("ec:setAction", W);
                                    return
                                }
                                if (!Q) return
                            }
                            "promo_view" !== W && "impressions" !== W && (O("ec:addProduct", V.Bc), p("ec:setAction", W, V.nb))
                        }
                    },
                    r = function(H) {
                        if (H) {
                            var O = {};
                            if (dd(H))
                                for (var Q in nC) nC.hasOwnProperty(Q) && oC(nC[Q], Q, H[Q], O);
                            jC(O, x);
                            p("require", "linkid", O)
                        }
                    },
                    t = function() {
                        if (kn()) {} else {
                            var H =
                                U(c, P.g.Ii);
                            H && (p("require", H, {
                                dataLayer: Zh.ja
                            }), p("require", "render"))
                        }
                    },
                    u = gC(n, b, c),
                    v = function(H, O, Q) {
                        Q && (O = "" + O);
                        u.fieldsToSend[H] = O
                    };
                !c.isGtmEvent && hC(n, u.createOnlyFields) && (k(function() {
                    m() && m().remove(n)
                }), pC[n] = !1);
                k("create", f, u.createOnlyFields);
                if (u.createOnlyFields[P.g.Kb] && !c.isGtmEvent) {
                    var w = hi || ji ? mt(u.createOnlyFields[P.g.Kb], "/analytics.js") : void 0;
                    w && (g = w)
                }
                var x = c.isGtmEvent ? u.fieldsToSet[P.g.Kb] : u.createOnlyFields[P.g.Kb];
                if (x) {
                    var y = c.isGtmEvent ? u.fieldsToSet[P.g.Hd] : u.createOnlyFields[P.g.Hd];
                    y && !pC[n] && (pC[n] = !0, k(au(n, y)))
                }
                c.isGtmEvent ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), r(u.linkAttribution));
                var A = u[P.g.Ba];
                A && A[P.g.T] && eC(A, n);
                p("set", u.fieldsToSet);
                if (c.isGtmEvent) {
                    if (u.enableLinkId) {
                        var B = {};
                        jC(B, x);
                        p("require", "linkid", "linkid.js", B)
                    }
                    Nk() && iC(f, n, c)
                }
                if (b === P.g.fc)
                    if (c.isGtmEvent) {
                        e();
                        if (u.remarketingLists) {
                            var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require", "adfeatures", {
                                cookieName: C
                            })
                        }
                        q(x);
                        p("send", "pageview");
                        u.createOnlyFields._useUp && Zt(n +
                            ".")
                    } else t(), p("send", "pageview", u.fieldsToSend);
                else b === P.g.ka ? (t(), dq(f, c), U(c, P.g.lb) && (Fp(["aw", "dc"]), Zt(n + ".")), 0 != u.sendPageView && p("send", "pageview", u.fieldsToSend), iC(f, n, c)) : b === P.g.Ja ? dC(n, c) : "screen_view" === b ? p("send", "screenview", u.fieldsToSend) : "timing_complete" === b ? (u.fieldsToSend.hitType = "timing", v("timingCategory", u.eventCategory, !0), c.isGtmEvent ? v("timingVar", u.timingVar, !0) : v("timingVar", u.name, !0), v("timingValue", Oa(u.value)), void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0), p("send", u.fieldsToSend)) : "exception" === b ? p("send", "exception", u.fieldsToSend) : "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (u.fieldsToSend.hitType = "social", v("socialNetwork", u.socialNetwork, !0), v("socialAction", u.socialAction, !0), v("socialTarget", u.socialTarget, !0)) : ((c.isGtmEvent || qC[b]) && q(x), c.isGtmEvent && e(), u.fieldsToSend.hitType = "event", v("eventCategory", u.eventCategory, !0), v("eventAction", u.eventAction || b, !0), void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0), void 0 !== u.value &&
                    v("eventValue", Oa(u.value))), p("send", u.fieldsToSend));
                if (!rC && !c.isGtmEvent) {
                    rC = !0;
                    var G = function() {
                            c.onFailure()
                        },
                        K = function() {
                            m().loaded || G()
                        };
                    kn() ? I(K) : yc(g, K, G)
                }
            } else I(c.onFailure)
        },
        tC = function(a, b, c, d) {
            el(function() {
                sC(a, b, d)
            }, [P.g.P, P.g.H])
        },
        vC = function(a) {
            function b(e) {
                function f(k, m) {
                    for (var n = 0; n < m.length; n++) {
                        var p = m[n];
                        if (e[p]) {
                            g[k] = e[p];
                            break
                        }
                    }
                }
                var g = J(e);
                f("id", ["id", "item_id", "promotion_id"]);
                f("name", ["name", "item_name", "promotion_name"]);
                f("brand", ["brand", "item_brand"]);
                f("variant", ["variant", "item_variant"]);
                f("list", ["list_name", "item_list_name"]);
                f("position", ["list_position", "creative_slot", "index"]);
                (function() {
                    if (e.category) g.category = e.category;
                    else {
                        for (var k = "", m = 0; m < uC.length; m++) void 0 !== e[uC[m]] && (k && (k += "/"), k += e[uC[m]]);
                        k && (g.category = k)
                    }
                })();
                f("listPosition", ["list_position"]);
                f("creative", ["creative_name"]);
                f("list", ["list_name"]);
                f("position", ["list_position", "creative_slot"]);
                return g
            }
            for (var c = [], d = 0; a && d < a.length; d++) a[d] && dd(a[d]) && c.push(b(a[d]));
            return c.length ?
                c : void 0
        },
        wC = function(a) {
            return al(a)
        },
        xC = !1;
    var rC, pC = {},
        fC = {},
        yC = {},
        zC = Object.freeze((yC.page_hostname = 1, yC[P.g.aa] = 1, yC[P.g.vb] = 1, yC[P.g.Na] = 1, yC[P.g.Ga] = 1, yC[P.g.Oa] = 1, yC[P.g.ic] = 1, yC[P.g.Mc] = 1, yC[P.g.La] = 1, yC[P.g.hb] = 1, yC[P.g.wa] = 1, yC[P.g.Sc] = 1, yC[P.g.Ha] = 1, yC[P.g.Bb] = 1, yC)),
        AC = {},
        aC = Object.freeze((AC.client_storage = "storage", AC.sample_rate = 1, AC.site_speed_sample_rate = 1, AC.store_gac = 1, AC.use_amp_client_id =
            1, AC[P.g.eb] = 1, AC[P.g.za] = "storeGac", AC[P.g.Na] = 1, AC[P.g.Ga] = 1, AC[P.g.Oa] = 1, AC[P.g.ic] = 1, AC[P.g.Mc] = 1, AC[P.g.hb] = 1, AC)),
        BC = {},
        CC = Object.freeze((BC._cs = 1, BC._useUp = 1, BC.allowAnchor = 1, BC.allowLinker = 1, BC.alwaysSendReferrer = 1, BC.clientId = 1, BC.cookieDomain = 1, BC.cookieExpires = 1, BC.cookieFlags = 1, BC.cookieName = 1, BC.cookiePath = 1, BC.cookieUpdate = 1, BC.legacyCookieDomain = 1, BC.legacyHistoryImport = 1, BC.name = 1, BC.sampleRate = 1, BC.siteSpeedSampleRate = 1, BC.storage = 1, BC.storeGac = 1, BC.useAmpClientId = 1, BC._cd2l = 1, BC)),
        DC = Object.freeze({
            anonymize_ip: 1
        }),
        EC = {},
        bC = Object.freeze((EC.campaign = {
                content: "campaignContent",
                id: "campaignId",
                medium: "campaignMedium",
                name: "campaignName",
                source: "campaignSource",
                term: "campaignKeyword"
            }, EC.app_id = 1, EC.app_installer_id = 1, EC.app_name = 1, EC.app_version = 1, EC.description = "exDescription", EC.fatal = "exFatal", EC.language = 1, EC.page_hostname = "hostname", EC.transport_type = "transport", EC[P.g.sa] = "currencyCode", EC[P.g.Cg] = 1, EC[P.g.wa] = "location", EC[P.g.Sc] = "page", EC[P.g.Ha] = "referrer", EC[P.g.Bb] =
            "title", EC[P.g.ff] = 1, EC[P.g.Ca] = 1, EC)),
        FC = {},
        GC = Object.freeze((FC.content_id = 1, FC.event_action = 1, FC.event_category = 1, FC.event_label = 1, FC.link_attribution = 1, FC.name = 1, FC[P.g.Ba] = 1, FC[P.g.Bg] = 1, FC[P.g.Qa] = 1, FC[P.g.ba] = 1, FC)),
        HC = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }),
        uC = Object.freeze(["item_category",
            "item_category2", "item_category3", "item_category4", "item_category5"
        ]),
        IC = {},
        nC = Object.freeze((IC.levels = 1, IC[P.g.Ga] = "duration", IC[P.g.ic] = 1, IC)),
        JC = {},
        KC = Object.freeze((JC.anonymize_ip = 1, JC.fatal = 1, JC.send_page_view = 1, JC.store_gac = 1, JC.use_amp_client_id = 1, JC[P.g.za] = 1, JC[P.g.Cg] = 1, JC)),
        oC = function(a, b, c, d) {
            if (void 0 !== c)
                if (KC[b] && (c = Pa(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[cC(b)] = c;
                else if (h(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        cC = function(a) {
            return a &&
                h(a) ? a.replace(/(_[a-z])/g, function(b) {
                    return b[1].toUpperCase()
                }) : a
        },
        LC = {},
        qC = Object.freeze((LC.checkout_progress = 1, LC.select_content = 1, LC.set_checkout_option = 1, LC[P.g.Yb] = 1, LC[P.g.Zb] = 1, LC[P.g.Hb] = 1, LC[P.g.ac] = 1, LC[P.g.ab] = 1, LC[P.g.tb] = 1, LC[P.g.cb] = 1, LC[P.g.ra] = 1, LC[P.g.bc] = 1, LC[P.g.Ea] = 1, LC)),
        MC = {},
        NC = Object.freeze((MC.checkout_progress = 1, MC.set_checkout_option = 1, MC[P.g.fg] = 1, MC[P.g.gg] = 1, MC[P.g.Yb] = 1, MC[P.g.Zb] = 1, MC[P.g.hg] = 1, MC[P.g.Hb] = 1, MC[P.g.ra] = 1, MC[P.g.bc] = 1, MC[P.g.ig] = 1, MC)),
        OC = {},
        PC = Object.freeze((OC.generate_lead =
            1, OC.login = 1, OC.search = 1, OC.select_content = 1, OC.share = 1, OC.sign_up = 1, OC.view_search_results = 1, OC[P.g.ac] = 1, OC[P.g.ab] = 1, OC[P.g.tb] = 1, OC[P.g.cb] = 1, OC[P.g.Ea] = 1, OC)),
        QC = function(a) {
            var b = "general";
            NC[a] ? b = "ecommerce" : PC[a] ? b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        RC = {},
        SC = Object.freeze((RC.view_search_results = 1, RC[P.g.ab] = 1, RC[P.g.cb] = 1, RC[P.g.Ea] = 1, RC)),
        kC = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        },
        TC = function(a) {
            if (Fa(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e =
                            d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        gC = function(a, b, c) {
            var d = function(Q) {
                    return U(c, Q)
                },
                e = {},
                f = {},
                g = {},
                k = {},
                m = TC(d(P.g.Bi));
            !c.isGtmEvent && m && kC(f, "exp", m);
            g["&gtm"] = mn(!0);
            c.isGtmEvent || (g._no_slc = !0);
            Nk() && (k._cs = wC);
            var n = d(P.g.jc);
            if (!c.isGtmEvent && dd(n))
                for (var p in n)
                    if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                        var q = d(String(n[p]));
                        void 0 !== q && kC(f, p, q)
                    }
            for (var r = !c.isGtmEvent, t = am(c), u = 0; u <
                t.length; ++u) {
                var v = t[u];
                if (c.isGtmEvent) {
                    var w = d(v);
                    HC.hasOwnProperty(v) ? e[v] = w : CC.hasOwnProperty(v) ? k[v] = w : g[v] = w
                } else {
                    var x = void 0;
                    x = v !== P.g.X ? d(v) : bm(c, v);
                    if (GC.hasOwnProperty(v)) oC(GC[v], v, x, e);
                    else if (DC.hasOwnProperty(v)) oC(DC[v], v, x, g);
                    else if (bC.hasOwnProperty(v)) oC(bC[v], v, x, f);
                    else if (aC.hasOwnProperty(v)) oC(aC[v], v, x, k);
                    else if (/^(dimension|metric|content_group)\d+$/.test(v)) oC(1, v, x, f);
                    else if (v === P.g.X) {
                        if (!xC) {
                            var y = cb(x);
                            y && (f["&did"] = y)
                        }
                        var A = void 0,
                            B = void 0;
                        b === P.g.ka ? A = cb(bm(c,
                            v), ".") : (A = cb(bm(c, v, 1), "."), B = cb(bm(c, v, 2), "."));
                        A && (f["&gdid"] = A);
                        B && (f["&edid"] = B)
                    } else v === P.g.La && 0 > t.indexOf(P.g.ic) && (k.cookieName = x + "_ga");
                    T(44) && zC[v] && (c.C.hasOwnProperty(v) || b === P.g.ka && c.h.hasOwnProperty(v)) && (r = !1)
                }
            }
            T(44) && r && (f["&jsscut"] = "1");
            !1 !== d(P.g.Ue) && !1 !== d(P.g.vb) && ZB() || (g.allowAdFeatures = !1);
            um(c) && $B() ? T(55) && (g.allowAdPersonalizationSignals = !0) : g.allowAdPersonalizationSignals = !1;
            !c.isGtmEvent && d(P.g.lb) && (k._useUp = !0);
            if (c.isGtmEvent) {
                k.name = k.name || e.gtmTrackerName;
                var C =
                    g.hitCallback;
                g.hitCallback = function() {
                    Da(C) && C();
                    c.onSuccess()
                }
            } else {
                kC(k, "cookieDomain", "auto");
                kC(g, "forceSSL", !0);
                kC(e, "eventCategory", QC(b));
                SC[b] && kC(f, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b ? kC(e, "eventLabel", d(P.g.Bg)) : "search" === b || "view_search_results" === b ? kC(e, "eventLabel", d(P.g.Pi)) : "select_content" === b && kC(e, "eventLabel", d(P.g.wi));
                var G = e[P.g.Ba] || {},
                    K = G[P.g.nc];
                K || 0 != K && G[P.g.T] ? k.allowLinker = !0 : !1 === K && kC(k, "useAmpClientId", !1);
                f.hitCallback = c.onSuccess;
                k.name =
                    a
            }
            Nk() && (g["&gcs"] = vm(), T(51) && (g["&gcd"] = zm(c)), al(P.g.P) || (k.storage = "none"), al(P.g.H) || (g.allowAdFeatures = !1, k.storeGac = !1));
            T(53) && (bl() && (g["&dma_cps"] = Am()), g["&dma"] = Ti() ? "1" : "0");
            var H = ot(c) || d(P.g.Kb),
                O = d(P.g.Hd);
            H && (c.isGtmEvent || (k[P.g.Kb] = H), k._cd2l = !0);
            O && !c.isGtmEvent && (k[P.g.Hd] = O);
            e.fieldsToSend = f;
            e.fieldsToSet = g;
            e.createOnlyFields = k;
            return e
        },
        lC = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.jh = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.Aj = "impressions" === b.translateIfKeyEquals ? vC(d) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.Ne = "promoView" === b.translateIfKeyEquals ? vC(e) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.Ne = "promoClick" === b.translateIfKeyEquals ? vC(f) : f;
                c.nb = b.promoClick.actionField;
                return c
            }
            for (var g in b)
                if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                    c.action = g;
                    var k = b[g].products;
                    c.Bc = "products" === b.translateIfKeyEquals ? vC(k) : k;
                    c.nb = b[g].actionField;
                    break
                }
            return Object.keys(c).length ? c : null
        },
        mC = function(a, b) {
            function c(u) {
                return {
                    id: d(P.g.ma),
                    affiliation: d(P.g.mg),
                    revenue: d(P.g.ba),
                    tax: d(P.g.Ye),
                    shipping: d(P.g.Oc),
                    coupon: d(P.g.ng),
                    list: d(P.g.Xe) || d(P.g.Nc) || u
                }
            }
            for (var d = function(u) {
                    return U(b, u)
                }, e = d(P.g.W), f, g = 0; e && g < e.length && !(f = e[g][P.g.Xe] || e[g][P.g.Nc]); g++);
            var k = d(P.g.jc);
            if (dd(k))
                for (var m = 0; e && m < e.length; ++m) {
                    var n = e[m],
                        p;
                    for (p in k) k.hasOwnProperty(p) &&
                        /^(dimension|metric)\d+$/.test(p) && void 0 != k[p] && kC(n, p, n[k[p]])
                }
            var q = null,
                r = d(P.g.Ai);
            if (a === P.g.ra || a === P.g.bc) q = {
                action: a,
                nb: c(),
                Bc: vC(e)
            };
            else if (a === P.g.Yb) q = {
                action: "add",
                nb: c(),
                Bc: vC(e)
            };
            else if (a === P.g.Zb) q = {
                action: "remove",
                nb: c(),
                Bc: vC(e)
            };
            else if (a === P.g.Ea) q = {
                action: "detail",
                nb: c(f),
                Bc: vC(e)
            };
            else if (a === P.g.ab) q = {
                action: "impressions",
                Aj: vC(e)
            };
            else if (a === P.g.cb) q = {
                action: "promo_view",
                Ne: vC(r) || vC(e)
            };
            else if ("select_content" === a && r && 0 < r.length || a === P.g.tb) q = {
                action: "promo_click",
                Ne: vC(r) ||
                    vC(e)
            };
            else if ("select_content" === a || a === P.g.ac) q = {
                action: "click",
                nb: {
                    list: d(P.g.Xe) || d(P.g.Nc) || f
                },
                Bc: vC(e)
            };
            else if (a === P.g.Hb || "checkout_progress" === a) {
                var t = {
                    step: a === P.g.Hb ? 1 : d(P.g.We),
                    option: d(P.g.Ad)
                };
                q = {
                    action: "checkout",
                    Bc: vC(e),
                    nb: J(c(), t)
                }
            } else "set_checkout_option" === a && (q = {
                action: "checkout_option",
                nb: {
                    step: d(P.g.We),
                    option: d(P.g.Ad)
                }
            });
            q && (q.jh = d(P.g.sa));
            return q
        },
        UC = {},
        hC = function(a, b) {
            var c = UC[a];
            UC[a] = J(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        };

    function VC(a, b, c, d) {}
    VC.I = "internal.executeEventProcessor";
    var WC = function(a) {
        var b;
        return b
    };

    function XC(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        return c
    }
    XC.N = "getCookieValues";

    function YC() {
        return Qi()
    }
    YC.I = "internal.getCountryCode";

    function ZC() {
        var a = [];
        return ed(a)
    }
    ZC.I = "internal.getDestinationIds";

    function $C(a, b) {
        var c = "";
        return c
    }
    $C.I = "internal.getElementAttribute";

    function aD(a) {
        var b = null;
        return b
    }
    aD.N = "getElementById";

    function bD(a) {
        var b = "";
        return b
    }
    bD.I = "internal.getElementInnerText";

    function cD(a) {
        var b;
        return b
    }
    cD.I = "internal.getElementValue";

    function dD(a) {
        var b = null;
        return b
    }
    dD.I = "internal.getElementsByCssSelector";
    var eD = {};
    eD.deferGaGamLink = T(67);
    eD.enableAddGoogleTagRestrictionApi = T(41);
    eD.enableAdsConversionValidation = T(38);
    eD.enableAdsHistoryChangeEvents = T(16);
    eD.enableAutoPiiOnPhoneAndAddress = T(56);
    eD.enableCcdAutoRedaction = T(42);
    eD.enableCcdPreAutoPiiDetection = T(20);
    eD.enableConsentDisclosureActivity = T(62);
    eD.enableDeferAllEnhancedMeasurement = T(64);
    eD.enableDetectUserProvidedDataApi = T(77);
    eD.enableEesPagePath = T(18);
    eD.enableEuidAutoMode = T(17);
    eD.enableFormSkipValidation = T(57);
    eD.enableGa4OnoRemarketing = T(15);
    eD.enableGetElementAttribute = T(78);
    eD.enableGetElementInnerText = T(90);
    eD.enableGetElementsByCssSelectorApi = T(80);
    eD.enableUrlDecodeEventUsage = T(91);
    eD.includeQueryInEesPagePath = T(24);
    eD.pixieSetCorePlatformServices = T(50);
    eD.useEnableAutoEventOnFormApis = T(41);
    eD.autoPiiEligible = Vi();

    function fD() {
        return ed(eD)
    }
    fD.I = "internal.getFlags";

    function gD(a, b) {
        var c;
        return c
    }
    gD.I = "internal.getProductSettingsParameter";

    function hD(a, b) {
        var c;
        return c
    }
    hD.N = "getQueryParameters";

    function iD(a, b) {
        var c;
        return c
    }
    iD.N = "getReferrerQueryParameters";

    function jD(a) {
        var b = "";
        return b
    }
    jD.N = "getReferrerUrl";

    function kD() {
        return Ri()
    }
    kD.I = "internal.getRegionCode";

    function lD(a, b) {
        var c;
        return c
    }
    lD.I = "internal.getRemoteConfigParameter";

    function mD(a) {
        var b = "";
        return b
    }
    mD.N = "getUrl";

    function nD() {
        M(this, "get_user_agent");
        return qc.userAgent
    }
    nD.N = "getUserAgent";

    function yD() {
        return z.gaGlobal = z.gaGlobal || {}
    }
    var zD = function() {
            var a = yD();
            a.hid = a.hid || Ja();
            return a.hid
        },
        AD = function(a, b) {
            var c = yD();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var wE = window,
        xE = document,
        yE = function(a) {
            var b = wE._gaUserPrefs;
            if (b && b.ioo && b.ioo() || xE.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === wE["ga-disable-" + a]) return !0;
            try {
                var c = wE.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = Cm("AMP_TOKEN", String(xE.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return xE.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function GE(a) {
        l(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[P.g.Ra] || {};
        l(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var PE = function(a, b) {};

    function OE(a, b) {
        var c = function() {};
        return c
    }

    function QE(a, b, c) {};
    var RE = OE;
    var SE = function(a, b, c) {
        for (var d = 0; d < b.length; d++) a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]))
    };

    function TE(a, b, c) {
        var d = this;
    }
    TE.I = "internal.gtagConfig";

    function UE() {
        var a = {};
        return a
    };

    function WE(a, b) {}
    WE.N = "gtagSet";

    function XE(a, b) {}
    XE.N = "injectHiddenIframe";
    var YE = {};
    var ZE = function(a, b, c, d, e, f) {
        f ? e[f] ? (e[f][0].push(c), e[f][1].push(d)) : (e[f] = [
            [c],
            [d]
        ], yc(a, function() {
            for (var g = e[f][0], k = 0; k < g.length; k++) I(g[k]);
            g.push = function(m) {
                I(m);
                return 0
            }
        }, function() {
            for (var g = e[f][1], k = 0; k < g.length; k++) I(g[k]);
            e[f] = null
        }, b)) : yc(a, c, d, b)
    };

    function $E(a, b, c, d) {
        if (!kn()) {
            L(E(this), ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"], arguments);
            M(this, "inject_script", a);
            var e = this.h;
            ZE(a, void 0, function() {
                b && b.B(e)
            }, function() {
                c && c.B(e)
            }, YE, d)
        }
    }
    var aF = Object.freeze({
            dl: 1,
            id: 1
        }),
        bF = {};

    function cF(a, b, c, d) {}
    $E.N = "injectScript";
    cF.I = "internal.injectScript";

    function dF(a) {
        var b = !0;
        return b
    }
    dF.N = "isConsentGranted";
    var eF = function() {
        var a = Vg(function(b) {
            this.h.h.log("error", b)
        });
        a.N = "JSON";
        return a
    };
    var fF = function() {
            return !1
        },
        gF = {
            getItem: function(a) {
                var b = null;
                return b
            },
            setItem: function(a,
                b) {
                return !1
            },
            removeItem: function(a) {}
        };
    var hF = ["textContent", "value", "tagName", "children", "childElementCount"];

    function iF(a) {
        var b;
        return b
    }
    iF.I = "internal.locateUserData";

    function kF() {}
    kF.N = "logToConsole";

    function lF(a, b) {}
    lF.I = "internal.mergeRemoteConfig";

    function mF(a) {
        var b = void 0;
        return b
    }
    mF.N = "parseUrl";

    function nF(a) {}
    nF.I = "internal.processAsNewEvent";

    function oF(a, b) {
        var c = !1;
        return c
    }
    oF.N = "queryPermission";

    function pF() {
        var a = "";
        return a
    }
    pF.N = "readCharacterSet";

    function qF() {
        var a = "";
        return a
    }
    qF.N = "readTitle";

    function rF(a, b) {
        var c = this;
    }
    rF.I = "internal.registerCcdCallback";

    function sF(a) {
        return !0
    }
    sF.I = "internal.registerDestination";
    var tF = Object.freeze(["config", "event", "get", "set"]);

    function uF(a, b, c) {}
    uF.I = "internal.registerGtagCommandListener";

    function vF(a, b) {
        var c = !1;
        return c
    }
    vF.I = "internal.removeDataLayerEventListener";

    function wF(a, b) {}
    wF.I = "internal.removeFormData";

    function xF() {}
    xF.N = "resetDataLayer";

    function yF(a, b, c, d) {}
    yF.I = "internal.sendGtagEvent";

    function zF(a, b, c) {}
    zF.N = "sendPixel";

    function AF(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    }
    AF.N = "setCookie";

    function BF(a, b) {}
    BF.N = "setCorePlatformServices";

    function CF(a) {}
    CF.N = "setDefaultConsentState";

    function DF(a, b) {}
    DF.I = "internal.setDelegatedConsentType";

    function EF(a, b) {}
    EF.I = "internal.setFormAction";

    function FF(a, b, c) {
        L(E(this), ["path:!string", "value:?*", "overrideExisting:?boolean"], arguments);
        M(this, "access_globals", "readwrite", a);
        var d = a.split("."),
            e = $a(d, [z, F]),
            f = d.pop();
        if (e && (void 0 === e[f] || c)) return e[f] = gd(b, this.h, Jz()), !0;
        return !1
    }
    FF.N = "setInWindow";

    function GF(a, b, c) {}
    GF.I = "internal.setProductSettingsParameter";

    function HF(a, b, c) {}
    HF.I = "internal.setRemoteConfigParameter";

    function IF(a, b, c, d) {
        var e = this;
    }
    IF.N = "sha256";

    function JF(a, b, c) {}
    JF.I = "internal.sortRemoteConfigParameters";
    var KF = {},
        LF = {};
    KF.N = "templateStorage";
    KF.getItem = function(a) {
        var b = null;
        return b
    };
    KF.setItem = function(a, b) {};
    KF.removeItem = function(a) {};
    KF.clear = function() {};

    function MF(a, b) {
        var c = !1;
        return c
    }
    MF.I = "internal.testRegex";
    var NF = function(a) {
        var b;
        return b
    };

    function OF(a) {}
    OF.N = "updateConsentState";
    var PF = function() {
        var a = function(c) {
                return Jy(c.I, c)
            },
            b = function(c) {
                return Iy(c.N, c)
            };
        b(Ly);
        b(Ry);
        b(Hz);
        b(Kz);
        b(Lz);
        b(Pz);
        b(Qz);
        b(Sz);
        b(eF());
        b(Tz);
        b(XC);
        b(hD);
        b(iD);
        b(jD);
        b(mD);
        b(WE);
        b(XE);
        b($E);
        b(dF);
        b(kF);
        b(mF);
        b(oF);
        b(pF);
        b(qF);
        b(zF);
        b(AF);
        b(CF);
        b(FF);
        b(IF);
        b(KF);
        b(OF);
        Iy("Math", Eg());
        Iy("Object", ch);
        Iy("TestHelper", gh());
        Iy("assertApi", Ag);
        Iy("assertThat", Bg);
        Iy("decodeUri", Hg);
        Iy("decodeUriComponent", Ig);
        Iy("encodeUri", Jg);
        Iy("encodeUriComponent", Kg);
        Iy("fail", Qg);
        Iy("generateRandom", Rg);
        Iy("getContainerVersion",
            Sg);
        Iy("getTimestamp", Tg);
        Iy("getTimestampMillis", Tg);
        Iy("getType", Ug);
        Iy("makeInteger", Wg);
        Iy("makeNumber", Xg);
        Iy("makeString", Yg);
        Iy("makeTableMap", Zg);
        Iy("mock", bh);
        Iy("fromBase64", WC, !("atob" in z));
        Iy("localStorage", gF, !fF());
        Iy("toBase64", NF, !("btoa" in z));
        a(Oy);
        a(Wy);
        a(hz);
        a(oz);
        a(tz);
        a(Fz);
        a(Iz);
        a(Nz);
        a(Rz);
        a(Uz);
        a(Xz);
        a(oA);
        a(tA);
        a(yA);
        a(HA);
        a(LA);
        a(WA);
        a(iB);
        a(Lg);
        a(kB);
        a(YC);
        a(ZC);
        a(fD);
        a(gD);
        a(kD);
        a(lD);
        a(TE);
        a(cF);
        a(vz);
        a(iF);
        a(lF);
        a(nF);
        a(rF);
        a(uF);
        a(vF);
        a(wF);
        a(yF);
        a(DF);
        a(GF);
        a(HF);
        a(JF);
        a(MF);
        Jy("internal.GtagSchema", UE());
        T(50) && b(BF);
        T(69) && a(wz);
        T(72) && a(sF);
        T(74) && a(VC);
        T(77) && a(Yz);
        T(79) && a(cD);
        T(80) && a(dD);
        T(89) && a(dA);
        T(78) && a($C);
        T(90) && a(bD);
        T(95) && a(EF);
        return Ky()
    };
    var QF = function() {
            return !1
        },
        RF = function() {
            var a = {};
            return function(b, c, d) {}
        };
    var SF;

    function TF() {
        var a = SF;
        return function(b, c, d) {
            var e = d && d.event;
            UF(c);
            var f = new ib;
            l(c, function(q, r) {
                var t = ed(r, void 0, VF());
                void 0 === t && void 0 !== r && N(44);
                f.set(q, t)
            });
            a.h.h.D = wf();
            var g = {
                oj: Jf(b),
                eventId: void 0 !== e ? e.id : void 0,
                priorityId: void 0 !== e ? e.priorityId : void 0,
                wf: void 0 !== e ? function(q) {
                    return e.Sb.wf(q)
                } : void 0,
                bd: function() {
                    return b
                },
                log: function() {},
                Zk: {
                    index: d && d.index,
                    type: d && d.type,
                    name: d && d.name
                },
                jm: !!$s(b, 3)
            };
            if (QF()) {
                var k = RF(),
                    m = void 0,
                    n = void 0;
                g.Za = {
                    Th: [],
                    me: {},
                    ob: function(q, r, t) {
                        1 ===
                            r && (m = q);
                        7 === r && (n = t);
                        k(q, r, t)
                    },
                    Fh: $g()
                };
                g.log = function(q, r) {
                    if (m) {
                        var t = Array.prototype.slice.call(arguments, 1);
                        k(m, 4, {
                            level: q,
                            source: n,
                            message: t
                        })
                    }
                }
            }
            var p = we(a, g, [b, f]);
            a.h.h.D = void 0;
            p instanceof sa && "return" === p.h && (p = p.B);
            return gd(p, void 0, VF())
        }
    }

    function VF() {
        var a = 2;
        T(94) && (a = 1);
        return a
    }

    function UF(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        Da(b) && (a.gtmOnSuccess = function() {
            I(b)
        });
        Da(c) && (a.gtmOnFailure = function() {
            I(c)
        })
    }

    function WF() {
        SF.h.h.M = function(a, b, c) {
            $h.SANDBOXED_JS_SEMAPHORE = $h.SANDBOXED_JS_SEMAPHORE || 0;
            $h.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                $h.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }

    function XF(a) {
        void 0 !== a && l(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                ri[e] = ri[e] || [];
                ri[e].push(b)
            }
        })
    };
    var YF = encodeURI,
        Y = encodeURIComponent,
        ZF = function(a, b, c) {
            Bc(a, b, c)
        },
        $F = function(a, b) {
            if (!a) return !1;
            var c = pj(rj(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        aG = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) &&
                a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Z = {
        o: {}
    };
    Z.o.sdl = ["google"],
        function() {
            function a() {
                return !!(Object.keys(m("horiz.pix")).length || Object.keys(m("horiz.pct")).length || Object.keys(m("vert.pix")).length || Object.keys(m("vert.pct")).length)
            }

            function b(y) {
                for (var A = [], B = y.split(","), C = 0; C < B.length; C++) {
                    var G = Number(B[C]);
                    if (isNaN(G)) return [];
                    p.test(B[C]) || A.push(G)
                }
                return A
            }

            function c() {
                var y = 0,
                    A = 0;
                return function() {
                    var B = cj(),
                        C = B.height;
                    y = Math.max(v.scrollLeft + B.width, y);
                    A = Math.max(v.scrollTop + C, A);
                    return {
                        kh: y,
                        lh: A
                    }
                }
            }

            function d() {
                t = X("self");
                u = t.document;
                v = u.scrollingElement || u.body && u.body.parentNode;
                x = c()
            }

            function e(y, A, B, C) {
                var G = m(A),
                    K = {},
                    H;
                for (H in G)
                    if (K = {
                            ld: K.ld
                        }, K.ld = H, G.hasOwnProperty(K.ld)) {
                        var O = Number(K.ld);
                        y < O || (Zx({
                            event: "gtm.scrollDepth",
                            "gtm.scrollThreshold": O,
                            "gtm.scrollUnits": B.toLowerCase(),
                            "gtm.scrollDirection": C,
                            "gtm.triggers": G[K.ld].join(",")
                        }), ux("sdl", A, function(Q) {
                            return function(V) {
                                delete V[Q.ld];
                                return V
                            }
                        }(K), {}))
                    }
            }

            function f() {
                var y = x(),
                    A = y.kh,
                    B = y.lh,
                    C = A / v.scrollWidth * 100,
                    G = B / v.scrollHeight * 100;
                e(A, "horiz.pix",
                    q.rf, r.Wi);
                e(C, "horiz.pct", q.qf, r.Wi);
                e(B, "vert.pix", q.rf, r.lj);
                e(G, "vert.pct", q.qf, r.lj);
                tx("sdl", "pending", !1)
            }

            function g() {
                var y = 250,
                    A = !1;
                u.scrollingElement && u.documentElement && t.addEventListener && (y = 50, A = !0);
                var B = 0,
                    C = !1,
                    G = function() {
                        C ? B = Sx(G, y) : (B = 0, f(), dy("sdl") && !a() && (Dc(t, "scroll", K), Dc(t, "resize", K), tx("sdl", "init", !1)));
                        C = !1
                    },
                    K = function() {
                        A && x();
                        B ? C = !0 : (B = Sx(G, y), tx("sdl", "pending", !0))
                    };
                return K
            }

            function k(y, A, B) {
                if (A) {
                    var C = b(String(y));
                    ux("sdl", B, function(G) {
                        for (var K = 0; K < C.length; K++) {
                            var H =
                                String(C[K]);
                            G.hasOwnProperty(H) || (G[H] = []);
                            G[H].push(A)
                        }
                        return G
                    }, {})
                }
            }

            function m(y) {
                return vx("sdl", y, {})
            }

            function n(y) {
                I(y.vtp_gtmOnSuccess);
                var A = y.vtp_uniqueTriggerId,
                    B = y.vtp_horizontalThresholdsPixels,
                    C = y.vtp_horizontalThresholdsPercent,
                    G = y.vtp_verticalThresholdUnits,
                    K = y.vtp_verticalThresholdsPixels,
                    H = y.vtp_verticalThresholdsPercent;
                switch (y.vtp_horizontalThresholdUnits) {
                    case q.rf:
                        k(B, A, "horiz.pix");
                        break;
                    case q.qf:
                        k(C, A, "horiz.pct")
                }
                switch (G) {
                    case q.rf:
                        k(K, A, "vert.pix");
                        break;
                    case q.qf:
                        k(H,
                            A, "vert.pct")
                }
                dy("sdl") ? vx("sdl", "pending") || (w || (d(), w = !0), I(function() {
                    return f()
                })) : (d(), w = !0, v && (ey("sdl"), tx("sdl", "pending", !0), I(function() {
                    f();
                    if (a()) {
                        var O = g();
                        Cc(t, "scroll", O);
                        Cc(t, "resize", O)
                    } else tx("sdl", "init", !1)
                })))
            }
            var p = /^\s*$/,
                q = {
                    qf: "PERCENT",
                    rf: "PIXELS"
                },
                r = {
                    lj: "vertical",
                    Wi: "horizontal"
                },
                t, u, v, w = !1,
                x;
            (function(y) {
                Z.__sdl = y;
                Z.__sdl.s = "sdl";
                Z.__sdl.isVendorTemplate = !0;
                Z.__sdl.priorityOverride = 0;
                Z.__sdl.isInfrastructure = !1;
                Z.__sdl.runInSiloedMode = !1
            })(function(y) {
                y.vtp_triggerStartOption ?
                    n(y) : iw(function() {
                        n(y)
                    })
            })
        }();
    Z.o.jsm = ["customScripts"],
        function() {
            (function(a) {
                Z.__jsm = a;
                Z.__jsm.s = "jsm";
                Z.__jsm.isVendorTemplate = !0;
                Z.__jsm.priorityOverride = 0;
                Z.__jsm.isInfrastructure = !1;
                Z.__jsm.runInSiloedMode = !1
            })(function(a) {
                if (void 0 !== a.vtp_javascript) {
                    var b = a.vtp_javascript;
                    try {
                        var c = X("google_tag_manager");
                        var d = c && c.e && c.e(b);
                        fy(d, "jsm", a.vtp_gtmEventId);
                        return d
                    } catch (e) {}
                }
            })
        }();

    Z.o.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.s = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0;
                Z.__e.isInfrastructure = !1;
                Z.__e.runInSiloedMode = !0
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    Z.o.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.s = "f";
                Z.__f.isVendorTemplate = !0;
                Z.__f.priorityOverride = 0;
                Z.__f.isInfrastructure = !1;
                Z.__f.runInSiloedMode = !1
            })(function(a) {
                var b = Yx("gtm.referrer", 1) || F.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? pj(rj(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Xx(String(b)) : String(b)
            })
        }();
    Z.o.cl = ["google"],
        function() {
            function a(b) {
                var c = b.target;
                if (c) {
                    var d = rx(c, "gtm.click");
                    Zx(d)
                }
            }(function(b) {
                Z.__cl = b;
                Z.__cl.s = "cl";
                Z.__cl.isVendorTemplate = !0;
                Z.__cl.priorityOverride = 0;
                Z.__cl.isInfrastructure = !1;
                Z.__cl.runInSiloedMode = !1
            })(function(b) {
                if (!dy("cl")) {
                    var c = X("document");
                    Cc(c, "click", a, !0);
                    ey("cl")
                }
                I(b.vtp_gtmOnSuccess)
            })
        }();
    Z.o.access_globals = ["google"],
        function() {
            function a(b, c, d) {
                var e = {
                    key: d,
                    read: !1,
                    write: !1,
                    execute: !1
                };
                switch (c) {
                    case "read":
                        e.read = !0;
                        break;
                    case "write":
                        e.write = !0;
                        break;
                    case "readwrite":
                        e.read = e.write = !0;
                        break;
                    case "execute":
                        e.execute = !0;
                        break;
                    default:
                        throw Error("Invalid " + b + " request " + c);
                }
                return e
            }(function(b) {
                Z.__access_globals = b;
                Z.__access_globals.s = "access_globals";
                Z.__access_globals.isVendorTemplate = !0;
                Z.__access_globals.priorityOverride = 0;
                Z.__access_globals.isInfrastructure = !1;
                Z.__access_globals.runInSiloedMode = !1
            })(function(b) {
                for (var c = b.vtp_keys || [], d = b.vtp_createPermissionError, e = [], f = [], g = [], k = 0; k < c.length; k++) {
                    var m = c[k],
                        n = m.key;
                    m.read && e.push(n);
                    m.write && f.push(n);
                    m.execute && g.push(n)
                }
                return {
                    assert: function(p, q, r) {
                        if (!h(r)) throw d(p, {}, "Key must be a string.");
                        if ("read" === q) {
                            if (-1 < e.indexOf(r)) return
                        } else if ("write" === q) {
                            if (-1 < f.indexOf(r)) return
                        } else if ("readwrite" === q) {
                            if (-1 < f.indexOf(r) && -1 < e.indexOf(r)) return
                        } else if ("execute" === q) {
                            if (-1 < g.indexOf(r)) return
                        } else throw d(p, {}, "Operation must be either 'read', 'write', or 'execute', was " +
                            q);
                        throw d(p, {}, "Prohibited " + q + " on global variable: " + r + ".");
                    },
                    J: a
                }
            })
        }();
    Z.o.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.s = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0;
                Z.__u.isInfrastructure = !1;
                Z.__u.runInSiloedMode = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : Yx("gtm.url", 1)) || Vx();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return Xx(String(c));
                var e = rj(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        k = b[a("vtp_queryKey").toString()] || "",
                        m =
                        b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? Fa(k) ? n = k : n = String(k).replace(/\s+/g, "").split(",") : n = [String(k)];
                    for (var p = 0; p < n.length; p++) {
                        var q = pj(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!m || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = pj(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();
    Z.o.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.s = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0;
                Z.__v.isInfrastructure = !1;
                Z.__v.runInSiloedMode = !1
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = Yx(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                fy(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();



    Z.o.ytl = ["google"],
        function() {
            function a() {
                var u = Math.round(1E9 * Math.random()) + "";
                return F.getElementById(u) ? a() : u
            }

            function b(u, v) {
                if (!u) return !1;
                for (var w = 0; w < p.length; w++)
                    if (0 <= u.indexOf("//" + p[w] + "/" + v)) return !0;
                return !1
            }

            function c(u, v) {
                var w = u.getAttribute("src");
                if (b(w, "embed/")) {
                    if (0 < w.indexOf("enablejsapi=1")) return !0;
                    if (v) {
                        var x = u.setAttribute,
                            y;
                        var A = -1 !== w.indexOf("?") ? "&" : "?";
                        if (-1 < w.indexOf("origin=")) y = w + A + "enablejsapi=1";
                        else {
                            if (!r) {
                                var B = X("document");
                                r = B.location.protocol + "//" + B.location.hostname;
                                B.location.port && (r += ":" + B.location.port)
                            }
                            y = w + A + "enablejsapi=1&origin=" + encodeURIComponent(r)
                        }
                        x.call(u, "src", y);
                        return !0
                    }
                }
                return !1
            }

            function d(u, v) {
                if (!u.getAttribute("data-gtm-yt-inspected-" + v.pb) && (u.setAttribute("data-gtm-yt-inspected-" + v.pb, "true"), c(u, v.ue))) {
                    u.id || (u.id = a());
                    var w = X("YT"),
                        x = w.get(u.id);
                    x || (x = new w.Player(u.id));
                    var y = f(x, v),
                        A = {},
                        B;
                    for (B in y) A = {
                        He: A.He
                    }, A.He = B, y.hasOwnProperty(A.He) && x.addEventListener(A.He, function(C) {
                        return function(G) {
                            return y[C.He](G.data)
                        }
                    }(A))
                }
            }

            function e(u) {
                I(function() {
                    function v() {
                        for (var x =
                                w.getElementsByTagName("iframe"), y = x.length, A = 0; A < y; A++) d(x[A], u)
                    }
                    var w = X("document");
                    v();
                    Ex(v)
                })
            }

            function f(u, v) {
                var w, x;

                function y() {
                    V = Qx(function() {
                        return {
                            url: S,
                            title: ja,
                            mh: W,
                            tj: u.getCurrentTime(),
                            playbackRate: ka
                        }
                    }, v.pb, u.getIframe());
                    W = 0;
                    ja = S = "";
                    ka = 1;
                    return A
                }

                function A(Ha) {
                    switch (Ha) {
                        case q.PLAYING:
                            W = Math.round(u.getDuration());
                            S = u.getVideoUrl();
                            if (u.getVideoData) {
                                var Na = u.getVideoData();
                                ja = Na ? Na.title : ""
                            }
                            ka = u.getPlaybackRate();
                            v.hh ? Zx(V.createEvent("start")) : V.Yc();
                            ma = m(v.Nh, v.Mh, u.getDuration());
                            return B(Ha);
                        default:
                            return A
                    }
                }

                function B() {
                    ca = u.getCurrentTime();
                    Ia = Ux().getTime();
                    V.Jj();
                    Q();
                    return C
                }

                function C(Ha) {
                    var Na;
                    switch (Ha) {
                        case q.ENDED:
                            return K(Ha);
                        case q.PAUSED:
                            Na = "pause";
                        case q.BUFFERING:
                            var Ya = u.getCurrentTime() - ca;
                            Na = 1 < Math.abs((Ux().getTime() - Ia) / 1E3 * ka - Ya) ? "seek" : Na || "buffering";
                            u.getCurrentTime() && (v.gh ? Zx(V.createEvent(Na)) : V.Yc());
                            O();
                            return G;
                        case q.UNSTARTED:
                            return y(Ha);
                        default:
                            return C
                    }
                }

                function G(Ha) {
                    switch (Ha) {
                        case q.ENDED:
                            return K(Ha);
                        case q.PLAYING:
                            return B(Ha);
                        case q.UNSTARTED:
                            return y(Ha);
                        default:
                            return G
                    }
                }

                function K() {
                    for (; x;) {
                        var Ha = w;
                        Rx(x);
                        Ha()
                    }
                    v.fh && Zx(V.createEvent("complete", 1));
                    return y(q.UNSTARTED)
                }

                function H() {}

                function O() {
                    x && (Rx(x), x = 0, w = H)
                }

                function Q() {
                    if (ma.length && 0 !== ka) {
                        var Ha = -1,
                            Na;
                        do {
                            Na = ma[0];
                            if (Na.Da > u.getDuration()) return;
                            Ha = (Na.Da - u.getCurrentTime()) / ka;
                            if (0 > Ha && (ma.shift(), 0 === ma.length)) return
                        } while (0 > Ha);
                        w = function() {
                            x = 0;
                            w = H;
                            0 < ma.length && ma[0].Da === Na.Da && (ma.shift(), Zx(V.createEvent("progress", Na.Le, Na.Pe)));
                            Q()
                        };
                        x = Sx(w, 1E3 * Ha)
                    }
                }
                var V, ma = [],
                    W, S, ja, ka, ca, Ia,
                    ua = y(q.UNSTARTED);
                x = 0;
                w = H;
                return {
                    onStateChange: function(Ha) {
                        ua = ua(Ha)
                    },
                    onPlaybackRateChange: function(Ha) {
                        ca = u.getCurrentTime();
                        Ia = Ux().getTime();
                        V.Yc();
                        ka = Ha;
                        O();
                        Q()
                    }
                }
            }

            function g(u) {
                for (var v = u.split(","), w = v.length, x = [], y = 0; y < w; y++) {
                    var A = parseInt(v[y], 10);
                    isNaN(A) || 100 < A || 0 > A || x.push(A / 100)
                }
                x.sort(function(B, C) {
                    return B - C
                });
                return x
            }

            function k(u) {
                for (var v = u.split(","), w = v.length, x = [], y = 0; y < w; y++) {
                    var A = parseInt(v[y], 10);
                    isNaN(A) || 0 > A || x.push(A)
                }
                x.sort(function(B, C) {
                    return B - C
                });
                return x
            }

            function m(u,
                v, w) {
                var x = u.map(function(B) {
                    return {
                        Da: B,
                        Pe: B,
                        Le: void 0
                    }
                });
                if (!v.length) return x;
                var y = v.map(function(B) {
                    return {
                        Da: B * w,
                        Pe: void 0,
                        Le: B
                    }
                });
                if (!x.length) return y;
                var A = x.concat(y);
                A.sort(function(B, C) {
                    return B.Da - C.Da
                });
                return A
            }

            function n(u) {
                var v = !!u.vtp_captureStart,
                    w = !!u.vtp_captureComplete,
                    x = !!u.vtp_capturePause,
                    y = g(u.vtp_progressThresholdsPercent + ""),
                    A = k(u.vtp_progressThresholdsTimeInSeconds + ""),
                    B = !!u.vtp_fixMissingApi;
                if (v || w || x || y.length || A.length) {
                    var C = {
                            hh: v,
                            fh: w,
                            gh: x,
                            Mh: y,
                            Nh: A,
                            ue: B,
                            pb: void 0 ===
                                u.vtp_uniqueTriggerId ? "" : u.vtp_uniqueTriggerId
                        },
                        G = X("YT"),
                        K = function() {
                            e(C)
                        };
                    I(u.vtp_gtmOnSuccess);
                    if (G) G.ready && G.ready(K);
                    else {
                        var H = X("onYouTubeIframeAPIReady");
                        $x("onYouTubeIframeAPIReady", function() {
                            H && H();
                            K()
                        });
                        I(function() {
                            for (var O = X("document"), Q = O.getElementsByTagName("script"), V = Q.length, ma = 0; ma < V; ma++) {
                                var W = Q[ma].getAttribute("src");
                                if (b(W, "iframe_api") || b(W, "player_api")) return
                            }
                            for (var S = O.getElementsByTagName("iframe"), ja = S.length, ka = 0; ka < ja; ka++)
                                if (!t && c(S[ka], C.ue)) {
                                    Tx("https://www.youtube.com/iframe_api");
                                    t = !0;
                                    break
                                }
                        })
                    }
                } else I(u.vtp_gtmOnSuccess)
            }
            var p = ["www.youtube.com", "www.youtube-nocookie.com"],
                q = {
                    UNSTARTED: -1,
                    ENDED: 0,
                    PLAYING: 1,
                    PAUSED: 2,
                    BUFFERING: 3,
                    CUED: 5
                },
                r, t = !1;
            (function(u) {
                Z.__ytl = u;
                Z.__ytl.s = "ytl";
                Z.__ytl.isVendorTemplate = !0;
                Z.__ytl.priorityOverride = 0;
                Z.__ytl.isInfrastructure = !1;
                Z.__ytl.runInSiloedMode = !1
            })(function(u) {
                u.vtp_triggerStartOption ? n(u) : Kt(function() {
                    n(u)
                })
            })
        }();

    Z.o.gclidw = ["google"],
        function() {
            var a = ["aw", "dc", "gf", "ha", "gb"];
            (function(b) {
                Z.__gclidw = b;
                Z.__gclidw.s = "gclidw";
                Z.__gclidw.isVendorTemplate = !0;
                Z.__gclidw.priorityOverride = 100;
                Z.__gclidw.isInfrastructure = !1;
                Z.__gclidw.runInSiloedMode = !1
            })(function(b) {
                I(b.vtp_gtmOnSuccess);
                var c, d, e, f;
                b.vtp_enableCookieOverrides && (e = b.vtp_cookiePrefix, c = b.vtp_path, d = b.vtp_domain, f = b.vtp_cookieFlags);
                var g = {
                    prefix: e,
                    path: c,
                    domain: d,
                    flags: f
                };
                !b.vtp_enableCrossDomainFeature || b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming ||
                    !b.vtp_enableCrossDomain && !To() || (Ap(a, g), fp(g));
                xp(g);
                Dp(["aw", "dc"], g);
                zq(g);
                if (b.vtp_enableCrossDomainFeature && b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
                    var k = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
                    Cp(a, k, b.vtp_urlPosition, !!b.vtp_formDecoration, g.prefix);
                    gp(Yo(g.prefix), k, b.vtp_urlPosition, !!b.vtp_formDecoration, g);
                    gp("FPAU", k, b.vtp_urlPosition, !!b.vtp_formDecoration, g)
                }
                var m = Yx(P.g.la);
                Np({
                    m: om(new dm(b.vtp_gtmEventId, b.vtp_gtmPriorityId)),
                    Af: !1,
                    Oe: void 0 != m && !1 !== m,
                    vc: g,
                    De: !0
                });
                b.vtp_enableUrlPassthrough && Fp(["aw", "dc", "gb"])
            })
        }();

    Z.o.aev = ["google"],
        function() {
            function a(r, t, u, v, w) {
                w || (w = "element");
                var x = t + "." + u,
                    y;
                if (n.hasOwnProperty(x)) y = n[x];
                else {
                    var A = r[w];
                    if (A && (y = v(A), n[x] = y, p.push(x), 35 < p.length)) {
                        var B = p.shift();
                        delete n[B]
                    }
                }
                return y
            }

            function b(r, t, u) {
                var v = r[q[t]];
                return void 0 !== v ? v : u
            }

            function c(r, t) {
                if (!r) return !1;
                var u = d(Vx());
                Fa(t) || (t = String(t || "").replace(/\s+/g, "").split(","));
                for (var v = [u], w = 0; w < t.length; w++) {
                    var x = t[w];
                    if (x.hasOwnProperty("is_regex"))
                        if (x.is_regex) try {
                            x = new RegExp(x.domain)
                        } catch (B) {
                            continue
                        } else x =
                            x.domain;
                    var y = d(r);
                    if (x instanceof RegExp) {
                        if (x.test(y)) return !1
                    } else {
                        var A = x;
                        if (0 != A.length) {
                            if (0 <= y.indexOf(A)) return !1;
                            v.push(d(A))
                        }
                    }
                }
                return !$F(r, v)
            }

            function d(r) {
                m.test(r) || (r = "http://" + r);
                return pj(rj(r), "HOST", !0)
            }

            function e(r, t, u, v) {
                switch (r) {
                    case "SUBMIT_TEXT":
                        return a(t, u, "FORM." + r, f, "formSubmitElement") || v;
                    case "LENGTH":
                        var w = a(t, u, "FORM." + r, g);
                        return void 0 === w ? v : w;
                    case "INTERACTED_FIELD_ID":
                        return k(t, "id", v);
                    case "INTERACTED_FIELD_NAME":
                        return k(t, "name", v);
                    case "INTERACTED_FIELD_TYPE":
                        return k(t,
                            "type", v);
                    case "INTERACTED_FIELD_POSITION":
                        var x = t.interactedFormFieldPosition;
                        return void 0 === x ? v : x;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var y = t.interactSequenceNumber;
                        return void 0 === y ? v : y;
                    default:
                        return v
                }
            }

            function f(r) {
                switch (r.tagName.toLowerCase()) {
                    case "input":
                        return Ec(r, "value");
                    case "button":
                        return Fc(r);
                    default:
                        return null
                }
            }

            function g(r) {
                if ("form" === r.tagName.toLowerCase() && r.elements) {
                    for (var t = 0, u = 0; u < r.elements.length; u++) zx(r.elements[u]) && t++;
                    return t
                }
            }

            function k(r, t, u) {
                var v = r.interactedFormField;
                return v && Ec(v, t) || u
            }
            var m = /^https?:\/\//i,
                n = {},
                p = [],
                q = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(r) {
                Z.__aev = r;
                Z.__aev.s = "aev";
                Z.__aev.isVendorTemplate = !0;
                Z.__aev.priorityOverride = 0;
                Z.__aev.isInfrastructure = !1;
                Z.__aev.runInSiloedMode = !1
            })(function(r) {
                var t = r.vtp_gtmEventId,
                    u = r.vtp_defaultValue,
                    v = r.vtp_varType,
                    w = r.vtp_gtmCachedValues.gtm;
                switch (v) {
                    case "TAG_NAME":
                        var x = w.element;
                        return x && x.tagName || u;
                    case "TEXT":
                        return a(w, t, v, Fc) || u;
                    case "URL":
                        var y;
                        a: {
                            var A = String(w.elementUrl || u || ""),
                                B = rj(A),
                                C = String(r.vtp_component || "URL");
                            switch (C) {
                                case "URL":
                                    y = A;
                                    break a;
                                case "IS_OUTBOUND":
                                    y = c(A, r.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    y = pj(B, C, r.vtp_stripWww, r.vtp_defaultPages, r.vtp_queryKey)
                            }
                        }
                        return y;
                    case "ATTRIBUTE":
                        var G;
                        if (void 0 ===
                            r.vtp_attribute) G = b(w, v, u);
                        else {
                            var K = w.element;
                            G = K && Ec(K, r.vtp_attribute) || u || ""
                        }
                        return G;
                    case "MD":
                        var H = r.vtp_mdValue,
                            O = a(w, t, "MD", Mx);
                        return H && O ? Px(O, H) || u : O || u;
                    case "FORM":
                        return e(String(r.vtp_component || "SUBMIT_TEXT"), w, t, u);
                    default:
                        var Q = b(w, v, u);
                        fy(Q, "aev", r.vtp_gtmEventId);
                        return Q
                }
            })
        }();
    Z.o.paused = [],
        function() {
            (function(a) {
                Z.__paused = a;
                Z.__paused.s = "paused";
                Z.__paused.isVendorTemplate = !0;
                Z.__paused.priorityOverride = 0;
                Z.__paused.isInfrastructure = !1;
                Z.__paused.runInSiloedMode = !1
            })(function(a) {
                I(a.vtp_gtmOnFailure)
            })
        }();



    Z.o.gaawc = ["google"],
        function() {
            (function(a) {
                Z.__gaawc = a;
                Z.__gaawc.s = "gaawc";
                Z.__gaawc.isVendorTemplate = !0;
                Z.__gaawc.priorityOverride = 10;
                Z.__gaawc.isInfrastructure = !1;
                Z.__gaawc.runInSiloedMode = !1
            })(function(a) {
                var b = String(a.vtp_measurementId);
                if (!h(b) || 0 >= b.indexOf("-")) I(a.vtp_gtmOnFailure);
                else {
                    var c = aG(a.vtp_fieldsToSet, "name", "value") || {};
                    if (c.hasOwnProperty(P.g.Ra) || a.vtp_userProperties) {
                        var d = c[P.g.Ra] || {};
                        J(aG(a.vtp_userProperties, "name", "value"), d);
                        c[P.g.Ra] = d
                    }
                    a.vtp_enableSendToServerContainer &&
                        a.vtp_serverContainerUrl && (c[P.g.Pb] = a.vtp_serverContainerUrl, c[P.g.Gd] = !0);
                    var e = a.vtp_userDataVariable;
                    e && (c[P.g.na] = e);
                    SE(c, Ph, function(f) {
                        return Pa(f)
                    });
                    SE(c, Rh, function(f) {
                        return Number(f)
                    });
                    c.send_page_view = a.vtp_sendPageView;
                    Gu(Cu(b, c), a.vtp_gtmEventId, {
                        noTargetGroup: !0,
                        originatingEntity: Mt(1, a.vtp_gtmEntityIndex, a.vtp_gtmEntityName)
                    });
                    I(a.vtp_gtmOnSuccess)
                }
            })
        }();
    Z.o.gaawe = ["google"],
        function() {
            function a(f, g, k) {
                for (var m = 0; m < g.length; m++) f.hasOwnProperty(g[m]) && (f[g[m]] = k(f[g[m]]))
            }

            function b(f, g, k) {
                var m = {},
                    n = function(u, v) {
                        m[u] = m[u] || v
                    },
                    p = function(u, v, w) {
                        w = void 0 === w ? !1 : w;
                        c.push(6);
                        if (u) {
                            m.items = m.items || [];
                            for (var x = {}, y = 0; y < u.length; x = {
                                    fd: x.fd
                                }, y++) x.fd = {}, l(u[y], function(B) {
                                return function(C, G) {
                                    w && "id" === C ? B.fd.promotion_id = G : w && "name" === C ? B.fd.promotion_name = G : B.fd[C] = G
                                }
                            }(x)), m.items.push(x.fd)
                        }
                        if (v)
                            for (var A in v) d.hasOwnProperty(A) ? n(d[A], v[A]) : n(A,
                                v[A])
                    },
                    q;
                "dataLayer" === f.vtp_getEcommerceDataFrom ? (q = f.vtp_gtmCachedValues.eventModel) || (q = f.vtp_gtmCachedValues.ecommerce) : (q = f.vtp_ecommerceMacroData, dd(q) && q.ecommerce && !q.items && (q = q.ecommerce));
                if (dd(q)) {
                    var r = !1,
                        t;
                    for (t in q) q.hasOwnProperty(t) && (r || (c.push(5), r = !0), "currencyCode" === t ? n("currency", q.currencyCode) : "impressions" === t && g === P.g.ab ? p(q.impressions, null) : "promoClick" === t && g === P.g.tb ? p(q.promoClick.promotions, q.promoClick.actionField, !0) : "promoView" === t && g === P.g.cb ? p(q.promoView.promotions,
                        q.promoView.actionField, !0) : e.hasOwnProperty(t) ? g === e[t] && p(q[t].products, q[t].actionField) : m[t] = q[t]);
                    J(m, k)
                }
            }
            var c = [],
                d = {
                    id: "transaction_id",
                    revenue: "value",
                    list: "item_list_name"
                },
                e = {
                    click: "select_item",
                    detail: "view_item",
                    add: "add_to_cart",
                    remove: "remove_from_cart",
                    checkout: "begin_checkout",
                    checkout_option: "checkout_option",
                    purchase: "purchase",
                    refund: "refund"
                };
            (function(f) {
                Z.__gaawe = f;
                Z.__gaawe.s = "gaawe";
                Z.__gaawe.isVendorTemplate = !0;
                Z.__gaawe.priorityOverride = 0;
                Z.__gaawe.isInfrastructure = !1;
                Z.__gaawe.runInSiloedMode = !1
            })(function(f) {
                var g;
                g = f.vtp_migratedToV2 ? String(f.vtp_measurementIdOverride) : String(f.vtp_measurementIdOverride || f.vtp_measurementId);
                if (h(g) && 0 === g.indexOf("G-")) {
                    var k = String(f.vtp_eventName),
                        m = {};
                    c = [];
                    f.vtp_sendEcommerceData && (Oh.hasOwnProperty(k) || "checkout_option" === k) && b(f, k, m);
                    var n = f.vtp_eventSettingsVariable;
                    if (n)
                        for (var p in n) n.hasOwnProperty(p) && (m[p] = n[p]);
                    if (f.vtp_eventSettingsTable) {
                        var q = aG(f.vtp_eventSettingsTable, "parameter", "parameterValue"),
                            r;
                        for (r in q) m[r] = q[r]
                    }
                    var t = aG(f.vtp_eventParameters,
                            "name", "value"),
                        u;
                    for (u in t) t.hasOwnProperty(u) && (m[u] = t[u]);
                    var v = f.vtp_userDataVariable;
                    v && (m[P.g.na] = v);
                    if (m.hasOwnProperty(P.g.Ra) || f.vtp_userProperties) {
                        var w = m[P.g.Ra] || {};
                        J(aG(f.vtp_userProperties, "name", "value"), w);
                        m[P.g.Ra] = w
                    }
                    var x = {
                        originatingEntity: Mt(1, f.vtp_gtmEntityIndex, f.vtp_gtmEntityName)
                    };
                    if (0 < c.length) {
                        var y = {};
                        x.eventMetadata = (y.event_usage = c, y)
                    }
                    a(m, Ph, function(B) {
                        return Pa(B)
                    });
                    a(m, Rh, function(B) {
                        return Number(B)
                    });
                    var A = f.vtp_gtmEventId;
                    x.noGtmEvent = !0;
                    Gu(Du(g, k, m), A, x);
                    I(f.vtp_gtmOnSuccess)
                } else I(f.vtp_gtmOnFailure)
            })
        }();



    Z.o.sp = ["google"],
        function() {
            (function(a) {
                Z.__sp = a;
                Z.__sp.s = "sp";
                Z.__sp.isVendorTemplate = !0;
                Z.__sp.priorityOverride = 0;
                Z.__sp.isInfrastructure = !1;
                Z.__sp.runInSiloedMode = !1
            })(function(a) {
                var b, c = {};
                "DATA_LAYER" == a.vtp_customParamsFormat ? c = a.vtp_dataLayerVariable : "USER_SPECIFIED" == a.vtp_customParamsFormat && (c = aG(a.vtp_customParams, "key", "value"));
                b = dd(c) ? c : {};
                b[P.g.Ve] = !0;
                var d = !a.hasOwnProperty("vtp_enableConversionLinker") || !!a.vtp_enableConversionLinker;
                b[P.g.Ka] = a.vtp_conversionCookiePrefix;
                b[P.g.za] =
                    d;
                a.vtp_enableDynamicRemarketing && (a.vtp_eventValue && (b[P.g.ba] = a.vtp_eventValue), a.vtp_eventItems && (b[P.g.W] = a.vtp_eventItems));
                a.vtp_rdp && (b[P.g.Nb] = !0);
                a.vtp_userId && (b[P.g.Ca] = a.vtp_userId);
                b[P.g.Fa] = Yx(P.g.Fa), b[P.g.aa] = Yx(P.g.aa), b[P.g.Ib] = Yx(P.g.Ib), b[P.g.Qa] = Yx(P.g.Qa);
                var e = "AW-" + a.vtp_conversionId,
                    f = e + (a.vtp_conversionLabel ? "/" + a.vtp_conversionLabel : "");
                if (T(61)) {
                    rt(e, void 0, {
                        source: 7,
                        fromContainerExecution: !0,
                        siloed: !0
                    });
                    var g = {},
                        k = {
                            eventMetadata: (g.hit_type_override = "remarketing", g),
                            noGtmEvent: !0,
                            isGtmEvent: !0,
                            onSuccess: a.vtp_gtmOnSuccess,
                            onFailure: a.vtp_gtmOnFailure
                        };
                    Gu(Du(ml(f), a.vtp_eventName || "", b), a.vtp_gtmEventId, k)
                } else {
                    var m = om(nm(mm(lm(em(new dm(a.vtp_gtmEventId, a.vtp_gtmPriorityId), b), a.vtp_gtmOnSuccess), a.vtp_gtmOnFailure), !0));
                    m.eventMetadata.hit_type_override = "remarketing";
                    nB(f, a.vtp_eventName || "", Date.now(), m)
                }
            })
        }();
    Z.o.tl = ["google"],
        function() {
            function a(b) {
                return function() {
                    if (b.Ch && b.Hh >= b.Ch) b.sh && X("self").clearInterval(b.sh);
                    else {
                        b.Hh++;
                        var c = Ux().getTime();
                        Zx({
                            event: b.eventName,
                            "gtm.timerId": b.sh,
                            "gtm.timerEventNumber": b.Hh,
                            "gtm.timerInterval": b.interval,
                            "gtm.timerLimit": b.Ch,
                            "gtm.timerStartTime": b.Lj,
                            "gtm.timerCurrentTime": c,
                            "gtm.timerElapsedTime": c - b.Lj,
                            "gtm.triggers": b.Em
                        })
                    }
                }
            }(function(b) {
                Z.__tl = b;
                Z.__tl.s = "tl";
                Z.__tl.isVendorTemplate = !0;
                Z.__tl.priorityOverride = 0;
                Z.__tl.isInfrastructure = !1;
                Z.__tl.runInSiloedMode = !1
            })(function(b) {
                I(b.vtp_gtmOnSuccess);
                if (!isNaN(b.vtp_interval)) {
                    var c = {
                        eventName: b.vtp_eventName,
                        Hh: 0,
                        interval: Number(b.vtp_interval),
                        Ch: isNaN(b.vtp_limit) ? 0 : Number(b.vtp_limit),
                        Em: String(b.vtp_uniqueTriggerId || "0"),
                        Lj: Ux().getTime()
                    };
                    c.sh = X("self").setInterval(a(c), 0 > Number(b.vtp_interval) ? 0 : Number(b.vtp_interval))
                }
            })
        }();

    Z.o.ua = ["google"],
        function() {
            function a(m, n) {
                for (var p in m)
                    if (!k[p] && m.hasOwnProperty(p)) {
                        var q = g[p] ? Pa(m[p]) : m[p];
                        "anonymizeIp" != p || q || (q = void 0);
                        n[p] = q
                    }
            }

            function b(m) {
                var n = {};
                m.vtp_gaSettings && J(aG(m.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
                J(aG(m.vtp_fieldsToSet, "fieldName", "value"), n);
                Pa(n.urlPassthrough) && (n._useUp = !0);
                m.vtp_transportUrl && (n._x_19 = m.vtp_transportUrl);
                return n
            }

            function c(m, n) {
                return void 0 === n ? n : m(n)
            }

            function d(m, n, p) {}

            function e(m, n) {
                if (!f) {
                    var p = m.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                    m.vtp_useInternalVersion && !m.vtp_useDebugVersion && (p = "internal/" + p);
                    f = !0;
                    var q = m.vtp_gtmOnFailure,
                        r = hi || ji ? mt(n._x_19, "/analytics.js") : void 0,
                        t = Tp("https:", "http:", "//www.google-analytics.com/" + p, n && !!n.forceSSL);
                    Tx("analytics.js" === p && r ? r : t, function() {
                            var u = Wt();
                            u && u.loaded || q();
                        },
                        q)
                }
            }
            var f, g = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0,
                    allowAdFeatures: !0,
                    allowAdPersonalizationSignals: !0,
                    _cd2l: !0
                },
                k = {
                    urlPassthrough: !0
                };
            (function(m) {
                Z.__ua = m;
                Z.__ua.s = "ua";
                Z.__ua.isVendorTemplate = !0;
                Z.__ua.priorityOverride = 0;
                Z.__ua.isInfrastructure = !1;
                Z.__ua.runInSiloedMode = !1
            })(function(m) {
                function n() {
                    if (m.vtp_doubleClick || "DISPLAY_FEATURES" == m.vtp_advertisingFeaturesType) v.displayfeatures = !0
                }
                var p = {},
                    q = {},
                    r = {};
                if (m.vtp_gaSettings) {
                    var t = m.vtp_gaSettings;
                    J(aG(t.vtp_contentGroup, "index", "group"), p);
                    J(aG(t.vtp_dimension, "index", "dimension"), q);
                    J(aG(t.vtp_metric, "index", "metric"), r);
                    var u = J(t);
                    u.vtp_fieldsToSet = void 0;
                    u.vtp_contentGroup = void 0;
                    u.vtp_dimension = void 0;
                    u.vtp_metric = void 0;
                    m = J(m, u)
                }
                J(aG(m.vtp_contentGroup, "index", "group"), p);
                J(aG(m.vtp_dimension, "index",
                    "dimension"), q);
                J(aG(m.vtp_metric, "index", "metric"), r);
                var v = b(m),
                    w = String(m.vtp_trackingId || ""),
                    x = "",
                    y = "",
                    A = "";
                m.vtp_setTrackerName && "string" == typeof m.vtp_trackerName ? "" !== m.vtp_trackerName && (A = m.vtp_trackerName, y = A + ".") : (A = "gtm" + ti(), y = A + ".");
                var B = function(ka, ca) {
                    for (var Ia in ca) ca.hasOwnProperty(Ia) && (v[ka + Ia] = ca[Ia])
                };
                B("contentGroup", p);
                B("dimension", q);
                B("metric", r);
                m.vtp_enableEcommerce && (x = m.vtp_gtmCachedValues.event, v.gtmEcommerceData = d(m, v, x));
                if ("TRACK_EVENT" === m.vtp_trackType) x = "track_event",
                    n(), v.eventCategory = String(m.vtp_eventCategory), v.eventAction = String(m.vtp_eventAction), v.eventLabel = c(String, m.vtp_eventLabel), v.value = c(Oa, m.vtp_eventValue);
                else if ("TRACK_PAGEVIEW" == m.vtp_trackType) {
                    if (x = P.g.fc, n(), "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == m.vtp_advertisingFeaturesType && (v.remarketingLists = !0), m.vtp_autoLinkDomains) {
                        var C = {};
                        C[P.g.T] = m.vtp_autoLinkDomains;
                        C.use_anchor = m.vtp_useHashAutoLink;
                        C[P.g.Ab] = m.vtp_decorateFormsAutoLink;
                        v[P.g.Ba] = C
                    }
                } else "TRACK_SOCIAL" === m.vtp_trackType ?
                    (x = "track_social", v.socialNetwork = String(m.vtp_socialNetwork), v.socialAction = String(m.vtp_socialAction), v.socialTarget = String(m.vtp_socialActionTarget)) : "TRACK_TIMING" == m.vtp_trackType && (x = "timing_complete", v.eventCategory = String(m.vtp_timingCategory), v.timingVar = String(m.vtp_timingVar), v.value = Oa(m.vtp_timingValue), v.eventLabel = c(String, m.vtp_timingLabel));
                m.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
                m.vtp_enableLinkId && (v.enableLinkId = !0);
                var G = {};
                a(v, G);
                v.name || (G.gtmTrackerName = A);
                G.gaFunctionName =
                    m.vtp_functionName;
                void 0 !== m.vtp_nonInteraction && (G.nonInteraction = m.vtp_nonInteraction);
                var K = om(nm(mm(lm(em(new dm(m.vtp_gtmEventId, m.vtp_gtmPriorityId), G), m.vtp_gtmOnSuccess), m.vtp_gtmOnFailure), !0));
                tC(w, x, Date.now(), K);
                var H = Yt(m.vtp_functionName);
                if (Da(H)) {
                    var O = function(ka) {
                        var ca = [].slice.call(arguments, 0);
                        ca[0] = y + ca[0];
                        H.apply(window, ca)
                    };
                    if ("TRACK_TRANSACTION" == m.vtp_trackType) {} else if ("DECORATE_LINK" == m.vtp_trackType) {} else if ("DECORATE_FORM" == m.vtp_trackType) {} else if ("TRACK_DATA" == m.vtp_trackType) {}
                    e(m, v)
                } else I(m.vtp_gtmOnFailure)
            })
        }();
    Z.o.inject_script = ["google"],
        function() {
            function a(b, c) {
                return {
                    url: c
                }
            }(function(b) {
                Z.__inject_script = b;
                Z.__inject_script.s = "inject_script";
                Z.__inject_script.isVendorTemplate = !0;
                Z.__inject_script.priorityOverride = 0;
                Z.__inject_script.isInfrastructure = !1;
                Z.__inject_script.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_urls || [],
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e, f) {
                        if (!h(f)) throw d(e, {}, "Script URL must be a string.");
                        try {
                            if (rg(rj(f), c)) return
                        } catch (g) {
                            throw d(e, {}, "Invalid script URL filter.");
                        }
                        throw d(e, {}, "Prohibited script URL: " + f);
                    },
                    J: a
                }
            })
        }();
    Z.o.gas = ["google"],
        function() {
            (function(a) {
                Z.__gas = a;
                Z.__gas.s = "gas";
                Z.__gas.isVendorTemplate = !0;
                Z.__gas.priorityOverride = 0;
                Z.__gas.isInfrastructure = !1;
                Z.__gas.runInSiloedMode = !1
            })(function(a) {
                var b = J(a),
                    c = b;
                c[Ae.xa] = null;
                c[Ae.Vg] = null;
                var d = b = c;
                d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
                var e = d.vtp_cookieDomain;
                void 0 !== e && (d.vtp_fieldsToSet.push({
                    fieldName: "cookieDomain",
                    value: e
                }), delete d.vtp_cookieDomain);
                return b
            })
        }();
    Z.o.awct = ["google"],
        function() {
            function a(b, c, d) {
                return function(e, f, g) {
                    c[e] = "DATA_LAYER" === d ? Yx(g) : b[f]
                }
            }(function(b) {
                Z.__awct = b;
                Z.__awct.s = "awct";
                Z.__awct.isVendorTemplate = !0;
                Z.__awct.priorityOverride = 0;
                Z.__awct.isInfrastructure = !1;
                Z.__awct.runInSiloedMode = !1
            })(function(b) {
                var c = !b.hasOwnProperty("vtp_enableConversionLinker") || !!b.vtp_enableConversionLinker,
                    d = !!b.vtp_enableEnhancedConversions || !!b.vtp_enableEnhancedConversion,
                    e = aG(b.vtp_customVariables, "varName", "value") || {},
                    f = {},
                    g = (f[P.g.ba] = b.vtp_conversionValue ||
                        0, f[P.g.sa] = b.vtp_currencyCode, f[P.g.ma] = b.vtp_orderId, f[P.g.Ka] = b.vtp_conversionCookiePrefix, f[P.g.za] = c, f[P.g.ud] = d, f[P.g.la] = Yx(P.g.la), f[P.g.X] = Yx("developer_id"), f);
                g[P.g.Fa] = Yx(P.g.Fa), g[P.g.aa] = Yx(P.g.aa), g[P.g.Ib] = Yx(P.g.Ib), g[P.g.Qa] = Yx(P.g.Qa);
                b.vtp_rdp && (g[P.g.Nb] = !0);
                if (b.vtp_enableCustomParams)
                    for (var k in e) Wh.hasOwnProperty(k) || (g[k] = e[k]);
                if (b.vtp_enableProductReporting) {
                    var m = a(b, g, b.vtp_productReportingDataSource);
                    m(P.g.yd, "vtp_awMerchantId", "aw_merchant_id");
                    m(P.g.wd, "vtp_awFeedCountry", "aw_feed_country");
                    m(P.g.xd, "vtp_awFeedLanguage", "aw_feed_language");
                    m(P.g.vd, "vtp_discount", "discount");
                    m(P.g.W, "vtp_items", "items")
                }
                b.vtp_enableShippingData && (g[P.g.Vc] = b.vtp_deliveryPostalCode, g[P.g.Dd] = b.vtp_estimatedDeliveryDate, g[P.g.wb] = b.vtp_deliveryCountry, g[P.g.Oc] = b.vtp_shippingFee);
                b.vtp_transportUrl && (g[P.g.Pb] = b.vtp_transportUrl);
                if (b.vtp_enableNewCustomerReporting) {
                    var n = a(b, g, b.vtp_newCustomerReportingDataSource);
                    n(P.g.Rc, "vtp_awNewCustomer", "new_customer");
                    n(P.g.zd, "vtp_awCustomerLTV", "customer_lifetime_value")
                }
                var p;
                a: {
                    if (b.vtp_enableEnhancedConversion) {
                        var q = b.vtp_cssProvidedEnhancedConversionValue || b.vtp_enhancedConversionObject;
                        if (q) {
                            p = {
                                enhanced_conversions_mode: "manual",
                                enhanced_conversions_manual_var: q
                            };
                            break a
                        }
                    }
                    p = void 0
                }
                var r = p;
                if (r) {
                    var t = {};
                    g[P.g.Cd] = (t[b.vtp_conversionLabel] = r, t)
                }
                var u = "AW-" + b.vtp_conversionId,
                    v = u + "/" + b.vtp_conversionLabel;
                if (T(61)) {
                    rt(u, b.vtp_transportUrl, {
                        source: 7,
                        fromContainerExecution: !0,
                        siloed: !0
                    });
                    var w = {},
                        x = {
                            eventMetadata: (w.hit_type_override = "conversion", w),
                            noGtmEvent: !0,
                            isGtmEvent: !0,
                            onSuccess: b.vtp_gtmOnSuccess,
                            onFailure: b.vtp_gtmOnFailure
                        };
                    Gu(Du(ml(v), P.g.ra, g), b.vtp_gtmEventId, x)
                } else {
                    var y = om(nm(mm(lm(em(new dm(b.vtp_gtmEventId, b.vtp_gtmPriorityId), g), b.vtp_gtmOnSuccess), b.vtp_gtmOnFailure), !0));
                    y.eventMetadata.hit_type_override = "conversion";
                    nB(v, P.g.ra, Date.now(), y)
                }
            })
        }();




    Z.o.html = ["customScripts"],
        function() {
            function a(d, e, f, g) {
                return function() {
                    try {
                        if (0 < e.length) {
                            var k = e.shift(),
                                m = a(d, e, f, g);
                            if ("SCRIPT" == String(k.nodeName).toUpperCase() && "text/gtmscript" == k.type) {
                                var n = F.createElement("script");
                                n.async = !1;
                                n.type = "text/javascript";
                                n.id = k.id;
                                n.text = k.text || k.textContent || k.innerHTML || "";
                                k.charset && (n.charset = k.charset);
                                var p = k.getAttribute("data-gtmsrc");
                                p && (n.src = p, tc(n, m));
                                d.insertBefore(n, null);
                                p || m()
                            } else if (k.innerHTML && 0 <= k.innerHTML.toLowerCase().indexOf("<script")) {
                                for (var q = []; k.firstChild;) q.push(k.removeChild(k.firstChild));
                                d.insertBefore(k, null);
                                a(k, q, m, g)()
                            } else d.insertBefore(k, null), m()
                        } else f()
                    } catch (r) {
                        I(g)
                    }
                }
            }

            function b(d) {
                if (F.body) {
                    var e = d.vtp_gtmOnFailure,
                        f = gy(d.vtp_html, d.vtp_gtmOnSuccess, e),
                        g = f.yl,
                        k = f.onSuccess;
                    if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? c(g, k, e) : a(F.body, Gc(g), k, e)()
                } else Sx(function() {
                    b(d)
                }, 200)
            }
            Z.__html = b;
            Z.__html.s =
                "html";
            Z.__html.isVendorTemplate = !0;
            Z.__html.priorityOverride = 0;
            Z.__html.isInfrastructure = !1;
            Z.__html.runInSiloedMode = !1
        }();
    Z.o.img = ["customPixels"],
        function() {
            (function(a) {
                Z.__img = a;
                Z.__img.s = "img";
                Z.__img.isVendorTemplate = !0;
                Z.__img.priorityOverride = 0;
                Z.__img.isInfrastructure = !1;
                Z.__img.runInSiloedMode = !1
            })(function(a) {
                var b = Gc('<a href="' + a.vtp_url + '"></a>')[0].href,
                    c = a.vtp_cacheBusterQueryParam;
                if (a.vtp_useCacheBuster) {
                    c || (c = "gtmcb");
                    var d = b.charAt(b.length - 1),
                        e = 0 <= b.indexOf("?") ? "?" == d || "&" == d ? "" : "&" : "?";
                    b += e + c + "=" + a.vtp_randomNumber
                }
                ZF(b,
                    a.vtp_gtmOnSuccess, a.vtp_gtmOnFailure)
            })
        }();



    var sH = {};
    sH.onHtmlSuccess = gf.sj(!0), sH.onHtmlFailure = gf.sj(!1);
    sH.dataLayer = Ai;
    sH.callback = function(a) {
        qi.hasOwnProperty(a) && Da(qi[a]) && qi[a]();
        delete qi[a]
    };
    sH.bootstrap = 0;
    sH._spx = !1;

    function tH() {
        $h[rl()] = $h[rl()] || sH;
        xl();
        Bl() || l(Cl(), function(a, b) {
            rt(a, b.transportUrl, b.context);
            N(92)
        });
        Wa(ri, Z.o);
        qx(), hf();
        kf = Af
    }
    (function(a) {
        function b() {
            m = F.documentElement.getAttribute("data-tag-assistant-present");
            Sw(m) && (k = g.xk)
        }
        if (!z["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (F.referrer) {
                var d = rj(F.referrer);
                c = "cct.google" === oj(d, "host")
            }
            if (!c) {
                var e = Rm("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (z["__TAGGY_INSTALLED"] = !0, yc("https://cct.google/taggy/agent.js"))
        }
        if (li) a();
        else {
            var f = function(u) {
                    var v = "GTM",
                        w = "GTM";
                    fi ? (v = "OGT", w = "GTAG") : li && (w = v = "OPT");
                    var x = z["google.tagmanager.debugui2.queue"];
                    x || (x = [],
                        z["google.tagmanager.debugui2.queue"] = x, yc("https://" + Zh.Te + "/debug/bootstrap?id=" + Ef.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + mn()));
                    var y = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: rc,
                            containerProduct: v,
                            debug: !1,
                            id: Ef.ctid,
                            destinations: ol()
                        }
                    };
                    y.data.resume = function() {
                        a()
                    };
                    Zh.Vj && (y.data.initialPublish = !0);
                    x.push(y)
                },
                g = {
                    Lm: 1,
                    yk: 2,
                    Jk: 3,
                    Xj: 4,
                    xk: 5
                },
                k = void 0,
                m = void 0,
                n = pj(z.location, "query", !1, void 0, "gtm_debug");
            Sw(n) && (k = g.yk);
            if (!k && F.referrer) {
                var p = rj(F.referrer);
                "tagassistant.google.com" === oj(p, "host") && (k = g.Jk)
            }
            if (!k) {
                var q =
                    Rm("__TAG_ASSISTANT");
                q.length && q[0].length && (k = g.Xj)
            }
            k || b();
            if (!k && Tw(m)) {
                var r = function() {
                        if (t) return !0;
                        t = !0;
                        b();
                        k && rc ? f(k) : a()
                    },
                    t = !1;
                Cc(F, "TADebugSignal", function() {
                    r()
                }, !1);
                z.setTimeout(function() {
                    r()
                }, 200)
            } else k && rc ? f(k) : a()
        }
    })(function() {
        try {
            vl();
            if (T(30)) {}
            qk().B();
            Xn();
            var b = sl();
            if (hl().canonical[b]) {
                var c = $h.zones;
                c && c.unregisterChild(nl());
            } else {
                (T(7) || T(8) || T(22) || T(19)) && oo();
                lt();
                for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) Ze.push(e[f]);
                for (var g = d.tags || [], k = 0; k < g.length; k++) bf.push(g[k]);
                for (var m = d.predicates || [], n = 0; n < m.length; n++) af.push(m[n]);
                for (var p = d.rules || [], q = 0; q < p.length; q++) {
                    for (var r = p[q], t = {}, u = 0; u < r.length; u++) {
                        var v = r[u][0];
                        t[v] = Array.prototype.slice.call(r[u], 1);
                        Xe(5) || Xe(7) ? ("if" !== v && "unless" !== v || jf(t[v]), ub("TAGGING", 22)) : Xe(6) && ub("TAGGING", 23)
                    }
                    $e.push(t)
                }
                df = Z;
                ef = Ey;
                If = new Hf;
                var w = data.sandboxed_scripts,
                    x = data.security_groups,
                    y = data.infra;
                a: {
                    var A = data.runtime || [],
                        B = data.runtime_lines;SF = new ue;WF();Ye = TF();
                    var C = SF,
                        G = PF();lb(C.h, "require", G);
                    for (var K = [], H = 0; H < A.length; H++) {
                        var O = A[H];
                        if (!Fa(O) || 3 > O.length) {
                            if (0 === O.length) continue;
                            break a
                        }
                        B && B[H] && B[H].length && tf(O, B[H]);
                        try {
                            SF.execute(O), T(59) && Ll && 50 === O[0] &&
                                K.push(O[1])
                        } catch (te) {}
                    }
                    T(59) && (lf = K)
                }
                if (void 0 !== w)
                    for (var Q = ["sandboxedScripts"], V = 0; V < w.length; V++) {
                        var ma = w[V].replace(/^_*/, "");
                        ri[ma] = Q
                    }
                XF(x);
                if (void 0 !== y)
                    for (var W = 0; W < y.length; W++) si[y[W]] = !0;
                tH();
                if (T(47)) {
                    for (var S = Pi["7"], ja = S ? S.split("|") : [], ka = {}, ca = 0; ca < ja.length; ca++) ka[ja[ca]] = !0;
                    for (var Ia = 0; Ia < Vk.length; Ia++) {
                        var ua = Vk[Ia],
                            Ha = ka[ua] ? "granted" : "denied";
                        yk().implicit(ua, Ha)
                    }
                }
                Rw();
                Ft = !1;
                Gt = 0;
                if ("interactive" == F.readyState && !F.createEventObject || "complete" == F.readyState) It();
                else {
                    Cc(F,
                        "DOMContentLoaded", It);
                    Cc(F, "readystatechange", It);
                    if (F.createEventObject && F.documentElement.doScroll) {
                        var Na = !0;
                        try {
                            Na = !z.frameElement
                        } catch (te) {}
                        Na && Jt()
                    }
                    Cc(z, "load", It)
                }
                fw = !1;
                "complete" === F.readyState ? hw() : Cc(z, "load", hw);
                Ll && (Gl(Yl), z.setInterval(Xl, 864E5));
                Gl(Gy);
                Gl(iu);
                Gl(Lr);
                Gl(Cv);
                Gl(tu);
                Gl(wt);
                Gl(bo);
                Gl(ut);
                Gl(pu);
                T(59) && Gl(lu);
                nx();
                Oi(1);
                T(68) && Su();
                pi = Ta();
                sH.bootstrap = pi;
                if (T(30)) {}
            }
        } catch (te) {
            if (Oi(4), Ll) {
                var se = Sl(!0, !0);
                Bc(se)
            }
        }
    });

})()