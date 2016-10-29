import {OpaqueToken} from '@angular/core';

export const ConfigService = new OpaqueToken("config.service"); 

export interface IConfigService<TConfig> {
  get: TConfig
}

export type IConfig = {
  auth: {
    logonType: 'external'
  }
};