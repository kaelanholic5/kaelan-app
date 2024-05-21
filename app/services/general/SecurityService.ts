import { Request } from 'express';
import 'dotenv/config';

export default function (request: Request) {
    if (request?.headers?.authorization == process?.env?.SECURITY_KEY) {
        return true;
    }
    return false;
}