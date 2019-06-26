const PL_VIDEO_AUTO_MOTION_OFF = 1;
const PL_VIDEO_AUTO_MOTION_WEAK = 2;
const PL_VIDEO_AUTO_MOTION_MEDIUM = 3;
const PL_VIDEO_AUTO_MOTION_STRONG = 4;
const PL_VIDEO_AUTO_MOTION_CUSTOM = 5;
const PL_VIDEO_AUTO_MOTION_DEMO = 6;
const PL_VIDEO_AUTO_MOTION_RESET = 7; // RESET uses the currently set value. There is no change
const PL_VIDEO_AUTO_MOTION_CHECK = 8;
const PL_VIDEO_AUTO_MOTION_SUPPORT = 9;

// PLUGIN_DISPLAY_PANEL_TYPE
// Function : GetDisplayPanelType
const PL_DEVICE_DPT_LCD = 0;
const PL_DEVICE_DPT_PDP = 1;
const PL_DEVICE_DPT_DLP = 2;
const PL_DEVICE_DPT_LED = 3;
const PL_DEVICE_DPT_LED_EDGE = 4;
const PL_DEVICE_DPT_LED_DIRECT = 5;
const PL_DEVICE_DPT_CRT = 6;
const PL_DEVICE_DPT_UNKNOWN = 999;
const PL_DEVICE_DPT_MAX = 1000;

// PL_SERVER_TYPE
// Function : GetServerType
const PL_ST_SERVICE = 0;
const PL_ST_DEVELOPMENT = 1;
const PL_ST_DEVELOPING = 2;
const PL_ST_UNKNOWN = 3;

// PL_TV_USE_TYPE
// Function : GetTVUseMode
const PL_TVUT_HOME = 0;
const PL_TVUT_SHOP = 1;
const PL_TVUT_UNKNOWN = 2;

// PL_PROFILE_ID
// Function : GetProfile
const PL_PRFID_TICKER_ID = 0;
const PL_PRFID_CHILDLOCK_PIN = 1;
const PL_PRFID_HUB_TVID = 2;
const PL_PRFID_TICKER_AUTOBOOT = 3;
const PL_PRFID_TICKER_DURATION = 4;
const PL_PRFID_WIDGET_DPTIME = 5;
const PL_PRFID_CONTRACT = 6;
const PL_PRFID_TICKER_SAFE = 7;
const PL_PRFID_RESET = 8;
const PL_PRFID_PASSWD_RESET = 9;
const PL_PRFID_GEOIP_STATUS = 10;
const PL_PRFID_COUNTRY_CODE = 11;
const PL_PRFID_WLAN_DEFAULT_NETWORK = 12;
const PL_PRFID_AUTO_PROTECTION_TIME = 13;
const PL_TVMW_PRFID_CHANNEL_BOUND_EXECUTE = 14;
const PL_PRFID_PASSWORD = 15;
const PL_PRFID_SOURCE_BOUND_WIDGET_ID = 16;
const PL_PRFID_SOURCE_BOUND_SOURCE_ID = 17;
const PL_PRFID_AUTOBOOT = 18;
const PL_PRFID_UNKNOWN = 19;
const PL_PRFID_MAX = 20;

// NUMBER
// Specified value of this type: plugin manual note
const PL_TVMW_KEY_1 = 0;
const PL_TVMW_KEY_2 = 1;
const PL_TVMW_KEY_3 = 2;
const PL_TVMW_KEY_4 = 3;
const PL_TVMW_KEY_5 = 4;
const PL_TVMW_KEY_6 = 5;
const PL_TVMW_KEY_7 = 6;
const PL_TVMW_KEY_8 = 7;
const PL_TVMW_KEY_9 = 8;
const PL_TVMW_KEY_0 = 9;
const PL_TVMW_KEY_HYPHEN = 10;

// CHANNEL
const PL_TVMW_KEY_CH_UP = 100;
const PL_TVMW_KEY_CH_DOWN = 101;
const PL_TVMW_KEY_CH_PREV = 102;
const PL_TVMW_KEY_CH_FAV = 103;
const PL_TVMW_KEY_CH_LIST = 104;
const PL_TVMW_KEY_CH_PANNEL_UP = 105;
const PL_TVMW_KEY_CH_PANNEL_DOWN = 106;

// VOLUME
const PL_TVMW_KEY_VOL_UP = 200;
const PL_TVMW_KEY_VOL_DOWN = 201;
const PL_TVMW_KEY_MUTE = 202;
const PL_TVMW_KEY_VOL_PANNEL_UP = 203;
const PL_TVMW_KEY_VOL_PANNEL_DOWN = 204;

// NAVI
const PL_TVMW_KEY_ENTER = 300;
const PL_TVMW_KEY_RETURN = 301;
const PL_TVMW_KEY_EXIT = 302;
const PL_TVMW_KEY_ARROW_UP = 303;
const PL_TVMW_KEY_ARROW_DOWN = 304;
const PL_TVMW_KEY_ARROW_LEFT = 305;
const PL_TVMW_KEY_ARROW_RIGHT = 306;
const PL_TVMW_KEY_WHEEL_LEFT = 307;
const PL_TVMW_KEY_WHEEL_RIGHT = 308;
const PL_TVMW_KEY_PANNEL_ENTER = 309;

// COLOR
const PL_TVMW_KEY_RED = 400;
const PL_TVMW_KEY_GREEN = 401;
const PL_TVMW_KEY_YELLOW = 402;
const PL_TVMW_KEY_CYAN = 403;

// PLAYBACK
const PL_TVMW_KEY_REWARD = 500;
const PL_TVMW_KEY_PAUSE = 501;
const PL_TVMW_KEY_FOWARD = 502;
const PL_TVMW_KEY_PLAY = 503;
const PL_TVMW_KEY_STOP = 504;
const PL_TVMW_KEY_REC = 505;

// ETC
const PL_TVMW_KEY_INFO = 600;
const PL_TVMW_KEY_TOOLS = 601;
const PL_TVMW_KEY_INFOLINK = 602;
const PL_TVMW_KEY_EMODE = 603;
const PL_TVMW_KEY_DATA = 604;
const PL_TVMW_KEY_DMA = 605;
const PL_TVMW_KEY_CONTENTS = 606;
const PL_TVMW_KEY_MENU = 607;
const PL_TVMW_KEY_WISELINK = 608;
const PL_TVMW_KEY_SOURCE = 609;
const PL_TVMW_KEY_POWER = 610;
const PL_TVMW_KEY_TV = 611;
const PL_TVMW_KEY_PANNEL_SOURCE = 612;
const PL_TVMW_KEY_PANNEL_MENU = 613;
const PL_TVMW_KEY_PANNEL_POWER = 614;
const PL_TVMW_KEY_LOCK = 1119;
const PL_TVMW_KEY_HDMI = 1139;

