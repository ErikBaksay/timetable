export interface ScheduledEvent {
    name: string,
    shortName: string,
    online: boolean,
    room: string,
    linkToRoom: string|null,
    professor: string[],
    professorEmail: string[],
    day: number,
    start: number[],
    end: number[]
}
