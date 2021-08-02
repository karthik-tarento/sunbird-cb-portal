export const environment = {
  production: true,
  name: (window as { [key: string]: any })['env']['name'],
  sitePath: (window as { [key: string]: any })['env']['sitePath'] || '',
  organisation: (window as { [key: string]: any })['env']['organisation'] || '',
  framework: (window as { [key: string]: any })['env']['framework'] || '',
  channelId: (window as { [key: string]: any })['env']['channelId'] || '',
  azureHost: (window as { [key: string]: any })['env']['azureHost'] || '',
  contentHost: (window as { [key: string]: any })['env']['contentHost'] || '',
  azureBucket: (window as { [key: string]: any })['env']['azureBucket'] || '',
  azureOldHost: (window as { [key: string]: any })['env']['azureOldHost'] || '',
  azureOldBuket: (window as { [key: string]: any })['env']['azureOldBuket'] || '',
  portalRoles: (((window as { [key: string]: any })['env']['portalRoles'] || '').split(',')) || [],
}