const PL_TVMW_KEY_GRP_ALL = 0;
const PL_TVMW_KEY_GRP_NUMBER = 1;
const PL_TVMW_KEY_GRP_CHANNEL = 2;
const PL_TVMW_KEY_GRP_VOLUME = 3;
const PL_TVMW_KEY_GRP_NAVI = 4;
const PL_TVMW_KEY_GRP_COLOR = 5;
const PL_TVMW_KEY_GRP_PLAYBACK = 6;
const PL_TVMW_KEY_GRP_ETC = 7;

// Added by ck1.seo@samsung.com
// For all key regist
// 3 April 2009
const PL_TVMW_KEY_TTX_MIX = 650;
const PL_TVMW_KEY_GUIDE = 651;
const PL_TVMW_KEY_SUBTITLE = 652;
const PL_TVMW_KEY_ASPECT = 653;
const PL_TVMW_KEY_DOLBY_SRR = 654;
const PL_TVMW_KEY_MTS = 655;

// Added by jh.kim For BD
const PL_TVMW_KEY_11 = 11;
const PL_TVMW_KEY_REPEAT = 656;

// IME
const PL_TVMW_KEY_DISC_MENU = 1086;
const PL_TVMW_KEY_12 = 1057;

const PL_TVMW_KEY_STEP = 1023; // REC PAUSE(BD)
const PL_TVMW_KEY_CALLER_ID = 1128;	// FULL SCREEN(BD)
const PL_TVMW_KEY_3D = 1219;
const PL_TVMW_KEY_ZOOM1 = 1083; // YAHOO
const PL_TVMW_KEY_ANTENA = 1054; // For CN

const PL_APPCOMMON_KEY_DVR = 1114; // BD Integrated Search Keys
const PL_APPCOMMON_KEY_HOME = 1118;
const PL_APPCOMMON_KEY_TV_SNS = 1251;
const PL_APPCOMMON_KEY_SEARCH = 1252;
const PL_APPCOMMON_KEY_PIP_SCAN = 1049; // BD vTuner HotKey
const PL_APPCOMMON_KEY_DEVICE_CONNECT = 1052; // BD Netflix HotKey
const PL_APPCOMMON_KEY_DOTCOM = 1253;

// Country code
// Function : GetCountry
const PL_TVMW_COUNTRY_USA = 0;
const PL_TVMW_COUNTRY_KOR = 1;
const PL_TVMW_COUNTRY_SPA = 2;
const PL_TVMW_COUNTRY_FRA = 3;
const PL_TVMW_COUNTRY_JPN = 4;
const PL_TVMW_COUNTRY_EU = 5;
const PL_TVMW_COUNTRY_UK = 6;
const PL_TVMW_COUNTRY_GERMANY = 7;
const PL_TVMW_COUNTRY_ITALY = 8;
const PL_TVMW_COUNTRY_SWEDEN = 9;
const PL_TVMW_COUNTRY_BULGARIA = 10;
const PL_TVMW_COUNTRY_CROATIA = 11;
const PL_TVMW_COUNTRY_CZECH = 12;
const PL_TVMW_COUNTRY_NETHERLANDS = 13;
const PL_TVMW_COUNTRY_GREECE = 14;
const PL_TVMW_COUNTRY_HUNGARY = 15;
const PL_TVMW_COUNTRY_POLAND = 16;
const PL_TVMW_COUNTRY_PORTUGAL = 17;
const PL_TVMW_COUNTRY_ROMANIA = 18;
const PL_TVMW_COUNTRY_RUSSIA = 19;
const PL_TVMW_COUNTRY_SWITZERLAND = 20;
const PL_TVMW_COUNTRY_TURKEY = 21;
const PL_TVMW_COUNTRY_AUSTRALIA = 22;
const PL_TVMW_COUNTRY_AUSTRIA = 23;
const PL_TVMW_COUNTRY_BELGIUM = 24;
const PL_TVMW_COUNTRY_DENMARK = 25;
const PL_TVMW_COUNTRY_FINLAND = 26;
const PL_TVMW_COUNTRY_NORWAY = 27;
const PL_TVMW_COUNTRY_CHINA = 28;
const PL_TVMW_COUNTRY_IRELAND = 29;
const PL_TVMW_COUNTRY_SERBIA = 30;
const PL_TVMW_COUNTRY_SAN_MARINO = 31;
const PL_TVMW_COUNTRY_MONACO = 32;
const PL_TVMW_COUNTRY_BRAZIL = 33;
const PL_TVMW_COUNTRY_HONGKONG = 34;
const PL_TVMW_COUNTRY_TAIWAN = 35;
const PL_TVMW_COUNTRY_NEWZEALAND = 36;
const PL_TVMW_COUNTRY_SLOVAKIA = 37;
const PL_TVMW_COUNTRY_SINGAPORE = 38;
const PL_TVMW_COUNTRY_GENERALCABLE = 39;
const PL_TVMW_COUNTRY_OTHER = 40;
const PL_TVMW_COUNTRY_ASIAWEUROPE_ANALOG = 41;
const PL_TVMW_COUNTRY_HONGKONG_UK_ANALOG = 42;
const PL_TVMW_COUNTRY_NZL_INDONESIA_ANALOG = 43;
const PL_TVMW_COUNTRY_SOUTH_AFRICA_ANALOG = 44;
const PL_TVMW_COUNTRY_AMERICA_ANALOG = 45;
const PL_TVMW_COUNTRY_CHINA_ANALOG = 46;

// Will be removed
// Function : GetLanguage
const PL_TVMW_LANGUAGE_KOR = 0; // "ko"
const PL_TVMW_LANGUAGE_ENG_US = 1; // "en"
const PL_TVMW_LANGUAGE_SPA_US = 2; // "en"
const PL_TVMW_LANGUAGE_FRA_US = 3; // "en"
const PL_TVMW_LANGUAGE_POR_US = 4; // "en"
const PL_TVMW_LANGUAGE_BUL = 5; // "bg"
const PL_TVMW_LANGUAGE_CRO = 6; // "hr"
const PL_TVMW_LANGUAGE_CZE = 7; // "cs"
const PL_TVMW_LANGUAGE_DAN = 8; // "da"
const PL_TVMW_LANGUAGE_DUT = 9; // "nl"

const PL_TVMW_LANGUAGE_FIN = 10; // "fi"
const PL_TVMW_LANGUAGE_FRA = 11; // "fr"
const PL_TVMW_LANGUAGE_DEU = 12; // "de"
const PL_TVMW_LANGUAGE_GRE = 13; // "el"
const PL_TVMW_LANGUAGE_HUN = 14; // "hu"
const PL_TVMW_LANGUAGE_ITA = 15; // "it"
const PL_TVMW_LANGUAGE_NOR = 16; // "no"
const PL_TVMW_LANGUAGE_ENG = 17; // "en"
const PL_TVMW_LANGUAGE_POL = 18; // "pl"
const PL_TVMW_LANGUAGE_POR = 19; // "pt"

