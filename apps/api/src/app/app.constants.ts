export abstract class AppConstants {
  // A rest endpoint needs to be appended:
  static readonly baseUrl = 'https://app.irishtimes.com/v9-iphone-menu/iphone-';

  // Some kind of token needs to be appended:
  static readonly loginUrl =
    'https://www.irishtimes.com/auth-rest-api/v1/app/validate/';
}
