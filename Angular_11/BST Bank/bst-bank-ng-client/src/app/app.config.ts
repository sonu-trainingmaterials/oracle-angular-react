import { InjectionToken} from '@angular/core';

export const APP_CONFIG= new InjectionToken('AppConfig');

export interface IAppConfig{
    apiBaseUrl:string
}
export const AppConfig: IAppConfig =  {
    apiBaseUrl:"http://localhost:56463"
}