const PL_TVMW_LANGUAGE_ROM = 20; // "ro"
const PL_TVMW_LANGUAGE_RUS = 21; // "ru"
const PL_TVMW_LANGUAGE_SER = 22; // "sr"
const PL_TVMW_LANGUAGE_SLK = 23; // "sk"
const PL_TVMW_LANGUAGE_SPA = 24; // "es"
const PL_TVMW_LANGUAGE_SWE = 25; // "sv"
const PL_TVMW_LANGUAGE_TUR = 26; // "tr"
const PL_TVMW_LANGUAGE_CHI = 27;
const PL_TVMW_LANGUAGE_HKG = 28;
const PL_TVMW_LANGUAGE_TPE = 29;

const PL_TVMW_LANGUAGE_JPN = 30;
const PL_TVMW_LANGUAGE_MAO = 31;
const PL_TVMW_LANGUAGE_CMN = 32;
const PL_TVMW_LANGUAGE_YUE = 33;
const PL_TVMW_LANGUAGE_HIN = 34;
const PL_TVMW_LANGUAGE_EST = 35; // "et"
const PL_TVMW_LANGUAGE_LAT = 36; // "lv"
const PL_TVMW_LANGUAGE_LTU = 37; // "lt"
const PL_TVMW_LANGUAGE_ARA = 38;
const PL_TVMW_LANGUAGE_PER = 39;

const PL_TVMW_LANGUAGE_QAA = 40;
const PL_TVMW_LANGUAGE_AD = 41;
const PL_TVMW_LANGUAGE_CAT = 42;
const PL_TVMW_LANGUAGE_VAL = 43;
const PL_TVMW_LANGUAGE_HEB = 44;
const PL_TVMW_LANGUAGE_OTHER = 45;
const PL_TVMW_LANGUAGE_THA = 46;
// ////////////////////////////

// Language code
// Function : GetLanguage
const PL_TV_LANGUAGE_KOR = 0; // "ko"
const PL_TV_LANGUAGE_ENG_US = 1; // "en"
const PL_TV_LANGUAGE_SPA_US = 2; // "es_US"
const PL_TV_LANGUAGE_FRA_US = 3; // "fr_US"
const PL_TV_LANGUAGE_POR_US = 4; // "pt_US"
const PL_TV_LANGUAGE_BUL = 5; // "bg"
const PL_TV_LANGUAGE_CRO = 6; // "hr"
const PL_TV_LANGUAGE_CZE = 7; // "cs"
const PL_TV_LANGUAGE_DAN = 8; // "da"
const PL_TV_LANGUAGE_DUT = 9; // "nl"
const PL_TV_LANGUAGE_FIN = 10; // "fi"
const PL_TV_LANGUAGE_FRA = 11; // "fr"
const PL_TV_LANGUAGE_DEU = 12; // "de"
const PL_TV_LANGUAGE_GRE = 13; // "el"
const PL_TV_LANGUAGE_HUN = 14; // "hu"
const PL_TV_LANGUAGE_ITA = 15; // "it"
const PL_TV_LANGUAGE_NOR = 16; // "no"
const PL_TV_LANGUAGE_ENG = 17; // "en-GB"
const PL_TV_LANGUAGE_POL = 18; // "pl"
const PL_TV_LANGUAGE_POR = 19; // "pt"
const PL_TV_LANGUAGE_ROM = 20; // "ro"
const PL_TV_LANGUAGE_RUS = 21; // "ru"
const PL_TV_LANGUAGE_SER = 22; // "sr"
const PL_TV_LANGUAGE_SLK = 23; // "sk"
const PL_TV_LANGUAGE_SPA = 24; // "es"
const PL_TV_LANGUAGE_SWE = 25; // "sv"
const PL_TV_LANGUAGE_TUR = 26; // "tr"
const PL_TV_LANGUAGE_CHI = 27; // "zh-CN"
const PL_TV_LANGUAGE_HKG = 28; // "zh-HK"
const PL_TV_LANGUAGE_TPE = 29; // "zh-TW"
const PL_TV_LANGUAGE_JPN = 30;
const PL_TV_LANGUAGE_MAO = 31;
const PL_TV_LANGUAGE_CMN = 32;
const PL_TV_LANGUAGE_YUE = 33;
const PL_TV_LANGUAGE_HIN = 34; // "hi"
const PL_TV_LANGUAGE_EST = 35; // "et"
const PL_TV_LANGUAGE_LAT = 36; // "lv"
const PL_TV_LANGUAGE_LTU = 37; // "lt"
const PL_TV_LANGUAGE_ARA = 38; // "ar"
const PL_TV_LANGUAGE_PER = 39; // "fa"
const PL_TV_LANGUAGE_QAA = 40;
const PL_TV_LANGUAGE_AD = 41;
const PL_TV_LANGUAGE_CAT = 42;
const PL_TV_LANGUAGE_VAL = 43;
const PL_TV_LANGUAGE_THA = 44; // "th"
const PL_TV_LANGUAGE_HEB = 45; // "he"
const PL_TV_LANGUAGE_IND = 46; // "id"
const PL_TV_LANGUAGE_VIE = 47; // "vi"
const PL_TV_LANGUAGE_URD = 48; // "ur"
const PL_TV_LANGUAGE_AFR = 49; // "af"
const PL_TV_LANGUAGE_ZUL = 50; // "zu"
const PL_TV_LANGUAGE_XHO = 51; // "xh"
const PL_TV_LANGUAGE_YOR = 52; // "yo"
const PL_TV_LANGUAGE_IGB = 53; // "ig"
const PL_TV_LANGUAGE_HAU = 54; // "ha"
const PL_TV_LANGUAGE_SWA = 55; // "sw"
const PL_TV_LANGUAGE_AMH = 56; // "am"
const PL_TV_LANGUAGE_OTHER = 57;
const PL_TV_LANGUAGE_TAM = 58; // "ta"
const PL_TV_LANGUAGE_IRA = 59;
const PL_TV_LANGUAGE_FIL = 60;
const PL_TV_LANGUAGE_LIT = 61; // "lt"
const PL_TV_LANGUAGE_LAV = 62; // "lv"
const PL_TV_LANGUAGE_SLV = 63; // "sl"
const PL_TV_LANGUAGE_ALB = 64; // "sq"
const PL_TV_LANGUAGE_UKR = 65; // "uk"
const PL_TV_LANGUAGE_KAZ = 66; // "kk"
const PL_TV_LANGUAGE_MKD = 67; // "mk"
const PL_TV_LANGUAGE_MAY = 68; // "ms"
const PL_TV_LANGUAGE_WEL = 69; // "cy"
const PL_TV_LANGUAGE_GLA = 70; // "gd"
const PL_TV_LANGUAGE_IRI = 71; // "ga"
const PL_TV_LANGUAGE_MAX = 72;

/**
 * @type {Array<string>}
 */
