import { Error } from './error.model';

export interface ErrorWrapper {
    data: any;
    metadata: any;
    errors: Error[];
}