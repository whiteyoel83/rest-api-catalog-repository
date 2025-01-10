export const serviceResponse = {
  statusCodes: {
    continue: 100,
    switchingProtocols: 101,
    processing: 102,
    earlyHints: 103,
    ok: 200,
    created: 201,
    accepted: 202,
    nonAuthoritativeInformation: 203,
    noContent: 204,
    resetContent: 205,
    partialContent: 206,
    multiStatus: 207,
    alreadyReported: 208,
    transformationApplied: 214,
    imUsed: 226,
    multipleChoices: 300,
    movedPermanently: 301,
    found: 302,
    seeOther: 303,
    notModified: 304,
    useProxy: 305,
    switchProxy: 306,
    temporaryRedirect: 307,
    permanentRedirect: 308,
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    methodNotAllowed: 405,
    notAcceptable: 406,
    proxyAuthenticationRequired: 407,
    requestTimeout: 408,
    conflict: 409,
    gone: 410,
    lengthRequired: 411,
    preconditionFailed: 412,
    payloadTooLarge: 413,
    uriTooLong: 414,
    unsupportedMediaType: 415,
    rangeNotSatisfiable: 416,
    expectationFailed: 417,
    misdirectedRequest: 421,
    unprocessableEntity: 422,
    locked: 423,
    failedDependency: 424,
    tooEarly: 425,
    upgradeRequired: 426,
    preconditionRequired: 428,
    tooManyRequests: 429,
    requestHeaderFieldsTooLarge: 431,
    unavailableForLegalReasons: 451,
    internalServerError: 500,
    notImplemented: 501,
    badGateway: 502,
    serviceUnavailable: 503,
    gatewayTimeout: 504,
    httpVersionNotSupported: 505,
    variantAlsoNegotiates: 506,
    insufficientStorage: 507,
    loopDetected: 508,
    bandwidthLimitExceeded: 509,
    notExtended: 510,
    networkAuthenticationRequired: 511,
    webServerIsDown: 521,
    connectionTimedOut: 522,
    proxyDeclinedRequest: 523,
    staleProxy: 524,
    originIsUnreachable: 525,
    siteFrozen: 530,
    networkReadTimeoutError: 598,
    networkConnectTimeoutError: 599,
  },

  continue(res: any, message: string, data: any) {
    return res.status(this.statusCodes.continue).json({
      success: true,
      message,
      data,
      status: this.statusCodes.continue,
    });
  },

  switchingProtocols(res: any, message: string, data: any) {
    return res.status(this.statusCodes.switchingProtocols).json({
      success: true,
      message,
      data,
      status: this.statusCodes.switchingProtocols,
    });
  },

  processing(res: any, message: string, data: any) {
    return res.status(this.statusCodes.processing).json({
      success: true,
      message,
      data,
      status: this.statusCodes.processing,
    });
  },

  earlyHints(res: any, message: string, data: any) {
    return res.status(this.statusCodes.earlyHints).json({
      success: true,
      message,
      data,
      status: this.statusCodes.earlyHints,
    });
  },

  ok(res: any, message: string, data: any) {
    return res.status(this.statusCodes.ok).json({
      success: true,
      message,
      data,
      status: this.statusCodes.ok,
    });
  },

  created(res: any, message: string, data: any) {
    return res.status(this.statusCodes.created).json({
      success: true,
      message,
      data,
      status: this.statusCodes.created,
    });
  },

  accepted(res: any, message: string, data: any) {
    return res.status(this.statusCodes.accepted).json({
      success: true,
      message,
      data,
      status: this.statusCodes.accepted,
    });
  },

  nonAuthoritativeInformation(res: any, message: string, data: any) {
    return res.status(this.statusCodes.nonAuthoritativeInformation).json({
      success: true,
      message,
      data,
      status: this.statusCodes.nonAuthoritativeInformation,
    });
  },

  noContent(res: any, message: string, data: any) {
    return res.status(this.statusCodes.noContent).json({
      success: true,
      message,
      data,
      status: this.statusCodes.noContent,
    });
  },

  resetContent(res: any, message: string, data: any) {
    return res.status(this.statusCodes.resetContent).json({
      success: true,
      message,
      data,
      status: this.statusCodes.resetContent,
    });
  },

  partialContent(res: any, message: string, data: any) {
    return res.status(this.statusCodes.partialContent).json({
      success: true,
      message,
      data,
      status: this.statusCodes.partialContent,
    });
  },

  multiStatus(res: any, message: string, data: any) {
    return res.status(this.statusCodes.multiStatus).json({
      success: true,
      message,
      data,
      status: this.statusCodes.multiStatus,
    });
  },

  alreadyReported(res: any, message: string, data: any) {
    return res.status(this.statusCodes.alreadyReported).json({
      success: true,
      message,
      data,
      status: this.statusCodes.alreadyReported,
    });
  },

  transformationApplied(res: any, message: string, data: any) {
    return res.status(this.statusCodes.transformationApplied).json({
      success: true,
      message,
      data,
      status: this.statusCodes.transformationApplied,
    });
  },

  imUsed(res: any, message: string, data: any) {
    return res.status(this.statusCodes.imUsed).json({
      success: true,
      message,
      data,
      status: this.statusCodes.imUsed,
    });
  },

  multipleChoices(res: any, message: string, data: any) {
    return res.status(this.statusCodes.multipleChoices).json({
      success: true,
      message,
      data,
      status: this.statusCodes.multipleChoices,
    });
  },

  movedPermanently(res: any, message: string, data: any) {
    return res.status(this.statusCodes.movedPermanently).json({
      success: true,
      message,
      data,
      status: this.statusCodes.movedPermanently,
    });
  },

  found(res: any, message: string, data: any) {
    return res.status(this.statusCodes.found).json({
      success: true,
      message,
      data,
      status: this.statusCodes.found,
    });
  },

  seeOther(res: any, message: string, data: any) {
    return res.status(this.statusCodes.seeOther).json({
      success: true,
      message,
      data,
      status: this.statusCodes.seeOther,
    });
  },

  notModified(res: any, message: string, data: any) {
    return res.status(this.statusCodes.notModified).json({
      success: true,
      message,
      data,
      status: this.statusCodes.notModified,
    });
  },

  useProxy(res: any, message: string, data: any) {
    return res.status(this.statusCodes.useProxy).json({
      success: true,
      message,
      data,
      status: this.statusCodes.useProxy,
    });
  },

  temporaryRedirect(res: any, message: string, data: any) {
    return res.status(this.statusCodes.temporaryRedirect).json({
      success: true,
      message,
      data,
      status: this.statusCodes.temporaryRedirect,
    });
  },

  permanentRedirect(res: any, message: string, data: any) {
    return res.status(this.statusCodes.permanentRedirect).json({
      success: true,
      message,
      data,
      status: this.statusCodes.permanentRedirect,
    });
  },

  badRequest(res: any, message: string, data: any) {
    return res.status(this.statusCodes.badRequest).json({
      success: false,
      message,
      data,
      status: this.statusCodes.badRequest,
    });
  },

  unauthorized(res: any, message: string, data: any) {
    return res.status(this.statusCodes.unauthorized).json({
      success: false,
      message,
      data,
      status: this.statusCodes.unauthorized,
    });
  },

  forbidden(res: any, message: string, data: any) {
    return res.status(this.statusCodes.forbidden).json({
      success: false,
      message,
      data,
      status: this.statusCodes.forbidden,
    });
  },

  notFound(res: any, message: string, data: any) {
    return res.status(this.statusCodes.notFound).json({
      success: false,
      message,
      data,
      status: this.statusCodes.notFound,
    });
  },

  methodNotAllowed(res: any, message: string, data: any) {
    return res.status(this.statusCodes.methodNotAllowed).json({
      success: false,
      message,
      data,
      status: this.statusCodes.methodNotAllowed,
    });
  },

  notAcceptable(res: any, message: string, data: any) {
    return res.status(this.statusCodes.notAcceptable).json({
      success: false,
      message,
      data,
      status: this.statusCodes.notAcceptable,
    });
  },

  proxyAuthenticationRequired(res: any, message: string, data: any) {
    return res.status(this.statusCodes.proxyAuthenticationRequired).json({
      success: false,
      message,
      data,
      status: this.statusCodes.proxyAuthenticationRequired,
    });
  },

  requestTimeout(res: any, message: string, data: any) {
    return res.status(this.statusCodes.requestTimeout).json({
      success: false,
      message,
      data,
      status: this.statusCodes.requestTimeout,
    });
  },

  conflict(res: any, message: string, data: any) {
    return res.status(this.statusCodes.conflict).json({
      success: false,
      message,
      data,
      status: this.statusCodes.conflict,
    });
  },

  gone(res: any, message: string, data: any) {
    return res.status(this.statusCodes.gone).json({
      success: false,
      message,
      data,
      status: this.statusCodes.gone,
    });
  },

  lengthRequired(res: any, message: string, data: any) {
    return res.status(this.statusCodes.lengthRequired).json({
      success: false,
      message,
      data,
      status: this.statusCodes.lengthRequired,
    });
  },

  preconditionFailed(res: any, message: string, data: any) {
    return res.status(this.statusCodes.preconditionFailed).json({
      success: false,
      message,
      data,
      status: this.statusCodes.preconditionFailed,
    });
  },

  payloadTooLarge(res: any, message: string, data: any) {
    return res.status(this.statusCodes.payloadTooLarge).json({
      success: false,
      message,
      data,
      status: this.statusCodes.payloadTooLarge,
    });
  },

  uriTooLong(res: any, message: string, data: any) {
    return res.status(this.statusCodes.uriTooLong).json({
      success: false,
      message,
      data,
      status: this.statusCodes.uriTooLong,
    });
  },

  unsupportedMediaType(res: any, message: string, data: any) {
    return res.status(this.statusCodes.unsupportedMediaType).json({
      success: false,
      message,
      data,
      status: this.statusCodes.unsupportedMediaType,
    });
  },

  rangeNotSatisfiable(res: any, message: string, data: any) {
    return res.status(this.statusCodes.rangeNotSatisfiable).json({
      success: false,
      message,
      data,
      status: this.statusCodes.rangeNotSatisfiable,
    });
  },

  expectationFailed(res: any, message: string, data: any) {
    return res.status(this.statusCodes.expectationFailed).json({
      success: false,
      message,
      data,
      status: this.statusCodes.expectationFailed,
    });
  },

  misdirectedRequest(res: any, message: string, data: any) {
    return res.status(this.statusCodes.misdirectedRequest).json({
      success: false,
      message,
      data,
      status: this.statusCodes.misdirectedRequest,
    });
  },

  unprocessableEntity(res: any, message: string, data: any) {
    return res.status(this.statusCodes.unprocessableEntity).json({
      success: false,
      message,
      data,
      status: this.statusCodes.unprocessableEntity,
    });
  },

  locked(res: any, message: string, data: any) {
    return res.status(this.statusCodes.locked).json({
      success: false,
      message,
      data,
      status: this.statusCodes.locked,
    });
  },

  failedDependency(res: any, message: string, data: any) {
    return res.status(this.statusCodes.failedDependency).json({
      success: false,
      message,
      data,
      status: this.statusCodes.failedDependency,
    });
  },

  tooEarly(res: any, message: string, data: any) {
    return res.status(this.statusCodes.tooEarly).json({
      success: false,
      message,
      data,
      status: this.statusCodes.tooEarly,
    });
  },

  upgradeRequired(res: any, message: string, data: any) {
    return res.status(this.statusCodes.upgradeRequired).json({
      success: false,
      message,
      data,
      status: this.statusCodes.upgradeRequired,
    });
  },

  preconditionRequired(res: any, message: string, data: any) {
    return res.status(this.statusCodes.preconditionRequired).json({
      success: false,
      message,
      data,
      status: this.statusCodes.preconditionRequired,
    });
  },

  tooManyRequests(res: any, message: string, data: any) {
    return res.status(this.statusCodes.tooManyRequests).json({
      success: false,
      message,
      data,
      status: this.statusCodes.tooManyRequests,
    });
  },

  requestHeaderFieldsTooLarge(res: any, message: string, data: any) {
    return res.status(this.statusCodes.requestHeaderFieldsTooLarge).json({
      success: false,
      message,
      data,
      status: this.statusCodes.requestHeaderFieldsTooLarge,
    });
  },

  unavailableForLegalReasons(res: any, message: string, data: any) {
    return res.status(this.statusCodes.unavailableForLegalReasons).json({
      success: false,
      message,
      data,
      status: this.statusCodes.unavailableForLegalReasons,
    });
  },

  internalServerError(res: any, message: string, data: any) {
    return res.status(this.statusCodes.internalServerError).json({
      success: false,
      message,
      data,
      status: this.statusCodes.internalServerError,
    });
  },

  notImplemented(res: any, message: string, data: any) {
    return res.status(this.statusCodes.notImplemented).json({
      success: false,
      message,
      data,
      status: this.statusCodes.notImplemented,
    });
  },

  badGateway(res: any, message: string, data: any) {
    return res.status(this.statusCodes.badGateway).json({
      success: false,
      message,
      data,
      status: this.statusCodes.badGateway,
    });
  },

  serviceUnavailable(res: any, message: string, data: any) {
    return res.status(this.statusCodes.serviceUnavailable).json({
      success: false,
      message,
      data,
      status: this.statusCodes.serviceUnavailable,
    });
  },

  gatewayTimeout(res: any, message: string, data: any) {
    return res.status(this.statusCodes.gatewayTimeout).json({
      success: false,
      message,
      data,
      status: this.statusCodes.gatewayTimeout,
    });
  },

  httpVersionNotSupported(res: any, message: string, data: any) {
    return res.status(this.statusCodes.httpVersionNotSupported).json({
      success: false,
      message,
      data,
      status: this.statusCodes.httpVersionNotSupported,
    });
  },

  variantAlsoNegotiates(res: any, message: string, data: any) {
    return res.status(this.statusCodes.variantAlsoNegotiates).json({
      success: false,
      message,
      data,
      status: this.statusCodes.variantAlsoNegotiates,
    });
  },

  insufficientStorage(res: any, message: string, data: any) {
    return res.status(this.statusCodes.insufficientStorage).json({
      success: false,
      message,
      data,
      status: this.statusCodes.insufficientStorage,
    });
  },

  loopDetected(res: any, message: string, data: any) {
    return res.status(this.statusCodes.loopDetected).json({
      success: false,
      message,
      data,
      status: this.statusCodes.loopDetected,
    });
  },

  bandwidthLimitExceeded(res: any, message: string, data: any) {
    return res.status(this.statusCodes.bandwidthLimitExceeded).json({
      success: false,
      message,
      data,
      status: this.statusCodes.bandwidthLimitExceeded,
    });
  },

  notExtended(res: any, message: string, data: any) {
    return res.status(this.statusCodes.notExtended).json({
      success: false,
      message,
      data,
      status: this.statusCodes.notExtended,
    });
  },

  networkAuthenticationRequired(res: any, message: string, data: any) {
    return res.status(this.statusCodes.networkAuthenticationRequired).json({
      success: false,
      message,
      data,
      status: this.statusCodes.networkAuthenticationRequired,
    });
  },

  webServerIsDown(res: any, message: string, data: any) {
    return res.status(this.statusCodes.webServerIsDown).json({
      success: false,
      message,
      data,
      status: this.statusCodes.webServerIsDown,
    });
  },

  connectionTimedOut(res: any, message: string, data: any) {
    return res.status(this.statusCodes.connectionTimedOut).json({
      success: false,
      message,
      data,
      status: this.statusCodes.connectionTimedOut,
    });
  },

  proxyDeclinedRequest(res: any, message: string, data: any) {
    return res.status(this.statusCodes.proxyDeclinedRequest).json({
      success: false,
      message,
      data,
      status: this.statusCodes.proxyDeclinedRequest,
    });
  },

  staleProxy(res: any, message: string, data: any) {
    return res.status(this.statusCodes.staleProxy).json({
      success: false,
      message,
      data,
      status: this.statusCodes.staleProxy,
    });
  },

  originIsUnreachable(res: any, message: string, data: any) {
    return res.status(this.statusCodes.originIsUnreachable).json({
      success: false,
      message,
      data,
      status: this.statusCodes.originIsUnreachable,
    });
  },

  siteFrozen(res: any, message: string, data: any) {
    return res.status(this.statusCodes.siteFrozen).json({
      success: false,
      message,
      data,
      status: this.statusCodes.siteFrozen,
    });
  },

  networkReadTimeoutError(res: any, message: string, data: any) {
    return res.status(this.statusCodes.networkReadTimeoutError).json({
      success: false,
      message,
      data,
      status: this.statusCodes.networkReadTimeoutError,
    });
  },

  networkConnectTimeoutError(res: any, message: string, data: any) {
    return res.status(this.statusCodes.networkConnectTimeoutError).json({
      success: false,
      message,
      data,
      status: this.statusCodes.networkConnectTimeoutError,
    });
  },
};