const PL_TV_LANGUAGE_CODE = [];
/*
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_KOR] = "ko";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_ENG_US] = "en";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_SPA_US] = "es-US";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_FRA_US] = "fr-US";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_POR_US] = "pt-US";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_BUL] = "bg";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_CRO] = "hr";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_CZE] = "cs";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_DAN] = "da";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_DUT] = "nl";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_FIN] = "fi";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_FRA] = "fr";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_DEU] = "de";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_GRE] = "el";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_HUN] = "hu";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_ITA] = "it";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_NOR] = "no";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_ENG] = "en-GB";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_POL] = "pl";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_POR] = "pt";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_ROM] = "ro";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_RUS] = "ru";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_SER] = "sr";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_SLK] = "sk";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_SPA] = "es";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_SWE] = "sv";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_TUR] = "tr";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_CHI] = "zh-CN";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_HKG] = "zh-HK";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_TPE] = "zh-TW";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_JPN] = "en-GB"; // Not supported
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_MAO] = "en-GB"; // Not supported
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_CMN] = "en-GB"; // Not supported
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_YUE] = "en-GB"; // Not supported
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_HIN] = "hi";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_EST] = "et";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_LAT] = "lv";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_LTU] = "lt";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_ARA] = "ar";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_PER] = "fa";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_QAA] = "en-GB"; // Not supported
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_AD ] = "en-GB"; // Not supported
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_CAT] = "en-GB"; // Not supported
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_VAL] = "en-GB"; // Not supported
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_THA] = "th";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_HEB] = "he";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_IND] = "id";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_VIE] = "vi";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_URD] = "ur";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_AFR ] = "af";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_ZUL ] = "zu";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_XHO] = "xh";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_YOR ] = "yo";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_IGB ] = "ig";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_HAU ] = "ha";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_SWA ] = "sw";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_AMH] = "am";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_OTHER] = "en-GB"; // Not supported
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_TAM] = "ta";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_IRA] = "en-GB"; // Not supported
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_FIL] = "en-GB"; // Not supported
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_LIT] = "lt";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_LAV] = "lv";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_SLV] = "sl";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_ALB] = "sq";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_UKR] = "uk";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_KAZ] = "kk";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_MKD] = "mk";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_MAY] = "ms";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_WEL] = "cy";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_GLA] = "gd";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_IRI] = "ga";
PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_MAX] = "en-GB"; // Not supported
*/
// reference : http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

// PL_TV_USE_TYPE
// Function : GetTVUseMode
const PL_TVMW_TVUT_HOME = 0;
const PL_TVMW_TVUT_SHOP = 1;
const PL_TVMW_TVUT_UNKNOWN = 2;

// PL_PROFILE_ID
// Function : GetProfile
const PL_TVMW_PRFID_TICKER_ID = 0;
const PL_TVMW_PRFID_CHILDLOCK_PIN = 1;
const PL_TVMW_PRFID_HUB_TVID = 2;
const PL_TVMW_PRFID_TICKER_AUTOBOOT = 3;
const PL_TVMW_PRFID_TICKER_DURATION = 4;
const PL_TVMW_PRFID_WIDGET_DPTIME = 5;
const PL_TVMW_PRFID_CONTRACT = 6;
const PL_TVMW_PRFID_TICKER_SAFE = 7;
const PL_TVMW_PRFID_RESET = 8;
const PL_TVMW_PRFID_PASSWD_RESET = 9;
const PL_TVMW_PRFID_GEOIP_STATUS = 10;
const PL_TVMW_PRFID_COUNTRY_CODE = 11;
const PL_TVMW_PRFID_WLAN_DEFAULT_NETWORK = 12;
const PL_TVMW_PRFID_AUTO_PROTECTION_TIME = 13;

// PL_TVMW_PROFILE_TYPE
// Function : GetProfile / SetProfile
const PL_TVMW_PROFILE_TYPE_STRING = 0;
const PL_TVMW_PROFILE_TYPE_INT = 1;
const PL_TVMW_PROFILE_TYPE_UNKNOWN = 999;
const PL_TVMW_PROFILE_TYPE_MAX = 1000;

// PL_DTVAPP
// Function : Deactivate
const PL_TVMW_DTVAPP_NONE = 0;
const PL_TVMW_DTVAPP_TVVIEWER = 1;
const PL_TVMW_DTVAPP_INFOLINK = 2;
const PL_TVMW_DTVAPP_MENU = 3;
const PL_TVMW_DTVAPP_UNKNOWN = 4;

// Contents Home
const CH_DTVAPP_WIDGET = 11;
const CH_DTVAPP_FLASH = 12;
const CH_DTVAPP_GALLERY = 13;
const CH_DTVAPP_GAME = 14;
const CH_DTVAPP_YAHOO = 15;
const CH_DTVAPP_MOIP = 16;
const CH_DTVAPP_PHAROS = 17; // BD
const CH_DTVAPP_TOOL = 18; // Tool - Screen Settings
const CH_DTVAPP_CLMOVIEPLAYER = 19;	// Netflix 2.1
const CH_DTVAPP_FULLBROWSER = 20; // Full Browser
const CH_DTVAPP_MAPBROWSER = 21; // Map Browser
const CH_DTVAPP_MMPLAYER = 22; // AllShare
const CH_DTVAPP_PVR = 23; // PVR
const CH_DTVAPP_RCVIEWER = 24; // TC Main screen
const CH_DTVAPP_FAVORITE = 25;
const CH_DTVAPP_CHANNEL = 26;
const CH_DTVAPP_GUIDE = 27;
const CH_DTVAPP_PVR_BROWSER = 28;
const CH_DTVAPP_BASIC_FULLBROWSER = 29;
const CH_DTVAPP_VIDEOS = 30;
const CH_DTVAPP_PHOTOS = 31;
const CH_DTVAPP_MUSIC = 32;
const CH_DTVAPP_SCHEDULE = 33;
const CH_DTVAPP_SOURCE = 34;
const CH_DTVAPP_SHOP_DEMO = 35;
const CH_DTVAPP_ALLSHARE = 36;
const CH_DTVAPP_NETWORK_SETUP = 37; // Network settings
const CH_DTVAPP_CALENDAR = 38;

// PL_TVMW_SOURCE
const PL_TVMW_SOURCE_TV = 0;
const PL_TVMW_SOURCE_ATV = 1;
const PL_TVMW_SOURCE_DTV = 2;
const PL_TVMW_SOURCE_CATV = 3;
const PL_TVMW_SOURCE_CDTV = 4;
const PL_TVMW_SOURCE_PATV = 5;
const PL_TVMW_SOURCE_PDTV = 6;
const PL_TVMW_SOURCE_SDTV = 7;
const PL_TVMW_SOURCE_BSDTV = 8;
const PL_TVMW_SOURCE_CS1DTV = 9;
const PL_TVMW_SOURCE_CS2DTV = 10;

const PL_TVMW_SOURCE_ATV1 = 11;
const PL_TVMW_SOURCE_ATV2 = 12;
const PL_TVMW_SOURCE_DTV1 = 13;
const PL_TVMW_SOURCE_DTV2 = 14;

