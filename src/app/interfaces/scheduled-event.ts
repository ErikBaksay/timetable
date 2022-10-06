export interface ScheduledEvent {
    name: string,
    shortName: string,
    online: boolean,
    room: string,
    professor: string | string[],
    professorEmail: string | string[],
    day: number,
    start: number[],
    end: number[]
}
