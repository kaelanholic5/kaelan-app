export function handleError(error: any, errorMessage: string) {
    if (error instanceof Error) {
        return error.message;
    }
    return errorMessage;
}