// AV 1~4
const PL_TVMW_SOURCE_AV1 = 15;
const PL_TVMW_SOURCE_AV2 = 16;
const PL_TVMW_SOURCE_AV3 = 17;
const PL_TVMW_SOURCE_AV4 = 18;

// S-Video 1~4
const PL_TVMW_SOURCE_SVIDEO1 = 19;
const PL_TVMW_SOURCE_SVIDEO2 = 20;
const PL_TVMW_SOURCE_SVIDEO3 = 21;
const PL_TVMW_SOURCE_SVIDEO4 = 22;

// Component 1~3
const PL_TVMW_SOURCE_COMP1 = 23;
const PL_TVMW_SOURCE_COMP2 = 24;
const PL_TVMW_SOURCE_COMP3 = 25;
const PL_TVMW_SOURCE_COMP4 = 26;

// PC 1~3
const PL_TVMW_SOURCE_PC1 = 27;
const PL_TVMW_SOURCE_PC2 = 28;
const PL_TVMW_SOURCE_PC3 = 29;
const PL_TVMW_SOURCE_PC4 = 30;

// HDMI 1~3
const PL_TVMW_SOURCE_HDMI1 = 31;
const PL_TVMW_SOURCE_HDMI2 = 32;
const PL_TVMW_SOURCE_HDMI3 = 33;
const PL_TVMW_SOURCE_HDMI4 = 34;

// SCART
const PL_TVMW_SOURCE_SCART1 = 35;
const PL_TVMW_SOURCE_SCART2 = 36;
const PL_TVMW_SOURCE_SCART3 = 37;
const PL_TVMW_SOURCE_SCART4 = 38;

// DVI
const PL_TVMW_SOURCE_DVI1 = 39;
const PL_TVMW_SOURCE_DVI2 = 40;
const PL_TVMW_SOURCE_DVI3 = 41;
const PL_TVMW_SOURCE_DVI4 = 42;

// ! DNet; WiseLink; PVR
const PL_TVMW_SOURCE_MEDIA = 43;

// DCR HOMING
const PL_TVMW_SOURCE_HOMING = 44;
const PL_TVMW_SOURCE_NONE = 45;
const PL_TVMW_SOURCE_UNKNWON = 1000;
const PL_TVMW_SOURCE_MAX = 1001;

// Audio Plugin Ver : Audio-0001
// PL_AUDIO_MUTE
const PL_AUDIO_MUTE_ON = 0;
const PL_AUDIO_MUTE_OFF = 1;
const PL_AUDIO_INTERNAL_MUTE_ON = 2;
const PL_AUDIO_INTERNAL_MUTE_OFF = 3;
const PL_AUDIO_RECEIVER_CONNECTED = 4;
const PL_AUDIO_MUTE_UNKNOWN = 999;
const PL_AUDIO_MUTE_MAX = 1000;

// Audio Plugin Ver : Audio-0002
// PL_AUDIO_SET_MUTE
const PL_AUDIO_SET_MUTE_ON = 0;
const PL_AUDIO_SET_MUTE_OFF = 1;
const PL_AUDIO_SET_MUTE_TOGGLE = 2;
const PL_AUDIO_SET_MUTE_INTERNAL_ON = 3;
const PL_AUDIO_SET_MUTE_INTERNAL_OFF = 4;
const PL_AUDIO_SET_MUTE_UNKNOWN = 999;
const PL_AUDIO_SET_MUTE_MAX = 1000;

// PL_AUDIO_OUTPUT_DEVICE
const PL_AUDIO_OUTPUT_DEVICE_MAIN_SPEAKER = 0;
const PL_AUDIO_OUTPUT_DEVICE_EARPHONE = 1;
const PL_AUDIO_OUTPUT_DEVICE_SUBWOOFER = 2;
const PL_AUDIO_OUTPUT_DEVICE_EXTERNAL = 3;
const PL_AUDIO_OUTPUT_DEVICE_RECEIVER = 4;
const PL_AUDIO_OUTPUT_DEVICE_UNKNOWN = 999;
const PL_AUDIO_OUTPUT_DEVICE_MAX = 1000;

// PL_AUDIO_VOLUME_KEY
const PL_AUDIO_VOLUME_KEY_UP = 0;
const PL_AUDIO_VOLUME_KEY_DOWN = 1;
const PL_AUDIO_VOLUME_KEY_UNKNOWN = 999;
const PL_AUDIO_VOLUME_KEY_MAX = 1000;

// PLUGIN_NETWORK_TYPE
// Function : GetNetworkType
const PL_NT_WIRED = 0;
const PL_NT_WIRELESS = 1;
const PL_NT_UNKNOWN = 2;

// PL_VIDEO_WIDGET_MODE
const PL_VIDEO_WIDGET_MODE_FULL = 0;
const PL_VIDEO_WIDGET_MODE_PART = 1;
const PL_VIDEO_WIDGET_MODE_UNKNOWN = 999;
const PL_VIDEO_WIDGET_MODE_MAX = 1000;

// PL_VIDEO_SET_MUTE
const PL_VIDEO_SET_MUTE_ON = 0;
const PL_VIDEO_SET_MUTE_OFF = 1;
const PL_VIDEO_SET_MUTE_TOGGLE = 2;
const PL_VIDEO_SET_MUTE_UNKNOWN = 999;
const PL_VIDEO_SET_MUTE_MAX = 1000;

// PL_NNAVI_PATH
// Function : GetPath
const PL_NNAVI_PATH_WIDGET_MANAGER = 0;
const PL_NNAVI_PATH_WIDGET_NORMAL = 1;
const PL_NNAVI_PATH_UNKNOWN = 999;

// PL_NNAVI_SYSTEM_VERSION
// Function : GetSystemVersion
const PL_NNAVI_SYSTEM_VERSION_LEEUM = 0;
const PL_NNAVI_SYSTEM_VERSION_COMP = 1;
const PL_NNAVI_SYSTEM_UNKNOWN = 999;

// PL_NNAVI_STATE_BANNER
// Function : SetBannerState
const PL_NNAVI_STATE_BANNER_NONE = 0;
const PL_NNAVI_STATE_BANNER_VOL = 1;
const PL_NNAVI_STATE_BANNER_VOL_CH = 2;

// Plugin Result
const PLR_TRUE = 1;
const PLR_FALSE = 0;
const PLR_FAIL = -1;
const PLR_NOT_IMPLEMENT = -2;
const PLR_NULL_ARG = -3;
const PLR_INVALID_ARG = -4;
const PLR_CANNOT_OPEN_FILE = -5;
const PLR_OUT_OF_RANGE = -6;

// PL_CMN_INFO
// Function : GetPluginInfo
const PL_CMN_INFO_VERSION = 0;
const PL_CMN_INFO_UNKNWON = 999;

