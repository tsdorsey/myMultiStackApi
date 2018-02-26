export function buildResponse(statusCode, body, cors = true) {
  const result = {
    statusCode: statusCode || HTTP_STATUS.OK,
  };

  if (cors) {
    result['headers'] = {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
    };
  }

  if (body) {
    result.body = JSON.stringify(body);
    result.headers['Content-Type'] = 'application/json';
  }

  return result;
}

// https://gist.github.com/tsdorsey/dff41c99dcc36f07a5eb0f83fa74d487
export const HTTP_STATUS_CODE = {
  100: 'Continue',
  101: 'Switching Protocols',
  102: 'Processing', // RFC 2518, obsoleted by RFC 4918
  200: 'OK',
  201: 'Created',
  202: 'Accepted',
  203: 'Non-Authoritative Information',
  204: 'No Content',
  205: 'Reset Content',
  206: 'Partial Content',
  207: 'Multi-Status', // RFC 4918
  208: 'Already Reported',
  226: 'IM Used',
  300: 'Multiple Choices',
  301: 'Moved Permanently',
  302: 'Found',
  303: 'See Other',
  304: 'Not Modified',
  305: 'Use Proxy',
  307: 'Temporary Redirect',
  308: 'Permanent Redirect', // RFC 7238
  400: 'Bad Request',
  401: 'Unauthorized',
  402: 'Payment Required',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  406: 'Not Acceptable',
  407: 'Proxy Authentication Required',
  408: 'Request Timeout',
  409: 'Conflict',
  410: 'Gone',
  411: 'Length Required',
  412: 'Precondition Failed',
  413: 'Payload Too Large',
  414: 'URI Too Long',
  415: 'Unsupported Media Type',
  416: 'Range Not Satisfiable',
  417: 'Expectation Failed',
  418: "I'm a teapot", // RFC 2324
  421: 'Misdirected Request',
  422: 'Unprocessable Entity', // RFC 4918
  423: 'Locked', // RFC 4918
  424: 'Failed Dependency', // RFC 4918
  425: 'Unordered Collection', // RFC 4918
  426: 'Upgrade Required', // RFC 2817
  428: 'Precondition Required', // RFC 6585
  429: 'Too Many Requests', // RFC 6585
  431: 'Request Header Fields Too Large', // RFC 6585
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
  505: 'HTTP Version Not Supported',
  506: 'Variant Also Negotiates', // RFC 2295
  507: 'Insufficient Storage', // RFC 4918
  508: 'Loop Detected',
  509: 'Bandwidth Limit Exceeded',
  510: 'Not Extended', // RFC 2774
  511: 'Network Authentication Required', // RFC 6585
};

export const HTTP_STATUS = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102, // RFC 2518, obsoleted by RFC 4918
  OK: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207, // RFC 4918
  AlreadyReported: 208,
  IMUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  TemporaryRedirect: 307,
  PermanentRedirect: 308, // RFC 7238
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  URITooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418, // RFC 2324
  MisdirectedRequest: 421,
  UnprocessableEntity: 422, // RFC 4918
  Locked: 423, // RFC 4918
  FailedDependency: 424, // RFC 4918
  UnorderedCollection: 425, // RFC 4918
  UpgradeRequired: 426, // RFC 2817
  PreconditionRequired: 428, // RFC 6585
  TooManyRequests: 429, // RFC 6585
  RequestHeaderFieldsTooLarge: 431, // RFC 6585
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HTTPVersionNotSupported: 505,
  VariantAlsoNegotiates: 506, // RFC 2295
  InsufficientStorage: 507, // RFC 4918
  LoopDetected: 508,
  BandwidthLimitExceeded: 509,
  NotExtended: 510, // RFC 2774
  NetworkAuthenticationRequired: 511, // RFC 6585
};
