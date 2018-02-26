import { createPing, getPings } from '../functions/ping';
import { buildResponse, HTTP_STATUS } from '../lib/response';

export async function postHandler(event, context, callback) {
  await createPing(event.requestContext.identity.sourceIp);
  callback(null, buildResponse(HTTP_STATUS.Created));
}

export async function getHandler(event, context, callback) {
  let pings = await getPings(event.requestContext.identity.sourceIp);
  callback(null, buildResponse(HTTP_STATUS.OK, pings));
}