// Download Plugin 1000?XX
const DN_RES_ERR_UNKNOWN = 0; // (ERR) Unknown!!
const DN_RES_OK_FILE_DOWNLOADED = 1; // Complete to download
const DN_RES_OK_FILE_DOWN_CANCELED = 2; // When user cancel the download
const DN_RES_ERR_INVALID_URL = 3; // (ERR) URL doesn't keep the RULE
const DN_RES_ERR_NORMAL_SOCKET = 4; // (ERR) Normal Socket init error
const DN_RES_ERR_SSL_SOCKET = 5; // (ERR) SSL Socket init error (for hppts or AES Encrypt module)
const DN_RES_ERR_HOST = 6; // (ERR) including 'No response from Host; Firewall restricted; etc
const DN_RES_ERR_PERMISSION_DENY = 7; // (ERR) FILE_NOT_CREATED by PERMISSION_DENY
const DN_RES_ERR_NOT_ENOUGH_STORAGE = 8; // (ERR) Storage has no enough space for New Download file

// (Needs space for at least [ZipFile+RawFile] check space with File IO Plugin)
const DN_RES_ERR_INVALID_DATA = 9; // (ERR) Received but no data or invalid data
const DN_RES_ERR_URL_HAS_NO_FILE = 10; // (ERR) Received but Server has no file

// PL_TV_EVENT
const PL_TV_EVENT_NO_SIGNAL = 101;
const PL_TV_EVENT_TUNE_SUCCESS = 103;
const PL_TV_EVENT_CHANNEL_CHANGED = 113;
const PL_TV_EVENT_SOURCE_CHANGED = 114;
const PL_TV_EVENT_PROGRAM_CHANGED = 204;

// PL_WINDOW_RESOLUTION
const PL_WINDOW_RESOLUTION_NOTSUPPORT = 0;
const PL_WINDOW_RESOLUTION_NOSIGNAL = 1;
const PL_WINDOW_RESOLUTION_NT = 2;
const PL_WINDOW_RESOLUTION_NT_N = 3;
const PL_WINDOW_RESOLUTION_PC = 4;
const PL_WINDOW_RESOLUTION_1080I = 5;
const PL_WINDOW_RESOLUTION_1080P = 6;
const PL_WINDOW_RESOLUTION_720P = 7;
const PL_WINDOW_RESOLUTION_480P = 8;
const PL_WINDOW_RESOLUTION_480I = 9;
const PL_WINDOW_RESOLUTION_640X480P = 10;
const PL_WINDOW_RESOLUTION_1440x480I = 11; // eslint-disable-line interfaced/camelcase
const PL_WINDOW_RESOLUTION_576P = 12;
const PL_WINDOW_RESOLUTION_576I = 13;
const PL_WINDOW_RESOLUTION_PAL = 14;
const PL_WINDOW_RESOLUTION_PAL_M = 15;
const PL_WINDOW_RESOLUTION_PAL_N = 16;
const PL_WINDOW_RESOLUTION_SECAM = 17;
const PL_WINDOW_RESOLUTION_YC_SECAM = 18;
const PL_WINDOW_RESOLUTION_NOVIDEO = 19;
const PL_WINDOW_RESOLUTION_UNKNOWN = 20;
const PL_WINDOW_RESOLUTION_UNSTABLE = 21;
const PL_WINDOW_RESOLUTION_288I = 22;
const PL_WINDOW_RESOLUTION_MAX = 23;

// AppCommon
const PL_APPCOMMON_MESSAGE_INPUT_OCCUR = 23; // Occurred on key input.

const PL_WINDOW_POSITION_MODE_TOPLEFT = 0;
const PL_WINDOW_POSITION_MODE_TOPRIGHT = 1;
const PL_WINDOW_POSITION_MODE_TOPCENTER = 2;
const PL_WINDOW_POSITION_MODE_BOTTOMRIGHT = 3;
const PL_WINDOW_POSITION_MODE_BOTTOMLEFT = 4;
const PL_WINDOW_POSITION_MODE_MIDDLELEFT = 5;
const PL_WINDOW_POSITION_MODE_MIDDLECENTER = 6;
const PL_WINDOW_POSITION_MODE_CUSTOM = 7;
const PL_WINDOW_POSITION_MODE_DEFAULT = 8;
const PL_WINDOW_POSITION_MODE_MAX = 9;

const PL_WINDOW_RECT_SIZE_PIP_SMALL = 0;
const PL_WINDOW_RECT_SIZE_PIP_LARGE = 1;
const PL_WINDOW_RECT_SIZE_PIP_DOUBLE_SMALL = 2;
const PL_WINDOW_RECT_SIZE_PIP_DOUBLE_LARGE = 3;
const PL_WINDOW_RECT_SIZE_PIG = 4;
const PL_WINDOW_RECT_SIZE_DEFALUT = 5;
const PL_WINDOW_RECT_SIZE_CUSTOM = 6;
const PL_WINDOW_RECT_SIZE_WIDEPC = 7;
const PL_WINDOW_RECT_SIZE_PC_4_3 = 8;
const PL_WINDOW_RECT_SIZE_MODE_MAX = 9;

// PIP
const PL_TV_PIP_ON = 1;
const PL_TV_PIP_OFF = 0;

// TaskManager
const PL_TASKMANAGER_DTV_APP_NONE = 0;

// BP Application
const PL_TASKMANAGER_DTV_APP_TASKMANAGER = 1;
const PL_TASKMANAGER_DTV_APP_TVVIEWER = 2;
const PL_TASKMANAGER_DTV_APP_MENU = 3;
const PL_TASKMANAGER_DTV_APP_EPG = 4;
const PL_TASKMANAGER_DTV_APP_CM = 5;
const PL_TASKMANAGER_DTV_APP_CC = 6;
const PL_TASKMANAGER_DTV_APP_FAC = 7;
const PL_TASKMANAGER_DTV_APP_CHANNELSEARCH = 8;
const PL_TASKMANAGER_DTV_APP_ADDDEL = 9;
const PL_TASKMANAGER_DTV_APP_REMINDER = 10;
const PL_TASKMANAGER_DTV_APP_SOURCE = 11;
const PL_TASKMANAGER_DTV_APP_TVTOOLS = 12;
const PL_TASKMANAGER_DTV_APP_INTERTEST = 13;
const PL_TASKMANAGER_DTV_APP_INTERNALTEST = 14;
const PL_TASKMANAGER_DTV_APP_HOTEL = 15;

// For UU
const PL_TASKMANAGER_DTV_APP_MINIFAVCH = 16;

// For OCAP & ACAP
const PL_TASKMANAGER_DTV_APP_EAS = 17;
const PL_TASKMANAGER_DTV_APP_DV = 18;
const PL_TASKMANAGER_DTV_APP_HTML = 19;
const PL_TASKMANAGER_DTV_APP_APPLIST = 20;
const PL_TASKMANAGER_DTV_APP_JAVAMW = 21;
const PL_TASKMANAGER_DTV_APP_COMDOWNLOAD = 22;

