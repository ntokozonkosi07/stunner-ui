export type FormGroupConfig<T> = {
    [P in keyof T]: [T[P], any?]
}