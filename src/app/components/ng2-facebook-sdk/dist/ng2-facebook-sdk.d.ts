export declare class FacebookService {
    /**
     * This method is used to initialize and setup the SDK.
     * @param params
     */
    init(params: FacebookInitParams): void;
    /**
     * This method lets you make calls to the Graph API
     * @param path This is the Graph API endpoint path that you want to call.
     * @param method This is the HTTP method that you want to use for the API request.
     * @param params This is an object consisting of any parameters that you want to pass into your Graph API call.
     * @returns {Promise<any>}
     */
    api(path: string, method?: FacebookApiMethod, params?: any): Promise<any>;
    /**
     * This method is used to trigger different forms of Facebook created UI dialogs.
     * These dialogs include:
     * - Share dialog
     * - Login dialog
     * - Add page tab dialog
     * - Requests dialog
     * - Send dialog
     * - Payments dialog
     * - Go Live dialog
     * @param params A collection of parameters that control which dialog is loaded, and relevant settings.
     * @returns {Promise<any>}
     */
    ui(params: FacebookUiParams): Promise<any>;
    /**
     * This method allows you to determine if a user is logged in to Facebook and has authenticated your app.
     * @returns {Promise<FacebookLoginStatus>}
     */
    getLoginStatus(): Promise<FacebookLoginStatus>;
    /**
     * Login the user
     * @param options
     * @returns {Promise<FacebookLoginResponse>}
     */
    login(options?: FacebookLoginOptions): Promise<FacebookLoginResponse>;
    /**
     * Logout the user
     * @returns {Promise<any>}
     */
    logout(): Promise<any>;
    /**
     * This synchronous function returns back the current authResponse.
     * @returns {Promise<FacebookAuthResponse>}
     */
    getAuthResponse(): FacebookAuthResponse;
}
export interface FacebookInitParams {
    /**
     * Your application ID. If you don't have one find it in the App dashboard or go there to create a new app. Defaults to null.
     */
    appId?: string;
    /**
     * Determines which versions of the Graph API and any API dialogs or plugins are invoked when using the .api() and .ui() functions. Valid values are determined by currently available versions, such as 'v2.0'. This is a required parameter.
     */
    version: string;
    /**
     * Determines whether a cookie is created for the session or not. If enabled, it can be accessed by server-side code. Defaults to false.
     */
    cookie?: boolean;
    /**
     * Determines whether the current login status of the user is freshly retrieved on every page load. If this is disabled, that status will have to be manually retrieved using .getLoginStatus(). Defaults to false.
     */
    status?: boolean;
    /**
     * Determines whether XFBML tags used by social plugins are parsed, and therefore whether the plugins are rendered or not. Defaults to false.
     */
    xfbml?: boolean;
    /**
     * Frictionless Requests are available to games on Facebook.com or on mobile web using the JavaScript SDK. This parameter determines whether they are enabled. Defaults to false.
     */
    frictionlessRequests?: boolean;
    /**
     * This specifies a function that is called whenever it is necessary to hide Adobe Flash objects on a page. This is used when .api() requests are made, as Flash objects will always have a higher z-index than any other DOM element. See our Custom Flash Hide Callback for more details on what to put in this function. Defaults to null.
     */
    hideFlashCallback?: any;
}
export declare const enum FacebookApiMethod {
    'get' = 0,
    'post' = 1,
    'delete' = 2,
}
export interface FacebookUiParams {
    /**
     * The UI dialog that is being invoked. This is a required field.
     */
    method: any;
    message: any;
}
export interface FacebookAuthResponse {
    accessToken: string;
    expiresIn: number;
    signedRequest: string;
    userID: string;
}
export interface FacebookLoginStatus {
    status: string;
    authResponse: FacebookAuthResponse;
}
export interface FacebookLoginOptions {
    auth_type?: string;
    scope?: string;
    return_scopes?: boolean;
    enable_profile_selector?: boolean;
    profile_selector_ids?: string;
}
export interface FacebookLoginResponse {
    authResponse: FacebookAuthResponse;
    status: string;
}