// For DV
const PL_TASKMANAGER_DTV_APP_TTX = 23;
const PL_TASKMANAGER_DTV_APP_SBT = 24;
const PL_TASKMANAGER_DTV_APP_CI = 25;
const PL_TASKMANAGER_DTV_APP_MHEG = 26;
const PL_TASKMANAGER_DTV_APP_RETURN_CHANNEL = 27;
const PL_TASKMANAGER_DTV_APP_CU = 28;
const PL_TASKMANAGER_DTV_APP_FAVCHLIST = 29;

// Etc.
const PL_TASKMANAGER_DTV_APP_LOGOMANAGER = 30;
const PL_TASKMANAGER_DTV_APP_GEMSTAR = 31;
const PL_TASKMANAGER_DTV_APP_FMRADIO = 32;
const PL_TASKMANAGER_DTV_APP_HOME_MENU = 33;

// AP Application
// for WLink
const PL_TASKMANAGER_DTV_APP_WISELINK = 34;
const PL_TASKMANAGER_DTV_APP_MMBROWSER = 35;
const PL_TASKMANAGER_DTV_APP_MMPLAYER = 36;
const PL_TASKMANAGER_DTV_APP_MOVIE_PLAYER = 37;
const PL_TASKMANAGER_DTV_APP_MINT = 38;
const PL_TASKMANAGER_DTV_APP_WPRO = 39;
const PL_TASKMANAGER_DTV_APP_DLNA = 40;
const PL_TASKMANAGER_DTV_APP_DLNACENTER = 41;
const PL_TASKMANAGER_DTV_APP_DMR = 42;
const PL_TASKMANAGER_DTV_APP_PMR = 43;
const PL_TASKMANAGER_DTV_APP_RUIS = 44;
const PL_TASKMANAGER_DTV_APP_RUIC = 45;
const PL_TASKMANAGER_DTV_APP_USBLIST = 46;
const PL_TASKMANAGER_DTV_APP_STORY = 47;

// For PVR
const PL_TASKMANAGER_DTV_APP_PVR = 48;
const PL_TASKMANAGER_DTV_APP_PVR_EDIT = 49;
const PL_TASKMANAGER_DTV_APP_PVR_BROWSER = 50;

// For HdmiCEC
const PL_TASKMANAGER_DTV_APP_CEC = 51;
const PL_TASKMANAGER_DTV_APP_CEC_DEVICE = 52;

// For BlueTooth
const PL_TASKMANAGER_DTV_APP_BLUETOOTH = 53;

// For SWUpgrade
const PL_TASKMANAGER_DTV_APP_SWUPGRADE = 54;
const PL_TASKMANAGER_DTV_APP_OTA = 55;
const PL_TASKMANAGER_DTV_APP_SWUPGRADE_AIR = 56;
const PL_TASKMANAGER_DTV_APP_OAD = 57;
const PL_TASKMANAGER_DTV_APP_OAD_SAT = 58;
const PL_TASKMANAGER_DTV_APP_OTN = 59;
const PL_TASKMANAGER_DTV_APP_SWUCOMMON = 60;
const PL_TASKMANAGER_DTV_APP_USB_HOTEL_LOGOCLONE = 61;
const PL_TASKMANAGER_DTV_APP_CHMAP_TRANSFER = 62;

// For InfoLink
const PL_TASKMANAGER_DTV_APP_RSS = 63;
const PL_TASKMANAGER_DTV_APP_INFOLINK2 = 64;
const PL_TASKMANAGER_DTV_APP_MEDIALINK = 65;
const PL_TASKMANAGER_DTV_APP_CONTENTSHOME = 66;

// For Contents Library & etc.
const PL_TASKMANAGER_DTV_APP_GPLAYER = 67;
const PL_TASKMANAGER_DTV_APP_FLASHPLAYER = 68;
const PL_TASKMANAGER_DTV_APP_TLIBBROWSER = 69;
const PL_TASKMANAGER_DTV_APP_PRODUCTGUIDE = 70;
const PL_TASKMANAGER_DTV_APP_USERMANUAL = 71;
const PL_TASKMANAGER_DTV_APP_GALLERYPLAYER = 72;
const PL_TASKMANAGER_DTV_APP_CLMOVIEPLAYER = 73;
const PL_TASKMANAGER_DTV_APP_CLPOP = 74;

// For WLan
const PL_TASKMANAGER_DTV_APP_WLAN = 75;

// For Yahoo
const PL_TASKMANAGER_DTV_APP_YAHOO = 76;
const PL_TASKMANAGER_DTV_APP_SHOPDEMO = 77;

// For DualTV
const PL_TASKMANAGER_DTV_APP_MAINTVUPNPSERVER = 78;
const PL_TASKMANAGER_DTV_APP_DUALTV_READY = 79;

// Etc
const PL_TASKMANAGER_DTV_APP_MOIP = 80;
const PL_TASKMANAGER_DTV_APP_DNET = 81;
const PL_TASKMANAGER_DTV_APP_POP = 82;
const PL_TASKMANAGER_DTV_APP_FRONTRUNNER = 83;
const PL_TASKMANAGER_DTV_APP_HOTEL_IPTV = 84;
const PL_TASKMANAGER_DTV_APP_IPTV_BROWSER = 85;

// For BD
const PL_TASKMANAGER_DTV_APP_PHAROS_AGENT = 86;
const PL_TASKMANAGER_DTV_APP_FRONT_DISPLAY = 87;
const PL_TASKMANAGER_DTV_APP_BDP_TOOLS = 88;
const PL_TASKMANAGER_DTV_APP_BDHTS = 89;

const PL_TASKMANAGER_DTV_APP_FULLBROWSER = 90;
const PL_TASKMANAGER_DTV_APP_REMOTE = 91;
const PL_TASKMANAGER_DTV_APP_REMOTE_MSG = 92;
const PL_TASKMANAGER_DTV_APP_DLNADMS = 93;
const PL_TASKMANAGER_DTV_APP_DOCOMO_BROWSER = 94;
const PL_TASKMANAGER_DTV_APP_BML_BROWSER = 95;
const PL_TASKMANAGER_DTV_APP_RCT = 96;
const PL_TASKMANAGER_DTV_APP_DOWNLOAD_PLAYER = 97;
const PL_TASKMANAGER_DTV_APP_PSA = 98;
const PL_TASKMANAGER_DTV_APP_CALENDAR = 99;
const PL_TASKMANAGER_DTV_APP_BD_PLAYER = 100;
const PL_TASKMANAGER_DTV_APP_DVD_PLAYER = 101;
const PL_TASKMANAGER_DTV_APP_CDDA_PLAYER = 102;
const PL_TASKMANAGER_DTV_APP_BDRE_PLAYER = 103;
const PL_TASKMANAGER_DTV_APP_VCD_PLAYER = 104;
const PL_TASKMANAGER_DTV_APP_IPOD_PLAYER = 105;
const PL_TASKMANAGER_DTV_APP_BDP_SETTINGS = 106;
const PL_TASKMANAGER_DTV_APP_BDP_INITSET = 107;
const PL_TASKMANAGER_DTV_APP_HTS_FUNCTION_MODE = 108;
const PL_TASKMANAGER_DTV_APP_BDP_TEST_MODE = 109;
const PL_TASKMANAGER_DTV_APP_ATSC_MH = 110;
const PL_TASKMANAGER_DTV_APP_HBBTV = 111;
const PL_TASKMANAGER_DTV_TR_APP_RCVIEWER = 112;
const PL_TASKMANAGER_DTV_TR_APP_MYTV = 113;
const PL_TASKMANAGER_DTV_TR_APP_SETTINGS = 114;
const PL_TASKMANAGER_DTV_TR_APP_CHLIST = 115;
const PL_TASKMANAGER_DTV_TR_APP_ACTIVITY = 116;
const PL_TASKMANAGER_DTV_TR_APP_MBR = 117;
const PL_TASKMANAGER_DTV_TR_APP_SOURCELIST = 118;
const PL_TASKMANAGER_DTV_TR_APP_ALLSHARE = 119;
const PL_TASKMANAGER_DTV_TR_APP_FTU = 120;
const PL_TASKMANAGER_DTV_TR_APP_FACTORY = 121;
const PL_TASKMANAGER_DTV_TR_APP_PERSONALLISTENING = 122;
const PL_TASKMANAGER_DTV_TR_APP_FAVORITE = 123;
const PL_TASKMANAGER_DTV_TR_APP_SCHEDULEMANAGER = 124;
const PL_TASKMANAGER_DTV_TR_APP_VOIP = 125;
const PL_TASKMANAGER_DTV_TR_APP_OSK = 126;
const PL_TASKMANAGER_DTV_TR_APP_BROWSERCONTROL = 127;
const PL_TASKMANAGER_DTV_APP_MAP_BROWSER = 128;
const PL_TASKMANAGER_DTV_APP_MAX = 129;

// Target Location
const PL_TV_TARGET_LOCATION_UNKNOWN = 0;
const PL_TV_TARGET_LOCATION_KOR = 1;
const PL_TV_TARGET_LOCATION_USA = 2;
const PL_TV_TARGET_LOCATION_BRA = 3;
const PL_TV_TARGET_LOCATION_PANEURO = 4;
const PL_TV_TARGET_LOCATION_CHI = 5;
const PL_TV_TARGET_LOCATION_HKG = 6;
const PL_TV_TARGET_LOCATION_ARB = 7;
const PL_TV_TARGET_LOCATION_PANNORDIG = 8;
const PL_TV_TARGET_LOCATION_SOUTHEASTASIA = 9;
const PL_TV_TARGET_LOCATION_ASIA_ATV = 10;
const PL_TV_TARGET_LOCATION_ASIA_DTV = 11;
const PL_TV_TARGET_LOCATION_TW = 12;
const PL_TV_TARGET_LOCATION_NORTHAFRICA = 13;
const PL_TV_TARGET_LOCATION_EA_DTV = 14;
const PL_TV_TARGET_LOCATION_CIS = 15;
const PL_TV_TARGET_LOCATION_PHI = 16;
const PL_TV_TARGET_LOCATION_S_AFR_DTV = 17;

/**
 * @type {Array<string>}
 */
const PL_TV_LOCATION_CODE = [];
/*
PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_UNKNOWN] = "USA"; // Default
PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_KOR] = "KOR";
PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_USA] = "USA";
PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_BRA] = "BRA";
PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_PANEURO] = "PANEURO";
PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_CHI] = "CHI";
PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_HKG] = "HKG";
PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_ARB] = "ARB";
PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_PANNORDIG] = "PANNORDIG";
PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_SOUTHEASTASIA] = "SOUTHEASTASIA";
PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_ASIA_ATV] = "ASIA_ATV";
PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_ASIA_DTV] = "ASIA_DTV";
PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_TW] = "TW";
PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_NORTHAFRICA] = "NORTHAFRICA";
PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_EA_DTV] = "EA_DTV";
PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_CIS] = "CIS";
PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_PHI] = "PHI";
PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_S_AFR_DTV] = "S_AFR_DTV";
*/

const PL_SCREEN_OPTION_BRIGHTNESS_SENSOR = 41;

// GetProductType
const PL_TV_PRODUCT_TYPE_TV = 0;
const PL_TV_PRODUCT_TYPE_MONITOR = 1;
const PL_TV_PRODUCT_TYPE_BD = 2;

// GetLanguageSet
const PL_TV_FACTORY_LANGUAGE_UNKNOWN = 0;
const PL_TV_FACTORY_LANGUAGE_EAST_ASIA = 1;
const PL_TV_FACTORY_LANGUAGE_IRAN = 2;
const PL_TV_FACTORY_LANGUAGE_ISRAEL = 3;
const PL_TV_FACTORY_LANGUAGE_MIDDLE_ASIA = 4;
const PL_TV_FACTORY_LANGUAGE_SOUTH_AMERICA = 5;
const PL_TV_FACTORY_LANGUAGE_TAIWAN = 6;
const PL_TV_FACTORY_LANGUAGE_AFRICA = 7;
const PL_TV_FACTORY_LANGUAGE_NORTH_AFRICA = 8;
const PL_TV_FACTORY_LANGUAGE_WEST_ASIA = 9;

// PL_TV_REMOTE_INPUT_TYPE
const PL_TV_REMOTE_DEFAULT_TYPE = 0;
const PL_TV_REMOTE_4DIRECTION_TYPE = 1;
const PL_TV_REMOTE_NUMERIC_TYPE = 2;
const PL_TV_REMOTE_PLAYBACK_TYPE = 3;
const PL_TV_REMOTE_YAHOO_TYPE = 4;
const PL_TV_REMOTE_PSIZE_TYPE = 5;
const PL_TV_REMOTE_FULLBROWSER_TYPE = 6;
const PL_TV_REMOTE_INTERNET_TYPE = 7;
const PL_TV_REMOTE_DATASERVICE_TYPE = 8;
const PL_TV_REMOTE_ROOMEQ_TYPE = 9;
const PL_TV_REMOTE_TTX_TYPE = 10;
const PL_TV_REMOTE_MHP_TYPE = 11;
const PL_TV_REMOTE_FULLBROWSER2_TYPE = 12;
const PL_TV_REMOTE_FULLBROWSER3_TYPE = 13;
const PL_TV_REMOTE_FULLBROWSER4_TYPE = 14;
const PL_TV_REMOTE_FULLBROWSER5_TYPE = 15;
const PL_TV_REMOTE_FULLBROWSER6_TYPE = 16;
const PL_TV_REMOTE_FULLBROWSER7_TYPE = 17;
const PL_TV_REMOTE_FULLBROWSER8_TYPE = 18;
const PL_TV_REMOTE_HDMICEC_TYPE = 19;
const PL_TV_REMOTE_USBDLNA_TYPE = 20;
const PL_TV_REMOTE_INTERNET_4DIRECTION_TYPE = 21;
const PL_TV_REMOTE_COLOR_TYPE = 22;
const PL_TV_REMOTE_IR_TYPE = 23;
